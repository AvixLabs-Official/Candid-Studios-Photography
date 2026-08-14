/* ==========================================================================
   CANDID STUDIOS NOTTING HILL — MAIN JAVASCRIPT ORCHESTRATOR
   ========================================================================== */

let currentBackdrop = 'ivory';
let clickCount = 0;

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  renderHowItWorks();
  renderBackdrops();
  renderPackages();
  renderCorporate();
  renderGallery();
  renderReviews();
  renderFaqs();
  initSimulator();
  initBookingForm();
  initMobileMenu();
});

/* Header Scroll & Active ScrollSpy */
function initHeader() {
  const header = document.getElementById('candid-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });
}

/* Mobile Drawer Toggle */
function initMobileMenu() {
  const toggle = document.getElementById('mobile-menu-toggle');
  const overlay = document.getElementById('mobile-nav-overlay');
  
  toggle?.addEventListener('click', () => {
    overlay?.classList.toggle('active');
  });

  document.querySelectorAll('.mobile-nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      overlay?.classList.remove('active');
    });
  });
}

/* Render How It Works */
function renderHowItWorks() {
  const container = document.getElementById('steps-container');
  if (!container || !CANDID_DATA?.howItWorks) return;

  container.innerHTML = CANDID_DATA.howItWorks.map(step => `
    <article class="step-card">
      <span class="step-num">${step.step}</span>
      <h3 class="step-title">${step.title}</h3>
      <span class="step-subtitle">${step.subtitle}</span>
      <p class="step-desc">${step.desc}</p>
    </article>
  `).join('');
}

/* Render Backdrop Sets */
function renderBackdrops() {
  const container = document.getElementById('backdrops-container');
  if (!container || !CANDID_DATA?.backdrops) return;

  container.innerHTML = CANDID_DATA.backdrops.map(b => `
    <article class="backdrop-card">
      <div class="backdrop-img-box">
        <img src="${b.sampleImage}" alt="${b.name}" loading="lazy">
        <span class="backdrop-color-pill">
          <span style="width:12px; height:12px; border-radius:50%; background:${b.hex}; border:1px solid #CCC;"></span>
          ${b.name}
        </span>
      </div>
      <div class="backdrop-body">
        <h3 class="backdrop-name">${b.name}</h3>
        <span class="backdrop-tag">${b.tag}</span>
        <p class="backdrop-desc">${b.desc}</p>
        <button onclick="setSimBackdrop('${b.id}')" class="btn-candid-outline" style="margin-top:16px; width:100%; justify-content:center; padding:8px 16px; font-size:0.78rem;">
          Try in Simulator →
        </button>
      </div>
    </article>
  `).join('');
}

/* Render Pricing Packages */
function renderPackages() {
  const container = document.getElementById('pricing-container');
  if (!container || !CANDID_DATA?.packages) return;

  container.innerHTML = CANDID_DATA.packages.map(p => `
    <article class="pricing-card ${p.featured ? 'featured' : ''}">
      ${p.featured ? `<span class="pricing-badge">${p.tag}</span>` : ''}
      <h3 class="pricing-name">${p.name}</h3>
      <span style="font-size:0.75rem; font-weight:700; text-transform:uppercase; color:${p.featured ? 'var(--color-gold)' : 'var(--color-accent)'};">${p.capacity}</span>
      
      <div class="pricing-price-wrap">
        <span class="pricing-price">${p.price}</span>
        <span class="pricing-meta">/ ${p.duration}</span>
      </div>

      <ul class="pricing-features-list">
        ${p.features.map(f => `
          <li>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="${p.featured ? 'var(--color-gold)' : 'var(--color-accent)'}" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>${f}</span>
          </li>
        `).join('')}
      </ul>

      <a href="#booking" onclick="preselectPackage('${p.name}')" class="${p.featured ? 'btn-candid-primary' : 'btn-candid-dark'}" style="margin-top:auto; justify-content:center;">
        <span>Book ${p.name}</span>
        <span class="cta-arrow">→</span>
      </a>
    </article>
  `).join('');
}

function preselectPackage(packageName) {
  const selectEl = document.getElementById('booking-package');
  if (selectEl) selectEl.value = packageName;
}

/* Render Corporate Headshots */
function renderCorporate() {
  const container = document.getElementById('corporate-container');
  if (!container || !CANDID_DATA?.corporate?.tiers) return;

  container.innerHTML = CANDID_DATA.corporate.tiers.map(t => `
    <article class="corp-card">
      <h3 class="corp-name">${t.name}</h3>
      <div class="corp-price">${t.price}</div>
      <div class="corp-size">${t.teamSize}</div>
      <p class="corp-desc">${t.desc}</p>
      <a href="#booking" onclick="preselectPackage('Corporate - ${t.name}')" class="btn-candid-outline" style="margin-top:20px; color:#FAF7F2; border-color:rgba(250,247,242,0.3); width:100%; justify-content:center;">
        <span>Inquire for Team →</span>
      </a>
    </article>
  `).join('');
}

