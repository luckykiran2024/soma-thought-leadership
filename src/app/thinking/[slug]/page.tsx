import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowLeft, ArrowRight, Sparkles, Compass, CheckCircle2, AlertTriangle, Layers } from 'lucide-react';
import { FRAMEWORKS, ARTICLES } from '@/lib/content';
import FourRDiagram from '@/components/frameworks/FourRDiagram';
import StepFrameworkDiagram from '@/components/frameworks/StepFrameworkDiagram';
import SocialShare from '@/components/writing/SocialShare';
import JsonLd from '@/components/seo/JsonLd';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return FRAMEWORKS.map((fw) => ({
    slug: fw.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const framework = FRAMEWORKS.find((f) => f.slug === params.slug);
  if (!framework) return { title: 'Framework Not Found' };

  return {
    title: `${framework.title} · Decision Intelligence`,
    description: framework.proposition,
    openGraph: {
      title: framework.title,
      description: framework.proposition,
      type: 'article',
    },
  };
}

export default function FrameworkDetailPage({ params }: PageProps) {
  const framework = FRAMEWORKS.find((f) => f.slug === params.slug);
  if (!framework) {
    notFound();
  }

  const relatedFrameworks = FRAMEWORKS.filter((f) =>
    framework.relatedSlugs.includes(f.slug)
  );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      <JsonLd
        type="Article"
        data={{
          headline: framework.title,
          description: framework.proposition,
          articleSection: framework.category,
        }}
      />

      {/* Top back navigation */}
      <div className="flex items-center justify-between pb-6 border-b border-editorial-rule">
        <Link
          href="/thinking"
          className="inline-flex items-center text-xs font-semibold text-ink-muted hover:text-ink transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
          <span>Back to all frameworks</span>
        </Link>
        <SocialShare title={framework.title} />
      </div>

      {/* Header */}
      <header className="space-y-4">
        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-accent font-semibold">
          <Compass className="w-3.5 h-3.5" />
          <span>{framework.category}</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl text-ink font-normal leading-tight">
          {framework.title}
        </h1>

        <p className="text-base sm:text-lg font-serif italic text-ink-muted">
          {framework.tagline}
        </p>

        {/* Proposition Callout */}
        <div className="p-6 sm:p-8 bg-editorial-cream/70 border-l-4 border-ink rounded-r-lg my-6">
          <span className="text-[11px] font-mono uppercase tracking-wider text-ink-muted block mb-2 font-semibold">
            Core Proposition
          </span>
          <p className="font-serif text-lg sm:text-xl text-ink leading-relaxed font-normal">
            "{framework.proposition}"
          </p>
        </div>
      </header>

      {/* Embedded Interactive Visual System if relevant */}
      {framework.diagramType === 'four-r' && (
        <div className="my-8">
          <FourRDiagram />
        </div>
      )}

      {framework.diagramType === 'step' && (
        <div className="my-8">
          <StepFrameworkDiagram />
        </div>
      )}

      {/* Detailed Analysis / Explanation */}
      <section className="prose prose-slate max-w-none prose-headings:font-serif prose-headings:font-normal prose-h2:text-2xl prose-h3:text-xl prose-p:text-ink-light prose-p:leading-relaxed text-base">
        <h2 className="text-2xl font-serif text-ink mt-8 mb-4 border-b border-editorial-rule pb-2">
          Theoretical Foundation & Operational Mechanics
        </h2>
        <div className="space-y-4 whitespace-pre-line leading-relaxed text-ink-light font-sans font-light">
          {framework.explanation}
        </div>
      </section>

      {/* Practical Corporate Case Study */}
      <section className="bg-white border border-editorial-border rounded-xl p-6 sm:p-8 space-y-6 shadow-card">
        <div className="border-b border-editorial-rule pb-4">
          <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
            Applied Scenario
          </span>
          <h3 className="font-serif text-2xl text-ink font-normal mt-1">
            Real-World Corporate Application
          </h3>
        </div>

        <div className="space-y-4 text-xs sm:text-sm">
          <div>
            <strong className="text-ink block mb-1">Context & Challenge:</strong>
            <p className="text-ink-light bg-surface p-3 rounded border border-editorial-border">
              {framework.practicalExample.context}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <span className="text-rose-700 font-semibold block flex items-center">
                <AlertTriangle className="w-3.5 h-3.5 mr-1" />
                Conventional Approach
              </span>
              <p className="text-ink-light bg-rose-50/50 p-3 rounded border border-rose-100 leading-relaxed">
                {framework.practicalExample.conventionalApproach}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-accent font-semibold block flex items-center">
                <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                Decision Intelligence Approach
              </span>
              <p className="text-ink-light bg-blue-50/50 p-3 rounded border border-blue-100 leading-relaxed">
                {framework.practicalExample.decisionIntelligenceApproach}
              </p>
            </div>
          </div>

          <div className="pt-2">
            <strong className="text-ink block mb-1">Resulting Organizational Outcome:</strong>
            <p className="text-ink font-medium bg-emerald-50/40 p-3 rounded border border-emerald-100">
              {framework.practicalExample.outcome}
            </p>
          </div>
        </div>
      </section>

      {/* Relationship to SigmaGo */}
      <section className="bg-navy-950 text-white rounded-xl p-6 sm:p-8 space-y-4 border border-navy-800">
        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-blue-400">
          <Sparkles className="w-4 h-4" />
          <span>SigmaGo Product Architecture</span>
        </div>
        <h3 className="font-serif text-2xl text-white font-normal">
          How SigmaGo Implements This Concept
        </h3>
        <p className="text-sm text-slate-300 leading-relaxed font-light">
          {framework.relationshipToSigmaGo}
        </p>
        <div className="pt-2 flex items-center space-x-4">
          <Link
            href="/sigmago"
            className="inline-flex items-center text-xs font-semibold text-blue-300 hover:text-white transition-colors"
          >
            <span>Explore SigmaGo Decision Platform</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </Link>
        </div>
      </section>

      {/* Related Frameworks */}
      {relatedFrameworks.length > 0 && (
        <section className="pt-8 border-t border-editorial-rule space-y-6">
          <h3 className="font-serif text-xl text-ink font-normal">
            Related Intellectual Frameworks
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedFrameworks.map((rf) => (
              <Link
                key={rf.slug}
                href={`/thinking/${rf.slug}`}
                className="p-4 rounded-lg border border-editorial-border bg-white hover:bg-surface transition-all group"
              >
                <span className="text-[11px] font-mono text-accent uppercase tracking-wider block mb-1">
                  {rf.category}
                </span>
                <span className="font-serif text-lg text-ink font-medium group-hover:text-accent transition-colors block">
                  {rf.shortTitle}
                </span>
                <p className="text-xs text-ink-muted line-clamp-2 mt-1">
                  {rf.tagline}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <div className="pt-10 flex items-center justify-between border-t border-editorial-rule">
        <Link
          href="/thinking"
          className="inline-flex items-center text-xs font-semibold text-ink-muted hover:text-ink"
        >
          <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
          <span>All Frameworks</span>
        </Link>
        <Link
          href="/book-a-conversation?type=research"
          className="inline-flex items-center px-4 py-2 rounded-full bg-navy-950 text-white text-xs font-semibold hover:bg-navy-900 shadow-sm"
        >
          <span>Discuss this Framework</span>
          <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
        </Link>
      </div>
    </div>
  );
}
