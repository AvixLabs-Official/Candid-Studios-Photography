/* ==========================================================================
   A P STUDIO KOLKATA — DATA STORE (LOCATION: KOLKATA, INDIA)
   ========================================================================== */

const CANDID_DATA = {
  brand: {
    name: "A P STUDIO",
    location: "Park Street, Kolkata 700071",
    address: "18 Park Street, Kolkata, West Bengal 700071, India",
    phone: "+91 98300 12345 / 033 2227 8900",
    email: "hello@apstudio.co.in",
    tagline: "Kolkata's Premier Self-Portrait Studio & Creative Production House",
    rating: 4.9,
    reviewsCount: 330
  },

  announcement: {
    text: "☀️ AUGUST SUMMER BUNDLE NOW LIVE • 30% OFF ALL SESSIONS AT OUR KOLKATA STUDIO | Book Your Slot →",
    link: "#booking"
  },

  hero: {
    badge: "PARK STREET, KOLKATA",
    heading: "A self portrait studio in Kolkata where the photographer is you.",
    subheading: "Take control of your story.",
    priceTag: "Sessions from ₹1,499.",
    cta: "BOOK A SESSION"
  },

  howItWorks: [
    {
      step: "01",
      title: "Choose Your Backdrop & Vibe",
      subtitle: "4 CURATED STUDIO SETS",
      desc: "Select from Warm Ivory, Midnight Charcoal, Editorial Crimson, or Soft Sage backdrop environments. Each set is equipped with studio strobes pre-calibrated for skin tones."
    },
    {
      step: "02",
      title: "Private 45-Min Studio Suite",
      subtitle: "100% PRIVACY • NO PHOTOGRAPHER",
      desc: "Step into your private studio suite in Kolkata. Play your own Spotify playlist, change outfits, adjust props, and take photos at your own pace with zero awkwardness."
    },
    {
      step: "03",
      title: "Click & See Live Preview",
      subtitle: "WIRELESS REMOTE TRIGGER",
      desc: "Hold the wireless shutter clicker in your hand. Look into the 32-inch studio confidence monitor screen to see your poses in real-time before clicking."
    },
    {
      step: "04",
      title: "250+ Photos Delivered Same Day",
      subtitle: "INSTANT HIGH-RES DIGITAL GALLERY",
      desc: "Receive your entire full-resolution digital gallery (250+ photos) straight to your inbox within hours of your session, complete with color editing."
    }
  ],

  backdrops: [
    {
      id: "ivory",
      name: "Warm Ivory",
      tag: "CLASSIC & SOFT",
      hex: "#F5F0E6",
      desc: "Our signature editorial backdrop. Warm, glowing ivory tones that enhance natural skin tones. Perfect for solo portraits and couples.",
      sampleImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "charcoal",
      name: "Midnight Charcoal",
      tag: "DRAMATIC & MOODY",
      hex: "#1A1A18",
      desc: "Deep studio charcoal backdrop create high-contrast, dramatic portraits and sleek professional LinkedIn headshots.",
      sampleImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "crimson",
      name: "Editorial Crimson",
      tag: "BOLD & VIBRANT",
      hex: "#8B2626",
      desc: "Rich fashion-forward crimson red backdrop that commands attention. Ideal for creative branding and birthday shoots.",
      sampleImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "sage",
      name: "Soft Sage",
      tag: "EARTHY & ORGANIC",
      hex: "#7A8B7B",
      desc: "Muted botanical sage green backdrop giving a modern, calm visual feel. Great for personal branding and casual portraits.",
      sampleImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80"
    }
  ],

  packages: [
    {
      id: "solo",
      name: "Solo Self-Portrait",
      price: "₹1,499",
      duration: "45 MINS",
      capacity: "1 PERSON",
      featured: false,
      tag: "MOST POPULAR FOR CREATORS",
      features: [
        "Full Private Studio Suite Access (45 Mins)",
        "250+ Full-Res Unedited Photos Delivered Same Day",
        "2 Professional Retouched Edits Included",
        "Choice of 2 Backdrop Color Sets",
        "Wireless Shutter Remote Control",
        "32\" Live Confidence Monitor"
      ]
    },
    {
      id: "duo",
      name: "Duo & Couples Experience",
      price: "₹2,499",
      duration: "45 MINS",
      capacity: "2-4 PEOPLE",
      featured: true,
      tag: "BEST VALUE FOR COUPLES",
      features: [
        "Private Studio Suite for Couples / Besties (45 Mins)",
        "300+ Full-Res Unedited Photos Delivered Same Day",
        "4 Professional Retouched Edits Included",
        "Choice of 3 Backdrop Color Sets",
        "Complimentary Drinks & Music Control",
        "Pet-Friendly Studio Access"
      ]
    },
    {
      id: "branding",
      name: "Branding & LinkedIn Headshots",
      price: "₹3,499",
      duration: "60 MINS",
      capacity: "1 PERSON",
      featured: false,
      tag: "EXECUTIVE HEADSHOTS",
      features: [
        "Extended 60-Minute Private Headshot Session",
        "350+ Full-Res Digital Photos Delivered Same Day",
        "5 Executive Retouched Edits Included",
        "All 4 Backdrop Color Sets Included",
        "Multiple Outfit Changes & Prop Setup",
        "Full Commercial Rights Included"
      ]
    },
    {
      id: "group",
      name: "Group & Celebration",
      price: "₹4,999",
      duration: "75 MINS",
      capacity: "UP TO 8 GUESTS",
      featured: false,
      tag: "PARTY CELEBRATION",
      features: [
        "75-Minute Exclusive Studio Suite Hire",
        "500+ Digital Photos Delivered Same Day",
        "8 Professional Retouched Edits Included",
        "Complimentary Mocktails / Refreshments",
        "Included Physical RetroBooth Strip Prints",
        "Party Playlist & Custom Lighting Setup"
      ]
    }
  ],

  corporate: {
    title: "Headshots Your Team Will Actually Enjoy.",
    desc: "Say goodbye to rigid corporate photoshoots. A P STUDIO gives your employees complete privacy to take confidence-boosting headshots at our Park Street, Kolkata studio or at your office.",
    tiers: [
      {
        name: "The Express Team",
        price: "From ₹14,999",
        teamSize: "UP TO 10 EMPLOYEES",
        desc: "Half-day private studio suite booking in Park Street, Kolkata. Each team member gets 15 minutes of private self-portrait time with live confidence preview."
      },
      {
        name: "The Bespoke Studio Hire",
        price: "From ₹24,999",
        teamSize: "UP TO 25 EMPLOYEES",
        desc: "Full-day studio suite hire in Kolkata with dedicated studio host, light refreshments, multi-backdrop sets, and same-day delivery of all high-res files."
      },
      {
        name: "On-Site Pop-Up Studio",
        price: "Custom Quote",
        teamSize: "25+ EMPLOYEES",
        desc: "We bring our studio strobe lights, backdrop system, and wireless trigger tech straight to your corporate offices anywhere in Kolkata & Eastern India."
      }
    ]
  },

  gallery: [
    {
      title: "Editorial Fashion Shoot",
      category: "Solo Portrait",
      tag: "Warm Ivory",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Couples & Duo Self-Portrait",
      category: "Duo Experience",
      tag: "Crimson Red",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Executive LinkedIn Headshot",
      category: "Branding",
      tag: "Midnight Charcoal",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Creative Personal Portrait",
      category: "Solo Portrait",
      tag: "Soft Sage",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Birthday & Group Celebration",
      category: "Group Hire",
      tag: "Warm Ivory",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Artist & Musician Profile",
      category: "Personal Branding",
      tag: "Crimson Red",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80"
    }
  ],

  reviews: [
    {
      author: "Ananya Roy",
      location: "Park Street, Kolkata",
      session: "Solo Self-Portrait",
      quote: "It's like being inside a self-portrait dream land! Having no photographer in Kolkata made me feel 100% confident. Took 300 photos in 45 minutes and got them all the same day."
    },
    {
      author: "Pritam Mukhopadhyay",
      location: "Salt Lake, Kolkata",
      session: "LinkedIn Headshots",
      quote: "Best headshots I've ever had. No awkward small talk or fake poses. Just me, a remote clicker, and professional lighting. Highly recommend A P STUDIO Kolkata!"
    },
    {
      author: "Rohan & Devika",
      location: "Ballygunge, Kolkata",
      session: "Duo & Couples",
      quote: "We came for our anniversary shoot at Park Street and had so much fun! Playing our own music while clicking the shutter was such an amazing date idea."
    },
    {
      author: "Shreya Sen",
      location: "New Town, Kolkata",
      session: "Personal Branding",
      quote: "The backdrop colors and strobe lighting are world class. I got 5 retouched edits that transformed my website and Instagram presence."
    }
  ],

  faqs: [
    {
      question: "How does a self-portrait studio session work in Kolkata?",
      answer: "You get a private studio suite room to yourself at Park Street, Kolkata. The studio strobe lights and camera are already set up and calibrated. You hold a small wireless clicker in your hand and see your pose live on a 32-inch confidence monitor. When you press the button, the shutter fires!"
    },
    {
      question: "Is there a photographer in the room with me?",
      answer: "No! There is zero photographer in the room. You have 100% total privacy during your entire session. A friendly studio host will brief you at the start and then leave you to enjoy your shoot."
    },
    {
      question: "How many photos will I get?",
      answer: "You receive ALL the full-resolution photos taken during your slot — typically between 250 and 500+ photos depending on your session length."
    },
    {
      question: "When do I get my photos delivered?",
      answer: "Your full unedited digital gallery is sent to your email on the exact same day of your photoshoot. Retouched edits are delivered within 48 hours."
    },
    {
      question: "Can I bring outfit changes or pets?",
      answer: "Yes! You are welcome to bring as many outfit changes as you like during your slot. Our Kolkata studio is also 100% pet-friendly!"
    }
  ]
};
