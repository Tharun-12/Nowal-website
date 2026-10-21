import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Maximize2 } from 'lucide-react';
import { galleryItems, galleryCategories, GalleryItem } from '../../data/gallery';
import { ImageWithFallback } from '../ui/ImageWithFallback';

interface GallerySectionProps {
  onOpenLightbox: (items: GalleryItem[], index: number) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenLightbox }) => {
  const [selectedCat, setSelectedCat] = useState<string>('All');

  const filteredItems =
    selectedCat === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCat);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#F8F6EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-widest text-[#8A9B7A] font-semibold">
              Visual Sanctuary
            </span>
            <h2 className="font-serif-display text-3xl sm:text-5xl text-[#183D32] mt-2 leading-tight [text-wrap:balance]">
              Life & Landscapes of Vana Veda
            </h2>
            <p className="mt-4 text-sm text-[#76634F] leading-relaxed">
              Explore the architectural spaces, organic edible gardens, traditional therapy chambers, and tranquil water pavilions across our 35-acre sanctuary.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1.5 bg-[#E8E0D2]/50 rounded-xl border border-[#E8E0D2] self-start md:self-auto">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCat(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCat === cat
                    ? 'bg-[#183D32] text-white shadow-xs'
                    : 'text-[#282B27] hover:text-[#183D32] hover:bg-white/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={() => onOpenLightbox(filteredItems, idx)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-xs hover:shadow-lg border border-[#E8E0D2]"
            >
              <ImageWithFallback
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute top-3 right-3 p-2 bg-black/40 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] uppercase font-semibold text-[#8A9B7A] tracking-wider">
                  {item.category}
                </span>
                <h3 className="font-serif-display text-lg text-[#F8F6EF]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#E8E0D2]/80 line-clamp-1 mt-0.5">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
