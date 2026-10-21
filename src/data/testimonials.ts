/**
 * Guest Stories and Testimonials for Vana Veda
 */

export interface Testimonial {
  id: string;
  guestName: string;
  location: string;
  program: string;
  duration: string;
  rating: number;
  quote: string;
  fullStory: string;
  verifiedGuest: boolean;
  image: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "arjun-kapoor",
    guestName: "Arjun K.",
    location: "Mumbai, India",
    program: "Mind & Body Restorative Reset",
    duration: "14 Nights",
    rating: 5,
    quote: "After five consecutive years of executive tech burnout, two weeks at Vana Veda gave me my clarity and deep sleep back.",
    fullStory: "Arriving with severe insomnia, elevated resting cortisol, and constant digital anxiety, the combination of daily morning Shirodhara, open-air yoga, and complete digital fasting worked miracles. By day six, I was sleeping eight uninterrupted hours. The medical team's warmth and attentive scientific care made me feel truly held.",
    verifiedGuest: true,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "claire-beaumont",
    guestName: "Claire Beaumont",
    location: "Lyon, France",
    program: "Classical Panchakarma Detoxification",
    duration: "21 Nights",
    rating: 5,
    quote: "Authentic, profound, and deeply scientific. This was not a superficial resort spa, but genuine life-changing healthcare in nature.",
    fullStory: "I came to Vana Veda suffering from chronic joint stiffness and digestive sluggishness following years of travel. Dr. Ananya's daily pulse assessments and the systematic 21-day Panchakarma protocol purged so much inflammation. I returned to France feeling ten years lighter, with clear skin, zero knee discomfort, and unbounded vitality.",
    verifiedGuest: true,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "vikram-ananya-singh",
    guestName: "Vikram & Ananya S.",
    location: "Bengaluru, India",
    program: "Spinal Health & Musculoskeletal Recovery",
    duration: "7 Nights",
    rating: 5,
    quote: "The aquatic thermal spring therapy and Kati Basti relieved a chronic L4-L5 disc ache that months of medication couldn't touch.",
    fullStory: "As long-hour desk professionals, our lower backs were in perpetual spasm. Floating in the 35°C thermal pool while receiving gentle spinal traction under the therapist's hands was unforgettable. The take-home exercises and ergonomic advice have kept us pain-free ever since.",
    verifiedGuest: true,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "elena-rossi",
    guestName: "Elena Rossi",
    location: "Milan, Italy",
    program: "Natural Vitality & Metabolic Balance",
    duration: "14 Nights",
    rating: 5,
    quote: "The food at Prana Verandah redefined what nutrition means to me. Every meal felt like medicine and high culinary art.",
    fullStory: "I never felt hungry despite being on a gentle metabolic fasting regimen. The fresh herbal teas, morning sun-bathing, and volcanic mud baths rejuvenated my energy levels. I lost 4 kilograms of inflammatory fluid retention and gained a genuine reverence for how nature heals.",
    verifiedGuest: true,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
  },
];
