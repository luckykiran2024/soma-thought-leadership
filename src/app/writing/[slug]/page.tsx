import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { ArrowLeft, ArrowRight, Clock, Calendar, Bookmark, User, Share2 } from 'lucide-react';
import { ARTICLES } from '@/lib/content';
import { formatDate } from '@/lib/utils';
import ReadingProgress from '@/components/writing/ReadingProgress';
import SocialShare from '@/components/writing/SocialShare';
import JsonLd from '@/components/seo/JsonLd';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = ARTICLES.find((a) => a.slug === params.slug);
  if (!article) return { title: 'Article Not Found' };

  return {
    title: `${article.title} · Soma Kiran Gonella`,
    description: article.abstract,
    openGraph: {
      title: article.title,
      description: article.abstract,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author.name],
      tags: article.tags,
    },
  };
}

export default function ArticleDetailPage({ params }: PageProps) {
  const currentIndex = ARTICLES.findIndex((a) => a.slug === params.slug);
  if (currentIndex === -1) {
    notFound();
  }

  const article = ARTICLES[currentIndex];
  const prevArticle = currentIndex > 0 ? ARTICLES[currentIndex - 1] : null;
  const nextArticle = currentIndex < ARTICLES.length - 1 ? ARTICLES[currentIndex + 1] : null;

  const relatedArticles = ARTICLES.filter(
    (a) => a.slug !== article.slug && a.category === article.category
  ).slice(0, 2);

  return (
    <div className="relative">
      <ReadingProgress />

      <JsonLd
        type="Article"
        data={{
          headline: article.title,
          description: article.abstract,
          datePublished: article.date,
          articleSection: article.category,
          keywords: article.tags.join(', '),
        }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
        {/* Back navigation & Share */}
        <div className="flex items-center justify-between pb-6 border-b border-editorial-rule">
          <Link
            href="/writing"
            className="inline-flex items-center text-xs font-semibold text-ink-muted hover:text-ink transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
            <span>Back to Writing</span>
          </Link>
          <SocialShare title={article.title} />
        </div>

        {/* Header */}
        <header className="space-y-4">
          <div className="flex items-center space-x-3 text-xs font-mono text-ink-muted">
            <span className="px-2.5 py-1 rounded bg-surface border border-editorial-border text-ink font-semibold">
              {article.category}
            </span>
            <span>·</span>
            <span>{formatDate(article.date)}</span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl text-ink font-normal leading-tight tracking-tight">
            {article.title}
          </h1>

          {article.subtitle && (
            <p className="font-serif text-lg sm:text-xl italic text-ink-light font-normal">
              {article.subtitle}
            </p>
          )}

          {/* Author Card Minimal */}
          <div className="pt-4 flex items-center space-x-3 border-t border-editorial-rule">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-editorial-border flex-shrink-0">
              <Image
                src="/images/profile.jpg"
                alt="Soma Kiran Gonella"
                fill
                className="object-cover object-top"
              />
            </div>
            <div>
              <span className="text-xs font-semibold text-ink block">
                {article.author.name}
              </span>
              <span className="text-[11px] text-ink-muted block">
                {article.author.role}
              </span>
            </div>
          </div>
        </header>

        {/* Abstract callout */}
        <div className="p-6 bg-editorial-cream/70 border-l-2 border-ink rounded-r-lg font-serif italic text-base sm:text-lg text-ink-light leading-relaxed">
          "{article.abstract}"
        </div>

        {/* Article Body */}
        <article className="prose prose-slate prose-lg max-w-none prose-headings:font-serif prose-headings:font-normal prose-h2:text-2xl prose-h3:text-xl prose-p:text-ink-light prose-p:leading-relaxed prose-p:text-base sm:prose-p:text-lg prose-p:font-light font-sans">
          <div
            className="space-y-6 text-ink-light"
            dangerouslySetInnerHTML={{
              __html: article.content
                .replace(/### (.*)/g, '<h3 class="font-serif text-2xl text-ink font-normal mt-8 mb-3">$1</h3>')
                .replace(/\n\n/g, '<p class="text-base sm:text-lg leading-relaxed text-ink-light my-4 font-light"></p>')
            }}
          />
        </article>

        {/* Tags */}
        <div className="pt-6 border-t border-editorial-rule flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-ink-muted mr-1">Tags:</span>
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-3 py-1 rounded-full bg-surface border border-editorial-border text-ink-light"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Social Share bottom */}
        <div className="py-6 border-y border-editorial-rule flex items-center justify-between">
          <span className="text-xs font-serif italic text-ink-muted">
            Found this perspective valuable?
          </span>
          <SocialShare title={article.title} />
        </div>

        {/* Author Bio Section */}
        <div className="p-6 sm:p-8 bg-white border border-editorial-border rounded-xl flex flex-col sm:flex-row items-center sm:items-start gap-6 shadow-card">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border border-editorial-border flex-shrink-0">
            <Image
              src="/images/profile.jpg"
              alt="Soma Kiran Gonella"
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="font-serif text-xl text-ink font-normal">
              About Soma Kiran Gonella
            </h3>
            <p className="text-xs sm:text-sm text-ink-light leading-relaxed font-light">
              HR Business Partner with 11+ years of experience across fintech and automotive R&D environments. Author of <em>The Other Book</em> and builder of <em>SigmaGo</em>, exploring how organizations can turn decisions into institutional intelligence.
            </p>
            <div className="pt-2 flex items-center justify-center sm:justify-start space-x-4">
              <Link
                href="/about"
                className="text-xs font-semibold text-accent hover:text-navy-900 transition-colors"
              >
                Read full bio →
              </Link>
              <Link
                href="/book-a-conversation"
                className="text-xs font-semibold text-ink-muted hover:text-ink transition-colors"
              >
                Schedule a conversation
              </Link>
            </div>
          </div>
        </div>

        {/* Prev / Next Pagination */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
          {prevArticle ? (
            <Link
              href={`/writing/${prevArticle.slug}`}
              className="p-4 rounded-lg border border-editorial-border bg-white hover:bg-surface transition-all group"
            >
              <span className="text-[11px] font-mono text-ink-muted uppercase block mb-1">
                ← Previous Article
              </span>
              <span className="font-serif text-sm text-ink font-medium group-hover:text-accent transition-colors line-clamp-2">
                {prevArticle.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {nextArticle ? (
            <Link
              href={`/writing/${nextArticle.slug}`}
              className="p-4 rounded-lg border border-editorial-border bg-white hover:bg-surface transition-all group text-right"
            >
              <span className="text-[11px] font-mono text-ink-muted uppercase block mb-1">
                Next Article →
              </span>
              <span className="font-serif text-sm text-ink font-medium group-hover:text-accent transition-colors line-clamp-2">
                {nextArticle.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}
