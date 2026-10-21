import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GalleryItem } from '../../data/gallery';
import { ImageWithFallback } from './ImageWithFallback';

interface GalleryLightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < items.length;
  const currentItem = isOpen ? items[currentIndex] : null;

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + items.length) % items.length);
      } else if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % items.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, currentIndex, items.length, onClose, onNavigate]);

  if (!isOpen || !currentItem) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F2821]/95 backdrop-blur-md select-none">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors cursor-pointer"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Previous Button */}
        <button
          onClick={() => onNavigate((currentIndex - 1 + items.length) % items.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors cursor-pointer"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={() => onNavigate((currentIndex + 1) % items.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors cursor-pointer"
          aria-label="Next Image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Main Image Stage */}
        <motion.div
          key={currentItem.id}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.2 }}
          className="relative max-w-5xl max-h-[85vh] w-full mx-4 sm:mx-12 flex flex-col items-center"
        >
          <div className="relative max-h-[72vh] w-auto overflow-hidden rounded-lg shadow-2xl">
            <ImageWithFallback
              src={currentItem.image}
              alt={currentItem.title}
              className="max-h-[72vh] w-auto object-contain mx-auto"
            />
          </div>

          {/* Caption bar */}
          <div className="mt-4 text-center text-white max-w-2xl px-4">
            <div className="flex items-center justify-center gap-3 text-xs text-[#8A9B7A] mb-1">
              <span>{currentItem.category}</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono">{currentIndex + 1} of {items.length}</span>
            </div>
            <h3 className="font-serif-display text-lg sm:text-xl text-[#F8F6EF]">
              {currentItem.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#E8E0D2]/80 mt-1">
              {currentItem.caption}
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
