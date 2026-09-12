import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowRight, Compass, ArrowUpRight, Sparkles, Layers } from 'lucide-react';
import { FRAMEWORKS } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Thinking & Frameworks · Organizational Decision Intelligence',
  description: 'Original ideas, operational taxonomies, and research frameworks on organizational memory, decision debt, policy drift, and decision management by Soma Kiran Gonella.',
};

export default function ThinkingIndexPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-accent font-semibold">
          <Compass className="w-3.5 h-3.5" />
          <span>Research & Intellectual Territory</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-ink font-normal leading-tight">
          Thinking & Frameworks
        </h1>
        <p className="text-base sm:text-lg text-ink-light leading-relaxed font-light">
          A codified body of work exploring how organizations make, record, retrieve, and govern decisions. Designed for practitioners, executives, and architects seeking to transform ephemeral choices into institutional memory.
        </p>
      </div>

      {/* Grid of Frameworks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {FRAMEWORKS.map((fw, index) => (
          <article
            key={fw.slug}
            className="bg-white border border-editorial-border rounded-xl p-8 hover:border-ink/40 hover:shadow-elevated transition-all flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-accent">
                  Framework 0{index + 1} · {fw.category}
                </span>
                <span className="text-[11px] font-mono text-ink-muted">
                  {fw.diagramType.toUpperCase()}
                </span>
              </div>

              <div className="space-y-2">
                <h2 className="font-serif text-2xl sm:text-3xl text-ink font-normal group-hover:text-navy-900 transition-colors">
                  <Link href={`/thinking/${fw.slug}`}>
                    {fw.title}
                  </Link>
                </h2>
                <p className="text-xs font-serif italic text-ink-muted">
                  {fw.tagline}
                </p>
              </div>

              <p className="text-sm text-ink-light leading-relaxed font-light">
                {fw.proposition}
              </p>
            </div>

            <div className="pt-6 mt-8 border-t border-editorial-rule flex items-center justify-between">
              <Link
                href={`/thinking/${fw.slug}`}
                className="inline-flex items-center text-xs font-semibold text-ink group-hover:text-accent transition-colors"
              >
                <span>Read framework analysis & diagram</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <span className="text-[11px] text-ink-muted font-sans hidden sm:inline">
                Connected to SigmaGo
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Connection to SigmaGo & The Other Book */}
      <div className="bg-navy-950 text-white rounded-2xl p-8 sm:p-12 border border-navy-800 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400">
            From Philosophy to Implementation
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
            Transforming Frameworks into Enterprise Software
          </h3>
          <p className="text-sm text-slate-300 font-light leading-relaxed">
            Every concept above is embedded into the product architecture of SigmaGo—from the 4R Decision Engine to live STEP boundary governance.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
          <Link
            href="/sigmago"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all shadow-sm"
          >
            <span>Explore SigmaGo</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </Link>
          <Link
            href="/book"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-slate-700 hover:bg-navy-900 text-slate-200 text-xs font-semibold transition-colors"
          >
            <span>The Other Book</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
