import React, { useState } from 'react';
import { ArrowUp, Mail, Phone, MapPin, MessageSquare, Check, Sparkles } from 'lucide-react';
import { brandConfig } from '../../data/brandConfig';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    setNewsletterSuccess(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setNewsletterSuccess(false);
    }, 4000);
  };

  return (
    <footer className="bg-[#0F2821] text-[#F8F6EF] border-t border-[#8A9B7A]/20 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Closing Invitation Banner */}
        <div className="bg-[#183D32] rounded-3xl p-8 sm:p-14 border border-[#8A9B7A]/30 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#8A9B7A] font-semibold">
            Your Sanctuary Awaits
          </span>
          <h2 className="font-serif-display text-3xl sm:text-5xl text-[#F8F6EF] max-w-2xl mx-auto leading-tight [text-wrap:balance]">
            Begin Your Personal Journey to Natural Vitality
          </h2>
          <p className="text-sm sm:text-base text-[#DCE3D6] max-w-xl mx-auto leading-relaxed">
            Allow ancient medicinal wisdom and 35 acres of pristine forest air to restore your biological equilibrium.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={onOpenBooking}
              className="py-3.5 px-8 bg-[#F8F6EF] hover:bg-white text-[#183D32] text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors cursor-pointer shadow-md"
            >
              {brandConfig.ctas.primary}
            </button>
            <a
              href={`https://wa.me/${brandConfig.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                'Hello Vana Veda Admissions, I would like to inquire about retreat availability.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-6 bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#8A9B7A]" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Main Footer Links & Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 text-xs">
          {/* Brand info */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-serif-display text-2xl text-[#F8F6EF] block">
              {brandConfig.name}
            </span>
            <p className="text-[#C2CCB8] leading-relaxed max-w-sm">
              {brandConfig.tagline}
            </p>
            <div className="space-y-1 text-[#C2CCB8]">
              <p>{brandConfig.location.address}</p>
              <p>{brandConfig.location.region}, {brandConfig.location.country}</p>
              <p className="text-[11px] text-[#8A9B7A] font-mono">{brandConfig.location.coordinates} · Elevation 750m</p>
            </div>
          </div>

          {/* Directory Links 1 */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-[11px] uppercase tracking-widest text-[#8A9B7A] font-semibold block">
              Retreat
            </span>
            <ul className="space-y-2 text-[#DCE3D6]">
              <li><a href="#philosophy" className="hover:text-white transition-colors">Our Philosophy</a></li>
              <li><a href="#journey" className="hover:text-white transition-colors">6-Step Journey</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">Wellness Packages</a></li>
              <li><a href="#treatments" className="hover:text-white transition-colors">Classical Therapies</a></li>
              <li><a href="#accommodation" className="hover:text-white transition-colors">Villas & Suites</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">Resident Physicians</a></li>
            </ul>
          </div>

          {/* Directory Links 2 */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-[11px] uppercase tracking-widest text-[#8A9B7A] font-semibold block">
              Experiences
            </span>
            <ul className="space-y-2 text-[#DCE3D6]">
              <li><a href="#experiences" className="hover:text-white transition-colors">Daily Sanctuary Rhythm</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Photo Gallery</a></li>
              <li><a href="#journal" className="hover:text-white transition-colors">Wellness Journal</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Doctor Consultation</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Location & Directions</a></li>
            </ul>
          </div>

          {/* Newsletter / Botanical dispatch */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-[11px] uppercase tracking-widest text-[#8A9B7A] font-semibold block">
              The Sanctuary Journal Dispatch
            </span>
            <p className="text-[#C2CCB8] leading-relaxed">
              Receive monthly seasonal Ayurvedic cleansing recipes, medicinal plant insights, and seasonal retreat announcements.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-xs text-[#F8F6EF] placeholder:text-[#C2CCB8]/60 focus:outline-none focus:border-[#8A9B7A]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#8A9B7A] hover:bg-[#A5B398] text-[#183D32] font-semibold rounded-lg text-xs transition-colors cursor-pointer"
                >
                  Subscribe
                </button>
              </div>
              {newsletterSuccess && (
                <p className="text-xs text-[#8A9B7A] flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  <span>Subscribed. Welcome to the Sanctuary Dispatch.</span>
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 border-t border-[#8A9B7A]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A9B7A]">
          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} {brandConfig.fullName}. All rights reserved.</span>
            <span aria-hidden="true">·</span>
            <span>Licensed Naturopathy & AYUSH Center</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
