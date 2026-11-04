(() => {
  const root = document.documentElement;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || location.hash) return;
  const navigation = performance.getEntriesByType('navigation')[0];
  if (navigation instanceof PerformanceNavigationTiming && navigation.type === 'back_forward') return;
  let returning = false;
  try { returning = sessionStorage.getItem('integr-entered') === '1'; } catch {}
  root.dataset.entrance = 'preparing';
  if (returning) root.setAttribute('data-entrance-return', '');
  let revealed = false;
  const finish = () => {
    root.removeAttribute('data-entrance');
    root.removeAttribute('data-entrance-return');
    document.querySelector('.entrance')?.remove();
  };
  const reveal = () => {
    if (revealed) return;
    revealed = true;
    root.dataset.entrance = 'revealing';
    try { sessionStorage.setItem('integr-entered', '1'); } catch {}
    setTimeout(finish, 1250);
  };
  // A slow font server or image must never hold the page behind the entrance.
  document.addEventListener('DOMContentLoaded', () => {
    const started = performance.now();
    setTimeout(reveal, 1800);
    const hero = new Image();
    hero.src = '/assets/integr-office-hero.png';
    const imageReady = hero.decode ? hero.decode().catch(() => {}) : Promise.resolve();
    Promise.allSettled([imageReady, document.fonts.ready]).then(() => {
      setTimeout(reveal, Math.max(0, (returning ? 0 : 950) - (performance.now() - started)));
    });
    // Keyboard navigation and scrolling take priority over the opening.
    document.addEventListener('keydown', reveal, { once:true });
    window.addEventListener('wheel', reveal, { once:true, passive:true });
    window.addEventListener('touchstart', reveal, { once:true, passive:true });
  }, { once:true });
  window.addEventListener('pageshow', (event) => { if (event.persisted) finish(); });
})();
