import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Sparkles, Compass, ShieldCheck } from 'lucide-react';
import { brandConfig } from '../../data/brandConfig';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-[#0F2821]">
      {/* Background Image with slow cinematic subtle scale */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 7, ease: [0.16, 1, 0.3, 1] }}
          src="/src/assets/images/hero_nature_retreat_1792573861918.jpg"
          alt="Vana Veda Nature Cure and Holistic Retreat Sanctuary"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Measured scrim overlay for 4.5:1 WCAG AA text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F2821] via-[#0F2821]/50 to-black/40" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 sm:pt-44 pb-16 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Eyebrow kicker */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#DCE3D6] mb-4"
          >
            <span>Holistic Naturopathy & Ayurveda Sanctuary</span>
            <span aria-hidden="true">·</span>
            <span>Western Ghats</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif-display text-4xl sm:text-6xl lg:text-7xl font-normal text-[#F8F6EF] tracking-tight leading-[1.08] [text-wrap:balance]"
          >
            Rediscover the Art of Living Well
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 text-base sm:text-lg text-[#E8E0D2] font-normal leading-relaxed max-w-2xl"
          >
            Reconnect with nature through thoughtful wellness experiences, personalised physician care, nourishing organic food, and restorative daily rituals.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <button
              type="button"
              onClick={onOpenBooking}
              className="py-3.5 px-8 bg-[#F8F6EF] hover:bg-white text-[#183D32] text-xs font-semibold uppercase tracking-wider rounded-lg transition-all duration-200 text-center shadow-lg hover:shadow-xl cursor-pointer"
            >
              {brandConfig.ctas.primary}
            </button>
            <a
              href="#programs"
              className="py-3.5 px-8 bg-black/30 hover:bg-black/50 text-[#F8F6EF] border border-[#F8F6EF]/30 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all duration-200 text-center backdrop-blur-sm"
            >
              {brandConfig.ctas.secondary}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Sanctuary Pillars KPI strip */}
      <div className="relative z-10 bg-[#183D32]/90 backdrop-blur-md border-t border-[#8A9B7A]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-[#8A9B7A]/20">
            {brandConfig.stats.map((stat, idx) => (
              <div key={idx} className={idx > 0 ? 'pt-4 md:pt-0 md:pl-6' : ''}>
                <p className="font-serif-display text-2xl sm:text-3xl font-semibold text-[#F8F6EF] tabular-nums">
                  {stat.value}
                </p>
                <p className="text-xs text-[#C2CCB8] uppercase tracking-wider mt-0.5">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <a
        href="#philosophy"
        className="hidden lg:flex absolute bottom-24 right-8 z-20 flex-col items-center text-white/70 hover:text-white text-[11px] tracking-widest uppercase transition-colors"
        aria-label="Scroll down to explore philosophy"
      >
        <span className="mb-2 [writing-mode:vertical-rl]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-3.5 h-3.5" />
        </motion.div>
      </a>
    </section>
  );
};
