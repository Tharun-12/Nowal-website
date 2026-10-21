/**
 * The 6-Step Wellness Journey Protocol at Vana Veda
 */

export interface JourneyStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  outcomes: string[];
  durationEstimate: string;
  iconName: string;
}

export const wellnessJourneySteps: JourneyStep[] = [
  {
    stepNumber: "01",
    title: "Discover Your Goals",
    subtitle: "Identify your personal intentions for physical, mental, and emotional healing.",
    description: "Before arrival, explore your core health aspirations. Whether you are seeking relief from chronic stress, deep biological detoxification, metabolic balance, or a quiet digital sabbatical, our admissions team helps clarify your primary restorative goals.",
    outcomes: [
      "Initial health questionnaire & lifestyle profiling",
      "Identification of primary therapeutic priorities",
      "Guidance on optimal retreat duration (7, 14, or 21 nights)",
    ],
    durationEstimate: "Pre-Arrival Preparation",
    iconName: "Compass",
  },
  {
    stepNumber: "02",
    title: "Complete Your Wellness Assessment",
    subtitle: "Comprehensive non-invasive diagnostic mapping upon your arrival.",
    description: "Upon arriving at the sanctuary, you undergo an in-depth baseline health assessment combining classical Ayurvedic Nadi Pariksha (subtle pulse diagnosis), body constitution evaluation (Prakriti & Vikriti), and naturopathic vital capacity assessments.",
    outcomes: [
      "Classical Ayurvedic three-finger pulse diagnosis (Nadi Pariksha)",
      "Prakriti (innate constitution) and Vikriti (imbalance) charting",
      "Metabolic impedance analysis and spinal alignment screening",
    ],
    durationEstimate: "Arrival Day (Afternoon)",
    iconName: "FileCheck",
  },
  {
    stepNumber: "03",
    title: "Consult With a Specialist",
    subtitle: "One-on-one session with senior resident Ayurvedic & Naturopathic physicians.",
    description: "Sit down with our experienced doctors to review your diagnostic results, discuss previous medical histories, and understand the root causes of imbalances rather than merely treating superficial symptoms.",
    outcomes: [
      "Detailed root-cause analysis of digestive and nervous status",
      "Dialogue on emotional rhythms, sleep architecture, and stress triggers",
      "Review of contraindications and bespoke safety parameters",
    ],
    durationEstimate: "60-minute in-depth consultation",
    iconName: "UserCheck",
  },
  {
    stepNumber: "04",
    title: "Personalise Your Program",
    subtitle: "Bespoke schedule tailored specifically to your doshic constitution.",
    description: "Your physician crafts your customized daily therapeutic blueprint. No two retreats are identical. Every herbal oil formulation, hydrotherapy temperature, dietary course, and yoga posture is selected specifically for your body's current state.",
    outcomes: [
      "Customized daily therapy calendar with morning & afternoon sessions",
      "Individualized Sattvic dietary prescription tailored by our head chef",
      "Specific herbal decoctions prepared fresh daily at our dispensary",
    ],
    durationEstimate: "Completed by End of Day 1",
    iconName: "Sparkles",
  },
  {
    stepNumber: "05",
    title: "Experience Your Wellness Journey",
    subtitle: "Immerse in daily healing rituals, treatments, nourishing food, and silence.",
    description: "Surrender to the rhythmic restorative schedule of the retreat. From sunrise meditation and Shirodhara to warm mineral hydrotherapy and sunset sound baths, every hour is intentionally orchestrated to allow your body's innate self-healing intelligence to take over.",
    outcomes: [
      "Twice-daily physician-monitored therapeutic interventions",
      "Daily check-in and dynamic schedule adjustments based on body response",
      "Total immersion in 35 acres of negative-ion rich forest air",
    ],
    durationEstimate: "7 to 28 Nights Stay",
    iconName: "HeartPulse",
  },
  {
    stepNumber: "06",
    title: "Continue Your Progress",
    subtitle: "A sustainable take-home blueprint to integrate wellness into everyday life.",
    description: "True healing does not end when you leave our sanctuary gates. Prior to departure, you receive a comprehensive post-retreat Dinacharya (daily routine) roadmap, seasonal dietary guidance, and scheduled virtual follow-up check-ins with your doctor.",
    outcomes: [
      "Comprehensive personalized take-home wellness manual",
      "Custom herbal supply formulated for your next 30 days",
      "Complimentary 30-day and 90-day virtual physician check-ins",
    ],
    durationEstimate: "Lifelong Sustainable Vitality",
    iconName: "Leaf",
  },
];
