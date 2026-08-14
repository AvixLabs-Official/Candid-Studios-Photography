/* ==========================================================================
   A P STUDIO BAGHAJATIN, KOLKATA — DATA STORE
   (ADDRESS: 51 BAGHAJATIN STATION ROAD, NEAR TALPUKUR PRIMARY SCHOOL)
   ========================================================================== */

const CANDID_DATA = {
  brand: {
    name: "A P STUDIO",
    location: "Baghajatin, Kolkata 700086",
    address: "51, Baghajatin Station Road, Near Talpukur Primary School & Canara Bank, Baghajatin Colony, Kolkata 700086",
    phone: "+91 78900 01651 / +91 98300 12345",
    email: "hello@apstudio.co.in",
    tagline: "Kolkata's Premier Multi-Floor Studio for Chroma Video Shooting & Photography",
    rating: 4.9,
    reviewsCount: 701
  },

  announcement: {
    text: "☀️ AUGUST SPECIAL: 30% OFF ALL CHROMA VIDEO SHOOTS, STUDIO RENTALS & PHOTOGRAPHY AT BAGHAJATIN | Book Slot →",
    link: "#booking"
  },

  hero: {
    badge: "NEAR TALPUKUR PRIMARY SCHOOL, BAGHAJATIN",
    heading: "A professional studio for Chroma Video shooting and photography in Kolkata.",
    subheading: "Take control of your film, video & photo production.",
    priceTag: "Sessions from ₹1,499.",
    cta: "BOOK A SESSION"
  },

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
      desc: "Step into our sound-treated studio floors near Talpukur Primary School. Perfect for commercial video shoots, web series auditions, YouTube content, fashion portfolios, or music videos."
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
      tag: "PORTRAIT & FASHION",
      hex: "#F5F0E6",
      desc: "Classic warm ivory backdrop set equipped with studio strobe lighting. Ideal for model portfolios, wedding candid portraits, and commercial branding.",
      sampleImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "charcoal",
      name: "Midnight Charcoal Floor",
      tag: "CASTING & HEADSHOTS",
      hex: "#1A1A18",
      desc: "Deep studio charcoal backdrop creating high-contrast executive headshots, moody web series auditions, and sleek corporate profiles.",
      sampleImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "crimson",
      name: "Editorial Crimson Floor",
      tag: "MUSIC VIDEOS & EVENTS",
      hex: "#8B2626",
      desc: "Vibrant fashion-forward crimson red set perfect for music video shoots, product launches, fashion portfolios, and high-energy creative photography.",
      sampleImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=80"
    }
  ],

  packages: [
    {
      id: "solo",
      name: "Solo Photo & Model Portfolio",
      price: "₹1,499",
      duration: "45 MINS",
      capacity: "1 PERSON",
      featured: false,
      tag: "FOR CREATORS & MODELS",
      features: [
        "Private Studio Floor Access (45 Mins)",
        "250+ High-Res Photos Delivered Same Day",
        "2 Professional Retouched Edits Included",
        "Choice of 2 Backdrop Sets",
        "Wireless Remote Trigger Control",
        "32\" Live Confidence Monitor"
      ]
    },
    {
      id: "chroma-video",
      name: "Chroma Video Shoot & Rent",
      price: "₹2,499",
      duration: "60 MINS",
      capacity: "VIDEO / REELS",
      featured: true,
      tag: "MOST POPULAR FOR VIDEO",
      features: [
        "Full Seamless Green Screen Chroma Floor",
        "4K Raw Video Footage Delivered Same Day",
        "Sound-Treated Acoustic Studio Floor",
        "Pre-Lit 3-Point Studio Lighting Setup",
        "Wireless Audio Mic & Teleprompter Available",
        "Full Commercial Usage Rights"
      ]
    },
    {
      id: "branding",
      name: "Commercial Ad & YouTube Studio",
      price: "₹3,499",
      duration: "90 MINS",
      capacity: "PRODUCTION",
      featured: false,
      tag: "COMMERCIAL AD SHOOT",
      features: [
        "Extended 90-Minute Private Production Floor",
        "Unlimited Chroma Video & Photo Shooting",
        "Multi-Camera Angle Support",
        "Access to All 4 Studio Floors & Sets",
        "Dedicated Studio Assistant On-Site",
        "Raw Video & Edit-Ready Files Delivered"
      ]
    },
    {
      id: "group",
      name: "Full-Day Studio Floor Rent",
      price: "₹6,999",
      duration: "FULL DAY",
      capacity: "FILM & WEBSERIES",
      featured: false,
      tag: "FILM & AUDITIONS",
      features: [
        "Exclusive Full-Day Studio Floor Hire (8 Hours)",
        "Complete Access to Chroma Green & Rigging",
        "High-Power Continuous LED Video Lights & Strobes",
        "Casting Call & Green Room Vanity Desk",
        "Complimentary Refreshments & WiFi",
        "Dedicated Technical Equipment Support"
      ]
    }
  ],

  corporate: {
    title: "Chroma Video & Commercial Studio Hire for Businesses.",
    desc: "A P STUDIO provides multi-floor rental space for corporate video shooting, green screen commercial ads, model casting calls, and executive headshots near Talpukur Primary School, Baghajatin, Kolkata.",
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
        desc: "Full-day chroma video & photo production hire with camera equipment rental, lighting grid, teleprompter, and same-day 4K raw video delivery."
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
      title: "Chroma Key Green Screen Shoot",
      category: "Video Shooting",
      tag: "Chroma Green",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Model Portfolio & Fashion Photography",
      category: "Fashion Shoot",
      tag: "Warm Ivory",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "YouTube & Commercial Ad Shoot",
      category: "Video Production",
      tag: "Chroma Green",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Executive Headshot & Profile",
      category: "Corporate Photography",
      tag: "Midnight Charcoal",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Music Video & Webseries Shoot",
      category: "Music Video",
      tag: "Editorial Crimson",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Wedding Candid & Portrait Photography",
      category: "Personal Photography",
      tag: "Soft Sage",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80"
    }
  ],

  reviews: [
    {
      author: "Siddharth Ghosh",
      location: "Baghajatin Colony, Kolkata",
      session: "Chroma Video Shoot",
      quote: "Outstanding Chroma Green screen setup! The lighting is perfectly even across the studio floor, making keying in Premiere Pro effortless. Best video studio near Talpukur."
    },
    {
      author: "Debolina Banerjee",
      location: "Baghajatin Station Road, Kolkata",
      session: "Fashion Portfolio",
      quote: "Loved shooting our model portfolio and YouTube reels at A P Studio! Multi-floor space, private environment, and top-tier lighting gear right near Baghajatin station."
    },
    {
      author: "Raj Rajeswar Singha Roy",
      location: "Jadavpur, Kolkata",
      session: "Casting & Headshots",
      quote: "Great studio on rent in Baghajatin. We hosted web series casting auditions here. The team provided camera equipment and lighting support."
    },
    {
      author: "Pooja & Crew",
      location: "EM Bypass, Kolkata",
      session: "Commercial Ad Shoot",
      quote: "We booked studio floor 3 for a commercial product shoot. The chroma key setup and equipment rental service were top notch!"
    }
  ],

  faqs: [
    {
      question: "Where is A P Studio located in Baghajatin, Kolkata?",
      answer: "A P Studio is located at 51, Baghajatin Station Road, near Talpukur Primary School & Canara Bank, Baghajatin Colony, Kolkata - 700086 (Just 2 minutes from Baghajatin Railway Station and near EM Bypass)."
    },
    {
      question: "What studio services does A P Studio offer?",
      answer: "We offer Photo Studios On Rent across multiple floors for Chroma Key Green video shooting, commercial ad production, film/webseries casting auditions, fashion model portfolios, wedding candid photography, and camera equipment rental."
    },
    {
      question: "Is equipment rental available on-site?",
      answer: "Yes! We provide studio strobe lights, continuous LED video lighting grids, softboxes, wireless remote triggers, teleprompters, and audio microphone rigs."
    },
    {
      question: "When do I receive raw video footage and photos?",
      answer: "All your uncompressed 4K video clips, green screen raw files, and high-resolution photo files are transferred to your drive on the exact same day of your session."
    },
    {
      question: "How do I contact A P Studio for booking?",
      answer: "You can book directly on this site or call us at +91 78900 01651 / +91 98300 12345. We are open Monday – Sunday from 7:00 AM to 6:30 PM."
    }
  ]
};
