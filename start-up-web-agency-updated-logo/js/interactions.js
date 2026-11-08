/**
 * START-UP WEB AGENCY — Interactive UI Controls
 * Hero Stage Switcher, Workflow Stepper, FAQ Accordions
 */

(function () {
  'use strict';

  // ------------------------------------------------------------------------
  // 1. HERO STUDIO VISUAL: DESIGN / DEVELOP / GROW TABS
  // ------------------------------------------------------------------------
  const stageTabs = document.querySelectorAll('.stage-tab-btn');
  const stagePanels = document.querySelectorAll('.stage-panel');
  const railBtns = document.querySelectorAll('.studio-rail .rail-btn');
  const heroVisualContainer = document.querySelector('.hero-visual-canvas');

  let activeIndex = 0;
  let autoAdvanceTimer = null;
  const stages = ['design', 'develop', 'grow'];

  function switchHeroStage(index, manual = false) {
    if (index < 0 || index >= stages.length) return;
    activeIndex = index;
    const currentStage = stages[index];

    stageTabs.forEach((tab, i) => {
      const isActive = i === index;
      tab.classList.toggle('is-active', isActive);
      tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    stagePanels.forEach((panel) => {
      const match = panel.getAttribute('data-stage') === currentStage;
      panel.classList.toggle('is-active', match);
    });

    railBtns.forEach((btn, i) => {
      btn.classList.toggle('is-active', i === index);
    });
  }

  stageTabs.forEach((tab, idx) => {
    tab.addEventListener('click', () => {
      switchHeroStage(idx, true);
    });
  });

  railBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      switchHeroStage(idx, true);
    });
  });

  // Auto-advance with pause conditions (hover, focus, hidden document)
  function startAutoAdvance() {
    stopAutoAdvance();
    autoAdvanceTimer = setInterval(() => {
      if (document.visibilityState === 'visible') {
        const nextIndex = (activeIndex + 1) % stages.length;
        switchHeroStage(nextIndex);
      }
    }, 5000);
  }

  function stopAutoAdvance() {
    if (autoAdvanceTimer) {
      clearInterval(autoAdvanceTimer);
      autoAdvanceTimer = null;
    }
  }

  if (heroVisualContainer) {
    heroVisualContainer.addEventListener('mouseenter', stopAutoAdvance);
    heroVisualContainer.addEventListener('mouseleave', startAutoAdvance);
    heroVisualContainer.addEventListener('focusin', stopAutoAdvance);
    heroVisualContainer.addEventListener('focusout', startAutoAdvance);
  }

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      stopAutoAdvance();
    } else {
      startAutoAdvance();
    }
  });

  // Initialize auto-advance
  startAutoAdvance();

  // ------------------------------------------------------------------------
  // 2. 7-STAGE WORKFLOW STEPPER (Discover -> Plan -> Design -> Develop -> Test -> Launch -> Support)
  // ------------------------------------------------------------------------
  const stepButtons = document.querySelectorAll('.step-nav-btn');
  const stepPanels = document.querySelectorAll('.workflow-step-panel');

  if (stepButtons.length > 0) {
    stepButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetStep = btn.getAttribute('data-step');

        stepButtons.forEach((b) => {
          const isActive = b.getAttribute('data-step') === targetStep;
          b.classList.toggle('is-active', isActive);
          b.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });

        stepPanels.forEach((p) => {
          const isMatch = p.getAttribute('data-step') === targetStep;
          p.style.display = isMatch ? 'block' : 'none';
        });
      });
    });
  }

  // ------------------------------------------------------------------------
  // 3. ACCESSIBLE FAQ ACCORDION
  // ------------------------------------------------------------------------
  const faqTriggers = document.querySelectorAll('.faq-trigger');

  faqTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.faq-item');
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

      // Accessible toggle
      trigger.setAttribute('aria-expanded', !isExpanded);
      item.classList.toggle('is-open', !isExpanded);
    });
  });
})();
