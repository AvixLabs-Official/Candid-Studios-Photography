/* ==========================================================================
   A B STUDIO DHAKURIA, KOLKATA — DATA STORE (EST-2016)
   (EXPERT PHOTOGRAPHER BLENDING STORYTELLING & ARTISTRY)
   ========================================================================== */

const CANDID_DATA = {
  brand: {
    name: "A B Studio",
    location: "Dhakuria, Kolkata 700031",
    address: "Dhakuria, Kolkata, West Bengal 700031",
    phone: "+91 78900 01651 / +91 98300 12345",
    email: "hello@abstudio.com",
    tagline: "Expert photographer blending storytelling and artistry in portrait, wedding, maternity, newborn shoots and videography services. Est-2016",
    rating: 4.9,
    reviewsCount: 701
  },

  announcement: {
    text: "☀️ A B STUDIO — EST-2016 • EXPERT PHOTOGRAPHY & VIDEOGRAPHY SERVICES | Book Slot →",
    link: "#booking"
  },

  hero: {
    badge: "ESTABLISHED 2016 • DHAKURIA, KOLKATA",
    heading: "Expert photographer blending storytelling and artistry.",
    subheading: "Specializing in portrait, wedding, maternity, newborn shoots and videography services. Est-2016",
    priceTag: "Sessions from ₹1,499.",
    cta: "BOOK A SESSION"
  },

  // Main Shoot Categories
  shootCategories: [
    {
      category: "Photoshoot Type",
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>`,
      shoots: [
        {
          name: "Wedding Shoot",
          tag: "CANDID & PRE-WEDDING",
          desc: "Candid & traditional wedding photography, pre-wedding romantic studio shoots, and bridal portraiture.",
          price: "From ₹4,999",
          image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Newborn Shoot",
          tag: "INFANT & BABY CARE",
          desc: "Gentle, aesthetic studio newborn photography with soft organic props and temperature-controlled comfort.",
          price: "From ₹2,499",
          image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    {
      category: "Lifestyle Photoshoot",
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`,
      shoots: [
        {
          name: "Maternity Shoot",
          tag: "ELEGANT MOTHERHOOD",
          desc: "Artistic maternity portraits celebrating expecting mothers with custom drapings and warm studio lighting.",
          price: "From ₹2,999",
          image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Portrait Shoot",
          tag: "PERSONAL & HEADSHOTS",
          desc: "High-end personal branding portraits, corporate headshots, and creative artistic solo sessions.",
          price: "From ₹1,499",
          image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    {
      category: "Commercial Photoshoot",
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>`,
      shoots: [
        {
          name: "Fashion Shoot",
          tag: "EDITORIAL & MODEL PORTFOLIO",
          desc: "High-fashion catalog shoots, model portfolio building, lookbook photography, and designer campaigns.",
          price: "From ₹3,499",
          image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Chroma Video Shoot & Rent",
          tag: "VFX & VIDEO PRODUCTION",
          desc: "Green screen video keying studio floor hire with pre-lit strobe grid, teleprompter, and soundproofing.",
          price: "From ₹2,499",
          image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80"
        }
      ]
    }
  ],

  howItWorks: [
    {
      step: "01",
      title: "Select Session & Set",
      subtitle: "RESERVE IN SECONDS",
      desc: "Choose from Wedding, Newborn, Maternity, Portrait, Fashion, or Chroma Video shoots, and pick your set backdrop."
    },
    {
      step: "02",
      title: "Artistic Studio Session",
      subtitle: "EXPERT STORYTELLING",
      desc: "Enjoy private studio access with expert lighting grids, soundproof suites, and professional photography direction."
    },
    {
      step: "03",
      title: "Same-Day 4K Delivery",
      subtitle: "RAW & RETOUCHED FILES",
      desc: "Get all your raw photo files, high-res edits, and 4K uncompressed video footage delivered on the same day."
    }
  ],

  backdrops: [
    {
      id: "chroma-green",
      name: "Chroma Key Green Floor",
      tag: "VFX, FILM & AD SHOOTING",
      hex: "#00FF00",
      sampleImage: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=80",
      desc: "Dedicated professional Chroma key green screen studio floor engineered for seamless video background keying, film VFX, YouTube production, and commercial ads."
    },
    {
      id: "warm-ivory",
      name: "Warm Ivory Floor",
      tag: "PORTRAIT & MATERNITY",
      hex: "#F9F6F0",
      sampleImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=80",
      desc: "Classic warm ivory backdrop set equipped with studio strobe lighting. Ideal for Maternity shoots, Newborn baby photos, and Wedding portraits."
    },
    {
      id: "midnight-charcoal",
      name: "Midnight Charcoal Floor",
      tag: "HEADSHOTS & CASTING",
      hex: "#222222",
      sampleImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80",
      desc: "Deep studio charcoal backdrop creating high-contrast executive headshots, moody web series auditions, and sleek corporate profiles."
    },
    {
      id: "editorial-crimson",
      name: "Editorial Crimson Floor",
      tag: "FASHION & MUSIC VIDEOS",
      hex: "#8B0000",
      sampleImage: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1000&q=80",
      desc: "Vibrant fashion-forward crimson red set perfect for Fashion shoots, model lookbooks, product launches, and high-energy photography."
    }
  ],

  packages: [
    {
      name: "Wedding & Pre-Wedding Shoot",
      price: "₹4,999",
      duration: "120 MINS",
      capacity: "COUPLES / BRIDAL",
      tag: "MOST POPULAR FOR WEDDINGS",
      featured: true,
      features: [
        "Private Multi-Set Studio Floor Access (2 Hours)",
        "500+ High-Res Photos Delivered Same Day",
        "8 Professional Retouched Edits Included"
      ]
    },
    {
      name: "Maternity & Newborn Shoot",
      price: "₹2,999",
      duration: "60 MINS",
      capacity: "FAMILY / BABY",
      tag: "BABY CARE SUITE",
      featured: false,
      features: [
        "Soundproof Warm Studio Suite Access",
        "Sanitized Organic Props & Baby Wrap Swaddles",
        "300+ High-Res Photos Delivered Same Day"
      ]
    },
    {
      name: "Fashion & Model Portfolio",
      price: "₹3,499",
      duration: "90 MINS",
      capacity: "MODELS / DESIGNERS",
      tag: "LOOKBOOK SPECIAL",
      featured: false,
      features: [
        "High-End Editorial Lighting & Strobes",
        "4 Backdrop Sets Included (Ivory, Charcoal, Crimson, Sage)",
        "350+ High-Res Photos Delivered Same Day"
      ]
    },
    {
      name: "Chroma Video Shoot & Rent",
      price: "₹2,499",
      duration: "60 MINS",
      capacity: "VIDEO / REELS",
      tag: "CHROMA KEY GREEN",
      featured: false,
      features: [
        "Full Seamless Green Screen Chroma Floor",
        "4K Raw Video Footage Delivered Same Day",
        "Sound-Treated Acoustic Studio Floor"
      ]
    }
  ],

  corporate: {
    title: "Chroma Video & Commercial Studio Hire for Businesses.",
    desc: "A B Studio provides expert photography & videography services, blending storytelling and artistry for corporate video shooting, fashion catalogs, and executive headshots. Est-2016.",
    tiers: [
      {
        name: "Express Team Shoot",
        price: "From ₹14,999",
        teamSize: "UP TO 10 EMPLOYEES",
        desc: "Half-day private studio floor booking in Dhakuria, Kolkata. Each employee gets Chroma video clips and executive headshots."
      },
      {
        name: "Bespoke Commercial Production",
        price: "From ₹24,999",
        teamSize: "FULL DAY PRODUCTION",
        desc: "Full-day chroma video & fashion production hire with camera equipment rental, lighting grid, teleprompter, and same-day 4K raw video delivery."
      },
      {
        name: "On-Site Production Setup",
        price: "Custom Quote",
        teamSize: "OFFICE LOCATION",
        desc: "We transport our mobile chroma key green screen, studio lighting rigs, and 4K camera equipment directly to your venue anywhere in Kolkata."
      }
    ]
  },

  gallery: [
    {
      title: "Candid Wedding & Pre-Wedding Shoot",
      category: "Wedding Shoot",
      tag: "Warm Ivory",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Newborn Baby Studio Shoot",
      category: "Newborn Shoot",
      tag: "Soft Sage",
      image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Elegant Maternity Photography",
      category: "Maternity Shoot",
      tag: "Warm Ivory",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Model Portfolio & Fashion Shoot",
      category: "Fashion Shoot",
      tag: "Editorial Crimson",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Chroma Key Green Screen Shoot",
      category: "Chroma Video",
      tag: "Chroma Green",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Personal Branding & Portrait Shoot",
      category: "Portrait Shoot",
      tag: "Midnight Charcoal",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
    }
  ],

  reviews: [
    {
      author: "Siddharth & Sneha",
      location: "Dhakuria, Kolkata",
      session: "Pre-Wedding Shoot",
      quote: "We had our pre-wedding shoot at A B Studio! The artistic lighting, privacy, and warm ivory set made our photos look like a magazine cover. Highly recommended!"
    },
    {
      author: "Pooja Banerjee",
      location: "Dhakuria, Kolkata",
      session: "Maternity & Newborn",
      quote: "The team created such a warm, comfortable environment for my maternity photoshoot and baby pictures. Absolutely loved the storytelling photos!"
    },
    {
      author: "Ankan Sen",
      location: "Jadavpur, Kolkata",
      session: "Fashion Model Portfolio",
      quote: "Top-notch fashion shoot facility in South Kolkata. The crimson and charcoal backdrops are incredible for model portfolios."
    },
    {
      author: "Subhabrata Das",
      location: "EM Bypass, Kolkata",
      session: "Chroma Video Shoot",
      quote: "We booked studio floor 3 for a Chroma video commercial. Even lighting, soundproof room, and camera gear support!"
    }
  ],

  faqs: [
    {
      question: "What main photoshoot types does A B Studio offer in Kolkata?",
      answer: "We specialize in portrait, wedding, maternity, newborn shoots, and videography services. Established in 2016, our expert photographers blend storytelling and artistry into every frame."
    },
    {
      question: "Where is A B Studio located in Kolkata?",
      answer: "A B Studio is located in Dhakuria, Kolkata, West Bengal 700031 (near Dhakuria Railway Station & Bus Stop)."
    },
    {
      question: "Are props and gown drapings available for Maternity and Newborn shoots?",
      answer: "Yes! We maintain clean, sanitized baby wraps, props, swaddles, and backdrop settings in a temperature-controlled studio environment."
    },
    {
      question: "When do I receive my photos and videos?",
      answer: "All your uncompressed 4K video clips, green screen raw files, and high-resolution photo files are transferred to your drive on the exact same day of your shoot."
    },
    {
      question: "How do I book a session at A B Studio?",
      answer: "You can book directly on this site or call us at +91 78900 01651 / +91 98300 12345. We are open Monday – Sunday from 7:00 AM to 6:30 PM."
    }
  ]
};
