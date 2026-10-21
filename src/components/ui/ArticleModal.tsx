import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Clock, Calendar, Share2, Bookmark } from 'lucide-react';
import { Article } from '../../data/journal';
import { ImageWithFallback } from './ImageWithFallback';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  useEffect(() => {
    if (article) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [article, onClose]);

  if (!article) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0F2821]/80 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl bg-[#F8F6EF] rounded-2xl shadow-2xl border border-[#8A9B7A]/30 overflow-hidden my-8 z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="bg-[#183D32] text-white px-6 py-4 flex items-center justify-between shrink-0">
            <span className="text-xs uppercase tracking-widest text-[#8A9B7A]">
              Vana Veda Wellness Journal
            </span>
            <button
              onClick={onClose}
              className="p-1.5 text-[#E8E0D2] hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable content */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-6">
            {/* Meta */}
            <div className="flex items-center gap-2 text-xs text-[#76634F]">
              <span className="text-[#183D32] font-semibold">{article.category}</span>
              <span aria-hidden="true">·</span>
              <span>{article.publishDate}</span>
              <span aria-hidden="true">·</span>
              <span>{article.readTime}</span>
            </div>

            <h1 className="font-serif-display text-2xl sm:text-4xl text-[#183D32] leading-tight">
              {article.title}
            </h1>

            {/* Author */}
            <div className="flex items-center gap-3 py-3 border-y border-[#E8E0D2]">
              <div>
                <p className="text-xs sm:text-sm font-semibold text-[#183D32]">{article.author.name}</p>
                <p className="text-xs text-[#76634F]">{article.author.role}</p>
              </div>
            </div>

            {/* Featured Image */}
            <div className="h-64 sm:h-80 w-full rounded-xl overflow-hidden shadow-sm">
              <ImageWithFallback
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Prose */}
            <div className="space-y-4 text-sm sm:text-base text-[#282B27] leading-relaxed font-sans">
              {article.content.map((p, idx) => (
                <p key={idx} className={idx === 0 ? 'text-base sm:text-lg text-[#183D32] font-normal leading-relaxed' : ''}>
                  {p}
                </p>
              ))}
            </div>

            {/* Footer Notice */}
            <div className="bg-[#E8E0D2]/40 rounded-xl p-5 border border-[#E8E0D2] text-xs text-[#76634F] leading-relaxed">
              <p className="font-semibold text-[#183D32] mb-1">About Vana Veda Insights</p>
              <p>
                Our journal essays are written by resident Ayurvedic physicians and naturopaths grounded in authentic classical texts and peer-reviewed integrative health research. For personalized guidance, consult our medical team during your stay.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
