import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../ui/ImageWithFallback';
import { brandConfig } from '../../data/brandConfig';

export const BrandStory: React.FC = () => {
  const elements = [
    { name: 'Prithvi (Earth)', description: 'Volcanic mineral mud packs and barefoot forest earthing to ground nervous tension.' },
    { name: 'Jala (Water)', description: 'Thermal spring mineral baths and contrast hydrotherapy to accelerate lymphatic cleansing.' },
    { name: 'Agni (Fire)', description: 'Sun-energised herbal tonics and internal digestive rekindling through medicinal herbs.' },
    { name: 'Vayu (Air)', description: 'Oxygen-saturated rainforest breathing through systematic pranayama and oxygen therapies.' },
    { name: 'Akasha (Ether)', description: 'Sound bath vibration, deep silence, and spaciousness to dissolve mental constriction.' },
  ];

  return (
    <section id="philosophy" className="py-24 sm:py-32 bg-[#F8F6EF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Top Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="text-xs uppercase tracking-widest text-[#8A9B7A] font-semibold">
              Our Sacred Philosophy
            </div>

            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#183D32] leading-[1.15] [text-wrap:balance]">
              A More Natural Way to Feel Your Best
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#76634F] leading-relaxed">
              <p>
                At {brandConfig.name}, we hold a profound conviction: human vitality is not something artificially manufactured in a laboratory. It is the natural, inevitable state of a body brought back into intimate alignment with the laws of nature.
              </p>
              <p>
                Nestled within 35 acres of preserved Western Ghats rainforest, our sanctuary brings together five thousand years of classical Kerala Ayurveda, clinical naturopathy, and therapeutic yoga. We treat no illness as an isolated symptom, but as a disharmony within the whole being.
              </p>
            </div>

            <div className="pt-2 border-t border-[#E8E0D2] grid grid-cols-2 gap-4 text-xs text-[#282B27]">
              <div>
                <p className="font-semibold text-[#183D32]">Root-Cause Healing</p>
                <p className="text-[#76634F] mt-1">Focusing on deep cellular toxin elimination rather than temporary symptom suppression.</p>
              </div>
              <div>
                <p className="font-semibold text-[#183D32]">Zero Artificial Inputs</p>
                <p className="text-[#76634F] mt-1">100% estate-grown botanical remedies, virgin cold-pressed oils, and living spring waters.</p>
              </div>
            </div>
          </motion.div>

          {/* Right Layered Photography */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            {/* Primary Large Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] w-full">
              <ImageWithFallback
                src="/src/assets/images/ayurveda_therapy_ritual_1792573863019.jpg"
                alt="Ayurvedic oil therapy vessel with fresh medicinal herbs at Vana Veda"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 text-white text-xs">
                <span className="font-editorial text-base italic text-[#E8E0D2]">Panchakarma Shala</span>
                <p className="text-white/80">Continuous traditional bronze Shirodhara vessels</p>
              </div>
            </div>

            {/* Overlapping Secondary Image on Desktop */}
            <div className="hidden sm:block absolute -bottom-8 -left-8 w-1/2 aspect-square rounded-xl overflow-hidden shadow-2xl border-4 border-[#F8F6EF]">
              <ImageWithFallback
                src="/src/assets/images/wellness_organic_dining_1792573863356.jpg"
                alt="Organic farm to table sattvic dining"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* The Five Elements (Panchamahabhuta) Bar */}
        <div className="mt-20 pt-12 border-t border-[#E8E0D2]">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest text-[#8A9B7A] font-semibold">The Five Great Pillars</span>
            <h3 className="font-serif-display text-2xl text-[#183D32] mt-1">Panchamahabhuta in Clinical Practice</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {elements.map((el, i) => (
              <div
                key={i}
                className="bg-white/80 rounded-xl p-5 border border-[#E8E0D2] hover:border-[#8A9B7A] transition-colors"
              >
                <div className="text-xs uppercase tracking-wider font-semibold text-[#183D32] mb-1.5">
                  {el.name}
                </div>
                <p className="text-xs text-[#76634F] leading-relaxed">
                  {el.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
