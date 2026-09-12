'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Clock, Calendar, Sparkles, Filter } from 'lucide-react';
import { ARTICLES } from '@/lib/content';
import { formatDate } from '@/lib/utils';

const CATEGORIES = [
  'All',
  'Decision Making',
  'Organizations',
  'Leadership',
  'People',
  'Technology',
  'AI',
] as const;

export default function WritingIndexPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Derive categories that actually exist in the published collection
  const availableCategories = ['All', ...Array.from(new Set(ARTICLES.map(a => a.category)))];

  const filteredArticles = activeCategory === 'All'
    ? ARTICLES
    : ARTICLES.filter(a => a.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-accent font-semibold">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Essays & Publications</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-ink font-normal leading-tight">
          Writing
        </h1>
        <p className="text-base sm:text-lg text-ink-light leading-relaxed font-light">
          Ideas on decisions, organizations, people, systems, and institutional intelligence. Grounded in eleven years of operational practice across technology and engineering leadership.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2 border-b border-editorial-rule scrollbar-none">
        <span className="text-xs font-mono text-ink-muted uppercase mr-2 hidden sm:inline">
          Filter:
        </span>
        {availableCategories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-navy-950 text-white shadow-sm'
                  : 'bg-white text-ink-muted hover:text-ink hover:bg-surface border border-editorial-border'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Articles Stream */}
      {filteredArticles.length === 0 ? (
        <div className="py-16 text-center text-ink-muted text-sm bg-surface rounded-xl border border-editorial-border">
          No articles found under this category.
        </div>
      ) : (
        <div className="divide-y divide-editorial-border border-y border-editorial-border">
        {filteredArticles.map((article) => (
          <article
            key={article.slug}
            className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline hover:bg-surface/40 transition-colors px-3 sm:px-6 rounded-xl group"
          >
            {/* Meta */}
            <div className="md:col-span-3 space-y-2">
              <span className="inline-block px-2.5 py-1 rounded bg-surface border border-editorial-border text-[11px] font-mono text-ink">
                {article.category}
              </span>
              <div className="text-xs text-ink-muted font-mono flex items-center space-x-3">
                <span className="flex items-center">
                  <Calendar className="w-3 h-3 mr-1 text-ink-muted" />
                  {formatDate(article.date)}
                </span>
                <span>·</span>
                <span className="flex items-center">
                  <Clock className="w-3 h-3 mr-1 text-ink-muted" />
                  {article.readTime}
                </span>
              </div>
            </div>

            {/* Content Abstract */}
            <div className="md:col-span-7 space-y-2">
              <h2 className="font-serif text-2xl sm:text-3xl text-ink font-normal group-hover:text-accent transition-colors leading-snug">
                <Link href={`/writing/${article.slug}`}>
                  {article.title}
                </Link>
              </h2>
              {article.subtitle && (
                <p className="text-xs font-serif italic text-ink-muted">
                  {article.subtitle}
                </p>
              )}
              <p className="text-sm text-ink-light leading-relaxed font-light pt-1">
                {article.abstract}
              </p>

              {/* Tags */}
              <div className="pt-2 flex flex-wrap gap-1.5">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] text-ink-muted font-mono bg-editorial-cream/80 px-2 py-0.5 rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action */}
            <div className="md:col-span-2 flex justify-end">
              <Link
                href={`/writing/${article.slug}`}
                className="inline-flex items-center text-xs font-semibold text-ink group-hover:text-accent transition-colors"
              >
                <span>Read essay</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </article>
        ))}
        </div>
      )}
    </div>
  );
}
