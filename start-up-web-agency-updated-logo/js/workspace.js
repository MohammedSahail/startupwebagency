/**
 * START-UP WEB AGENCY — Discord-Inspired Studio Workspace (Section 07.2)
 * Interactive Agency Workflow Studio Simulation (Vanilla JS)
 */

(function () {
  'use strict';

  const channelButtons = document.querySelectorAll('.channel-btn');
  const stageHeading = document.getElementById('workspace-stage-title');
  const stageSubtitle = document.getElementById('workspace-stage-subtitle');
  const stageContentContainer = document.getElementById('workspace-stage-content');
  const inspectorStageName = document.getElementById('inspector-stage-name');
  const inspectorLead = document.getElementById('inspector-lead');
  const inspectorDeliverable = document.getElementById('inspector-deliverable');
  const inspectorStatus = document.getElementById('inspector-status');

  if (!channelButtons.length || !stageHeading) return;

  // Realistic Agency Stage Data (No fake metrics or fake client chat)
  const workspaceData = {
    overview: {
      title: 'Studio Operations & Delivery Blueprint',
      subtitle: 'Continuous end-to-end craft across architecture, design, and deployment.',
      lead: 'Mohammed Sahail & Nooman Pasha',
      deliverable: 'Complete Architecture Roadmap',
      status: 'Active Pipeline',
      html: `
        <div class="workspace-detail-flow">
          <div class="flow-card">
            <h4>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              Holistic Studio Execution
            </h4>
            <p>Every client project at Start-Up Web Agency follows an uncompromising engineering lifecycle. We bridge strategic concept architecture with high-fidelity visual design and clean, production-grade source code.</p>
          </div>
          <div class="stage-card-grid">
            <div class="stage-editor-card">
              <div class="editor-card-header">
                <span class="card-label">Core Pillars</span>
                <span class="card-tag">Standards</span>
              </div>
              <ul class="stage-specs-list">
                <li class="stage-spec-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Semantic, zero-bloat markup and strict accessibility compliance
                </li>
                <li class="stage-spec-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Custom UI/UX systems tuned to business objectives
                </li>
                <li class="stage-spec-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Transparent communication with leadership involvement
                </li>
              </ul>
            </div>
            <div class="stage-side-card">
              <div class="metric-row">
                <span class="metric-label">Client Trust Metric</span>
                <span class="metric-val">100+ Happy Clients</span>
              </div>
              <div class="metric-row" style="margin-top: 12px;">
                <span class="metric-label">Execution Architecture</span>
                <span class="metric-val" style="color: #F1A45B; font-size: 0.95rem;">HTML5 • CSS3 • Vanilla JS</span>
              </div>
              <div class="stage-status-bar">
                <span>Studio Readiness</span>
                <span class="live-indicator"><span class="live-pulse"></span> Verified</span>
              </div>
            </div>
          </div>
        </div>
      `
    },
    design: {
      title: 'UI/UX Architecture & Organic Design Systems',
      subtitle: 'Intentional visual hierarchies, bespoke typography, and crafted brand motifs.',
      lead: 'Mohammed Sahail (Founder & CEO)',
      deliverable: 'Fidelity Prototype & Design Tokens',
      status: 'Design Phase Ready',
      html: `
        <div class="workspace-detail-flow">
          <div class="flow-card">
            <h4>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/></svg>
              Design Philosophy & Organic Motifs
            </h4>
            <p>We reject generic cookie-cutter templates. We craft asymmetrical compositions, custom curved SVG silhouettes, subtle noise textures, and distinct focal points that make a company memorable from the first viewport.</p>
          </div>
          <div class="stage-card-grid">
            <div class="stage-editor-card">
              <div class="editor-card-header">
                <span class="card-label">Design Deliverables</span>
                <span class="card-tag">Phase 01</span>
              </div>
              <ul class="stage-specs-list">
                <li class="stage-spec-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Original SVG brand symbols and responsive lockups
                </li>
                <li class="stage-spec-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Design system with strict color, surface, and timing tokens
                </li>
                <li class="stage-spec-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Interactive prototypes validated across mobile & desktop viewports
                </li>
              </ul>
            </div>
            <div class="stage-side-card">
              <div class="metric-row">
                <span class="metric-label">Design Standard</span>
                <span class="metric-val">100% Custom Marks</span>
              </div>
              <div class="metric-row" style="margin-top: 12px;">
                <span class="metric-label">Surface System</span>
                <span class="metric-val" style="color: #4285F4; font-size: 0.95rem;">Bright Canvas + Deep Ink</span>
              </div>
              <div class="stage-status-bar">
                <span>Color Contrast</span>
                <span class="live-indicator"><span class="live-pulse"></span> WCAG AAA</span>
              </div>
            </div>
          </div>
        </div>
      `
    },
    build: {
      title: 'Full-Stack Engineering & Clean Frontend Implementation',
      subtitle: 'Lightweight, ultra-fast, robust code with zero framework overhead.',
      lead: 'Nooman Pasha (Co-founder & Managing Director)',
      deliverable: 'Tested Production Codebase',
      status: 'Engineering Active',
      html: `
        <div class="workspace-detail-flow">
          <div class="flow-card">
            <h4>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              Engineering Rigour & Technology Lock
            </h4>
            <p>Our codebases avoid fragile dependencies. By mastering native web technologies—HTML5 semantic architecture, CSS3 custom properties, and vanilla ECMAScript—we deliver sites that load instantly and run for years without breaking changes.</p>
          </div>
          <div class="stage-card-grid">
            <div class="stage-editor-card">
              <div class="editor-card-header">
                <span class="card-label">Build Architecture</span>
                <span class="card-tag">Phase 02</span>
              </div>
              <ul class="stage-specs-list">
                <li class="stage-spec-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  W3C Semantic HTML5 & WAI-ARIA Accessible Roles
                </li>
                <li class="stage-spec-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Fluid Flexbox & CSS Grid with zero layout shifts
                </li>
                <li class="stage-spec-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Zero runtime external dependencies or heavy bundle bloat
                </li>
              </ul>
            </div>
            <div class="stage-side-card">
              <div class="metric-row">
                <span class="metric-label">Bundle Weight</span>
                <span class="metric-val">&lt; 150 KB Total</span>
              </div>
              <div class="metric-row" style="margin-top: 12px;">
                <span class="metric-label">Core Web Vitals Target</span>
                <span class="metric-val" style="color: #27C93F; font-size: 0.95rem;">LCP &le; 1.2s • CLS 0.0</span>
              </div>
              <div class="stage-status-bar">
                <span>Code Standards</span>
                <span class="live-indicator"><span class="live-pulse"></span> 100% Native</span>
              </div>
            </div>
          </div>
        </div>
      `
    },
    launch: {
      title: 'Quality Assurance, Deployment & Long-term Evolution',
      subtitle: 'Rigorous cross-browser verification, lighthouse audits, and client handoff.',
      lead: 'Mohammed Sahail & Nooman Pasha',
      deliverable: 'Live Production URL & Assets',
      status: 'Deployment Complete',
      html: `
        <div class="workspace-detail-flow">
          <div class="flow-card">
            <h4>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              Deployment & Verification Protocol
            </h4>
            <p>Before any project goes live, every link, form action, breakpoint, and interactive state undergoes thorough testing across physical mobile and desktop devices. We ensure your brand launch is rock-solid.</p>
          </div>
          <div class="stage-card-grid">
            <div class="stage-editor-card">
              <div class="editor-card-header">
                <span class="card-label">Verification Checklist</span>
                <span class="card-tag">Phase 03</span>
              </div>
              <ul class="stage-specs-list">
                <li class="stage-spec-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Breakpoints verified at 1440px, 1280px, 1024px, 768px, 430px, 360px
                </li>
                <li class="stage-spec-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Tested keyboard focus, screen-reader landmarks, and reduced motion
                </li>
                <li class="stage-spec-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Domain DNS, HTTPS encryption, and direct mail integrations active
                </li>
              </ul>
            </div>
            <div class="stage-side-card">
              <div class="metric-row">
                <span class="metric-label">Audit Checklist</span>
                <span class="metric-val">100% Passed</span>
              </div>
              <div class="metric-row" style="margin-top: 12px;">
                <span class="metric-label">Client Support</span>
                <span class="metric-val" style="color: #F1A45B; font-size: 0.95rem;">Ongoing Guidance</span>
              </div>
              <div class="stage-status-bar">
                <span>Production Health</span>
                <span class="live-indicator"><span class="live-pulse"></span> Optimum</span>
              </div>
            </div>
          </div>
        </div>
      `
    }
  };

  channelButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const stageKey = btn.getAttribute('data-channel');
      const data = workspaceData[stageKey];
      if (!data) return;

      channelButtons.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      // Update central workspace panel
      stageHeading.textContent = data.title;
      if (stageSubtitle) stageSubtitle.textContent = data.subtitle;
      stageContentContainer.innerHTML = data.html;

      // Update inspector panel
      if (inspectorStageName) inspectorStageName.textContent = stageKey.toUpperCase();
      if (inspectorLead) inspectorLead.textContent = data.lead;
      if (inspectorDeliverable) inspectorDeliverable.textContent = data.deliverable;
      if (inspectorStatus) inspectorStatus.textContent = data.status;
    });
  });
})();
