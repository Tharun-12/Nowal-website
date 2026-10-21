import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Clock, Check, Sparkles, ArrowRight } from 'lucide-react';
import { Treatment } from '../../data/treatments';
import { ImageWithFallback } from './ImageWithFallback';

interface TreatmentModalProps {
  treatment: Treatment | null;
  onClose: () => void;
  onSelectForBooking: (treatment: Treatment) => void;
}

export const TreatmentModal: React.FC<TreatmentModalProps> = ({
  treatment,
  onClose,
  onSelectForBooking,
}) => {
  useEffect(() => {
    if (treatment) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [treatment, onClose]);

  if (!treatment) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0F2821]/80 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl bg-[#F8F6EF] rounded-2xl shadow-2xl border border-[#8A9B7A]/30 overflow-hidden my-8 z-10"
        >
          {/* Top image bar */}
          <div className="relative h-64 sm:h-72 w-full">
            <ImageWithFallback
              src={treatment.image}
              alt={treatment.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#183D32] via-[#183D32]/40 to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full transition-colors cursor-pointer"
              aria-label="Close treatment details"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="absolute bottom-4 left-6 right-6 text-white">
              <div className="flex items-center gap-2 text-xs text-[#E8E0D2]">
                <span>{treatment.category}</span>
                {treatment.sanskritName && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="font-editorial text-sm italic">{treatment.sanskritName}</span>
                  </>
                )}
                <span aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1 font-mono">
                  <Clock className="w-3.5 h-3.5" />
                  {treatment.durationMinutes} mins
                </span>
              </div>
              <h2 className="font-serif-display text-2xl sm:text-3xl font-semibold mt-1 text-[#F8F6EF]">
                {treatment.name}
              </h2>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
            <div>
              <h3 className="text-xs uppercase tracking-wider text-[#8A9B7A] font-semibold mb-2">
                Therapeutic Philosophy & Action
              </h3>
              <p className="text-[#282B27] text-sm sm:text-base leading-relaxed">
                {treatment.fullDescription}
              </p>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-xs uppercase tracking-wider text-[#8A9B7A] font-semibold mb-3">
                Documented Clinical & Physiological Benefits
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {treatment.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#282B27]">
                    <Check className="w-4 h-4 text-[#183D32] shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Formulations & Techniques */}
            <div className="bg-[#E8E0D2]/40 rounded-xl p-4 sm:p-5 border border-[#E8E0D2]">
              <h4 className="text-xs uppercase tracking-wider text-[#183D32] font-semibold mb-2">
                Classical Formulations & Signature Techniques
              </h4>
              <ul className="space-y-1.5 text-xs text-[#76634F]">
                {treatment.keyIngredientsOrTechniques.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8A9B7A]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recommended for */}
            <div className="text-xs text-[#76634F]">
              <span className="font-semibold text-[#183D32] uppercase tracking-wider block mb-1">
                Primary Indications
              </span>
              <p>{treatment.recommendedFor}</p>
            </div>

            {/* Action buttons */}
            <div className="pt-4 border-t border-[#E8E0D2] flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => {
                  onSelectForBooking(treatment);
                  onClose();
                }}
                className="flex-1 py-3 px-6 bg-[#183D32] hover:bg-[#0F2821] text-white text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Include in My Retreat Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={onClose}
                className="py-3 px-6 bg-white border border-[#E8E0D2] hover:bg-[#E8E0D2]/40 text-[#282B27] text-sm font-medium rounded-lg transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
