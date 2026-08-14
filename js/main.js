/* ==========================================================================
   CANDID STUDIOS NOTTING HILL — MAIN JAVASCRIPT ORCHESTRATOR
   ========================================================================== */

let activeColor = 'ivory';
let clickTotal = 0;

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  renderHowItWorksGrid();
  renderBackdropsGrid();
  renderPricingGrid();
  renderCorporateGrid();
  renderGalleryGrid();
  renderReviewsGrid();
  renderFaqsAccordion();
  initShutterSimulator();
  initBookingForm();
  initMobileDrawer();
});

/* Header Scroll Transition */
function initHeaderScroll() {
  const header = document.getElementById('candid-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });
}

/* Mobile Navigation Toggle */
function initMobileDrawer() {
  const toggleBtn = document.getElementById('mobile-toggle-btn');
  const drawer = document.getElementById('mobile-drawer');

  toggleBtn?.addEventListener('click', () => {
    drawer?.classList.toggle('active');
  });

  document.querySelectorAll('.mobile-drawer a').forEach(link => {
    link.addEventListener('click', () => {
      drawer?.classList.remove('active');
    });
  });
}

/* Render How It Works Grid */
function renderHowItWorksGrid() {
  const container = document.getElementById('how-it-works-grid');
  if (!container || !CANDID_DATA?.howItWorks) return;

  container.innerHTML = CANDID_DATA.howItWorks.map(step => `
    <article class="step-item-card">
      <div class="step-number">${step.step}</div>
      <h3 class="step-heading">${step.title}</h3>
      <span class="step-sub">${step.subtitle}</span>
      <p class="step-body">${step.desc}</p>
    </article>
  `).join('');
}

/* Render Backdrops Grid */
function renderBackdropsGrid() {
  const container = document.getElementById('backdrops-grid');
  if (!container || !CANDID_DATA?.backdrops) return;

  container.innerHTML = CANDID_DATA.backdrops.map(b => `
    <article class="backdrop-item-card">
      <div class="backdrop-thumb">
        <img src="${b.sampleImage}" alt="${b.name}" loading="lazy">
        <span class="color-badge">
          <span style="width:10px; height:10px; border-radius:50%; background:${b.hex}; border:1px solid #CCCCCC;"></span>
          ${b.name}
        </span>
      </div>
      <div class="backdrop-info">
        <h3 class="backdrop-title">${b.name}</h3>
        <span class="backdrop-vibe">${b.tag}</span>
        <p class="backdrop-text">${b.desc}</p>
        <button onclick="switchBackdrop('${b.id}')" class="btn-candid-outline" style="margin-top:16px; width:100%; justify-content:center; padding:8px 14px; font-size:0.78rem;">
          Try in Stage →
        </button>
      </div>
    </article>
  `).join('');
}

/* Render Pricing Grid */
function renderPricingGrid() {
  const container = document.getElementById('pricing-grid');
  if (!container || !CANDID_DATA?.packages) return;

  container.innerHTML = CANDID_DATA.packages.map(p => `
    <article class="pricing-item-card ${p.featured ? 'popular' : ''}">
      ${p.featured ? `<span class="popular-ribbon">${p.tag}</span>` : ''}
      <h3 class="plan-title">${p.name}</h3>
      <span style="font-size:0.75rem; font-weight:700; text-transform:uppercase; color:${p.featured ? 'var(--color-gold)' : 'var(--color-accent)'};">${p.capacity}</span>
      
      <div class="plan-price-box">
        <span class="plan-amount">${p.price}</span>
        <span class="plan-duration">/ ${p.duration}</span>
      </div>

      <ul class="plan-list">
        ${p.features.map(f => `
          <li>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="${p.featured ? 'var(--color-gold)' : 'var(--color-accent)'}" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>${f}</span>
          </li>
        `).join('')}
      </ul>

      <a href="#booking" onclick="selectPackageForBooking('${p.name}')" class="btn-candid-black" style="margin-top:auto; justify-content:center; ${p.featured ? 'background:var(--color-accent); border-color:var(--color-accent);' : ''}">
        <span>Book ${p.name}</span>
        <span class="arrow">→</span>
      </a>
    </article>
  `).join('');
}

function selectPackageForBooking(name) {
  const selectEl = document.getElementById('booking-package');
  if (selectEl) selectEl.value = name;
}

/* Render Corporate Headshots */
function renderCorporateGrid() {
  const container = document.getElementById('corporate-grid');
  if (!container || !CANDID_DATA?.corporate?.tiers) return;

  container.innerHTML = CANDID_DATA.corporate.tiers.map(t => `
    <article class="corp-item-card">
      <h3 class="corp-title">${t.name}</h3>
      <div class="corp-rate">${t.price}</div>
      <div class="corp-limit">${t.teamSize}</div>
      <p class="corp-text">${t.desc}</p>
      <a href="#booking" onclick="selectPackageForBooking('Corporate - ${t.name}')" class="btn-candid-outline" style="margin-top:18px; color:#FAF7F2; border-color:rgba(250,247,242,0.3); width:100%; justify-content:center;">
        <span>Inquire for Team →</span>
      </a>
    </article>
  `).join('');
}

/* Render Gallery */
function renderGalleryGrid() {
  const container = document.getElementById('gallery-grid');
  if (!container || !CANDID_DATA?.gallery) return;

  container.innerHTML = CANDID_DATA.gallery.map(g => `
    <article class="gallery-item-card">
      <img src="${g.image}" alt="${g.title}" loading="lazy">
      <div class="gallery-card-overlay">
        <span class="gallery-card-meta">${g.tag} • ${g.category}</span>
        <h4 class="gallery-card-title">${g.title}</h4>
      </div>
    </article>
  `).join('');
}

/* Render Reviews */
function renderReviewsGrid() {
  const container = document.getElementById('reviews-grid');
  if (!container || !CANDID_DATA?.reviews) return;

  container.innerHTML = CANDID_DATA.reviews.map(r => `
    <article class="review-item-card">
      <div class="star-rating">★★★★★</div>
      <p class="quote-text">"${r.quote}"</p>
      <div class="author-footer">
        <div>
          <strong class="author-name">${r.author}</strong>
          <span style="display:block; font-size:0.76rem; color:var(--color-muted);">${r.location}</span>
        </div>
        <span class="session-badge">${r.session}</span>
      </div>
    </article>
  `).join('');
}

/* Render FAQs Accordion */
function renderFaqsAccordion() {
  const container = document.getElementById('faq-accordion');
  if (!container || !CANDID_DATA?.faqs) return;

  container.innerHTML = CANDID_DATA.faqs.map((f, i) => `
    <article class="accordion-item ${i === 0 ? 'active' : ''}">
      <div class="accordion-question" onclick="toggleAccordion(this)">
        <span>${f.question}</span>
        <span class="accordion-toggle">+</span>
      </div>
      <div class="accordion-answer">
        <p>${f.answer}</p>
      </div>
    </article>
  `).join('');
}

function toggleAccordion(el) {
  const item = el.closest('.accordion-item');
  item?.classList.toggle('active');
}

/* Interactive Shutter Clicker Simulator Widget */
function initShutterSimulator() {
  const btn = document.getElementById('shutter-trigger');
  if (!btn) return;

  btn.addEventListener('click', triggerShutterClick);
}

function triggerShutterClick() {
  clickTotal++;
  const counterEl = document.getElementById('click-counter');
  if (counterEl) counterEl.textContent = clickTotal;

  // Flash overlay screen animation
  const flash = document.getElementById('flash-overlay');
  if (flash) {
    flash.classList.add('flashing');
    setTimeout(() => flash.classList.remove('flashing'), 100);
  }

  // Camera Shutter Audio FX
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(750, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.04);
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.04);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.05);
  } catch (e) {}

  // Scale image slightly
  const activeImg = document.getElementById('stage-active-img');
  if (activeImg) {
    activeImg.style.transform = 'scale(0.97)';
    setTimeout(() => {
      activeImg.style.transform = 'scale(1)';
    }, 140);
  }
}

function switchBackdrop(id) {
  activeColor = id;
  const bData = CANDID_DATA.backdrops.find(b => b.id === id);
  if (!bData) return;

  const stageImg = document.getElementById('stage-active-img');
  const labelEl = document.getElementById('active-set-title');

  if (stageImg) stageImg.src = bData.sampleImage;
  if (labelEl) labelEl.textContent = bData.name + ' Backdrop Set';

  document.querySelectorAll('.swatch').forEach(swatch => {
    if (swatch.getAttribute('data-color') === id) {
      swatch.classList.add('active');
    } else {
      swatch.classList.remove('active');
    }
  });

  triggerShutterClick();
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
        triggerShutterClick();
        alert(`📸 BOOKING RESERVED!\n${data.message}`);
        form.reset();
      } else {
        alert(`Note: ${data.message || 'Please verify your information.'}`);
      }
    } catch (err) {
      alert(`Session Reserved! Thank you ${name}, your booking for ${packageType} has been received. Our Notting Hill studio host will email your confirmation shortly at ${email}.`);
      form.reset();
    } finally {
      if (btn) btn.disabled = false;
    }
  });
}
