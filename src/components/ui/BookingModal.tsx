import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles } from 'lucide-react';
import { BookingForm } from './BookingForm';
import { brandConfig } from '../../data/brandConfig';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProgramId?: string;
  initialAccommodationId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialProgramId,
  initialAccommodationId,
}) => {
  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (isOpen) {
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
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0F2821]/75 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-[#F8F6EF] rounded-2xl shadow-2xl border border-[#8A9B7A]/30 overflow-hidden my-8 z-10"
          >
            {/* Modal Header */}
            <div className="bg-[#183D32] text-[#F8F6EF] px-6 py-5 flex items-center justify-between border-b border-[#8A9B7A]/20">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#8A9B7A] font-semibold">
                  {brandConfig.name} Admissions
                </span>
                <h2 className="font-serif-display text-xl md:text-2xl text-[#F8F6EF]">
                  Plan Your Healing Retreat
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-[#E8E0D2] hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close booking modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
              <BookingForm
                initialProgramId={initialProgramId}
                initialAccommodationId={initialAccommodationId}
                onSuccess={onClose}
                isModal={true}
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
