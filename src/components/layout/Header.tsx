import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Volume2, VolumeX, ArrowRight, Sparkles } from 'lucide-react';
import { brandConfig } from '../../data/brandConfig';
import { natureAudio } from '../../lib/natureAudio';
import { treatmentCategories } from '../../data/treatments';
import { wellnessPackages } from '../../data/programs';

interface HeaderProps {
  onOpenBooking: (programId?: string, accommodationId?: string) => void;
  activeSection?: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [treatmentsDropdownOpen, setTreatmentsDropdownOpen] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body scroll lock on mobile menu open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const toggleAmbiance = () => {
    const playing = natureAudio.toggle();
    setIsPlayingAudio(playing);
  };

  const navLinks = [
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Journey', href: '#journey' },
    { label: 'Treatments', href: '#treatments', hasDropdown: 'treatments' },
    { label: 'Programs', href: '#programs', hasDropdown: 'programs' },
    { label: 'Accommodation', href: '#accommodation' },
    { label: 'Experiences', href: '#experiences' },
    { label: 'Specialists', href: '#team' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Journal', href: '#journal' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F8F6EF]/95 backdrop-blur-md shadow-sm border-b border-[#E8E0D2] py-3'
            : 'bg-gradient-to-b from-black/60 via-black/20 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
          {/* Zone 1: Wordmark Logo */}
          <a
            href="#"
            className={`font-serif-display text-2xl tracking-wide whitespace-nowrap shrink-0 transition-colors ${
              isScrolled ? 'text-[#183D32]' : 'text-white'
            }`}
          >
            Vana Veda
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-medium uppercase tracking-wider">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => {
                  if (link.hasDropdown === 'programs') setProgramsDropdownOpen(true);
                  if (link.hasDropdown === 'treatments') setTreatmentsDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  if (link.hasDropdown === 'programs') setProgramsDropdownOpen(false);
                  if (link.hasDropdown === 'treatments') setTreatmentsDropdownOpen(false);
                }}
              >
                <a
                  href={link.href}
                  className={`inline-flex items-center gap-1 py-1 transition-colors whitespace-nowrap ${
                    isScrolled
                      ? 'text-[#282B27] hover:text-[#183D32]'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.hasDropdown && <ChevronDown className="w-3 h-3 opacity-70" />}
                </a>

                {/* Programs Dropdown */}
                {link.hasDropdown === 'programs' && (
                  <AnimatePresence>
                    {programsDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-[#E8E0D2] p-3 space-y-1.5"
                      >
                        <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#8A9B7A] border-b border-[#E8E0D2]">
                          Featured Retreat Programs
                        </div>
                        {wellnessPackages.map((pkg) => (
                          <a
                            key={pkg.id}
                            href="#programs"
                            onClick={() => setProgramsDropdownOpen(false)}
                            className="block px-3 py-2 rounded-lg text-xs normal-case hover:bg-[#F8F6EF] text-[#282B27] hover:text-[#183D32] transition-colors"
                          >
                            <p className="font-semibold">{pkg.title}</p>
                            <p className="text-[11px] text-[#76634F] line-clamp-1">{pkg.shortDescription}</p>
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}

                {/* Treatments Dropdown */}
                {link.hasDropdown === 'treatments' && (
                  <AnimatePresence>
                    {treatmentsDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-[#E8E0D2] p-3 space-y-1"
                      >
                        <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#8A9B7A] border-b border-[#E8E0D2]">
                          Therapy Disciplines
                        </div>
                        {treatmentCategories.filter((c) => c !== 'All Treatments').map((cat) => (
                          <a
                            key={cat}
                            href="#treatments"
                            onClick={() => setTreatmentsDropdownOpen(false)}
                            className="block px-3 py-2 rounded-lg text-xs normal-case hover:bg-[#F8F6EF] text-[#282B27] hover:text-[#183D32] transition-colors font-medium"
                          >
                            {cat}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Zone 3: Audio Ambiance Toggle & CTA */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Nature Audio Ambiance Toggle */}
            <button
              onClick={toggleAmbiance}
              title={isPlayingAudio ? 'Mute Sanctuary Ambiance' : 'Play Forest Brook & Chime Ambiance'}
              className={`p-2 rounded-full border transition-all cursor-pointer flex items-center gap-1.5 text-xs ${
                isScrolled
                  ? isPlayingAudio
                    ? 'bg-[#183D32] text-white border-[#183D32]'
                    : 'bg-white/80 text-[#183D32] border-[#E8E0D2] hover:bg-white'
                  : isPlayingAudio
                  ? 'bg-white text-[#183D32] border-white'
                  : 'bg-black/30 text-white border-white/30 hover:bg-black/50'
              }`}
              aria-label="Toggle Forest Ambiance Sound"
            >
              {isPlayingAudio ? (
                <>
                  <Volume2 className="w-4 h-4 animate-pulse" />
                  <span className="hidden sm:inline text-[11px] font-medium pr-1">Nature Audio On</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4" />
                  <span className="hidden sm:inline text-[11px] pr-1">Forest Audio</span>
                </>
              )}
            </button>

            {/* Primary CTA */}
            <button
              type="button"
              onClick={() => onOpenBooking()}
              className={`px-4 py-2 text-xs font-medium uppercase tracking-wider rounded-lg transition-all duration-200 cursor-pointer shadow-sm ${
                isScrolled
                  ? 'bg-[#183D32] hover:bg-[#0F2821] text-white'
                  : 'bg-[#F8F6EF] hover:bg-white text-[#183D32]'
              }`}
            >
              {brandConfig.ctas.primary}
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 lg:hidden rounded-lg transition-colors cursor-pointer ${
                isScrolled ? 'text-[#183D32] hover:bg-[#E8E0D2]/40' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-[#0F2821]/80 backdrop-blur-sm"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 bottom-0 w-5/6 max-w-sm bg-[#F8F6EF] p-6 shadow-2xl flex flex-col justify-between overflow-y-auto"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-[#E8E0D2] pb-4">
                  <span className="font-serif-display text-xl text-[#183D32]">Vana Veda</span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 text-[#183D32] hover:bg-[#E8E0D2]/40 rounded-lg cursor-pointer"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="space-y-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2.5 rounded-lg text-sm font-medium text-[#282B27] hover:text-[#183D32] hover:bg-[#E8E0D2]/40 transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Mobile Drawer Bottom */}
              <div className="pt-6 border-t border-[#E8E0D2] space-y-3">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3 px-4 bg-[#183D32] hover:bg-[#0F2821] text-white text-xs font-semibold uppercase tracking-wider rounded-lg text-center transition-colors shadow-sm"
                >
                  {brandConfig.ctas.primary}
                </button>
                <div className="text-center text-xs text-[#76634F]">
                  <p>Admissions Desk:</p>
                  <a href={`tel:${brandConfig.contact.phone}`} className="font-semibold text-[#183D32]">
                    {brandConfig.contact.phoneDisplay}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
