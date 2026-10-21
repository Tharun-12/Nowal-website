import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, Quote, CheckCircle2 } from 'lucide-react';
import { testimonialsData } from '../../data/testimonials';
import { ImageWithFallback } from '../ui/ImageWithFallback';

export const TestimonialsSection: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const total = testimonialsData.length;
  const current = testimonialsData[currentIdx];

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % total);
  };

  return (
    <section className="py-24 sm:py-32 bg-[#E8E0D2]/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#8A9B7A] font-semibold">
            Real Restorative Journeys
          </span>
          <h2 className="font-serif-display text-3xl sm:text-5xl text-[#183D32] mt-2 leading-tight [text-wrap:balance]">
            Guest Stories & Transformations
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#76634F] leading-relaxed">
            Read firsthand accounts from guests who took time out of modern life to heal within our sanctuary.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative bg-white rounded-2xl border border-[#E8E0D2] shadow-sm p-8 sm:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Rating and Program Info */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E8E0D2] pb-5">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                  <span className="ml-2 text-xs font-semibold text-[#183D32]">{current.program}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#76634F]">
                  <span className="font-mono">{current.duration} Stay</span>
                  <span aria-hidden="true">·</span>
                  <span className="inline-flex items-center gap-1 text-[#183D32] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#183D32]" />
                    Verified Guest
                  </span>
                </div>
              </div>

              {/* Quote */}
              <div className="relative">
                <Quote className="w-10 h-10 text-[#8A9B7A]/20 absolute -top-4 -left-2 -z-0" />
                <p className="font-serif-display text-xl sm:text-2xl text-[#183D32] leading-relaxed relative z-10">
                  "{current.quote}"
                </p>
              </div>

              {/* Full narrative */}
              <p className="text-sm text-[#76634F] leading-relaxed">
                {current.fullStory}
              </p>

              {/* Guest Profile Details */}
              <div className="pt-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#8A9B7A]">
                    <ImageWithFallback
                      src={current.image}
                      alt={current.guestName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif-display text-base font-semibold text-[#183D32]">
                      {current.guestName}
                    </h4>
                    <p className="text-xs text-[#76634F]">{current.location}</p>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="p-2.5 rounded-full border border-[#E8E0D2] hover:bg-[#F8F6EF] text-[#183D32] transition-colors cursor-pointer"
                    aria-label="Previous Testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2.5 rounded-full border border-[#E8E0D2] hover:bg-[#F8F6EF] text-[#183D32] transition-colors cursor-pointer"
                    aria-label="Next Testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Dot Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonialsData.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentIdx(i)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                i === currentIdx ? 'w-8 bg-[#183D32]' : 'w-2 bg-[#8A9B7A]/40 hover:bg-[#8A9B7A]'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
