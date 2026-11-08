/**
 * START-UP WEB AGENCY — Accessible Navigation & Mobile Drawer
 * WAI-ARIA Compliant, Focus Trap & Keyboard Escape Handling
 */

(function () {
  'use strict';

  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const drawer = document.getElementById('mobile-nav-drawer');

  if (!toggleBtn || !drawer) return;

  const focusableSelector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

  function openDrawer() {
    toggleBtn.setAttribute('aria-expanded', 'true');
    drawer.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus the first navigable element in the drawer
    const firstFocusable = drawer.querySelector(focusableSelector);
    if (firstFocusable) {
      setTimeout(() => firstFocusable.focus(), 50);
    }
  }

  function closeDrawer() {
    toggleBtn.setAttribute('aria-expanded', 'false');
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    toggleBtn.focus();
  }

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  // Close on backdrop click
  drawer.addEventListener('click', (e) => {
    if (e.target === drawer) {
      closeDrawer();
    }
  });

  // Keyboard navigation & Escape key handling
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
      closeDrawer();
      return;
    }

    if (e.key === 'Tab' && drawer.classList.contains('is-open')) {
      const focusables = drawer.querySelectorAll(focusableSelector);
      if (focusables.length === 0) return;

      const firstElement = focusables[0];
      const lastElement = focusables[focusables.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
  });

  // Close on mobile link selection
  const mobileLinks = drawer.querySelectorAll('.mobile-nav-link');
  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });
})();
