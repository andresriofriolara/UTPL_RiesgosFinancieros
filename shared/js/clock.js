// UTPL slide clock — shows local time on every slide
(function () {
  const clock = document.createElement('div');
  clock.className = 'utpl-clock';
  document.addEventListener('DOMContentLoaded', () => document.body.appendChild(clock));

  const fmt = new Intl.DateTimeFormat([], {
    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
  });

  function tick() { clock.textContent = fmt.format(new Date()); }
  tick();
  const timer = setInterval(tick, 1000);

  // Toggle visibility with "C"
  document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'c' && !e.metaKey && !e.ctrlKey && !e.altKey) {
      clock.classList.toggle('hidden');
    }
  });

  // Pause when printing to PDF
  window.addEventListener('beforeprint', () => clearInterval(timer));
})();
