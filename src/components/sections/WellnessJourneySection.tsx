import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Compass, FileCheck, UserCheck, Sparkles, HeartPulse, Leaf, ArrowRight, Check } from 'lucide-react';
import { wellnessJourneySteps, JourneyStep } from '../../data/wellnessJourney';

interface WellnessJourneySectionProps {
  onOpenBooking: () => void;
}

export const WellnessJourneySection: React.FC<WellnessJourneySectionProps> = ({ onOpenBooking }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = wellnessJourneySteps[activeStepIndex];

  const getStepIcon = (name: string) => {
    switch (name) {
      case 'Compass':
        return <Compass className="w-5 h-5" />;
      case 'FileCheck':
        return <FileCheck className="w-5 h-5" />;
      case 'UserCheck':
        return <UserCheck className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5" />;
      case 'Leaf':
        return <Leaf className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="journey" className="py-24 sm:py-32 bg-[#E8E0D2]/25 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#8A9B7A] font-semibold">
            How Your Healing Unfolds
          </span>
          <h2 className="font-serif-display text-3xl sm:text-5xl text-[#183D32] mt-2 leading-tight [text-wrap:balance]">
            Your Six-Step Wellness Journey
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#76634F] leading-relaxed">
            From your very first intake dialogue through your long-term return to life, our medical approach is systematic, non-invasive, and deeply individualized.
          </p>
        </div>

        {/* Interactive Step Navigator Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {wellnessJourneySteps.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={step.stepNumber}
                type="button"
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 rounded-xl text-left border transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#183D32] text-white border-[#183D32] shadow-md -translate-y-1'
                    : 'bg-white hover:bg-white/80 text-[#282B27] border-[#E8E0D2]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-serif-display text-lg font-bold ${
                      isActive ? 'text-[#8A9B7A]' : 'text-[#76634F]'
                    }`}
                  >
                    {step.stepNumber}
                  </span>
                  <div className={isActive ? 'text-[#8A9B7A]' : 'text-[#76634F]'}>
                    {getStepIcon(step.iconName)}
                  </div>
                </div>
                <p className="text-xs font-semibold line-clamp-1">{step.title}</p>
                <p
                  className={`text-[10px] mt-1 line-clamp-1 ${
                    isActive ? 'text-[#DCE3D6]' : 'text-[#76634F]'
                  }`}
                >
                  {step.durationEstimate}
                </p>
              </button>
            );
          })}
        </div>

        {/* Featured Step Inspector Card */}
        <motion.div
          key={activeStep.stepNumber}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E8E0D2] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-3 text-xs text-[#8A9B7A] font-semibold uppercase tracking-wider">
              <span>Step {activeStep.stepNumber} of 06</span>
              <span aria-hidden="true">·</span>
              <span>{activeStep.durationEstimate}</span>
            </div>

            <h3 className="font-serif-display text-2xl sm:text-3xl text-[#183D32]">
              {activeStep.title}
            </h3>
            <p className="font-editorial text-lg italic text-[#76634F]">
              "{activeStep.subtitle}"
            </p>

            <p className="text-sm text-[#282B27] leading-relaxed">
              {activeStep.description}
            </p>

            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider text-[#183D32] font-semibold block mb-2">
                Key Protocol Deliverables:
              </span>
              <ul className="space-y-2">
                {activeStep.outcomes.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#76634F]">
                    <Check className="w-4 h-4 text-[#183D32] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-4 bg-[#F8F6EF] rounded-xl p-6 border border-[#E8E0D2] flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-[#8A9B7A] font-semibold">
                Personalized Care
              </span>
              <h4 className="font-serif-display text-lg text-[#183D32] mt-1">
                Have questions about your goals?
              </h4>
              <p className="text-xs text-[#76634F] mt-2 leading-relaxed">
                Our admissions physicians are available for a preliminary 15-minute diagnostic call before booking.
              </p>
            </div>

            <button
              type="button"
              onClick={onOpenBooking}
              className="w-full py-3 px-4 bg-[#183D32] hover:bg-[#0F2821] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Begin Your Assessment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
