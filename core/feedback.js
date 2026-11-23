// ===== CORE / FEEDBACK — audio context management =====
// The AudioContext is created on the first tap, not at page load: browsers (iOS Safari
// in particular) keep a context created before a user gesture suspended, so the first
// sounds were silent. playSound() in app.js calls ensureAudio() before every sound.
let audioCtx = null;

function ensureAudio() {
  try {
    if (!audioCtx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      audioCtx = new AC();
    }
    if (audioCtx.state === 'suspended') audioCtx.resume();
    return audioCtx;
  } catch (e) {
    return null;
  }
}

// Unlock audio on the first interaction (pointerdown for modern browsers, touchend for old iOS)
['pointerdown', 'touchend', 'keydown'].forEach(evt =>
  document.addEventListener(evt, ensureAudio, { once: true, capture: true, passive: true }));
