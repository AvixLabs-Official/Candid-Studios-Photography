/* ==========================================================================
   A P STUDIO BAGHAJATIN, KOLKATA — DATA STORE
   (MAIN SHOOTS: WEDDING, NEWBORN, MATERNITY, PORTRAIT, FASHION, CHROMA VIDEO)
   ========================================================================== */

const CANDID_DATA = {
  brand: {
    name: "A P STUDIO",
    location: "Baghajatin, Kolkata 700086",
    address: "51, Baghajatin Station Road, Near Talpukur Primary School & Canara Bank, Baghajatin Colony, Kolkata 700086",
    phone: "+91 78900 01651 / +91 98300 12345",
    email: "hello@apstudio.co.in",
    tagline: "Kolkata's Premier Studio for Chroma Video Shooting & Professional Photography",
    rating: 4.9,
    reviewsCount: 701
  },

  announcement: {
    text: "☀️ SPECIAL OFFER: 30% OFF ALL WEDDING, MATERNITY, NEWBORN, FASHION & CHROMA SHOOTS AT BAGHAJATIN | Book Slot →",
    link: "#booking"
  },

  hero: {
    badge: "NEAR TALPUKUR PRIMARY SCHOOL, BAGHAJATIN",
    heading: "A professional studio for Chroma Video shooting and photography.",
    subheading: "Specialized in Wedding, Newborn, Maternity, Portrait & Fashion Shoots.",
    priceTag: "Sessions from ₹1,499.",
    cta: "BOOK A SESSION"
  },

  // Main Shoot Categories from User Screenshot
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
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.72-8.72 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`,
      shoots: [
        {
          name: "Maternity Shoot",
          tag: "MOTHERHOOD & GLAMOUR",
          desc: "Elegant maternity portraiture celebrating motherhood with warm backdrop lighting and luxury gown draping.",
          price: "From ₹2,999",
          image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Portrait Shoot",
          tag: "PERSONAL BRANDING",
          desc: "Personal branding portraits, LinkedIn headshots, and creative self-portrait sessions with remote shutter control.",
          price: "From ₹1,499",
          image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    {
      category: "Commercial Photoshoot",
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" stroke-width="2"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg>`,
      shoots: [
        {
          name: "Fashion Shoot",
          tag: "MODEL PORTFOLIO & CATALOG",
          desc: "High-end fashion model portfolios, designer lookbook shoots, and e-commerce catalog photography.",
          price: "From ₹3,499",
          image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Chroma Video Shoot",
          tag: "GREEN SCREEN & ADS",
          desc: "Seamless 4K Chroma Key Green screen video shooting for commercial ads, YouTube reels, and film keying.",
          price: "From ₹2,499",
          image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80"
        }
      ]
    }
  ],

  howItWorks: [
    {
      step: "01",
      title: "Select Multi-Floor Studio Setup",
      subtitle: "FLOORS 2, 3 & 4 AVAILABLE",
      desc: "Choose from our multi-floor studio setup at Baghajatin: Seamless Chroma Key Green for video keying, or Warm Ivory, Charcoal, Crimson, and Sage Green backdrop environments pre-lit with professional studio strobes & continuous LED grids."
    },
    {
      step: "02",
      title: "Sound-Treated & Private Floors",
      subtitle: "100% PRIVACY • CASTING & AUDITIONS",
      desc: "Step into our sound-treated studio floors near Talpukur Primary School. Perfect for Wedding, Maternity, Newborn, Fashion portfolios, or Chroma video shoots."
    },
    {
      step: "03",
      title: "Camera & Gear Equipment Rental",
      subtitle: "LIGHTING, TELEPROMPTER & MIC RIGS",
      desc: "Monitor your 4K video framing live on a 32-inch confidence screen. Take advantage of our on-site studio lighting strobes, wireless remote triggers, softboxes, and teleprompter rigs."
    },
    {
      step: "04",
      title: "Same-Day 4K Raw Video & Photo Transfer",
      subtitle: "INSTANT HIGH-RES DIGITAL DELIVERY",
      desc: "Receive all uncompressed 4K video clips, green screen raw files, and high-resolution digital photos delivered directly to your drive on the exact same day."
    }
  ],

  backdrops: [
    {
      id: "chroma",
      name: "Chroma Key Green Floor",
      tag: "VFX, FILM & AD SHOOTING",
      hex: "#00FF00",
      desc: "Dedicated professional Chroma key green screen studio floor engineered for seamless video background keying, film VFX, YouTube production, and commercial ads.",
      sampleImage: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "ivory",
      name: "Warm Ivory Floor",
      tag: "PORTRAIT & MATERNITY",
      hex: "#F5F0E6",
      desc: "Classic warm ivory backdrop set equipped with studio strobe lighting. Ideal for Maternity shoots, Newborn baby photos, and Wedding portraits.",
      sampleImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "charcoal",
      name: "Midnight Charcoal Floor",
      tag: "HEADSHOTS & CASTING",
      hex: "#1A1A18",
      desc: "Deep studio charcoal backdrop creating high-contrast executive headshots, moody web series auditions, and sleek corporate profiles.",
      sampleImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "crimson",
      name: "Editorial Crimson Floor",
      tag: "FASHION & MUSIC VIDEOS",
      hex: "#8B2626",
      desc: "Vibrant fashion-forward crimson red set perfect for Fashion shoots, model lookbooks, product launches, and high-energy photography.",
      sampleImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=80"
    }
  ],

  packages: [
    {
      id: "wedding",
      name: "Wedding & Pre-Wedding Shoot",
      price: "₹4,999",
      duration: "120 MINS",
      capacity: "COUPLES / BRIDAL",
      featured: true,
      tag: "MOST POPULAR FOR WEDDINGS",
      features: [
        "Private Multi-Set Studio Floor Access (2 Hours)",
        "500+ High-Res Photos Delivered Same Day",
        "8 Professional Retouched Edits Included",
        "Multiple Bridal Outfit & Prop Changes",
        "Candid & Traditional Lighting Calibration",
        "Full Commercial Rights Included"
      ]
    },
    {
      id: "maternity",
      name: "Maternity & Newborn Shoot",
      price: "₹2,999",
      duration: "60 MINS",
      capacity: "FAMILY / BABY",
      featured: false,
      tag: "GENTLE & HYGIENIC",
      features: [
        "Soundproof Warm Studio Suite Access",
        "Sanitized Organic Props & Baby Wrap Swaddles",
        "300+ High-Res Photos Delivered Same Day",
        "4 Professional Retouched Edits Included",
        "Temperature-Controlled Studio Comfort",
        "Family & Spouse Portraits Included"
      ]
    },
    {
      id: "fashion",
      name: "Fashion & Model Portfolio",
      price: "₹3,499",
      duration: "90 MINS",
      capacity: "MODELS / DESIGNERS",
      featured: false,
      tag: "MODEL LOOKBOOK",
      features: [
        "High-End Editorial Lighting & Strobes",
        "4 Backdrop Sets Included (Ivory, Charcoal, Crimson, Sage)",
        "350+ High-Res Photos Delivered Same Day",
        "5 Magazine-Quality Retouched Edits",
        "Makeup Vanity Desk & Green Room Access",
        "Commercial License for Agency Portfolios"
      ]
    },
    {
      id: "chroma-video",
      name: "Chroma Video Shoot & Rent",
      price: "₹2,499",
      duration: "60 MINS",
      capacity: "VIDEO / REELS",
      featured: false,
      tag: "GREEN SCREEN VIDEO",
      features: [
        "Full Seamless Green Screen Chroma Floor",
        "4K Raw Video Footage Delivered Same Day",
        "Sound-Treated Acoustic Studio Floor",
        "Pre-Lit 3-Point Studio Lighting Setup",
        "Wireless Audio Mic & Teleprompter Available",
        "Full Commercial Usage Rights"
      ]
    }
  ],

  corporate: {
    title: "Chroma Video & Commercial Studio Hire for Businesses.",
    desc: "A P STUDIO provides multi-floor rental space for corporate video shooting, green screen commercial ads, fashion catalog shoots, and executive headshots near Talpukur Primary School, Baghajatin, Kolkata.",
    tiers: [
      {
        name: "Express Team Shoot",
        price: "From ₹14,999",
        teamSize: "UP TO 10 EMPLOYEES",
        desc: "Half-day private studio floor booking in Baghajatin, Kolkata. Each employee gets Chroma video clips and executive headshots."
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
      location: "Baghajatin Colony, Kolkata",
      session: "Pre-Wedding Shoot",
      quote: "We had our pre-wedding shoot at A P Studio! The studio lighting, privacy, and warm ivory set made our photos look like a magazine cover. Highly recommended!"
    },
    {
      author: "Pooja Banerjee",
      location: "Baghajatin Station Road, Kolkata",
      session: "Maternity & Newborn",
      quote: "The team created such a warm, comfortable environment for my maternity photoshoot and baby pictures. Absolutely loved the photos!"
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
      question: "What main photoshoot types does A P Studio offer in Baghajatin?",
      answer: "We specialize in Wedding Shoots, Newborn Shoots, Maternity Shoots, Portrait Shoots, Fashion Shoots, and Chroma Key Green Video Shoots."
    },
    {
      question: "Where is A P Studio located in Kolkata?",
      answer: "A P Studio is located at 51, Baghajatin Station Road, near Talpukur Primary School & Canara Bank, Baghajatin Colony, Kolkata - 700086 (2 mins from Baghajatin Railway Station)."
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
      question: "How do I book a session at A P Studio?",
      answer: "You can book directly on this site or call us at +91 78900 01651 / +91 98300 12345. We are open Monday – Sunday from 7:00 AM to 6:30 PM."
    }
  ]
};
