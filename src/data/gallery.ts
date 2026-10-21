/**
 * Property Gallery and Visual Media for Vana Veda
 */

export interface GalleryItem {
  id: string;
  title: string;
  category: "Campus & Architecture" | "Accommodation" | "Treatments" | "Dining & Nutrition" | "Nature & Gardens";
  caption: string;
  image: string;
}

export const galleryCategories = [
  "All",
  "Campus & Architecture",
  "Accommodation",
  "Treatments",
  "Dining & Nutrition",
  "Nature & Gardens",
] as const;

export const galleryItems: GalleryItem[] = [
  {
    id: "campus-morning-mist",
    title: "Sanctuary Lotus Pond & Forest Shala",
    category: "Campus & Architecture",
    caption: "Misty morning dawn light reflecting over the central lotus lily pond and open-air meditation pavilion.",
    image: "/src/assets/images/hero_nature_retreat_1792573861918.jpg",
  },
  {
    id: "ayurveda-shirodhara-sanctuary",
    title: "Shirodhara & Medicated Oil Chamber",
    category: "Treatments",
    caption: "Classical bronze dhara pot suspended with warm herbal decoction in our natural stone therapy chamber.",
    image: "/src/assets/images/ayurveda_therapy_ritual_1792573863019.jpg",
  },
  {
    id: "forest-villa-interior",
    title: "Forest Garden Private Villa Suite",
    category: "Accommodation",
    caption: "Floor-to-ceiling glass doors opening onto private lush tropical greenery with natural teak furnishings.",
    image: "/src/assets/images/retreat_villa_suite_1792573862807.jpg",
  },
  {
    id: "organic-sattvic-platter",
    title: "Farm-to-Table Sattvic Dining",
    category: "Dining & Nutrition",
    caption: "Artfully prepared whole-food organic nutrition freshly harvested from our estate permaculture beds.",
    image: "/src/assets/images/wellness_organic_dining_1792573863356.jpg",
  },
  {
    id: "thermal-spring-pool",
    title: "Thermal Mineral Spring Sanctuary",
    category: "Treatments",
    caption: "Naturally heated 35°C hydrotherapy pool embedded in lush tropical bamboo thickets for zero-gravity unwinding.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "open-air-yoga-dawn",
    title: "Sunrise Yoga Shala Practice",
    category: "Nature & Gardens",
    caption: "Morning Surya Namaskar accompanied by mountain mist and dawn birdsong in the Western Ghats biosphere.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "heritage-courtyard-nalukettu",
    title: "Heritage Courtyard Architecture",
    category: "Campus & Architecture",
    caption: "Traditional Kerala architectural woodwork and open inner rainwater courtyard framed by antique pillars.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "medicinal-herb-gardens",
    title: "Sacred Medicinal Herb Gardens",
    category: "Nature & Gardens",
    caption: "Over 240 species of documented therapeutic herbs grown without synthetic inputs for our daily pharmacy.",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "waterfront-suite-terrace",
    title: "Lotus Pavilion Waterfront Terrace",
    category: "Accommodation",
    caption: "Private cantilevered wooden deck hovering over still waters, perfect for reflective contemplation.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
  },
];
