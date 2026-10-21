import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Clock, ArrowRight } from 'lucide-react';
import { articlesData, Article } from '../../data/journal';
import { ImageWithFallback } from '../ui/ImageWithFallback';
import { ArticleModal } from '../ui/ArticleModal';

export const JournalSection: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  return (
    <section id="journal" className="py-24 sm:py-32 bg-[#F8F6EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-widest text-[#8A9B7A] font-semibold">
              The Healing Pen
            </span>
            <h2 className="font-serif-display text-3xl sm:text-5xl text-[#183D32] mt-2 leading-tight [text-wrap:balance]">
              Wellness Journal & Insights
            </h2>
            <p className="mt-4 text-sm text-[#76634F] leading-relaxed">
              Essays on Ayurvedic biological science, seasonal cleanses, food as medicine, and neurobiological forest immersion written by our medical team.
            </p>
          </div>
        </div>

        {/* Editorial Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articlesData.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden border border-[#E8E0D2] hover:border-[#8A9B7A] transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#F8F6EF]/90 backdrop-blur-xs text-[#183D32] text-[11px] font-semibold px-2.5 py-1 rounded-md">
                    {article.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-[11px] text-[#76634F] mb-2 font-mono">
                    <span>{article.publishDate}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-serif-display text-xl text-[#183D32] group-hover:text-[#245244] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-[#76634F] line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-[#E8E0D2]/50 flex items-center justify-between">
                <span className="text-xs text-[#76634F]">
                  By {article.author.name}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveArticle(article)}
                  className="text-xs uppercase tracking-wider font-semibold text-[#183D32] group-hover:text-[#8A9B7A] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      <ArticleModal
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
      />
    </section>
  );
};
