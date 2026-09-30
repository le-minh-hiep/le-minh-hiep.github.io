'use strict';
(() => {
  const toggle = document.querySelector('.menu-toggle');
  const sidebar = document.querySelector('#sidebar');
  const backdrop = document.querySelector('.menu-backdrop');
  const links = [...document.querySelectorAll('.main-nav a')];
  const mobile = window.matchMedia('(max-width: 768px)');
  const setMenu = (open, restoreFocus = false) => {
    document.body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Đóng menu điều hướng' : 'Mở menu điều hướng');
    backdrop.hidden = !open;
    if (mobile.matches) {
      sidebar.inert = !open;
      if (open) links[0]?.focus();
      else if (restoreFocus) toggle.focus();
    } else sidebar.inert = false;
  };
  const syncViewport = () => setMenu(false);
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true', true));
  backdrop.addEventListener('click', () => setMenu(false, true));
  document.addEventListener('keydown', (event) => {
    if (!document.body.classList.contains('menu-open')) return;
    if (event.key === 'Escape') { event.preventDefault(); setMenu(false, true); }
    if (event.key === 'Tab') {
      const focusable = [toggle, ...sidebar.querySelectorAll('a[href], button:not([disabled])')];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
  links.forEach((link) => link.addEventListener('click', () => {
    if (mobile.matches) {
      setMenu(false);
      const target = document.querySelector(link.getAttribute('href'));
      if (target) { target.setAttribute('tabindex', '-1'); target.focus({ preventScroll: true }); }
    }
  }));
  document.querySelectorAll('.sidebar a[href="#home"]').forEach(link => link.addEventListener('click', () => {
    if (mobile.matches) setMenu(false, true);
  }));
  mobile.addEventListener('change', syncViewport);
  syncViewport();
  document.querySelectorAll('[data-year]').forEach(el => { el.textContent = String(new Date().getFullYear()); });
  let scheduled = false;
  const sections = links.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  const updateCurrent = () => {
    const offset = 100;
    let active = sections[0];
    for (const section of sections) if (section.getBoundingClientRect().top <= offset) active = section;
    if (Math.ceil(window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight - 2) active = sections[sections.length - 1];
    links.forEach(link => {
      if (link.getAttribute('href') === `#${active.id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    scheduled = false;
  };
  window.addEventListener('scroll', () => {
    if (!scheduled) { scheduled = true; window.requestAnimationFrame(updateCurrent); }
  }, { passive: true });
  window.addEventListener('resize', updateCurrent, { passive: true });
  updateCurrent();
})();