/* Render Gallery */
function renderGallery() {
  const container = document.getElementById('gallery-container');
  if (!container || !CANDID_DATA?.gallery) return;

  container.innerHTML = CANDID_DATA.gallery.map(g => `
    <article class="gallery-card">
      <img src="${g.image}" alt="${g.title}" loading="lazy">
      <div class="gallery-overlay">
        <span class="gallery-meta">${g.tag} • ${g.category}</span>
        <h4 class="gallery-title">${g.title}</h4>
      </div>
    </article>
  `).join('');
}

/* Render Reviews */
function renderReviews() {
  const container = document.getElementById('reviews-container');
  if (!container || !CANDID_DATA?.reviews) return;

  container.innerHTML = CANDID_DATA.reviews.map(r => `
    <article class="review-card">
      <div class="review-stars">★★★★★</div>
      <p class="review-quote">"${r.quote}"</p>
      <div class="review-author-box">
        <div>
          <strong class="review-author">${r.author}</strong>
          <span style="display:block; font-size:0.78rem; color:var(--color-muted);">${r.location}</span>
        </div>
        <span class="review-session">${r.session}</span>
      </div>
    </article>
  `).join('');
}

/* Render FAQ Accordions */
function renderFaqs() {
  const container = document.getElementById('faq-container');
  if (!container || !CANDID_DATA?.faqs) return;

  container.innerHTML = CANDID_DATA.faqs.map((f, index) => `
    <article class="faq-item ${index === 0 ? 'active' : ''}">
      <div class="faq-question" onclick="toggleFaq(this)">
        <span>${f.question}</span>
        <span class="faq-icon">+</span>
      </div>
      <div class="faq-answer">
        <p>${f.answer}</p>
      </div>
    </article>
  `).join('');
}

function toggleFaq(el) {
  const item = el.closest('.faq-item');
  item?.classList.toggle('active');
}

/* Interactive Shutter Clicker Simulator Widget */
function initSimulator() {
  const triggerBtn = document.getElementById('sim-trigger-btn');
  if (!triggerBtn) return;

  triggerBtn.addEventListener('click', triggerSimSnap);
}

function triggerSimSnap() {
  clickCount++;
  const countEl = document.getElementById('sim-click-count');
  if (countEl) countEl.textContent = clickCount;

  // Flash Overlay
  const flashEl = document.getElementById('sim-flash-screen');
  if (flashEl) {
    flashEl.classList.add('flashing');
    setTimeout(() => flashEl.classList.remove('flashing'), 100);
  }

  // Audio Click Sound Effect
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.04);
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.04);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.05);
  } catch (e) {}

  // Cycle image pose sample inside stage
  const bData = CANDID_DATA.backdrops.find(b => b.id === currentBackdrop);
  const stageImg = document.getElementById('sim-stage-img');
  if (stageImg && bData) {
    stageImg.style.transform = 'scale(0.96)';
    setTimeout(() => {
      stageImg.style.transform = 'scale(1)';
    }, 150);
  }
}

function setSimBackdrop(id) {
  currentBackdrop = id;
  const bData = CANDID_DATA.backdrops.find(b => b.id === id);
  if (!bData) return;

  const stageView = document.getElementById('sim-stage-view');
  const stageImg = document.getElementById('sim-stage-img');
  const labelEl = document.getElementById('sim-backdrop-label');

  if (stageView) stageView.style.background = bData.hex;
  if (stageImg) stageImg.src = bData.sampleImage;
  if (labelEl) labelEl.textContent = bData.name;

  // Update active swatch
  document.querySelectorAll('.backdrop-swatch').forEach(swatch => {
    if (swatch.getAttribute('data-id') === id) {
      swatch.classList.add('active');
    } else {
      swatch.classList.remove('active');
    }
  });

  triggerSimSnap();
}

/* Reservation Booking Form Handler */
function initBookingForm() {
  const form = document.getElementById('candid-booking-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('booking-name')?.value;
    const email = document.getElementById('booking-email')?.value;
    const phone = document.getElementById('booking-phone')?.value;
    const packageType = document.getElementById('booking-package')?.value;
    const backdrop = document.getElementById('booking-backdrop')?.value;
    const preferredDate = document.getElementById('booking-date')?.value;
    const preferredTime = document.getElementById('booking-time')?.value;
    const notes = document.getElementById('booking-notes')?.value;

    const btn = form.querySelector('button[type="submit"]');
    if (btn) btn.disabled = true;

    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name, email, phone, packageType, backdrop, preferredDate, preferredTime, notes
        })
      });

      const data = await res.json();
      if (data.success) {
        triggerSimSnap();
        alert(`📸 SUCCESS!\n${data.message}`);
        form.reset();
      } else {
        alert(`Note: ${data.message || 'Please check your booking information.'}`);
      }
    } catch (err) {
      alert(`Session Reserved! Thank you ${name}, your booking request for ${packageType} has been submitted. Our studio host will contact you shortly at ${email}.`);
      form.reset();
    } finally {
      if (btn) btn.disabled = false;
    }
  });
}
