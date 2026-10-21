/**
 * Accommodation and Facilities Data for Vana Veda Retreat
 */

export interface AccommodationRoom {
  id: string;
  name: string;
  category: "Villa" | "Suite" | "Cottage" | "Sanctuary";
  areaSqFt: number;
  maxGuests: number;
  bedType: string;
  view: string;
  shortDescription: string;
  features: string[];
  image: string;
}

export interface RetreatFacility {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  image: string;
}

export const accommodationsData: AccommodationRoom[] = [
  {
    id: "forest-garden-villa",
    name: "Forest Garden Private Villa",
    category: "Villa",
    areaSqFt: 850,
    maxGuests: 2,
    bedType: "Custom Teak King Bed with Organic Cotton Linen",
    view: "Private rainforest courtyard garden with lotus water feature",
    shortDescription: "A freestanding biophilic sanctuary built with reclaimed Kerala teak, clay roof tiles, and floor-to-ceiling glass doors opening onto your personal tropical garden.",
    features: [
      "Private veranda with handmade cane daybed and forest view",
      "Open-to-sky outdoor rain shower & natural stone bathtub",
      "Chemical-free organic cotton mattresses & linen",
      "Filtered natural spring water station & herbal infusion bar",
      "Silent biophilic cross-ventilation & gentle eco climate control",
      "Private yoga and meditation deck with cork mats",
    ],
    image: "/src/assets/images/retreat_villa_suite_1792573862807.jpg",
  },
  {
    id: "lotus-pond-pavilion",
    name: "Lotus Pond Pavilion Suite",
    category: "Suite",
    areaSqFt: 680,
    maxGuests: 2,
    bedType: "Handcrafted Teak Queen / Twin Beds",
    view: "Reflecting lily pond and misty mountain ridgeline",
    shortDescription: "Perched over the peaceful lotus water body, this suite fills with early morning mist and gentle birdsong, featuring warm earth-toned interiors.",
    features: [
      "Cantilevered timber deck hovering over the lotus pond",
      "Handmade terracotta flooring providing natural thermal cooling",
      "Artisanal bronze sink and botanical bath amenities",
      "Acoustically insulated for deep meditative silence",
      "Organic brass herbal kettle with fresh garden herbs",
    ],
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "canopy-treehouse-retreat",
    name: "Canopy Treehouse Sanctuary",
    category: "Sanctuary",
    areaSqFt: 550,
    maxGuests: 2,
    bedType: "Floating King Platform Bed",
    view: "High rainforest canopy, valley vista, and birdlife",
    shortDescription: "Elevated 25 feet amidst ancient hardwood trees, offering panoramic views of the biosphere canopy and an unparalleled feeling of seclusion.",
    features: [
      "Expansive 360-degree glass walls with motorized linen shades",
      "High-perch viewing terrace for morning birdwatching & tea",
      "Aromatherapeutic cedar wood interiors",
      "Natural latex bedding with zero synthetic foams",
    ],
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "heritage-ayurveda-cottage",
    name: "Heritage Ayurveda Courtyard Cottage",
    category: "Cottage",
    areaSqFt: 720,
    maxGuests: 3,
    bedType: "Classic Rosewood King Bed + Daybed",
    view: "Internal traditional Nalukettu courtyard with tulsi plant",
    shortDescription: "Inspired by traditional Kerala architecture with an open inner courtyard, allowing natural rainwater and starlight into the center of your living space.",
    features: [
      "Traditional central courtyard with living sacred Tulsi",
      "Solid rosewood and brass antique appointments",
      "Direct adjoining corridor to the Ayurvedic therapy sanctuary",
      "Custom dosha-specific aromatherapy diffusers",
    ],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
  },
];

export const retreatFacilities: RetreatFacility[] = [
  {
    id: "yoga-shala",
    name: "Open-Air Forest Yoga Shala",
    category: "Movement & Meditation",
    shortDescription: "Constructed without nails using native bamboo and teak, oriented towards the rising sun for dawn Surya Namaskar.",
    image: "/src/assets/images/hero_nature_retreat_1792573861918.jpg",
  },
  {
    id: "sattvic-dining",
    name: "Prana Organic Dining Verandah",
    category: "Nutrition",
    shortDescription: "Farm-to-table culinary haven serving 100% organic, seasonal, dosha-balanced cuisine made from our own permaculture gardens.",
    image: "/src/assets/images/wellness_organic_dining_1792573863356.jpg",
  },
  {
    id: "hydrotherapy-sanctuary",
    name: "Thermal Spring Hydrotherapy Pool",
    category: "Naturopathy",
    shortDescription: "Naturally heated mineral spring pool calibrated at 35°C for zero-gravity aquatic unwinding and underwater spinal traction.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "herb-arboretum",
    name: "Sacred Medicinal Herb Arboretum",
    category: "Nature & Botany",
    shortDescription: "Home to over 240 rare Ayurvedic medicinal plants and trees harvested daily for bespoke therapeutic oils and decoctions.",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80",
  },
];
