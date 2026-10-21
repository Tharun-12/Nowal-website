import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowRight, MessageSquare, Check, Sparkles } from 'lucide-react';
import { brandConfig } from '../../data/brandConfig';
import { ImageWithFallback } from '../ui/ImageWithFallback';

interface SeasonalOfferSectionProps {
  onOpenBooking: () => void;
}

export const SeasonalOfferSection: React.FC<SeasonalOfferSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 bg-[#183D32] text-[#F8F6EF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0F2821] rounded-3xl border border-[#8A9B7A]/30 overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
          {/* Left Column: Image */}
          <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto lg:h-[480px]">
            <ImageWithFallback
              src="/src/assets/images/hero_nature_retreat_1792573861918.jpg"
              alt="Monsoon Karkidaka season at Vana Veda"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F2821] via-transparent to-transparent lg:hidden" />
            <div className="absolute top-4 left-4 bg-[#8A9B7A] text-[#183D32] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md">
              Seasonal Healing Window
            </div>
          </div>

          {/* Right Column: Editorial Copy & Booking CTA */}
          <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#8A9B7A] font-semibold">
                Classical Monsoon & Post-Monsoon Season
              </span>
              <h2 className="font-serif-display text-3xl sm:text-4xl text-[#F8F6EF] mt-1.5 leading-tight">
                Karkidaka Rejuvenation Retreat
              </h2>
              <p className="font-editorial text-lg italic text-[#DCE3D6] mt-1">
                "When the earth cools and body tissues are primed for deepest medicinal absorption."
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#C2CCB8] leading-relaxed">
              In the classical medical tradition of Kerala, the monsoon rain period is considered the supreme biological moment for cellular rejuvenation. The pores open, metabolic heat softens, and therapeutic oils penetrate to the deepest bone marrow (Majja Dhatu).
            </p>

            {/* Inclusions */}
            <div className="bg-[#183D32]/80 rounded-xl p-4 border border-[#8A9B7A]/20">
              <span className="text-[11px] uppercase tracking-wider text-[#8A9B7A] font-semibold block mb-2">
                Special Seasonal Program Highlights:
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#E8E0D2]">
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#8A9B7A] shrink-0" />
                  <span>Daily Oushadha Kanji (Herbal Porridge)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#8A9B7A] shrink-0" />
                  <span>Classical Sukha Thirummu Body Massage</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#8A9B7A] shrink-0" />
                  <span>Complimentary Post-Retreat Herb Supply</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#8A9B7A] shrink-0" />
                  <span>Direct Airport Chauffeur Transfer</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onOpenBooking}
                className="py-3 px-6 bg-[#F8F6EF] hover:bg-white text-[#183D32] text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Reserve Seasonal Retreat</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <a
                href={`https://wa.me/${brandConfig.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                  'Hello, I would like to enquire about the Karkidaka Rejuvenation Retreat at Vana Veda.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-6 bg-white/10 hover:bg-white/20 text-[#F8F6EF] border border-white/20 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#8A9B7A]" />
                <span>Enquire via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
