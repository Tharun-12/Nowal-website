import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Check, ArrowRight, Clock, Sparkles } from 'lucide-react';
import { wellnessPackages, WellnessPackage } from '../../data/programs';
import { ImageWithFallback } from '../ui/ImageWithFallback';

interface ProgramsSectionProps {
  onSelectProgram: (programId: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onSelectProgram }) => {
  const [activePackageId, setActivePackageId] = useState<string>(wellnessPackages[0].id);
  const activePackage = wellnessPackages.find((p) => p.id === activePackageId) || wellnessPackages[0];

  const [selectedDurationDays, setSelectedDurationDays] = useState<number>(
    activePackage.durations[0]?.days || 7
  );

  const handleSelectPackage = (pkg: WellnessPackage) => {
    setActivePackageId(pkg.id);
    setSelectedDurationDays(pkg.durations[0]?.days || 7);
  };

  const currentDurationInfo =
    activePackage.durations.find((d) => d.days === selectedDurationDays) ||
    activePackage.durations[0];

  return (
    <section id="programs" className="py-24 sm:py-32 bg-[#183D32] text-[#F8F6EF] relative overflow-hidden">
      {/* Decorative subtle texture/gradient */}
      <div className="absolute inset-0 bg-radial-gradient from-white/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#8A9B7A] font-semibold">
            Curated Healing Journeys
          </span>
          <h2 className="font-serif-display text-3xl sm:text-5xl text-[#F8F6EF] mt-2 leading-tight [text-wrap:balance]">
            Configurable Wellness Retreats
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#DCE3D6] leading-relaxed">
            All programs are doctor-supervised and tailored to your biological needs, including classical therapies, custom organic nutrition, and daily yoga.
          </p>
        </div>

        {/* Package Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {wellnessPackages.map((pkg) => {
            const isSelected = pkg.id === activePackageId;
            return (
              <button
                key={pkg.id}
                type="button"
                onClick={() => handleSelectPackage(pkg)}
                className={`py-2.5 px-5 rounded-xl text-xs font-medium uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#F8F6EF] text-[#183D32] shadow-md font-semibold'
                    : 'bg-white/10 hover:bg-white/20 text-[#E8E0D2]'
                }`}
              >
                {pkg.title}
              </button>
            );
          })}
        </div>

        {/* Selected Package Spotlight Card */}
        <div className="bg-[#0F2821] rounded-2xl border border-[#8A9B7A]/30 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left Image & Quick Meta */}
            <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full">
              <ImageWithFallback
                src={activePackage.image}
                alt={activePackage.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2821] via-transparent to-transparent lg:hidden" />
              <div className="absolute top-4 left-4 bg-[#183D32]/90 backdrop-blur-xs text-[#DCE3D6] text-xs px-3 py-1 rounded-md uppercase tracking-wider font-semibold">
                {activePackage.tag}
              </div>
            </div>

            {/* Right Detailed Description & Configuration */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#8A9B7A] font-semibold">
                    Program Overview
                  </span>
                  <h3 className="font-serif-display text-2xl sm:text-3xl text-[#F8F6EF] mt-1">
                    {activePackage.title}
                  </h3>
                  <p className="font-editorial text-base text-[#DCE3D6] italic mt-1">
                    {activePackage.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-[#C2CCB8] mt-3 leading-relaxed">
                    {activePackage.overview}
                  </p>
                </div>

                {/* Duration Options Selector */}
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#8A9B7A] font-semibold block mb-2">
                    Select Retreat Duration:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {activePackage.durations.map((dur) => {
                      const isCurrent = dur.days === selectedDurationDays;
                      return (
                        <button
                          key={dur.days}
                          type="button"
                          onClick={() => setSelectedDurationDays(dur.days)}
                          className={`p-3 rounded-lg text-left border transition-all cursor-pointer ${
                            isCurrent
                              ? 'bg-[#183D32] border-[#8A9B7A] text-white shadow-xs'
                              : 'bg-white/5 border-white/10 hover:bg-white/10 text-[#E8E0D2]'
                          }`}
                        >
                          <div className="font-semibold text-xs text-[#F8F6EF]">
                            {dur.label}
                          </div>
                          <div className="text-[11px] text-[#C2CCB8] mt-1 line-clamp-2">
                            {dur.description}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Included In This Program */}
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#8A9B7A] font-semibold block mb-2.5">
                    What is Included in Your Stay:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activePackage.includedExperiences.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[#E8E0D2]">
                        <Check className="w-3.5 h-3.5 text-[#8A9B7A] shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Action Bar */}
              <div className="pt-6 border-t border-[#8A9B7A]/20 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-[#8A9B7A]">Selected Package Duration</p>
                  <p className="text-sm font-semibold text-[#F8F6EF]">
                    {currentDurationInfo?.label} · All-Inclusive Sanctuary Stay
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onSelectProgram(activePackage.id)}
                  className="py-3 px-6 bg-[#F8F6EF] hover:bg-white text-[#183D32] text-xs font-semibold uppercase tracking-wider rounded-lg transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Enquire For This Package</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
