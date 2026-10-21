import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sun, Moon, Utensils, Droplets, Wind, Sparkles, Compass } from 'lucide-react';
import { ImageWithFallback } from '../ui/ImageWithFallback';

export const ExperiencesSection: React.FC = () => {
  const experiences = [
    {
      time: '06:00 AM',
      period: 'Brahma Muhurta (Dawn)',
      title: 'Dawn Awakening & Surya Yoga',
      icon: <Sun className="w-5 h-5 text-amber-600" />,
      tagline: 'Attuning to natural circadian solar light',
      description: 'Begin the morning with warm ginger-tulsi infusion followed by gentle breathwork and sunrise Surya Namaskar in our open-air bamboo shala as morning mountain mist lifts from the lotus pond.',
      image: '/src/assets/images/hero_nature_retreat_1792573861918.jpg',
    },
    {
      time: '08:30 AM',
      period: 'Morning Nourishment',
      title: 'Sattvic Living Breakfast',
      icon: <Utensils className="w-5 h-5 text-emerald-600" />,
      tagline: '100% estate-grown organic plant medicine',
      description: 'Cold-pressed wild amla and green leaf tonics, freshly sprouted legumes, warm spiced red rice porridge, and tropical fruits picked from our permaculture orchards.',
      image: '/src/assets/images/wellness_organic_dining_1792573863356.jpg',
    },
    {
      time: '10:30 AM',
      period: 'Therapeutic Hours',
      title: 'Prescribed Classical Therapies',
      icon: <Sparkles className="w-5 h-5 text-amber-700" />,
      tagline: 'Synchronised two-therapist treatments',
      description: 'Your physician-monitored sessions begin: Shirodhara, Abhyanga with warm medicated herbal decoctions, botanical poultices, or solar-energised volcanic mud packs.',
      image: '/src/assets/images/ayurveda_therapy_ritual_1792573863019.jpg',
    },
    {
      time: '03:30 PM',
      period: 'Afternoon Rest & Water',
      title: 'Thermal Spring Aquatic Decompression',
      icon: <Droplets className="w-5 h-5 text-teal-600" />,
      tagline: 'Zero-gravity mineral spring relief',
      description: 'Soak in the 35°C thermal spring pool where gentle aquatic traction unloads the spinal discs, accompanied by reflexology walks along the river stone trail.',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    },
    {
      time: '05:30 PM',
      period: 'Dusk Integration',
      title: 'Himalayan Sound Bath & Yoga Nidra',
      icon: <Wind className="w-5 h-5 text-indigo-600" />,
      tagline: 'Downregulating into delta wave restoration',
      description: 'As twilight falls over the rainforest, sink into profound yogic sleep accompanied by the acoustic vibrations of hand-hammered 7-metal singing bowls and tuned gongs.',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
    },
    {
      time: '09:00 PM',
      period: 'Night Sanctuary',
      title: 'Circadian Sleep & Forest Silence',
      icon: <Moon className="w-5 h-5 text-purple-600" />,
      tagline: 'Digital fast under pristine starlight',
      description: 'Warm nutmeg-spiced botanical milk, soothing bedtime foot oil massage, complete digital disconnection, and the natural symphony of the night jungle.',
      image: '/src/assets/images/retreat_villa_suite_1792573862807.jpg',
    },
  ];

  const [activeIdx, setActiveIdx] = useState(0);
  const currentExp = experiences[activeIdx];

  return (
    <section id="experiences" className="py-24 sm:py-32 bg-[#E8E0D2]/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#8A9B7A] font-semibold">
            Daily Sanctuary Rhythm
          </span>
          <h2 className="font-serif-display text-3xl sm:text-5xl text-[#183D32] mt-2 leading-tight [text-wrap:balance]">
            A Day in the Life at Vana Veda
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#76634F] leading-relaxed">
            Every moment is structured to balance your circadian biology, from early morning sunlight exposure to restorative evening soundscapes.
          </p>
        </div>

        {/* Horizontal Schedule Tabs on Desktop / Scrollable on Mobile */}
        <div className="flex overflow-x-auto gap-3 pb-4 mb-10 no-scrollbar justify-start sm:justify-center">
          {experiences.map((exp, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveIdx(idx)}
              className={`p-3 rounded-xl border whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-2.5 ${
                idx === activeIdx
                  ? 'bg-[#183D32] text-white border-[#183D32] shadow-sm'
                  : 'bg-white hover:bg-white/80 text-[#282B27] border-[#E8E0D2]'
              }`}
            >
              <span className="font-mono text-xs font-semibold">{exp.time}</span>
              <span className="text-xs font-medium">{exp.title.split('&')[0]}</span>
            </button>
          ))}
        </div>

        {/* Active Experience Showcase */}
        <div className="bg-white rounded-2xl overflow-hidden border border-[#E8E0D2] shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
          {/* Visual stage */}
          <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto lg:h-[460px]">
            <ImageWithFallback
              src={currentExp.image}
              alt={currentExp.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-[#F8F6EF]/90 backdrop-blur-xs text-[#183D32] text-xs font-semibold px-3 py-1 rounded-md">
              {currentExp.period}
            </div>
          </div>

          {/* Editorial info */}
          <div className="lg:col-span-6 p-8 sm:p-12 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#8A9B7A] uppercase tracking-wider">
              {currentExp.icon}
              <span>{currentExp.time}</span>
              <span aria-hidden="true">·</span>
              <span>{currentExp.period}</span>
            </div>

            <h3 className="font-serif-display text-2xl sm:text-3xl text-[#183D32]">
              {currentExp.title}
            </h3>

            <p className="font-editorial text-lg italic text-[#76634F]">
              "{currentExp.tagline}"
            </p>

            <p className="text-sm sm:text-base text-[#282B27] leading-relaxed">
              {currentExp.description}
            </p>

            <div className="pt-4 border-t border-[#E8E0D2] flex items-center gap-4 text-xs text-[#76634F]">
              <span>Complimentary with all retreat packages</span>
              <span aria-hidden="true">·</span>
              <span>Individualized per doshic schedule</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
