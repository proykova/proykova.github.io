/* One-shot name sweep, monochrome reel and back-to-top. */
(() => {
'use strict';
const footer = document.querySelector('footer');
const sweep = document.querySelector('[data-name-sweep]');
if (footer && sweep) {
 const reveal = () => sweep.classList.add('footer-name-sweep-run');
 if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
   if (entries.some(entry => entry.isIntersecting)) { reveal(); observer.disconnect(); }
  }, {threshold: .2}); observer.observe(footer);
 } else reveal();
}
const frames = [...document.querySelectorAll('[data-reel-frame]')];
frames.forEach(frame => frame.addEventListener('click', () => {
 const colored = frame.getAttribute('aria-pressed') !== 'true';
 frames.forEach(item => item.setAttribute('aria-pressed','false'));
 frame.setAttribute('aria-pressed',String(colored));
}));
document.querySelector('[data-back-to-top]')?.addEventListener('click', () => {
 window.scrollTo({top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
});
})();
