/* Native clipboard controls. */
(() => {
'use strict';
  const copy = document.querySelector('[data-copy-email]');
  copy?.addEventListener('click', async () => {
    const address = copy.dataset.copyEmail;
    if (!address) return;
    try {
      if (navigator.clipboard && window.isSecureContext && location.protocol !== 'file:') await navigator.clipboard.writeText(address);
      else {
        const input = document.createElement('textarea');
        input.value = address; input.style.position = 'fixed'; input.style.opacity = '0'; document.body.append(input); input.select();
        const copied = document.execCommand('copy'); input.remove();
        if (!copied) throw new Error('Clipboard unavailable');
      }
      copy.textContent = 'Copied';
      setTimeout(() => { copy.textContent = 'Copy address'; }, 2000);
    } catch { window.prompt('Copy this email address:', address); }
  });

})();
