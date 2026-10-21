/**
 * Wellness Journal and Insights Data for Vana Veda
 */

export interface Article {
  id: string;
  title: string;
  category: "Ayurveda" | "Naturopathy" | "Nutrition" | "Mindful Living" | "Nature & Retreats";
  readTime: string;
  publishDate: string;
  author: {
    name: string;
    role: string;
  };
  excerpt: string;
  content: string[];
  image: string;
}

export const articlesData: Article[] = [
  {
    id: "dinacharya-ayurvedic-daily-routine",
    title: "Dinacharya: The Sacred Architecture of the Ayurvedic Morning",
    category: "Ayurveda",
    readTime: "5 min read",
    publishDate: "October 14, 2026",
    author: {
      name: "Dr. Ananya Nambiar",
      role: "Chief Ayurvedic Physician",
    },
    excerpt: "How aligning your waking hours with the natural circadian cycles of Vata, Pitta, and Kapha transforms metabolic resilience and mental tranquility.",
    content: [
      "In classical Ayurvedic wisdom, health is not an accidental stroke of good fortune; it is the daily rhythm of harmony with the cosmos. The Sanskrit word 'Dinacharya' translates literally to 'following the movement of the day'.",
      "During the Brahma Muhurta—approximately 96 minutes before sunrise—the atmosphere holds the purest Vata energy, characterized by lightness, clarity, and subtle stillness. Waking during this window naturally stimulates peristalsis and primes the intellect for deep contemplation.",
      "The ritual then proceeds through sensory cleansing: tongue scraping to remove metabolic Ama, splashing the eyes with cool triphala water, gentle oil pulling (Gandusha) with cold-pressed sesame oil to strengthen oral gums, and gentle self-abhyanga before bathing.",
      "By anchoring our biology in these immutable natural cycles, we stabilize the autonomic nervous system, drastically reduce cortisol spikes, and enter our day from a foundation of grounded serenity.",
    ],
    image: "/src/assets/images/ayurveda_therapy_ritual_1792573863019.jpg",
  },
  {
    id: "food-as-medicine-ahara-agni",
    title: "Food as Medicine (Ahara): Igniting Cellular Digestive Fire",
    category: "Nutrition",
    readTime: "6 min read",
    publishDate: "September 28, 2026",
    author: {
      name: "Meera Sen",
      role: "Director of Sattvic Nutrition",
    },
    excerpt: "Why the finest superfoods remain useless if your digestive Agni is dampened—and how mindful meal preparation restores gut vitality.",
    content: [
      "Ancient Ayurveda posits a radical biological insight: 'You are not what you eat; you are what you have the capacity to digest.' If digestive fire (Agni) is weak, even the purest organic foods ferment into toxic metabolic sludge known as Ama.",
      "At Vana Veda, our culinary philosophy centers on Sattva—purity, lightness, and clarity. Food is harvested from our estate permaculture soil hours before preparation, keeping the vital bio-electric Prana intact.",
      "We balance the six tastes (Shad Rasa)—sweet, sour, salty, pungent, bitter, and astringent—in every meal. A dash of fresh grated ginger with Himalayan rock salt before dining sparks the salivary enzymes, while chewing slowly without digital distraction activates parasympathetic vagal tone.",
      "When we eat in reverence and quiet gratitude, digestion becomes effortless, post-prandial lethargy vanishes, and food fulfills its primal purpose as medicine.",
    ],
    image: "/src/assets/images/wellness_organic_dining_1792573863356.jpg",
  },
  {
    id: "science-of-forest-immersion-nature-cure",
    title: "The Neurobiology of Forest Immersion: Negative Ions & Phytoncides",
    category: "Nature & Retreats",
    readTime: "4 min read",
    publishDate: "September 12, 2026",
    author: {
      name: "Dr. Siddharth Varma",
      role: "Head of Naturopathy",
    },
    excerpt: "How spending time under ancient rainforest canopies chemically lowers blood pressure, boosts Natural Killer (NK) immune cells, and quiets chronic anxiety.",
    content: [
      "For centuries, naturopaths prescribed retreats to undisturbed forests as the ultimate remedy for 'nervous debility'. Today, rigorous biomedical research confirms the neurochemical mechanisms behind this intuition.",
      "Ancient hardwood trees emit volatile organic compounds called phytoncides—natural antimicrobial terpenes designed to protect trees from insects and fungal decay. When humans inhale these aerosols during slow forest walks, research shows a marked surge in human Natural Killer (NK) cell activity and anti-cancer intracellular proteins.",
      "Furthermore, the turbulent waterfalls and cascading springs at our Wayanad sanctuary generate high concentrations of negative air ions. Inhaling negative ions accelerates blood serotonin oxidation, dramatically reducing subjective fatigue and depressive states.",
      "Nature does not simply surround our retreat; it is our primary clinical pharmacist.",
    ],
    image: "/src/assets/images/hero_nature_retreat_1792573861918.jpg",
  },
];
