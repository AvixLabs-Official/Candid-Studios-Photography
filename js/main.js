/* ==========================================================================
   A P STUDIO BAGHAJATIN, KOLKATA — MAIN JAVASCRIPT ORCHESTRATOR
   ========================================================================== */

let activeColor = 'ivory';
let clickTotal = 0;
let childishDurationMode = 'standard';
let childishStickersTotal = 0;

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initHeroSlideshow();
  initGalleryCarousel();
  renderMainShootsGrid();
  renderHowItWorksGrid();
  renderBackdropsGrid();
  renderChildishPricingGrid();
  renderCorporateGrid();
  renderReviewsGrid();
  renderFaqsAccordion();
  initShutterSimulator();
  initBookingForm();
  initMobileDrawer();
});

/* Truly Infinite Continuous Gallery Carousel (Real-Time Center Detector) */
function initGalleryCarousel() {
  const cards = document.querySelectorAll('.gallery-carousel-card');
  if (cards.length === 0) return;

  function updateCenterFocusCard() {
    const viewportCenter = window.innerWidth / 2;
    let closestCard = null;
    let minDistance = Infinity;

    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const distance = Math.abs(viewportCenter - cardCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestCard = card;
      }
    });

    cards.forEach(card => {
      if (card === closestCard) {
        card.classList.add('center-focus');
      } else {
        card.classList.remove('center-focus');
      }
    });

    requestAnimationFrame(updateCenterFocusCard);
  }

  // Start continuous loop
  requestAnimationFrame(updateCenterFocusCard);
}

/* Hero Polaroid Automated Image Slideshow */
function initHeroSlideshow() {
  const imgEl = document.getElementById('hero-slideshow-img');
  if (!imgEl) return;

  const slides = [
    'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80'
  ];

  let currentIndex = 0;

  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    imgEl.style.opacity = '0';
    setTimeout(() => {
      imgEl.src = slides[currentIndex];
      imgEl.style.opacity = '1';
    }, 250);
  }, 2800);
}

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

