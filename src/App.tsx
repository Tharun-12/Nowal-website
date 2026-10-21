import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { BrandStory } from './components/sections/BrandStory';
import { WellnessJourneySection } from './components/sections/WellnessJourneySection';
import { TreatmentSection } from './components/sections/TreatmentSection';
import { ProgramsSection } from './components/sections/ProgramsSection';
import { AccommodationSection } from './components/sections/AccommodationSection';
import { ExperiencesSection } from './components/sections/ExperiencesSection';
import { TeamSection } from './components/sections/TeamSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { GallerySection } from './components/sections/GallerySection';
import { SeasonalOfferSection } from './components/sections/SeasonalOfferSection';
import { JournalSection } from './components/sections/JournalSection';
import { BookingSection } from './components/sections/BookingSection';
import { BookingModal } from './components/ui/BookingModal';
import { GalleryLightbox } from './components/ui/GalleryLightbox';
import { Treatment } from './data/treatments';
import { GalleryItem, galleryItems } from './data/gallery';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedProgramId, setSelectedProgramId] = useState<string | undefined>(undefined);
  const [selectedAccommodationId, setSelectedAccommodationId] = useState<string | undefined>(undefined);

  // Lightbox state
  const [lightboxItems, setLightboxItems] = useState<GalleryItem[]>(galleryItems);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleOpenBooking = (programId?: string, accommodationId?: string) => {
    setSelectedProgramId(programId);
    setSelectedAccommodationId(accommodationId);
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
  };

  const handleOpenBookingWithTreatment = (treatment: Treatment) => {
    // Open booking modal
    setSelectedProgramId(undefined);
    setIsBookingModalOpen(true);
  };

  const handleSelectProgram = (programId: string) => {
    handleOpenBooking(programId, undefined);
  };

  const handleSelectAccommodation = (accommodationId: string) => {
    handleOpenBooking(undefined, accommodationId);
  };

  const handleOpenLightbox = (items: GalleryItem[], index: number) => {
    setLightboxItems(items);
    setLightboxIndex(index);
  };

  const handleOpenLightboxWithImage = (imageUrl: string, title: string) => {
    const matchedIdx = galleryItems.findIndex((g) => g.image === imageUrl || g.title === title);
    if (matchedIdx !== -1) {
      setLightboxItems(galleryItems);
      setLightboxIndex(matchedIdx);
    } else {
      // Create temporary item
      const tempItem: GalleryItem = {
        id: 'temp-' + Date.now(),
        title,
        category: 'Campus & Architecture',
        caption: title,
        image: imageUrl,
      };
      setLightboxItems([tempItem]);
      setLightboxIndex(0);
    }
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handleNavigateLightbox = (newIndex: number) => {
    setLightboxIndex(newIndex);
  };

  return (
    <div className="min-h-screen bg-[#F8F6EF] text-[#282B27] flex flex-col selection:bg-[#8A9B7A]/30 selection:text-[#183D32]">
      {/* Navigation Header */}
      <Header onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Cinematic Hero */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. Introductory Brand Story & Natural Elements */}
        <BrandStory />

        {/* 3. 6-Step Wellness Journey Protocol */}
        <WellnessJourneySection onOpenBooking={() => handleOpenBooking()} />

        {/* 4. Classical Therapies & Treatments */}
        <TreatmentSection onOpenBookingWithTreatment={handleOpenBookingWithTreatment} />

        {/* 5. Configurable Wellness Packages */}
        <ProgramsSection onSelectProgram={handleSelectProgram} />

        {/* 6. Biophilic Accommodations & Facilities */}
        <AccommodationSection
          onSelectAccommodation={handleSelectAccommodation}
          onOpenLightboxWithImage={handleOpenLightboxWithImage}
        />

        {/* 7. Interactive Experiences: Day in the Life Rhythm */}
        <ExperiencesSection />

        {/* 8. Healing Team & Licensed Specialists */}
        <TeamSection onOpenBooking={() => handleOpenBooking()} />

        {/* 9. Verified Guest Testimonials & Stories */}
        <TestimonialsSection />

        {/* 10. Property Gallery & Visual Media */}
        <GallerySection onOpenLightbox={handleOpenLightbox} />

        {/* 11. Seasonal Karkidaka Monsoon Retreat Offer */}
        <SeasonalOfferSection onOpenBooking={() => handleOpenBooking()} />

        {/* 12. Wellness Journal & Editorial Insights */}
        <JournalSection />

        {/* 13. Prominent On-Page Booking & Consultation Section */}
        <BookingSection />
      </main>

      {/* 14. Luxury Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Global Interactive Modals */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBooking}
        initialProgramId={selectedProgramId}
        initialAccommodationId={selectedAccommodationId}
      />

      <GalleryLightbox
        items={lightboxItems}
        currentIndex={lightboxIndex}
        onClose={handleCloseLightbox}
        onNavigate={handleNavigateLightbox}
      />
    </div>
  );
}
