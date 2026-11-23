// ===== CORE / FEEDBACK — sounds, haptics, and their settings =====
// All sounds are generated with WebAudio (no audio files): soft envelopes, a gentle
// low-pass filter and one master volume. Haptics use navigator.vibrate where available.
//
// Public API:
//   playSound(type)            'correct' | 'wrong' | 'tap' | 'star' | 'win' | 'levelup' | 'record' | 'points'
//   Feedback.configure({ sound, volume, haptics })   called when a user's settings load/change
//   Feedback.correct() / wrong() / tap() / win()     sound + haptic in one call
//
// The AudioContext is created on the first tap, not at page load: browsers (iOS Safari in
// particular) keep a context created before a user gesture suspended, so early sounds were silent.

let audioCtx = null;
let masterGain = null;

const Feedback = (() => {
  const prefs = { sound: true, volume: 0.7, haptics: true };

  function ensure() {
    try {
      if (!audioCtx) {
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return null;
        audioCtx = new AC();
        masterGain = audioCtx.createGain();
        masterGain.gain.value = prefs.volume;
        masterGain.connect(audioCtx.destination);
      }
      if (audioCtx.state === 'suspended') audioCtx.resume();
      return audioCtx;
    } catch (e) {
      return null;
    }
  }

  // One enveloped note → low-pass filter → master volume.
  function note(freq, at, dur, opts = {}) {
    const ctx = audioCtx;
    const t0 = ctx.currentTime + at;
    const peak = opts.gain ?? 0.18;
    const attack = opts.attack ?? 0.008;
    const osc = ctx.createOscillator();
    const env = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    osc.type = opts.type || 'triangle';
    osc.frequency.setValueAtTime(freq, t0);
    if (opts.glideTo) osc.frequency.exponentialRampToValueAtTime(opts.glideTo, t0 + dur);
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(opts.filter ?? 3200, t0);
    filter.Q.value = 0.7;
    env.gain.setValueAtTime(0.0001, t0);
    env.gain.linearRampToValueAtTime(peak, t0 + attack);
    env.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(filter);
    filter.connect(env);
    env.connect(masterGain);
    osc.start(t0);
    osc.stop(t0 + dur + 0.02);
  }

  // Sound designs. Frequencies: C5 523, D5 587, E5 659, G5 784, A5 880, B5 988, C6 1047, E6 1319, G6 1568
  const SOUNDS = {
    // bright two-note "ding-ding" with a soft octave layer
    correct() {
      note(659, 0, 0.16, { gain: 0.16 });
      note(988, 0.07, 0.22, { gain: 0.16 });
      note(1976, 0.07, 0.18, { type: 'sine', gain: 0.04 });
    },
    // soft, low "bonk" that glides down — clear but not harsh
    wrong() {
      note(247, 0, 0.26, { gain: 0.14, glideTo: 185, filter: 900 });
      note(185, 0.09, 0.24, { type: 'sine', gain: 0.08, filter: 700 });
    },
    // tiny click for buttons and cards
    tap() {
      note(1400, 0, 0.035, { type: 'sine', gain: 0.05, attack: 0.002, filter: 5000 });
    },
    // sparkle, used once per earned star
    star() {
      note(1319, 0, 0.18, { type: 'sine', gain: 0.10 });
      note(1976, 0.04, 0.2, { type: 'sine', gain: 0.05 });
    },
    // rising pentatonic run + a held chord
    win() {
      [523, 587, 659, 784, 880, 1047].forEach((f, i) => note(f, i * 0.07, 0.22, { gain: 0.12 }));
      [523, 659, 784, 1047].forEach(f => note(f, 0.45, 0.7, { gain: 0.06, attack: 0.03 }));
      note(2093, 0.5, 0.5, { type: 'sine', gain: 0.03 });
    },
    // short fanfare
    levelup() {
      [[523, 0], [659, 0.1], [784, 0.2], [1047, 0.32]].forEach(([f, t]) => note(f, t, 0.3, { gain: 0.14 }));
      [784, 1047, 1319].forEach(f => note(f, 0.45, 0.8, { gain: 0.06, attack: 0.04 }));
    },
    // descending sparkle cascade
    record() {
      [1568, 1319, 1175, 1047, 1319, 1568, 2093].forEach((f, i) => note(f, i * 0.06, 0.2, { type: 'sine', gain: 0.08 }));
    },
    // kept for compatibility; points now come with the 'correct' sound
    points() {},
  };

  const HAPTICS = {
    correct: 12,
    wrong: [28, 40, 28],
    win: [20, 40, 20, 40, 60],
    levelup: [30, 50, 30, 50, 80],
    record: [20, 30, 20, 30, 20],
  };

  function vibrate(type) {
    if (!prefs.haptics || !HAPTICS[type]) return;
    try { navigator.vibrate && navigator.vibrate(HAPTICS[type]); } catch (e) { /* not supported */ }
  }

  // Screen readers: announce the result of an answer
  const ANNOUNCE = { correct: 'נכון!', wrong: 'לא נכון', levelup: 'עלית רמה!', record: 'שיא חדש!' };
  function announce(type) {
    const el = document.getElementById('sr-live');
    if (!el || !ANNOUNCE[type]) return;
    el.textContent = '';
    setTimeout(() => { el.textContent = ANNOUNCE[type]; }, 30);
  }

  function play(type) {
    announce(type);
    vibrate(type);
    if (!prefs.sound || !SOUNDS[type]) return;
    if (!ensure()) return;
    try { SOUNDS[type](); } catch (e) { /* audio not available */ }
  }

  return {
    ensure,
    play,
    configure(next = {}) {
      if (typeof next.sound === 'boolean') prefs.sound = next.sound;
      if (typeof next.haptics === 'boolean') prefs.haptics = next.haptics;
      if (typeof next.volume === 'number') prefs.volume = Math.max(0, Math.min(1, next.volume));
      if (masterGain) masterGain.gain.value = prefs.volume;
    },
    get prefs() { return { ...prefs }; },
    correct: () => play('correct'),
    wrong: () => play('wrong'),
    tap: () => play('tap'),
    win: () => play('win'),
  };
})();

// Compatibility: the rest of the app calls these names.
function ensureAudio() { return Feedback.ensure(); }
function playSound(type) { Feedback.play(type); }

// Unlock audio on the first interaction (pointerdown for modern browsers, touchend for old iOS)
['pointerdown', 'touchend', 'keydown'].forEach(evt =>
  document.addEventListener(evt, ensureAudio, { once: true, capture: true, passive: true }));

// A soft click for navigation-type buttons (answer buttons have their own correct/wrong sounds).
document.addEventListener('click', e => {
  const el = e.target && e.target.closest && e.target.closest(
    '.feature-card, .subject-card, .nav-item, .btn-primary, .btn-secondary, .btn-header-icon, .btn-back, .results-btn');
  if (el && !el.disabled) Feedback.tap();
}, { capture: true, passive: true });