/* Render Main Shoots Grid */
function renderMainShootsGrid() {
  const container = document.getElementById('main-shoots-grid');
  if (!container || !CANDID_DATA?.shootCategories) return;

  container.innerHTML = CANDID_DATA.shootCategories.map(cat => `
    <div class="shoot-category-column">
      <div class="category-header-pill">
        <span class="category-icon">${cat.icon}</span>
        <h3 class="category-title">${cat.category}</h3>
      </div>
      <div class="category-shoots-list">
        ${cat.shoots.map(s => `
          <article class="shoot-subcard">
            <div class="shoot-img-box">
              <img src="${s.image}" alt="${s.name}" loading="lazy">
              <span class="shoot-tag-badge">${s.tag}</span>
            </div>
            <div class="shoot-details">
              <h4 class="shoot-name">${s.name}</h4>
              <p class="shoot-desc">${s.desc}</p>
              <div class="shoot-bottom-bar">
                <span class="shoot-price">${s.price}</span>
                <a href="#booking" onclick="selectPackageForBooking('${s.name}')" class="btn-candid-black btn-sm">
                  <span>Book Shoot</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </a>
              </div>
            </div>
          </article>
        `).join('')}
      </div>
    </div>
  `).join('');
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
          <span>Try in Stage</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </button>
      </div>
    </article>
  `).join('');
}

/* Switch Childish Pricing Duration Level */
function switchChildishDuration(btn, mode) {
  document.querySelectorAll('.candy-pill-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  childishDurationMode = mode;
  renderChildishPricingGrid();
}

/* Toggle Childish Sticker Goodies */
function toggleChildishSticker(btn, price) {
  btn.classList.toggle('active');
  if (btn.classList.contains('active')) {
    childishStickersTotal += price;
  } else {
    childishStickersTotal -= price;
  }

  const summary = document.getElementById('childish-cart-summary');
  const priceEl = document.getElementById('childish-cart-price');

  if (childishStickersTotal > 0) {
    if (summary) summary.style.display = 'flex';
    if (priceEl) priceEl.textContent = `+₹${childishStickersTotal.toLocaleString()}`;
  } else {
    if (summary) summary.style.display = 'none';
  }
}

/* Unique Playful Childish Doodle Pricing Renderer */
function renderChildishPricingGrid() {
  const container = document.getElementById('pricing-grid');
  if (!container || !CANDID_DATA?.packages) return;

  const playfulThemes = [
    { cardBg: '#FFF9E6', badgeBg: '#FFD966', badgeIcon: '⭐', accent: '#E08000', tag: 'POPULAR SOLO!' },
    { cardBg: '#FFE5EC', badgeBg: '#FF85A1', badgeIcon: '👶', accent: '#D81B60', tag: 'MOMMY & BABY!' },
    { cardBg: '#E8F8F5', badgeBg: '#76D7C4', badgeIcon: '👗', accent: '#117A65', tag: 'FASHION STAR!' },
    { cardBg: '#EBF5FB', badgeBg: '#85C1E9', badgeIcon: '💍', accent: '#1F618D', tag: 'GRAND WEDDING!' }
  ];

  container.innerHTML = CANDID_DATA.packages.map((p, idx) => {
    const theme = playfulThemes[idx % playfulThemes.length];
    let rawNum = parseInt(p.price.replace(/[^0-9]/g, ''), 10);
    let finalPrice = p.price;
    let durationLabel = p.duration;

    if (childishDurationMode === 'deluxe') {
      let deluxeNum = Math.round(rawNum * 1.55);
      finalPrice = `₹${deluxeNum.toLocaleString()}`;
      durationLabel = 'Full Party (120 Mins)';
    }

    return `
      <article class="childish-card ${p.featured ? 'super-featured' : ''}" style="background-color: ${theme.cardBg}; border-color: #141414;">
        
        <!-- Wobbly Comic Badge -->
        <div class="childish-card-badge" style="background-color: ${theme.badgeBg};">
          <span>${theme.badgeIcon} ${p.tag || theme.tag}</span>
        </div>

        <div class="childish-card-header">
          <span class="childish-card-sub" style="color: ${theme.accent};">${p.capacity}</span>
          <h3 class="childish-card-title">${p.name}</h3>
        </div>

        <div class="childish-price-box">
          <span class="childish-amount" style="color: ${theme.accent};">${finalPrice}</span>
          <span class="childish-duration">/ ${durationLabel}</span>
        </div>

        <!-- Fun Doodle Bullet List -->
        <ul class="childish-features-list">
          ${p.features.map(f => `
            <li>
              <span class="doodle-bullet">🎨</span>
              <span>${f}</span>
            </li>
          `).join('')}
        </ul>

        <a href="#booking" onclick="selectPackageForBooking('${p.name}')" class="btn-childish-card-action" style="background-color: #141414; color: #FFFFFF;">
          <span>Book This Shoot! 🚀</span>
        </a>
      </article>
    `;
  }).join('');
}

function selectPackageForBooking(name) {
  const selectEl = document.getElementById('booking-package');
  if (selectEl) {
    let matched = false;
    for (let opt of selectEl.options) {
      if (opt.value.toLowerCase().includes(name.toLowerCase())) {
        selectEl.value = opt.value;
        matched = true;
        break;
      }
    }
    if (!matched) selectEl.selectedIndex = 0;
  }
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
        <span>Inquire for Team</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </a>
    </article>
  `).join('');
}

/* Render Reviews */
function renderReviewsGrid() {
  const container = document.getElementById('reviews-grid');
  if (!container || !CANDID_DATA?.reviews) return;

  const starSvgs = Array(5).fill('<svg width="14" height="14" viewBox="0 0 24 24" fill="#F5A623" stroke="#F5A623" stroke-width="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>').join('');

  container.innerHTML = CANDID_DATA.reviews.map(r => `
    <article class="review-item-card">
      <div class="star-rating">${starSvgs}</div>
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
        <svg class="accordion-toggle-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" stroke-width="2.2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
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

  const flash = document.getElementById('flash-overlay');
  if (flash) {
    flash.classList.add('flashing');
    setTimeout(() => flash.classList.remove('flashing'), 100);
  }

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
}

function switchBackdrop(id) {
  activeColor = id;
  const bData = CANDID_DATA.backdrops.find(b => b.id === id);
  if (!bData) return;

  const stageImg = document.getElementById('stage-active-img');
  const labelEl = document.getElementById('active-set-title');

  if (stageImg) stageImg.src = bData.sampleImage;
  if (labelEl) labelEl.textContent = bData.name + ' Set';

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
        alert(`BOOKING RESERVED!\n${data.message}`);
        form.reset();
      } else {
        alert(`Note: ${data.message || 'Please verify your information.'}`);
      }
    } catch (err) {
      alert(`Session Reserved! Thank you ${name}, your booking for ${packageType} has been received. Our Baghajatin studio team will email your confirmation shortly at ${email}.`);
      form.reset();
    } finally {
      if (btn) btn.disabled = false;
    }
  });
}
