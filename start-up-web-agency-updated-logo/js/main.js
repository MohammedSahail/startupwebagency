/**
 * START-UP WEB AGENCY — Main Application Scripts
 * Vanilla ECMAScript — Strict Technology Lock (Zero external libraries)
 */

(function () {
  'use strict';

  // 1. Header Sticky & Elevation State
  const siteHeader = document.querySelector('.site-header');
  if (siteHeader) {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        siteHeader.classList.add('is-scrolled');
      } else {
        siteHeader.classList.remove('is-scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
  }

  // 2. Dynamic Copyright Year
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 3. Simple Non-intrusive Toast Notification
  window.showToast = function (message, type = 'info') {
    let toast = document.getElementById('agency-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'agency-toast';
      toast.style.position = 'fixed';
      toast.style.bottom = '24px';
      toast.style.right = '24px';
      toast.style.background = '#202331';
      toast.style.color = '#FFFFFF';
      toast.style.padding = '12px 20px';
      toast.style.borderRadius = '8px';
      toast.style.boxShadow = '0 10px 25px rgba(0,0,0,0.3)';
      toast.style.fontFamily = 'system-ui, sans-serif';
      toast.style.fontSize = '0.9rem';
      toast.style.fontWeight = '600';
      toast.style.zIndex = '99999';
      toast.style.transition = 'all 240ms ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(12px)';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.style.borderLeft = type === 'error' ? '4px solid #E53935' : '4px solid #4285F4';
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';

    clearTimeout(toast.timeoutId);
    toast.timeoutId = setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(12px)';
    }, 4000);
  };
})();
