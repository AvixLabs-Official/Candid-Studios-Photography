/* ==========================================================================
   CANDID STUDIOS NOTTING HILL — DATA STORE
   ========================================================================== */

const CANDID_DATA = {
  announcement: {
    text: "☀️ SUMMER SPECIAL: 30% OFF ALL 45-MIN SESSIONS THIS MONTH • USE CODE 'SUMMER30' AT CHECKOUT",
    linkText: "Book Your Slot →",
    linkUrl: "#booking"
  },
  
  brand: {
    name: "CANDID",
    subtext: "NOTTING HILL, LONDON",
    tagline: "London's Premier Self-Portrait Studio",
    address: "302 Westbourne Grove, Notting Hill, London W11 2PS",
    email: "hello@candidstudios.co.uk",
    phone: "07412 620276",
    instagram: "@candidstudios_",
    tiktok: "@candidstudios_",
    reviewsCount: "330+ 5-Star Reviews",
    googleRating: "4.9/5 ★★★★★"
  },

  hero: {
    eyebrow: "LONDON'S PREMIER SELF-PORTRAIT STUDIO • NOTTING HILL",
    headline: "You Take The Shots.\nWe Supply The Studio.",
    subtext: "Step into a private studio equipped with professional lighting, custom backdrop color sets, and a wireless remote clicker. No photographer watching — just pure, uninhibited self-expression. Receive 250+ high-res images same day.",
    stats: [
      { number: "250+", label: "High-Res Photos Delivered Same Day" },
      { number: "100%", label: "Private & Photographer-Free Suite" },
      { number: "330+", label: "5-Star Google & Trustpilot Reviews" },
      { number: "£75", label: "Starting Session Rate in Notting Hill" }
    ]
  },

  howItWorks: [
    {
      step: "01",
      title: "Choose Your Backdrop & Vibe",
      subtitle: "Custom Lighting & Sets",
      desc: "Select from our curated backdrop collection: Warm Ivory, Charcoal Black, Editorial Crimson, or Soft Sage. Our host sets up professional studio strobe lighting perfectly calibrated for your skin tone."
    },
    {
      step: "02",
      title: "Private 45-Minute Studio Suite",
      subtitle: "Complete Freedom & Privacy",
      desc: "The studio door closes and the space is 100% yours. Connect your favorite Spotify playlist, try unlimited outfit changes, and pose without feeling judged by a photographer."
    },
    {
      step: "03",
      title: "Instant Live Screen Preview",
      subtitle: "Wireless Shutter Remote",
      desc: "Hold our lightweight wireless clicker. Every time you press the trigger, the camera fires, studio lights flash, and your shot appears instantly on our 32-inch confidence monitor."
    },
    {
      step: "04",
      title: "250+ Images Same Day",
      subtitle: "Full Resolution Digital Gallery",
      desc: "Walk out of the studio and receive your full high-res digital gallery in your inbox within hours. Includes full ownership, zero watermark restrictions, and print-ready files."
    }
  ],

  backdrops: [
    {
      id: "ivory",
      name: "Warm Ivory",
      hex: "#F5F0E6",
      tag: "Editorial & Soft",
      desc: "Our most popular classic backdrop. Warm, natural tones ideal for fashion, portraits, and aesthetic social feeds.",
      sampleImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "charcoal",
      name: "Midnight Charcoal",
      hex: "#1A1A18",
      tag: "Dramatic & Sleek",
      desc: "Deep, high-contrast black backdrop creating dramatic shadows, moody portraits, and high-end personal branding.",
      sampleImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "crimson",
      name: "Editorial Crimson",
      hex: "#8B2626",
      tag: "Bold & High Fashion",
      desc: "Rich burgundy-red studio background perfect for birthday celebrations, editorial shoots, and statement portraits.",
      sampleImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "sage",
      name: "Soft Sage",
      hex: "#7A8B7B",
      tag: "Organic & Minimal",
      desc: "Earthy, muted botanical green palette creating clean, relaxed, and contemporary aesthetic shots.",
      sampleImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80"
    }
  ],

  packages: [
    {
      id: "solo",
      name: "Solo Self-Portrait",
      price: "£75",
      duration: "45 Minutes",
      capacity: "1 - 2 People",
      featured: false,
      tag: "MOST POPULAR FOR CREATORS",
      features: [
        "45 Minutes Private Studio Time",
        "Unlimited Shots (Avg 250+ Images)",
        "Same-Day Digital Gallery Delivery",
        "2 Retouched High-Res Edits Included",
        "Choice of Backdrop Color Set",
        "Access to Full Studio Prop Closet",
        "Custom Bluetooth Music Playlist"
      ]
    },
    {
      id: "duo",
      name: "Duo & Couples Experience",
      price: "£95",
      duration: "45 Minutes",
      capacity: "Up to 4 People",
      featured: true,
      tag: "BESTSELLER • COUPLES & FRIENDS",
      features: [
        "45 Minutes Private Studio Time",
        "Unlimited Shots (Avg 300+ Images)",
        "Same-Day Digital Gallery Delivery",
        "4 Retouched High-Res Edits Included",
        "2 Backdrop Color Changes",
        "Complimentary Sparkling Drink / Kombucha",
        "Pet-Friendly Studio Access"
      ]
    },
    {
      id: "branding",
      name: "Branding & LinkedIn Headshots",
      price: "£120",
      duration: "60 Minutes",
      capacity: "1 Person",
      featured: false,
      tag: "PROFESSIONAL & LINKEDIN",
      features: [
        "60 Minutes Extended Studio Suite",
        "Unlimited Shots (Avg 350+ Images)",
        "Express 24h Gallery Delivery",
        "5 Premium Retouched Edits Included",
        "3 Backdrop Color Changes",
        "Professional Lighting Adjustments per Outfit",
        "Full Commercial Usage Rights"
      ]
    },
    {
      id: "group",
      name: "Group & Hen Party Celebration",
      price: "£180",
      duration: "75 Minutes",
      capacity: "Up to 8 People",
      featured: false,
      tag: "PARTIES & HEN CELEBRATIONS",
      features: [
        "75 Minutes Full Studio Rental",
        "Unlimited Shots (Avg 500+ Images)",
        "Same-Day Digital Gallery Delivery",
        "8 Retouched High-Res Edits Included",
        "All Backdrop Colors Included",
        "Complimentary Prosecco / Toast",
        "Unlimited RetroBooth Physical Prints"
      ]
    }
  ],

  corporate: {
    headline: "Headshots Your Team Will Actually Love Putting On LinkedIn.",
    subtext: "Say goodbye to rigid, awkward corporate photoshoots. Candid Studios gives your employees complete privacy to take confidence-boosting headshots in Notting Hill or at your office location.",
    tiers: [
      {
        name: "The Express Team",
        price: "from £465",
        teamSize: "Up to 10 Team Members",
        desc: "Fast, efficient, and fun self-portrait headshot sessions with individual lighting setup and same-day team gallery."
      },
      {
        name: "The Bespoke Studio Hire",
        price: "from £850",
        teamSize: "Up to 25 Team Members",
        desc: "Full-day exclusive hire of our Notting Hill studio with team branding backdrops, barista coffee, and retouching."
      },
      {
        name: "The On-Site Pop-Up",
        price: "Bespoke Quote",
        teamSize: "Any Office Size",
        desc: "We bring our mobile self-portrait studio booth, lighting rig, and remote clickers directly to your London headquarters."
      }
    ]
  },

  retrobooth: {
    headline: "The Candid RetroBooth",
    subtext: "A vintage-inspired walk-in photo booth in the heart of Notting Hill. Drop in without booking or add instant physical photo strip prints to any studio session.",
    highlights: [
      "Instant Dual Physical Strip Prints",
      "Digital Animated GIFs Sent to Phone",
      "Custom Graphic Overlay & Date Stamp",
      "Vintage Warm Film Preset Filter",
      "Walk-in Hours: Tue–Sun 12pm–6pm"
    ],
    priceTag: "£10 per 2 physical strips"
  },

  gallery: [
    { title: "Editorial Portrait", category: "Solo Session", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80", tag: "Ivory Backdrop" },
    { title: "Couples Moment", category: "Duo Session", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80", tag: "Crimson Set" },
    { title: "LinkedIn Headshot", category: "Personal Branding", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80", tag: "Charcoal Black" },
    { title: "Aesthetic Fashion", category: "Creator Shoot", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80", tag: "Sage Green" },
    { title: "Best Friends Shoot", category: "Duo Experience", image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80", tag: "Warm Ivory" },
    { title: "Corporate Team", category: "LinkedIn Headshot", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80", tag: "Charcoal Black" }
  ],

  reviews: [
    {
      quote: "As someone who gets extremely awkward in front of cameras, Candid Studios was a game changer! Being alone in the room with the wireless clicker meant I could dance around, try silly poses, and get photos I actually love. Got 310 images delivered 2 hours later!",
      author: "Sophie Macintyre",
      location: "Notting Hill, London",
      session: "Solo Self-Portrait • Warm Ivory Set",
      rating: 5
    },
    {
      quote: "Booked the Duo session for our 5th anniversary. We brought our French Bulldog and played our favorite tunes. The lighting is incredible and the 32-inch live monitor makes it so easy to adjust. 10/10 recommendation!",
      author: "Marcus & Elena Vance",
      location: "Kensington, London",
      session: "Duo Experience • Crimson Backdrop",
      rating: 5
    },
    {
      quote: "Updated my LinkedIn headshots and executive bio photos here. Professional strobe lighting, zero awkward photographer small talk, and the 24-hour retouched edits were flawless. Will book every year.",
      author: "Dr. Jonathan Sterling",
      location: "Chelsea, London",
      session: "Branding Headshots • Charcoal Set",
      rating: 5
    },
    {
      quote: "Organized a Hen Party group shoot here for 7 girls. It was the absolute highlight of our weekend in West London! Props, Prosecco, great music, and instant photobooth strips to take home.",
      author: "Chloe Richardson",
      location: "Mayfair, London",
      session: "Hen Party Celebration • Full Studio",
      rating: 5
    }
  ],

  faqs: [
    {
      question: "Do I need any photography experience to take good photos?",
      answer: "None at all! Before your session, our friendly studio host gives you a 3-minute orientation on how the wireless clicker works, adjusts lighting height for your height, and sets up your chosen backdrop. Once the door closes, you just click and shoot."
    },
    {
      question: "How do I receive my photos and how quickly?",
      answer: "We send a private digital gallery link directly to your email on the same day as your shoot (usually within 2–4 hours). You can download all 250+ unedited high-resolution photos with one click."
    },
    {
      question: "Can I bring my pet, friends, or props?",
      answer: "Yes! We are proud to be 100% pet-friendly. You are also welcome to bring outfit changes, personal props, balloons, or musical instruments. Our studio also has a curated prop closet free for all guests."
    },
    {
      question: "What happens if I need retouched or edited photos?",
      answer: "All packages include retouched edits! Once you review your same-day gallery, simply mark your favorite image IDs in your portal, and our professional retouching team will deliver polished edits within 48 hours."
    },
    {
      question: "Where is Candid Studios located in London?",
      answer: "We are located at 302 Westbourne Grove, Notting Hill, London W11 2PS. Just a 6-minute walk from Notting Hill Gate or Ladbroke Grove Underground stations, surrounded by boutique cafes and Portobello Market."
    },
    {
      question: "Can I change my outfit or backdrop during the session?",
      answer: "Absolutely. Our private studio suite includes a dedicated changing area, full-length mirror, vanity station, clothing rack, and steamer. Depending on your package, you can also request backdrop color changes!"
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CANDID_DATA;
}
