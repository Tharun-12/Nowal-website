/**
 * Configurable Wellness Packages and Retreat Programs
 */

export interface WellnessPackage {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  shortDescription: string;
  overview: string;
  durations: {
    days: number;
    label: string;
    description: string;
  }[];
  includedExperiences: string[];
  sampleDaySchedule: {
    time: string;
    activity: string;
  }[];
  suitableFor: string[];
  image: string;
  isPopular?: boolean;
}

export const wellnessPackages: WellnessPackage[] = [
  {
    id: "mind-body-reset",
    title: "Mind & Body Restorative Reset",
    subtitle: "A gentle yet comprehensive recalibration of sleep, stress, and nervous vitality.",
    tag: "Holistic Foundation",
    shortDescription: "Our signature gateway program integrating gentle naturopathic detoxification, restorative Ayurveda, and mindfulness.",
    overview: "Designed for urban professionals, caregivers, and individuals feeling depleted by sustained cognitive load. This program steps you down from fight-or-flight sympathetic overdrive through daily Shirodhara, restorative hydrotherapy, somatic movement, and anti-inflammatory gut nourishing nutrition.",
    durations: [
      { days: 7, label: "7 Nights Rebalance", description: "Ideal for breaking burnout cycles, restoring sleep architecture, and resetting energy." },
      { days: 14, label: "14 Nights Deep Restoration", description: "Allows deep tissue recovery, sustained hormonal recalibration, and habit consolidation." },
      { days: 21, label: "21 Nights Complete Rebirth", description: "Transformational lifestyle shift targeting chronic systemic exhaustion and metabolic inertia." },
    ],
    includedExperiences: [
      "In-depth physician pulse diagnosis (Nadi Pariksha) & daily medical check-in",
      "Two therapeutic sessions daily (Shirodhara, Abhyanga, mud therapy, herbal compress)",
      "Individualized Sattvic 3-course organic cuisine & freshly pressed therapeutic juices",
      "Twice-daily restorative yoga, pranayama & guided forest meditation",
      "Private lifestyle consultation with customized take-home protocol",
      "Full access to natural spring hydrotherapy pool & botanical walking trails",
    ],
    sampleDaySchedule: [
      { time: "06:15 AM", activity: "Dawn Herbal Infusion & Sun Gazing at Lotus Pavilion" },
      { time: "07:00 AM", activity: "Gentle Hatha Yoga & Pranayama Breathwork" },
      { time: "08:30 AM", activity: "Nutritious Sattvic Breakfast at the Verandah" },
      { time: "10:30 AM", activity: "Morning Prescribed Therapy: Shirodhara & Medicated Abhyanga" },
      { time: "01:00 PM", activity: "Mindful Farm-to-Table Lunch & Digestion Walk" },
      { time: "03:30 PM", activity: "Afternoon Naturopathy: Medicinal Mud Pack & Hydro Jet Needle Shower" },
      { time: "05:30 PM", activity: "Sunset Yoga Nidra & Himalayan Singing Bowl Sound Bath" },
      { time: "07:15 PM", activity: "Light Ayurvedic Dinner & Evening Calming Decoction" },
      { time: "09:30 PM", activity: "Lights out & Digital Fasting for deep circadian regeneration" },
    ],
    suitableFor: [
      "Chronic stress, insomnia, or mental burnout",
      "Fatigue, low stamina, and cognitive brain fog",
      "Those seeking a peaceful sabbatical to reset their lifestyle",
    ],
    image: "/src/assets/images/hero_nature_retreat_1792573861918.jpg",
    isPopular: true,
  },
  {
    id: "panchakarma-cellular-cleanse",
    title: "Classical Panchakarma Detoxification",
    subtitle: "Authentic multi-stage purification protocol rooting out deep cellular Ama.",
    tag: "Traditional Ayurveda",
    shortDescription: "Ancient five-fold purificatory therapy overseen by senior Ayurvedic vaidyas for deep cellular renewal.",
    overview: "Panchakarma is ancient India's supreme medical science for internal detoxification. Through methodical stages of preparatory oleation (Purvakarma), targeted elimination (Pradhanakarma), and restorative diet rehabilitation (Paschatkarma), this program purges accumulated metabolic residues and restores organic homeostasis.",
    durations: [
      { days: 14, label: "14 Nights Intensive Cleanse", description: "Essential minimum duration for authentic preparatory snehapana and purgative shodhana." },
      { days: 21, label: "21 Nights Classical Protocol", description: "The gold-standard traditional course providing deep tissue cellular purification." },
      { days: 28, label: "28 Nights Rasayana Longevity", description: "Includes post-cleanse tissue rejuvenation therapies (Rasayana) for enduring anti-aging vitality." },
    ],
    includedExperiences: [
      "Daily personal consultations with senior BAMS Ayurvedic Vaidya",
      "Classical Purvakarma: Snehapana (medicated ghee intake) and Swedana (steam)",
      "Prescribed elimination therapies (Virechana, Basti, Nasya)",
      "Strict therapeutic Samsarjana Krama digestive recovery diet",
      "Personalized herbal formulations prepared fresh in retreat dispensary",
      "Therapeutic yoga for abdominal vitality & Agni stimulation",
    ],
    sampleDaySchedule: [
      { time: "06:30 AM", activity: "Prescribed Medicated Decoction (Kashayam) & Gentle Stretching" },
      { time: "07:30 AM", activity: "Physician Consultation & Pulse Diagnostic Check" },
      { time: "09:00 AM", activity: "Supervised Snehapana or Morning Detox Therapy" },
      { time: "11:00 AM", activity: "Herbal Steam Bath (Swedana) with medicinal forest leaves" },
      { time: "12:30 PM", activity: "Therapeutic Rice Broth (Peya) / Medicated Kitchari" },
      { time: "03:00 PM", activity: "Ayurvedic Herbal Poultice or Warm Oil Bath" },
      { time: "05:00 PM", activity: "Gentle Restorative Breathwork & Meditation" },
      { time: "07:00 PM", activity: "Light Warm Dinner formulated for digestive resting" },
    ],
    suitableFor: [
      "Metabolic slowdown, stubborn weight stagnation, or toxin accumulation",
      "Chronic joint inflammation, skin conditions, and digestive disorders",
      "Annual preventative health cleansing and anti-aging cell rejuvenation",
    ],
    image: "/src/assets/images/ayurveda_therapy_ritual_1792573863019.jpg",
  },
  {
    id: "natural-vitality-metabolic",
    title: "Natural Vitality & Metabolic Balance",
    subtitle: "A holistic synergy of naturopathy, active movement, and targeted metabolic fasting.",
    tag: "Naturopathic Healing",
    shortDescription: "Stimulate endogenous fat oxidation, reduce inflammatory water retention, and re-ignite digestive fire.",
    overview: "Combining naturopathic hydrotherapy, cold and hot contrast immersion, supervised therapeutic intermittent juicing, and functional mobility. We address the root endocrine imbalances behind metabolic sluggishness without extreme caloric starvation or restrictive misery.",
    durations: [
      { days: 7, label: "7 Nights Metabolic Kickstart", description: "Ideal for shedding fluid retention, curbing sugar cravings, and jumpstarting energy." },
      { days: 14, label: "14 Nights Sustained Transformation", description: "Drives substantial visceral fat reduction and stable glycemic improvement." },
      { days: 21, label: "21 Nights Complete Reconditioning", description: "Rewires appetite regulation, insulin sensitivity, and long-term habits." },
    ],
    includedExperiences: [
      "Body composition impedance analysis and metabolic profile testing",
      "Daily hydrotherapy jet sessions, Scottish needle spray & underwater massage",
      "Sun-energized abdominal mud wraps & dry brush lymphatic drainage",
      "Nutrient-dense raw food & cold-pressed therapeutic organic elixirs",
      "Daily cardio-metabolic forest power walks & core stability yoga",
      "Cooking masterclasses on cooking anti-inflammatory whole meals at home",
    ],
    sampleDaySchedule: [
      { time: "06:00 AM", activity: "Metabolic Lemon & Wild Honey Warm Water & Forest Walk" },
      { time: "07:15 AM", activity: "Dynamic Vinyasa Flow & Core Engagement Yoga" },
      { time: "08:45 AM", activity: "Enzyme-Rich Raw Botanical Breakfast & Fresh Sprouts" },
      { time: "10:30 AM", activity: "Abdominal Mud Pack & Circulatory Contrast Jet Bath" },
      { time: "01:00 PM", activity: "High-Fiber Sattvic Salad Platter & Steamed Vegetables" },
      { time: "03:30 PM", activity: "Lymphatic Drainage Massage & Thermal Steam Wrap" },
      { time: "05:30 PM", activity: "Cardiovascular Forest Nature Hike & Breath Conditioning" },
      { time: "07:30 PM", activity: "Nourishing Vegetable Potage & Herbal Night Tonic" },
    ],
    suitableFor: [
      "Sluggish metabolism, insulin resistance, or fatty liver tendencies",
      "Fluid retention, heaviness, and poor lymphatic circulation",
      "Those wanting a sustainable, joyful approach to healthy body weight",
    ],
    image: "/src/assets/images/wellness_organic_dining_1792573863356.jpg",
  },
  {
    id: "spinal-pain-postural-relief",
    title: "Spinal Health & Musculoskeletal Recovery",
    subtitle: "Integrated physiotherapy, herbal Kati Basti, and aquatic traction for pain-free living.",
    tag: "Physiotherapy & Spine",
    shortDescription: "Targeted rehabilitation for chronic back pain, cervical stiffness, disc bulges, and postural misalignment.",
    overview: "Modern sedentary lifestyle and device strain place immense unnatural loads on our cervical and lumbar spine. This specialized program utilizes warm medicated herbal dough dams (Kati Basti), gentle chiropractic-aligned manual therapy, aquatic spinal traction in warm mineral springs, and core stabilizer re-education.",
    durations: [
      { days: 7, label: "7 Nights Acute Relief", description: "Rapid reduction of nerve impingement, muscle spasm, and spinal inflammation." },
      { days: 14, label: "14 Nights Structural Restoration", description: "Comprehensive postural rebuilding and ligamentous stabilization." },
    ],
    includedExperiences: [
      "Musculoskeletal biomechanical assessment & spine mobility mapping",
      "Daily Kati Basti / Greeva Basti with warm anti-inflammatory Dhanwantharam oil",
      "Aquatic spinal decompression in 35°C thermal mineral spring pool",
      "Clinical physical therapy and targeted neuromuscular dry needling / poultices",
      "Ergonomic movement re-training and custom home exercise blueprint",
      "Postural yoga focusing on vertebral elongation and sacroiliac balance",
    ],
    sampleDaySchedule: [
      { time: "06:45 AM", activity: "Gentle Spinal Mobilization & Guided Breathing" },
      { time: "08:00 AM", activity: "Anti-Inflammatory Turmeric & Ginger Breakfast" },
      { time: "10:00 AM", activity: "Kati Basti (Warm Medicated Oil Dam on Lumbar Spine)" },
      { time: "11:30 AM", activity: "Aquatic Spinal Traction in Warm Mineral Spring Pool" },
      { time: "01:00 PM", activity: "Bone-Nourishing Calcium & Mineral-Rich Sattvic Lunch" },
      { time: "03:30 PM", activity: "Botanical Leaf Poultice (Patra Pinda Sweda) Therapy" },
      { time: "05:30 PM", activity: "Therapeutic Restorative Spine Alignment Yoga" },
      { time: "07:30 PM", activity: "Light Wholesome Dinner & Warm Herbal Sleep Decoction" },
    ],
    suitableFor: [
      "Herniated or bulging lumbar/cervical discs",
      "Tech neck, chronic upper back tension, and posture collapse",
      "Sciatica, joint stiffness, and age-related spinal degeneration",
    ],
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80",
  },
];
