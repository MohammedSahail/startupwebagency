/**
 * START-UP WEB AGENCY — Contact & Project Planner Form Handler
 * Accessible validation, duplicate prevention, and mailto fallback
 */

(function () {
  'use strict';

  const form = document.getElementById('project-enquiry-form');
  if (!form) return;

  const submitBtn = form.querySelector('button[type="submit"]');
  const btnOriginalText = submitBtn ? submitBtn.innerHTML : 'Send Project Enquiry';

  // Validation patterns
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function validateInput(input) {
    let isValid = true;
    const value = input.value.trim();

    if (input.hasAttribute('required') && !value) {
      isValid = false;
    } else if (input.type === 'email' && value && !emailRegex.test(value)) {
      isValid = false;
    }

    input.classList.toggle('is-invalid', !isValid);
    return isValid;
  }

  // Real-time validation feedback on blur and input
  const inputs = form.querySelectorAll('input, textarea, select');
  inputs.forEach((input) => {
    input.addEventListener('blur', () => validateInput(input));
    input.addEventListener('input', () => {
      if (input.classList.contains('is-invalid')) {
        validateInput(input);
      }
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let formValid = true;
    inputs.forEach((input) => {
      if (!validateInput(input)) {
        formValid = false;
      }
    });

    if (!formValid) {
      const firstInvalid = form.querySelector('.is-invalid');
      if (firstInvalid) firstInvalid.focus();
      if (window.showToast) {
        window.showToast('Please check the required fields before submitting.', 'error');
      }
      return;
    }

    // Prevent duplicate submission
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;"><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/></svg>
      Preparing Project Brief...
    `;

    // Gather form values
    const name = form.querySelector('#client-name')?.value.trim() || '';
    const business = form.querySelector('#client-business')?.value.trim() || 'Not specified';
    const email = form.querySelector('#client-email')?.value.trim() || '';
    const phone = form.querySelector('#client-phone')?.value.trim() || 'Not provided';
    const projectType = form.querySelector('#project-type')?.value || 'Web Design & Development';
    const budget = form.querySelector('#project-budget')?.value || 'To be discussed';
    const description = form.querySelector('#project-desc')?.value.trim() || '';

    // Construct direct mailto fallback
    const recipient = 'startupwebagency@gmail.com';
    const subject = encodeURIComponent(`New Project Enquiry: ${projectType} from ${name}`);
    const body = encodeURIComponent(
      `Client Name: ${name}\n` +
      `Business / Organization: ${business}\n` +
      `Email Address: ${email}\n` +
      `Phone Number: ${phone}\n` +
      `Project Category: ${projectType}\n` +
      `Budget Range: ${budget}\n\n` +
      `Project Brief & Requirements:\n${description}\n\n` +
      `Sent via Start-Up Web Agency Project Planner.`
    );

    const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      // Open native email client with pre-filled content
      window.location.href = mailtoUrl;

      if (window.showToast) {
        window.showToast('Project brief prepared! Opening your mail client...', 'info');
      }

      submitBtn.disabled = false;
      submitBtn.innerHTML = btnOriginalText;
    }, 600);
  });
})();
