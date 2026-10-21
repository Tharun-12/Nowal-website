import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, Clock, MapPin, ShieldCheck, HelpCircle } from 'lucide-react';
import { BookingForm } from '../ui/BookingForm';
import { brandConfig } from '../../data/brandConfig';

export const BookingSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#E8E0D2]/35 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#8A9B7A] font-semibold">
            Reserve Your Sanctuary Stay
          </span>
          <h2 className="font-serif-display text-3xl sm:text-5xl text-[#183D32] mt-2 leading-tight [text-wrap:balance]">
            Consultation & Retreat Enquiry
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#76634F] leading-relaxed">
            Every healing stay at Vana Veda is customized. Submit your preferred dates and health priorities below to receive a personalized proposal from our medical team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-[#F8F6EF] rounded-2xl p-6 sm:p-10 border border-[#8A9B7A]/30 shadow-md">
            <h3 className="font-serif-display text-xl sm:text-2xl text-[#183D32] mb-6 border-b border-[#E8E0D2] pb-4">
              Step 1: Your Stay Details
            </h3>
            <BookingForm />
          </div>

          {/* Right Column: Contact Details, FAQ & Admissions Info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Admissions Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E0D2] shadow-xs space-y-5">
              <span className="text-[11px] uppercase tracking-widest text-[#8A9B7A] font-semibold">
                Direct Admissions Concierge
              </span>
              <h3 className="font-serif-display text-xl text-[#183D32]">
                Prefer to speak with an admissions counselor?
              </h3>
              <p className="text-xs sm:text-sm text-[#76634F] leading-relaxed">
                Our team is on hand 7 days a week to answer travel queries, discuss medical indications, or arrange private airport transfers.
              </p>

              <div className="space-y-3 pt-2 text-xs text-[#282B27]">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#183D32] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#183D32]">Admissions Desk</p>
                    <a href={`tel:${brandConfig.contact.phone}`} className="hover:underline text-[#76634F]">
                      {brandConfig.contact.phoneDisplay}
                    </a>
                    <span className="block text-[11px] text-[#8A9B7A]">Toll-Free: {brandConfig.contact.tollFree}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#183D32] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#183D32]">Admissions Email</p>
                    <a href={`mailto:${brandConfig.contact.email}`} className="hover:underline text-[#76634F]">
                      {brandConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#183D32] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#183D32]">Sanctuary Estate</p>
                    <p className="text-[#76634F]">{brandConfig.location.address}</p>
                    <p className="text-[11px] text-[#8A9B7A]">{brandConfig.location.region}, {brandConfig.location.country}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#183D32] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#183D32]">Intake & Concierge Hours</p>
                    <p className="text-[#76634F]">{brandConfig.contact.receptionHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Retreat FAQs */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E0D2] shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#183D32]">
                <HelpCircle className="w-4 h-4 text-[#8A9B7A]" />
                <span>Frequently Asked Questions</span>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <p className="font-semibold text-[#183D32]">What is the minimum recommended stay?</p>
                  <p className="text-[#76634F] mt-0.5">
                    For meaningful Ayurvedic detoxification or Panchakarma, we recommend a minimum of 7 to 14 nights to allow the body to pass through preparatory and restorative phases.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#183D32]">Are children permitted at the retreat?</p>
                  <p className="text-[#76634F] mt-0.5">
                    To maintain an atmosphere of silence and deep healing contemplation, we welcome guests aged 14 and above.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#183D32]">Is high-speed Wi-Fi available?</p>
                  <p className="text-[#76634F] mt-0.5">
                    High-speed fiber Wi-Fi is provided inside private villas. Public garden pavilions and treatment shalas remain designated digital-quiet zones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
