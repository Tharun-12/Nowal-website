import React from 'react';
import { motion } from 'motion/react';
import { Award, GraduationCap } from 'lucide-react';
import { teamMembers } from '../../data/team';
import { ImageWithFallback } from '../ui/ImageWithFallback';

interface TeamSectionProps {
  onOpenBooking: () => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="team" className="py-24 sm:py-32 bg-[#F8F6EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#8A9B7A] font-semibold">
            Licensed Medical Practitioners
          </span>
          <h2 className="font-serif-display text-3xl sm:text-5xl text-[#183D32] mt-2 leading-tight [text-wrap:balance]">
            Our Resident Physicians & Specialists
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#76634F] leading-relaxed">
            Our medical team combines classical university degrees in Ayurveda and Naturopathy with decades of clinical experience in root-cause medicine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-[#E8E0D2] hover:border-[#8A9B7A] transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Portrait */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <p className="font-serif-display text-lg text-[#F8F6EF]">{member.name}</p>
                    <p className="text-[11px] text-[#C2CCB8] line-clamp-1">{member.role}</p>
                  </div>
                </div>

                {/* Bio & Details */}
                <div className="p-5 space-y-3">
                  <div className="text-[11px] text-[#76634F] font-mono flex items-start gap-1.5 border-b border-[#E8E0D2] pb-2.5">
                    <GraduationCap className="w-3.5 h-3.5 text-[#183D32] shrink-0 mt-0.5" />
                    <span>{member.qualifications}</span>
                  </div>

                  <p className="text-xs text-[#282B27] leading-relaxed line-clamp-4">
                    {member.bio}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2 border-t border-[#E8E0D2]/50">
                <span className="text-[10px] uppercase tracking-wider text-[#8A9B7A] font-semibold block mb-0.5">
                  Core Specialization
                </span>
                <p className="text-[11px] text-[#76634F] line-clamp-2">
                  {member.specialization}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Doctor Consultation CTA banner */}
        <div className="mt-16 bg-[#183D32] text-white rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#8A9B7A]/30">
          <div>
            <h3 className="font-serif-display text-2xl text-[#F8F6EF]">
              Schedule a Preliminary Physician Dialogue
            </h3>
            <p className="text-xs sm:text-sm text-[#C2CCB8] mt-1 max-w-xl">
              Discuss your diagnostic questions, medical history, or specific treatment contraindications directly with our resident doctor before arriving.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenBooking}
            className="py-3 px-6 bg-[#F8F6EF] hover:bg-white text-[#183D32] text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors whitespace-nowrap cursor-pointer shadow-sm"
          >
            Request Doctor Consultation
          </button>
        </div>
      </div>
    </section>
  );
};
