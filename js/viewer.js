/* Native viewer controls. */
(() => {
'use strict';
  const gallery = [...document.querySelectorAll('[data-viewer="gallery"]')];
  let viewer = null, active = 0, poster = false, opener = null;
  const icon = path => `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${path}"/></svg>`;
  const close = () => { viewer?.remove(); viewer = null; opener?.focus({preventScroll:true}); };
  const update = () => {
    if (!viewer) return;
    const source = (poster ? opener : gallery[active])?.querySelector('img');
    if (!source) return;
    const image = viewer.querySelector('img'); image.src = source.src; image.alt = source.alt;
    viewer.setAttribute('aria-label', poster ? source.alt : `${source.alt}, ${active + 1} of ${gallery.length}`);
    const counter = viewer.querySelector('[data-counter]'); if (counter) counter.textContent = `${active + 1} / ${gallery.length}`;
  };
  const step = direction => { if (!poster && gallery.length) { active = (active + direction + gallery.length) % gallery.length; update(); } };
  const open = button => {
    close(); opener = button; poster = button.dataset.viewer === 'poster'; active = Math.max(0, gallery.indexOf(button));
    viewer = document.createElement('div'); viewer.className = 'image-viewer';
    if (document.querySelector('[data-viewer="gallery"] img')?.closest('article')) viewer.classList.add('film-viewer');
    viewer.setAttribute('role','dialog'); viewer.setAttribute('aria-modal','true');
    viewer.innerHTML = `<button type="button" class="viewer-close" aria-label="Close viewer">${icon('M18 6 6 18M6 6l12 12')}</button>${poster ? '' : `<button type="button" class="viewer-prev" aria-label="Previous photograph">${icon('m15 18-6-6 6-6')}</button><button type="button" class="viewer-next" aria-label="Next photograph">${icon('m9 18 6-6-6-6')}</button>`}<img alt="">${poster ? '' : '<p data-counter></p>'}`;
    viewer.addEventListener('click', event => {
      if (event.target.closest('.viewer-prev')) step(-1);
      else if (event.target.closest('.viewer-next')) step(1);
      else if (event.target.tagName === 'IMG') { if (!poster) step(1); }
      else close();
    });
    document.body.append(viewer); update(); viewer.querySelector('.viewer-close').focus({preventScroll:true});
  };
  document.querySelectorAll('[data-viewer]').forEach(button => button.addEventListener('click', () => open(button)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') { if (viewer) close();  }
    if (!viewer) return;
    if (event.key === 'ArrowLeft') { event.preventDefault(); step(-1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); step(1); }
    if (event.key === 'Tab') {
      const buttons = [...viewer.querySelectorAll('button')]; const first = buttons[0], last = buttons.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    }
  });

})();
