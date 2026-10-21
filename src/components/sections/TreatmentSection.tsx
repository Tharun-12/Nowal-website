import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Clock, ArrowRight, Sparkles } from 'lucide-react';
import { treatmentsData, treatmentCategories, Treatment } from '../../data/treatments';
import { ImageWithFallback } from '../ui/ImageWithFallback';
import { TreatmentModal } from '../ui/TreatmentModal';

interface TreatmentSectionProps {
  onOpenBookingWithTreatment: (treatment: Treatment) => void;
}

export const TreatmentSection: React.FC<TreatmentSectionProps> = ({
  onOpenBookingWithTreatment,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Treatments');
  const [activeModalTreatment, setActiveModalTreatment] = useState<Treatment | null>(null);

  const filteredTreatments =
    selectedCategory === 'All Treatments'
      ? treatmentsData
      : treatmentsData.filter((t) => t.category === selectedCategory);

  return (
    <section id="treatments" className="py-24 sm:py-32 bg-[#F8F6EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-widest text-[#8A9B7A] font-semibold">
              Authentic Holistic Disciplines
            </span>
            <h2 className="font-serif-display text-3xl sm:text-5xl text-[#183D32] mt-2 leading-tight [text-wrap:balance]">
              Classical Therapies & Nature Cure
            </h2>
            <p className="mt-4 text-sm text-[#76634F] leading-relaxed">
              Every therapy at Vana Veda is administered by licensed therapists under direct physician supervision, using freshly prepared organic botanicals.
            </p>
          </div>

          {/* Interactive Category Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1.5 bg-[#E8E0D2]/50 rounded-xl border border-[#E8E0D2]">
            {treatmentCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#183D32] text-white shadow-xs'
                    : 'text-[#282B27] hover:text-[#183D32] hover:bg-white/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Treatment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTreatments.map((treatment, idx) => (
            <motion.div
              key={treatment.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group bg-white rounded-2xl overflow-hidden border border-[#E8E0D2] hover:border-[#8A9B7A] transition-all duration-300 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Card Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <ImageWithFallback
                    src={treatment.image}
                    alt={treatment.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 bg-[#F8F6EF]/90 backdrop-blur-xs text-[#183D32] text-[11px] font-semibold px-2.5 py-1 rounded-md">
                    {treatment.category}
                  </div>
                  <div className="absolute bottom-3 right-3 text-white text-xs font-mono flex items-center gap-1 bg-black/40 px-2 py-0.5 rounded backdrop-blur-xs">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{treatment.durationMinutes} mins</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {treatment.sanskritName && (
                    <span className="font-editorial text-sm italic text-[#76634F] block mb-1">
                      {treatment.sanskritName}
                    </span>
                  )}
                  <h3 className="font-serif-display text-xl text-[#183D32] group-hover:text-[#245244] transition-colors leading-snug">
                    {treatment.name}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-[#76634F] line-clamp-3 leading-relaxed">
                    {treatment.shortDescription}
                  </p>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="px-6 pb-6 pt-2 border-t border-[#E8E0D2]/50 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setActiveModalTreatment(treatment)}
                  className="text-xs uppercase tracking-wider font-semibold text-[#183D32] group-hover:text-[#8A9B7A] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Explore Treatment</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <TreatmentModal
        treatment={activeModalTreatment}
        onClose={() => setActiveModalTreatment(null)}
        onSelectForBooking={onOpenBookingWithTreatment}
      />
    </section>
  );
};
