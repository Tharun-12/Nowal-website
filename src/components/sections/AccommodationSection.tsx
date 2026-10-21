import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Bed, Users, Maximize, ArrowRight, Check } from 'lucide-react';
import { accommodationsData, retreatFacilities, AccommodationRoom } from '../../data/accommodations';
import { ImageWithFallback } from '../ui/ImageWithFallback';

interface AccommodationSectionProps {
  onSelectAccommodation: (accommodationId: string) => void;
  onOpenLightboxWithImage: (imageUrl: string, title: string) => void;
}

export const AccommodationSection: React.FC<AccommodationSectionProps> = ({
  onSelectAccommodation,
  onOpenLightboxWithImage,
}) => {
  const [activeTab, setActiveTab] = useState<'rooms' | 'facilities'>('rooms');

  return (
    <section id="accommodation" className="py-24 sm:py-32 bg-[#F8F6EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-widest text-[#8A9B7A] font-semibold">
              Restful Biophilic Living
            </span>
            <h2 className="font-serif-display text-3xl sm:text-5xl text-[#183D32] mt-2 leading-tight [text-wrap:balance]">
              Sanctuary Suites & Villas
            </h2>
            <p className="mt-4 text-sm text-[#76634F] leading-relaxed">
              Constructed with sustainable reclaimed teak, natural stone, and clay tiles. Every room is designed for uninterrupted circadian deep sleep and biophilic serenity.
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex p-1 bg-[#E8E0D2]/50 rounded-xl border border-[#E8E0D2] self-start md:self-auto">
            <button
              type="button"
              onClick={() => setActiveTab('rooms')}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors cursor-pointer ${
                activeTab === 'rooms'
                  ? 'bg-[#183D32] text-white shadow-xs'
                  : 'text-[#282B27] hover:text-[#183D32]'
              }`}
            >
              Guest Villas & Suites
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('facilities')}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors cursor-pointer ${
                activeTab === 'facilities'
                  ? 'bg-[#183D32] text-white shadow-xs'
                  : 'text-[#282B27] hover:text-[#183D32]'
              }`}
            >
              Retreat Facilities
            </button>
          </div>
        </div>

        {/* Rooms Display */}
        {activeTab === 'rooms' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {accommodationsData.map((room) => (
              <div
                key={room.id}
                className="group bg-white rounded-2xl overflow-hidden border border-[#E8E0D2] hover:border-[#8A9B7A] transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  {/* Image container */}
                  <div
                    onClick={() => onOpenLightboxWithImage(room.image, room.name)}
                    className="relative aspect-[16/10] overflow-hidden cursor-pointer"
                    title="Click to view full photo"
                  >
                    <ImageWithFallback
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#F8F6EF]/90 backdrop-blur-xs text-[#183D32] text-xs font-semibold px-2.5 py-1 rounded-md">
                      {room.category}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/40 text-white text-[11px] px-2.5 py-1 rounded backdrop-blur-xs font-mono">
                      {room.areaSqFt} sq ft
                    </div>
                  </div>

                  {/* Room Details */}
                  <div className="p-6">
                    <h3 className="font-serif-display text-2xl text-[#183D32] group-hover:text-[#245244] transition-colors">
                      {room.name}
                    </h3>
                    <p className="text-xs text-[#8A9B7A] font-medium mt-1">
                      {room.view}
                    </p>
                    <p className="mt-3 text-xs sm:text-sm text-[#76634F] leading-relaxed">
                      {room.shortDescription}
                    </p>

                    {/* Features list */}
                    <div className="mt-4 pt-4 border-t border-[#E8E0D2]">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#282B27]">
                        {room.features.slice(0, 4).map((feat, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-[#183D32] shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="px-6 pb-6 pt-2 border-t border-[#E8E0D2]/50 flex items-center justify-between">
                  <span className="text-xs text-[#76634F]">
                    {room.bedType}
                  </span>
                  <button
                    type="button"
                    onClick={() => onSelectAccommodation(room.id)}
                    className="py-2 px-4 bg-[#183D32] hover:bg-[#0F2821] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Reserve Villa</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Facilities Display */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {retreatFacilities.map((fac) => (
              <div
                key={fac.id}
                onClick={() => onOpenLightboxWithImage(fac.image, fac.name)}
                className="group bg-white rounded-xl overflow-hidden border border-[#E8E0D2] hover:border-[#8A9B7A] transition-all cursor-pointer shadow-xs hover:shadow-md"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={fac.image}
                    alt={fac.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-black/50 text-white text-[10px] uppercase font-semibold px-2 py-0.5 rounded backdrop-blur-xs">
                    {fac.category}
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-serif-display text-lg text-[#183D32]">
                    {fac.name}
                  </h4>
                  <p className="text-xs text-[#76634F] mt-1.5 leading-relaxed line-clamp-3">
                    {fac.shortDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
