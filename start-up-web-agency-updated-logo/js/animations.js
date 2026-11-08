/**
 * START-UP WEB AGENCY — Motion Architecture & Choreography
 * Pure Vanilla JavaScript & IntersectionObserver
 */

(function () {
  'use strict';

  // Check user preference for reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. Scroll-Triggered Element Reveals via IntersectionObserver
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  if (revealElements.length > 0) {
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      revealElements.forEach((el) => el.classList.add('is-revealed'));
    } else {
      const revealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          root: null,
          threshold: 0.12,
          rootMargin: '0px 0px -40px 0px'
        }
      );

      revealElements.forEach((el) => revealObserver.observe(el));
    }
  }

  // 2. SVG Stroke Path Dynamic Initialization
  const svgDrawPaths = document.querySelectorAll('.draw-svg-path');
  svgDrawPaths.forEach((path) => {
    try {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = prefersReducedMotion ? '0' : length;
    } catch (e) {
      // Fallback if browser doesn't compute total length immediately
    }
  });

  // 3. Desktop Fine-Pointer Parallax Depth (Restrained & Smooth)
  const isFinePointer = window.matchMedia('(pointer: fine)').matches;
  const heroVisual = document.querySelector('.hero-visual-canvas');
  const heroBackdrop = document.querySelector('.hero-organic-backdrop');

  if (heroVisual && isFinePointer && !prefersReducedMotion) {
    let ticking = false;
    let targetX = 0;
    let targetY = 0;

    const handlePointerMove = (e) => {
      const rect = heroVisual.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Small bounded offsets (max 6px) to avoid drifting
      targetX = Math.max(-6, Math.min(6, (e.clientX - centerX) / 45));
      targetY = Math.max(-6, Math.min(6, (e.clientY - centerY) / 45));

      if (!ticking) {
        window.requestAnimationFrame(() => {
          heroVisual.style.transform = `perspective(1000px) rotateY(${targetX * 0.4}deg) rotateX(${-targetY * 0.4}deg) translate3d(${targetX * 0.6}px, ${targetY * 0.6}px, 0)`;
          if (heroBackdrop) {
            heroBackdrop.style.transform = `rotate(-1.5deg) translate3d(${-targetX * 0.8}px, ${-targetY * 0.8}px, 0)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    const handlePointerLeave = () => {
      heroVisual.style.transform = '';
      if (heroBackdrop) {
        heroBackdrop.style.transform = 'rotate(-1.5deg)';
      }
    };

    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
      heroSection.addEventListener('mousemove', handlePointerMove, { passive: true });
      heroSection.addEventListener('mouseleave', handlePointerLeave);
    }
  }
})();
