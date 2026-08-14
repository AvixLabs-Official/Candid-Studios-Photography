/* ==========================================================================
   A P STUDIO BAGHAJATIN, KOLKATA — DATA STORE
   (CHROMA VIDEO SHOOTING & PHOTOGRAPHY STUDIO)
   ========================================================================== */

const CANDID_DATA = {
  brand: {
    name: "A P STUDIO",
    location: "Baghajatin, Kolkata 700086",
    address: "Baghajatin Main Road, Near Railway Station & EM Bypass, Kolkata 700086",
    phone: "+91 98300 12345 / 033 2425 8900",
    email: "hello@apstudio.co.in",
    tagline: "Kolkata's Premier Studio for Chroma Video Shooting & Photography",
    rating: 4.9,
    reviewsCount: 330
  },

  announcement: {
    text: "☀️ AUGUST SPECIAL: 30% OFF ALL CHROMA VIDEO SHOOTS & PHOTOGRAPHY SESSIONS AT OUR BAGHAJATIN STUDIO | Book Slot →",
    link: "#booking"
  },

  hero: {
    badge: "BAGHAJATIN, KOLKATA",
    heading: "A professional studio for Chroma Video shooting and photography in Kolkata.",
    subheading: "Take control of your video & photo production.",
    priceTag: "Sessions from ₹1,499.",
    cta: "BOOK A SESSION"
  },

  howItWorks: [
    {
      step: "01",
      title: "Choose Chroma or Backdrop Setup",
      subtitle: "CHROMA GREEN & MULTI-COLOR SETS",
      desc: "Select from Seamless Chroma Key Green for video VFX keying, or Warm Ivory, Charcoal, Crimson, and Sage Green backdrop environments pre-lit with professional studio strobes & softboxes."
    },
    {
      step: "02",
      title: "Private Sound-Treated Studio",
      subtitle: "100% PRIVACY • SOUNDPROOF SUITE",
      desc: "Step into our sound-treated studio suite at Baghajatin. Record crisp audio dialogues, YouTube videos, Reels, or fashion photos at your own pace with zero disruption."
    },
    {
      step: "03",
      title: "4K Video & Live Preview",
      subtitle: "WIRELESS REMOTE & CONFIDENCE MONITOR",
      desc: "Monitor your 4K video framing and photo angles live on a 32-inch confidence screen. Take control of your camera trigger remotely with effortless precision."
    },
    {
      step: "04",
      title: "Same-Day Raw Footage & Photos",
      subtitle: "INSTANT HIGH-RES DIGITAL TRANSFER",
      desc: "Receive all your uncompressed 4K video clips and high-resolution digital photos delivered directly to your drive on the exact same day of your shoot."
    }
  ],

  backdrops: [
    {
      id: "chroma",
      name: "Chroma Key Green",
      tag: "VFX & VIDEO PRODUCTION",
      hex: "#00FF00",
      desc: "Our signature professional green screen setup engineered for seamless video background replacement, YouTube shoots, VFX, and commercial video production.",
      sampleImage: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "ivory",
      name: "Warm Ivory",
      tag: "PORTRAIT & INTERVIEW",
      hex: "#F5F0E6",
      desc: "Classic warm ivory backdrop with calibrated studio softboxes. Ideal for podcast interviews, aesthetic reels, and soft personal portrait photography.",
      sampleImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "charcoal",
      name: "Midnight Charcoal",
      tag: "DRAMATIC & HEADSHOTS",
      hex: "#1A1A18",
      desc: "Deep studio charcoal background creating high-contrast executive headshots, moody brand videography, and sleek corporate profiles.",
      sampleImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "crimson",
      name: "Editorial Crimson",
      tag: "MUSIC VIDEOS & FASHION",
      hex: "#8B2626",
      desc: "Vibrant fashion-forward crimson red set perfect for music video shooting, product launches, and high-energy creative photography.",
      sampleImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=80"
    }
  ],

  packages: [
    {
      id: "solo",
      name: "Solo Photo & Headshots",
      price: "₹1,499",
      duration: "45 MINS",
      capacity: "1 PERSON",
      featured: false,
      tag: "FOR CREATORS & MODELS",
      features: [
        "Private Studio Suite Access (45 Mins)",
        "250+ High-Res Photos Delivered Same Day",
        "2 Professional Retouched Edits Included",
        "Choice of 2 Backdrop Sets",
        "Wireless Remote Trigger Control",
        "32\" Live Confidence Monitor"
      ]
    },
    {
      id: "chroma-video",
      name: "Chroma Video Shoot",
      price: "₹2,499",
      duration: "60 MINS",
      capacity: "VIDEO / REELS",
      featured: true,
      tag: "MOST POPULAR FOR VIDEO",
      features: [
        "Full Seamless Green Screen Chroma Suite",
        "4K Raw Video Footage Delivered Same Day",
        "Sound-Treated Acoustic Studio Suite",
        "Pre-Lit 3-Point Studio Lighting Setup",
        "Wireless Audio Mic & Teleprompter Available",
        "Full Commercial Usage Rights"
      ]
    },
    {
      id: "branding",
      name: "Commercial & YouTube Video",
      price: "₹3,499",
      duration: "90 MINS",
      capacity: "PRODUCTION",
      featured: false,
      tag: "YOUTUBE & BRAND SHOOT",
      features: [
        "Extended 90-Minute Private Production Suite",
        "Unlimited Chroma Video & Photo Shooting",
        "Multi-Camera Angle Support",
        "4 Backdrop Sets Included (Chroma Green + Colors)",
        "Dedicated Studio Assistant On-Site",
        "Raw Video & Edit-Ready Files Delivered"
      ]
    },
    {
      id: "group",
      name: "Full-Day Studio Hire",
      price: "₹6,999",
      duration: "FULL DAY",
      capacity: "FILM & FASHION",
      featured: false,
      tag: "MUSIC VIDEO & FILM",
      features: [
        "Exclusive Full-Day Studio Suite Hire (8 Hours)",
        "Complete Access to Chroma Green & Backdrop Rigging",
        "High-Power Continuous LED Video Lights & Strobes",
        "Green Room & Makeup Vanity Desk Access",
        "Complimentary Refreshments & High-Speed WiFi",
        "Dedicated Production Technical Support"
      ]
    }
  ],

  corporate: {
    title: "Chroma Video & Headshots for Businesses in Kolkata.",
    desc: "A P STUDIO provides complete privacy for high-end corporate video production, green screen commercial shoots, and professional headshots at Baghajatin, Kolkata or at your venue.",
    tiers: [
      {
        name: "Express Video & Photo Team",
        price: "From ₹14,999",
        teamSize: "UP TO 10 EMPLOYEES",
        desc: "Half-day private studio suite booking in Baghajatin, Kolkata. Each employee gets Chroma video clips and executive headshots."
      },
      {
        name: "Bespoke Production Hire",
        price: "From ₹24,999",
        teamSize: "FULL DAY PRODUCTION",
        desc: "Full-day chroma video production hire with technical video engineer, multi-light grid, teleprompter, and same-day 4K raw video delivery."
      },
      {
        name: "On-Site Chroma Setup",
        price: "Custom Quote",
        teamSize: "OFFICE LOCATION",
        desc: "We transport our mobile chroma key green screen, studio lights, and 4K camera gear directly to your corporate premises anywhere in Kolkata."
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
      title: "Editorial Fashion Photography",
      category: "Fashion Shoot",
      tag: "Warm Ivory",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "YouTube & Reels Video Shoot",
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
      title: "Music Video & Performance Shoot",
      category: "Music Video",
      tag: "Editorial Crimson",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Model Portfolio & Personal Shoot",
      category: "Personal Photography",
      tag: "Soft Sage",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80"
    }
  ],

  reviews: [
    {
      author: "Siddharth Ghosh",
      location: "Baghajatin, Kolkata",
      session: "Chroma Video Shoot",
      quote: "Outstanding Chroma Green screen setup! The lighting is perfectly even, making keying in Premiere Pro effortless. Best video shooting studio in South Kolkata."
    },
    {
      author: "Debolina Banerjee",
      location: "Garia, Kolkata",
      session: "Fashion & Reels Shoot",
      quote: "Loved shooting our YouTube content and fashion reels here! Soundproof room, private space, and top-tier lighting gear right near Baghajatin station."
    },
    {
      author: "Abhishek Sen",
      location: "Jadavpur, Kolkata",
      session: "LinkedIn Headshots",
      quote: "Best photography studio experiencia in Kolkata. I used the remote clicker to shoot my executive portraits. Got all 300 photos delivered the same day."
    },
    {
      author: "Pooja & Team",
      location: "Tollygunge, Kolkata",
      session: "Commercial Video Shoot",
      quote: "We booked the full-day studio for a product commercial shoot. The chroma key setup and technical support were flawless."
    }
  ],

  faqs: [
    {
      question: "What is Chroma Video shooting and how is it used?",
      answer: "Chroma Video shooting uses a seamless green background (Chroma key) that allows video editors to replace the green screen with any background background image, 3D environment, or virtual studio set during post-production!"
    },
    {
      question: "Is the studio equipped for both video shooting and photography?",
      answer: "Yes! A P STUDIO in Baghajatin is custom-designed for both 4K Chroma Video production (continuous LED lighting + soundproofing) and high-end Photography (strobe lights + multiple color backdrops)."
    },
    {
      question: "Where is A P STUDIO located in Kolkata?",
      answer: "We are located at Baghajatin Main Road, Kolkata 700086 — just a 2-minute walk from Baghajatin Railway Station and easily accessible from EM Bypass, Garia, and Jadavpur."
    },
    {
      question: "When do I get my video files and photos delivered?",
      answer: "All your uncompressed 4K video clips and high-resolution photo files are transferred to your drive on the exact same day of your session."
    },
    {
      question: "Can I bring my own video crew or props?",
      answer: "Yes! You can bring your director, videographer, props, and outfit changes. Our studio assistant will be present to help you with lighting setups."
    }
  ]
};
