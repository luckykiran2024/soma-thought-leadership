import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { BookOpen, ArrowRight, CheckCircle2, Mail, ExternalLink, Calendar, BookmarkCheck, Sparkles } from 'lucide-react';
import FourRDiagram from '@/components/frameworks/FourRDiagram';
import BookNewsletter from '@/components/book/BookNewsletter';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'The Other Book · Why Every Company Keeps Every Rupee and Loses Every Decision',
  description: 'A study on why organizations spend billions tracking money and transactions while permitting the context behind their most consequential decisions to disappear. By Soma Kiran Gonella.',
};

export default function BookPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-20">
      <JsonLd
        type="Book"
        data={{
          name: 'The Other Book: Why every company keeps every rupee and loses every decision',
          author: {
            '@type': 'Person',
            name: 'Soma Kiran Gonella',
          },
        }}
      />

      {/* Book Hero Showcase */}
      <section className="bg-white border border-editorial-border rounded-2xl p-8 sm:p-12 lg:p-16 shadow-subtle">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Book Meta & Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-accent font-semibold">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Available on Kindle</span>
            </div>

            <div className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-6xl text-ink font-normal leading-[1.15]">
                The Other Book
              </h1>
              <p className="font-serif text-lg sm:text-2xl text-navy-900 italic font-normal">
                Why every company keeps every rupee and loses every decision.
              </p>
            </div>

            <div className="text-base text-ink-light leading-relaxed space-y-4 font-light">
              <p>
                Organizations have spent decades building precision systems to account for money, people, inventory, customers, and transactions. We audit the movement of every single cent, every inventory batch, and every clock-in timestamp.
              </p>
              <p>
                Yet one of the most consequential assets an organization creates every single day is rarely recorded systematically: <strong className="font-medium text-ink">its decisions</strong>.
              </p>
              <p>
                <em className="font-serif italic text-ink">The Other Book</em> explores what organizations silently lose when decision context disappears—and proposes a new, rigorous architecture for institutional memory.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="https://amzn.in/d/0eymRvyu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full bg-accent hover:bg-accent-hover text-white text-xs font-semibold transition-all shadow-md group"
              >
                <span>Kindle Edition on Amazon</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1.5 opacity-90 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="#excerpts"
                className="inline-flex items-center px-6 py-3 rounded-full bg-navy-950 hover:bg-navy-900 text-white text-xs font-semibold transition-all shadow-sm"
              >
                <span>Read Selected Excerpts</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </a>

              <Link
                href="/book-a-conversation?type=publishing"
                className="inline-flex items-center px-6 py-3 rounded-full border border-editorial-border bg-white hover:bg-surface text-ink text-xs font-semibold transition-colors"
              >
                <Calendar className="w-3.5 h-3.5 mr-2 text-accent" />
                <span>Discuss Publishing & Speaking</span>
              </Link>
            </div>
          </div>

          {/* Right: Architectural Book Cover Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm bg-editorial-cream border-2 border-ink rounded-lg p-8 shadow-2xl relative">
              <div className="space-y-8 text-center">
                <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-ink-muted">
                  <span>First Edition</span>
                  <span>Non-Fiction / Management</span>
                </div>

                <div className="space-y-3 pt-6">
                  <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold block">
                    Soma Kiran Gonella
                  </span>
                  <h2 className="font-serif text-4xl text-ink font-normal tracking-tight leading-tight">
                    The Other Book
                  </h2>
                  <div className="editorial-rule my-4" />
                  <p className="font-serif italic text-xs text-ink-light px-2">
                    Why every company keeps every rupee and loses every decision.
                  </p>
                </div>

                <div className="pt-8 space-y-3">
                  <div className="p-3 bg-white rounded border border-editorial-border text-left text-xs space-y-1">
                    <span className="font-mono text-[10px] uppercase text-navy-800 font-semibold block">
                      Core Framework Inside
                    </span>
                    <p className="text-ink-muted text-[11px]">
                      The 4R Operational Cycle: Record · Retrieve · Rely · Reuse
                    </p>
                  </div>
                  <a
                    href="https://amzn.in/d/0eymRvyu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-2.5 px-4 bg-navy-950 hover:bg-navy-900 text-white rounded-lg text-xs font-semibold transition-all text-center shadow-sm"
                  >
                    <span>Read on Kindle · Amazon ↗</span>
                  </a>
                </div>

                <div className="text-[10px] font-mono text-ink-muted tracking-widest uppercase">
                  Decision Intelligence Series
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 4R System in the Book */}
      <section className="space-y-6">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-accent font-semibold">
            The Central Operating System
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-ink font-normal">
            The 4R Framework of Decision Memory
          </h2>
          <p className="text-sm text-ink-light">
            At the heart of the book is an operational framework designed to replace ad-hoc corporate amnesia with deliberate institutional intelligence.
          </p>
        </div>

        <FourRDiagram />
      </section>

      {/* Book Themes & Table of Key Enquiries */}
      <section className="bg-white border border-editorial-border rounded-xl p-8 sm:p-12 space-y-8">
        <div className="border-b border-editorial-rule pb-4">
          <span className="text-xs uppercase font-mono tracking-widest text-accent font-semibold">
            Inquiries Explored
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-ink font-normal mt-1">
            What The Other Book Investigates
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div className="space-y-2 p-5 bg-surface rounded-lg border border-editorial-border">
            <span className="text-xs font-mono uppercase text-accent font-semibold">Inquiry 01</span>
            <h3 className="font-serif text-lg text-ink font-medium">The Asymmetry of Enterprise Records</h3>
            <p className="text-xs text-ink-light leading-relaxed">
              Why CFOs can retrieve any line-item expense from 2017 in seconds, while the executive committee cannot explain why a critical market reorganization was aborted in the same quarter.
            </p>
          </div>

          <div className="space-y-2 p-5 bg-surface rounded-lg border border-editorial-border">
            <span className="text-xs font-mono uppercase text-accent font-semibold">Inquiry 02</span>
            <h3 className="font-serif text-lg text-ink font-medium">How Exceptions Harden into Precedents</h3>
            <p className="text-xs text-ink-light leading-relaxed">
              The hidden sociology of workplace rule-bending: how isolated executive approvals quietly rewrite corporate policy without audit trails or structural safety checks.
            </p>
          </div>

          <div className="space-y-2 p-5 bg-surface rounded-lg border border-editorial-border">
            <span className="text-xs font-mono uppercase text-accent font-semibold">Inquiry 03</span>
            <h3 className="font-serif text-lg text-ink font-medium">The Economics of Decision Debt</h3>
            <p className="text-xs text-ink-light leading-relaxed">
              Quantifying the hidden financial drag of re-litigating resolved questions, executive turnover paralysis, and the accidental repeal of crucial safeguards (Chesterton’s Fence).
            </p>
          </div>

          <div className="space-y-2 p-5 bg-surface rounded-lg border border-editorial-border">
            <span className="text-xs font-mono uppercase text-accent font-semibold">Inquiry 04</span>
            <h3 className="font-serif text-lg text-ink font-medium">From Human Turnover to Institutional Continuity</h3>
            <p className="text-xs text-ink-light leading-relaxed">
              Architecting organizational memories that outlive executive tenure, enabling incoming leaders to query the institutional brain before reversing strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Selected Excerpts */}
      <section id="excerpts" className="space-y-6">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-accent font-semibold">
            Preview
          </span>
          <h2 className="font-serif text-3xl text-ink font-normal">
            Selected Ideas & Excerpts
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-editorial-cream/50 border border-editorial-border rounded-xl p-6 sm:p-8 space-y-4">
            <span className="text-xs font-mono uppercase text-ink-muted">Excerpt · Chapter 2</span>
            <blockquote className="font-serif italic text-base text-ink leading-relaxed">
              "We tell ourselves that our decisions are preserved in meeting minutes. But meeting minutes record diplomacy, not truth. They record what the committee was willing to commit to paper, not the underlying constraints, the discarded alternatives, or the fragile compromises that made the decision work."
            </blockquote>
            <span className="text-xs text-ink-muted font-mono block pt-2">— From Chapter 2: The Fiction of Meeting Minutes</span>
          </div>

          <div className="bg-editorial-cream/50 border border-editorial-border rounded-xl p-6 sm:p-8 space-y-4">
            <span className="text-xs font-mono uppercase text-ink-muted">Excerpt · Chapter 5</span>
            <blockquote className="font-serif italic text-base text-ink leading-relaxed">
              "When an engineer leaves, they commit their code to the repository. When a salesperson leaves, they log their pipeline in the CRM. But when a leader leaves, their accumulated judgment leaves in their head. The organization suffers amnesia, and calls it employee turnover."
            </blockquote>
            <span className="text-xs text-ink-muted font-mono block pt-2">— From Chapter 5: The Evaporating Cortex</span>
          </div>
        </div>
      </section>

      {/* Future Integration Channels & Newsletter */}
      <section className="bg-white border border-editorial-border rounded-2xl p-8 sm:p-12 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs uppercase font-mono tracking-widest text-accent font-semibold">
              Publication Updates & Distribution
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-ink font-normal">
              Follow the Publication Journey
            </h3>
            <p className="text-sm text-ink-light leading-relaxed font-light">
              <em className="font-serif italic text-ink">The Other Book</em> is currently in active development. Sign up to receive chapter previews, early reviews, and notifications for the upcoming release across Amazon, Kindle, and paperback.
            </p>

            {/* Channels badges */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-ink-muted">
              <a
                href="https://amzn.in/d/0eymRvyu"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded bg-amber-50 border border-amber-200 text-amber-900 font-semibold inline-flex items-center space-x-1.5 hover:bg-amber-100 transition-colors"
              >
                <span>Kindle Edition Available</span>
                <ExternalLink className="w-3 h-3 text-amber-700" />
              </a>
              <span className="px-3.5 py-1.5 rounded bg-surface border border-editorial-border">Hardcover / Paperback</span>
              <span className="px-3.5 py-1.5 rounded bg-surface border border-editorial-border">Amazon Worldwide</span>
              <span className="px-3.5 py-1.5 rounded bg-surface border border-editorial-border">Publisher Inquiries</span>
            </div>
          </div>

          <div className="lg:col-span-5 bg-editorial-cream/70 p-6 rounded-xl border border-editorial-border space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-ink font-semibold block">
              Reserve Early Access & Chapter Excerpts
            </span>
            <BookNewsletter />
            <p className="text-[11px] text-ink-muted">
              Zero spam. Only substantive updates on the book and speaking events.
            </p>
          </div>
        </div>
      </section>

      {/* Speaking & Collaboration CTA */}
      <div className="p-8 rounded-xl bg-surface border border-editorial-border flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div className="space-y-1">
          <h4 className="font-serif text-xl text-ink font-normal">
            Keynotes, Podcasts & Publisher Conversations
          </h4>
          <p className="text-xs text-ink-muted">
            Interested in discussing book rights, podcast appearances, or keynote presentations on organizational decision intelligence?
          </p>
        </div>
        <Link
          href="/book-a-conversation?type=publishing"
          className="inline-flex items-center px-5 py-2.5 rounded-full bg-navy-950 text-white text-xs font-semibold hover:bg-navy-900 transition-colors flex-shrink-0"
        >
          <span>Schedule Discussion</span>
          <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
        </Link>
      </div>
    </div>
  );
}
