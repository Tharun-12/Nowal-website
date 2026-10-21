/**
 * Specialists & Healing Team at Vana Veda
 */

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  qualifications: string;
  specialization: string;
  bio: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "dr-ananya-nambiar",
    name: "Dr. Ananya Nambiar",
    role: "Chief Ayurvedic Physician & Medical Director",
    qualifications: "BAMS, MD (Ayurveda), Kerala University of Health Sciences",
    specialization: "Panchakarma purification, Nadi Pariksha pulse diagnosis, and chronic metabolic disorders",
    bio: "Hailing from a multi-generational lineage of traditional Kerala Vaidyas, Dr. Ananya combines deep classical textual scholarship with eighteen years of clinical hospital leadership in personalized detoxification and endocrine restoration.",
    image: "https://images.unsplash.com/photo-1594824813633-8987b27f428c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "dr-siddharth-varma",
    name: "Dr. Siddharth Varma",
    role: "Head of Naturopathy & Hydrotherapy",
    qualifications: "BNYS (Bachelor of Naturopathy & Yogic Sciences), Rajiv Gandhi University",
    specialization: "Aquatic hydrotherapy, mud therapeutics, fasting physiology, and lifestyle medicine",
    bio: "With over fourteen years of experience heading clinical naturopathy departments, Dr. Varma advocates the profound healing intelligence of natural elements. He specializes in thermal mineral spring immersion and non-invasive gut rehabilitation.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "acharya-devraj",
    name: "Acharya Devraj",
    role: "Master of Yoga & Meditation Sciences",
    qualifications: "M.Sc. Yogic Sciences, Bihar School of Yoga & Kaivalyadhama Tradition",
    specialization: "Pranayama breath mechanics, therapeutic Yoga Nidra, and Himalayan sound acoustics",
    bio: "Acharya Devraj has guided thousands of seekers across two decades. His gentle, somatic approach focuses on releasing deep autonomic tension through conscious breathwork, restorative postures, and harmonic Nada Yoga.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "meera-sen",
    name: "Meera Sen",
    role: "Director of Sattvic Nutrition & Farm-to-Table Gastronomy",
    qualifications: "M.Sc. Clinical Nutrition, Certified Ayurvedic Dietetics Consultant",
    specialization: "Anti-inflammatory gut microbiome restoration, medicinal culinary herbs, and fasting protocols",
    bio: "Meera works in tandem with our organic farm managers and resident physicians to create dishes that are both deeply medicinal and a sensory delight, proving that healing food can be extraordinarily flavorful and uplifting.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  },
];
