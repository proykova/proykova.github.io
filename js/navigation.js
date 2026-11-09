/* Native navigation controls. */
(() => {
'use strict';
  const header = document.querySelector('header');
  const toggle = document.querySelector('[data-menu-toggle]');
  const menu = document.getElementById('mobile-navigation');
  const menuIcon = toggle?.innerHTML;
  const closeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>';
  const setMenu = (open) => {
    if (!menu || !toggle) return;
    menu.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.innerHTML = open ? closeIcon : menuIcon;
  };
  toggle?.addEventListener('click', () => setMenu(menu?.hidden ?? true));
  header?.addEventListener('click', event => { if (event.target.closest('a')) setMenu(false); });
  document.addEventListener('pointerdown', event => { if (menu && !menu.hidden && !header?.contains(event.target)) setMenu(false); });
  window.matchMedia('(min-width:768px)').addEventListener('change', event => { if (event.matches) setMenu(false); });
 

  document.addEventListener('keydown', event => { if(event.key === 'Escape') setMenu(false); });

})();
