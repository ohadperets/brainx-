// ===== CORE / TIMERS — game timers that are cleaned up on navigation =====
// T.after / T.every mirror setTimeout / setInterval (same argument order) but remember
// the ids, so navigate() / goBack() / popstate can stop everything with T.clearAll().
// Use them for anything that belongs to a single screen (game clocks, auto-advance).
const T = (() => {
  const timeouts = new Set();
  const intervals = new Set();
  return {
    after(fn, ms) {
      const id = setTimeout(() => { timeouts.delete(id); fn(); }, ms);
      timeouts.add(id);
      return id;
    },
    every(fn, ms) {
      const id = setInterval(fn, ms);
      intervals.add(id);
      return id;
    },
    clear(id) {
      clearTimeout(id); clearInterval(id);
      timeouts.delete(id); intervals.delete(id);
    },
    clearAll() {
      timeouts.forEach(clearTimeout); intervals.forEach(clearInterval);
      timeouts.clear(); intervals.clear();
    },
    pending() { return timeouts.size + intervals.size; },
  };
})();

// ===== AUTO-ADVANCE — one pending "go to next question" per screen =====
// schedule(): after answering, move on automatically after `ms`.
// next():     the "Next" button — cancels the pending timer and advances exactly once.
const AutoAdvance = (() => {
  let timerId = null;
  let pendingFn = null;
  function cancel() {
    if (timerId !== null) T.clear(timerId);
    timerId = null; pendingFn = null;
  }
  return {
    schedule(ms, fn, btn) {
      cancel();
      pendingFn = fn;
      // keep the button's fill animation in sync with the real delay
      if (btn && btn.style) btn.style.animationDuration = ms + 'ms';
      timerId = T.after(() => { const f = pendingFn; timerId = null; pendingFn = null; if (f) f(); }, ms);
    },
    next(fn) {
      const f = fn || pendingFn;
      cancel();
      if (f) f();
    },
    cancel,
  };
})();
