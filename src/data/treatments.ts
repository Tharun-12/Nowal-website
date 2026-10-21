/**
 * Treatments and Therapies Data for Vana Veda
 */

export interface Treatment {
  id: string;
  name: string;
  sanskritName?: string;
  category: "Naturopathy" | "Ayurveda" | "Yoga & Meditation" | "Physiotherapy & Hydrotherapy" | "Holistic Therapies";
  shortDescription: string;
  fullDescription: string;
  durationMinutes: number;
  benefits: string[];
  keyIngredientsOrTechniques: string[];
  recommendedFor: string;
  image: string;
}

export const treatmentCategories = [
  "All Treatments",
  "Naturopathy",
  "Ayurveda",
  "Yoga & Meditation",
  "Physiotherapy & Hydrotherapy",
  "Holistic Therapies",
] as const;

export const treatmentsData: Treatment[] = [
  {
    id: "shirodhara-abhyanga",
    name: "Shirodhara & Medicated Abhyanga",
    sanskritName: "शिरोधरा एवं अभ्यंग",
    category: "Ayurveda",
    shortDescription: "A rhythmic, continuous stream of warm herbal oil poured onto the forehead followed by synchronised full-body nourishment.",
    fullDescription: "One of Ayurveda's most revered master therapies. Shirodhara involves pouring a continuous stream of specially concocted medicated herbal oil (Taila), buttermilk (Takra), or milk decoction onto the 'Ajna' chakra (third eye center). Paired with two-therapist synchronised Abhyanga, this treatment calms the central nervous system, deeply balances Vata dosha, and promotes profound mental clarity.",
    durationMinutes: 90,
    benefits: [
      "Calms nervous exhaustion & soothes chronic mental stress",
      "Restores restful deep REM sleep patterns & alleviates insomnia",
      "Improves scalp circulation, hair luster & sensory organ function",
      "Balances cortisol rhythms and alleviates tension headaches",
    ],
    keyIngredientsOrTechniques: [
      "Brahmi, Ashwagandha & Shankhpushpi infused sesame oil",
      "Continuous bronze dhara vessel rhythm",
      "Two-therapist rhythmic lymphatic strokes",
    ],
    recommendedFor: "Anxiety, chronic sleep disturbances, burnout, hypertension, and tension headaches.",
    image: "/src/assets/images/ayurveda_therapy_ritual_1792573863019.jpg",
  },
  {
    id: "mud-hydrotherapy-immersion",
    name: "Medicinal Earth Mud & Full-Body Hydro-Pack",
    sanskritName: "मृत्तिका चिकित्सा",
    category: "Naturopathy",
    shortDescription: "Sun-energised mineral mud harvested from deep volcanic soils, followed by temperature-calibrated hydro jet showers.",
    fullDescription: "Naturopathy considers earth (Prithvi) and water (Jal) as two of nature's potent detoxifiers. High-mineral therapeutic clay, aged and exposed to early morning solar rays, is gently applied to the body. As the clay dries, it draws toxins from the dermal layers, cools visceral heat, and stimulates peripheral circulation before being washed away in a pressure-balanced Scottish needle spray.",
    durationMinutes: 75,
    benefits: [
      "Draws heavy metals and stagnant metabolic debris from skin",
      "Soothes systemic internal inflammation and visceral heat",
      "Tightens pores and revitalises skin radiance",
      "Regulates digestive peristalsis and abdominal tension",
    ],
    keyIngredientsOrTechniques: [
      "Solar-energised bentonite & volcanic clay infused with neem water",
      "Contrast temperature compresses",
      "Circulatory Scottish needle spray rinse",
    ],
    recommendedFor: "Dermatological clarity, digestive sluggishness, gout, and systemic heat imbalance.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "panchakarma-detox",
    name: "Classical Panchakarma & Virechana Purification",
    sanskritName: "पंचकर्म शोधन",
    category: "Ayurveda",
    shortDescription: "A multi-stage authentic cellular cleanse eliminating deep-seated metabolic toxins (Ama) through therapeutic elimination.",
    fullDescription: "The crown jewel of Ayurvedic internal medicine. Under close physician guidance, this intensive detoxification protocol mobilises deep tissues through internal oleation (Snehapana), sweat therapies (Swedana), and calibrated gentle elimination (Virechana), safely purging stagnant Ama while preserving vital Ojas (immunity).",
    durationMinutes: 120,
    benefits: [
      "Eliminates deep metabolic toxins accumulated over months or years",
      "Reboots cellular digestive fire (Agni) and metabolic rate",
      "Revitalises immune resilience and natural cellular longevity",
      "Balances tridoshic constitution for lasting vitality",
    ],
    keyIngredientsOrTechniques: [
      "Physician-formulated medicated ghee (Ghrita)",
      "Herbal steam bath chamber with eucalyptus & dashamoola",
      "Therapeutic purgation with gentle triphala decoctions",
    ],
    recommendedFor: "Metabolic reset, chronic fatigue, auto-immune sensitivity, and seasonal renewal.",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "pranayama-sound-nidra",
    name: "Forest Yoga Nidra & Himalayan Sound Bath",
    sanskritName: "योग निद्रा एवं नाद ध्यान",
    category: "Yoga & Meditation",
    shortDescription: "Guided yogic sleep accompanied by resonant Tibetan singing bowls, harmonising brain waves into deep delta restoration.",
    fullDescription: "Conducted in our open-air wooden forest pavilion surrounded by rustling leaves and birdsong. An experienced yoga master guides you through conscious relaxation (Pratyahara), systematically releasing tension from muscle groups, breath chambers, and subtle energy channels, anchored by the acoustic harmonic overtones of 7-metal singing bowls and gongs.",
    durationMinutes: 60,
    benefits: [
      "Produces equivalent restorative recovery of 3 hours of deep sleep",
      "Downregulates the sympathetic nervous system within 20 minutes",
      "Dissolves subconscious emotional rigidity and chronic anxiety",
      "Enhances mental clarity, intuition, and inner calm",
    ],
    keyIngredientsOrTechniques: [
      "Hand-hammered 7-metal Himalayan singing bowls",
      "Breathwork (Nadi Shodhana & Bhramari Pranayama)",
      "Organic buckwheat bolster & silk eye-pillow support",
    ],
    recommendedFor: "Mental fatigue, sleep deprivation, sensory overload, and emotional rejuvenation.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "aquatic-watsu-hydrotherapy",
    name: "Thermal Spring Hydrotherapy & Underwater Massage",
    sanskritName: "जल चिकित्सा",
    category: "Physiotherapy & Hydrotherapy",
    shortDescription: "Zero-gravity aquatic bodywork in natural warm mineral spring waters with gentle spinal decompression.",
    fullDescription: "Our natural thermal spring pool is calibrated to 35°C (body temperature). A certified aquatic therapist supports your floating body, applying rhythmic spinal traction, rotational mobilisations, and gentle acupressure. In zero gravity, chronic compression on the spine and joints dissolves completely, facilitating profound musculoskeletal relief.",
    durationMinutes: 60,
    benefits: [
      "Unloads spinal vertebrae and releases deep postural spasm",
      "Enhances lymphatic fluid drainage and reduces leg edema",
      "Increases joint range of motion without bearing weight",
      "Calms the vestibular balance system and releases trapped trauma",
    ],
    keyIngredientsOrTechniques: [
      "Thermal mineral spring pool with continuous filtration",
      "Water flotation supports & underwater hydro-jets",
      "Passive aquatic spinal traction & somatic unwinding",
    ],
    recommendedFor: "Lower back pain, sciatica, arthritis, joint stiffness, and athletic recovery.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "oriental-acupuncture-reflexology",
    name: "Acupuncture & Botanical Herbal Poultice (Kizhi)",
    sanskritName: "पत्र पोटली स्वेद",
    category: "Holistic Therapies",
    shortDescription: "Meridian energy unblocking paired with warm muslin boluses filled with wild forest medicinal leaves and therapeutic oils.",
    fullDescription: "Integrating traditional meridian acupuncture with classical South Indian Elakizhi (herbal pouch massage). Freshly picked leaves of Ricinus communis, Calotropis, and Tamarind are fried in medicated oils with rock salt, tied into unbleached muslin poultices, and rhythmically patted along meridian pathways to relieve chronic nerve and joint congestion.",
    durationMinutes: 75,
    benefits: [
      "Breaks down localized inflammatory calcium deposits in joints",
      "Alleviates cervical spondylosis, frozen shoulder & sciatica",
      "Boosts peripheral blood circulation and cellular oxygenation",
      "Fosters deep neuromuscular pain relief without pharmaceutical side-effects",
    ],
    keyIngredientsOrTechniques: [
      "Organic wild-harvested medicinal leaves & anti-inflammatory herbs",
      "Sterile single-use micro-needles on target meridian points",
      "Continuous warmth maintenance with copper warming trays",
    ],
    recommendedFor: "Chronic arthritis, sciatica, stiff neck, frozen shoulder, and neuromuscular soreness.",
    image: "https://images.unsplash.com/photo-1512290900672-1f480f2d4803?auto=format&fit=crop&w=1200&q=80",
  },
];
