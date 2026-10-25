import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  BookOpen,
  Calendar,
  Layers,
  Search,
  CheckCircle2,
  Mail,
  Shield,
  Clock,
  Compass,
  FileText,
  ExternalLink
} from 'lucide-react';
import FourRDiagram from '@/components/frameworks/FourRDiagram';
import StepFrameworkDiagram from '@/components/frameworks/StepFrameworkDiagram';
import { ARTICLES, FRAMEWORKS } from '@/lib/content';

export default function HomePage() {
  const featuredArticles = ARTICLES.slice(0, 4);
  const featuredFrameworks = FRAMEWORKS.slice(0, 4);

  return (
    <div className="editorial-page space-y-16 sm:space-y-24 lg:space-y-32 pb-16 sm:pb-24">
      {/* 1. HERO SECTION: INTRODUCING SOMA KIRAN GONELLA */}
      <section className="relative pt-8 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 border-b border-editorial-border/60 overflow-hidden bg-gradient-to-b from-surface/50 via-background to-background">
        <div className="scroll-graphic" aria-hidden="true"><span /><span /></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Executive Profile Presentation */}
          <div className="flex flex-col items-center space-y-4 mb-5 sm:mb-6 animate-fade-in">
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white shadow-xl ring-2 ring-editorial-border/80 flex-shrink-0">
              <Image
                src="/images/profile.jpg"
                alt="Soma Kiran Gonella"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            <div className="space-y-2 text-center">
              <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 rounded-full bg-white border border-editorial-border shadow-subtle text-[11px] sm:text-xs font-mono uppercase tracking-[0.12em] sm:tracking-widest text-ink leading-relaxed">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                <span className="font-semibold">HR Business Partner · Author · Product Builder</span>
              </div>
            </div>
          </div>

          {/* Hero Name & Multifaceted Personal Introduction */}
          <div className="space-y-5 sm:space-y-6 max-w-4xl mx-auto">
            <div className="space-y-2">
              <h1 className="font-serif text-[2.65rem] sm:text-6xl lg:text-7xl font-normal text-ink tracking-tight leading-[1.05] sm:leading-[1.12]">
                Soma Kiran Gonella
              </h1>
              <p className="font-serif text-xl sm:text-2xl text-navy-900 italic font-normal leading-snug max-w-2xl mx-auto">
                Turning organizational decisions into reusable intelligence
              </p>
            </div>

            <p className="text-base sm:text-xl text-ink-light leading-relaxed max-w-3xl mx-auto font-light">
              I help engineering and product leaders improve how their organizations <strong className="font-medium text-ink">grow, make decisions, and retain critical knowledge</strong>.
            </p>

            <p className="text-sm sm:text-base text-ink-muted leading-relaxed max-w-2xl mx-auto font-light">
              My 11+ years across <strong className="text-ink font-normal">Zeta</strong> and <strong className="text-ink font-normal">Hyundai Mobis</strong> now inform my writing on decision memory, the <strong className="text-ink font-normal">SigmaGo</strong> platform, and applied systems studies.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
              <Link
                href="/thinking"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full bg-navy-950 hover:bg-navy-900 text-white text-sm font-semibold transition-all shadow-sm hover:shadow group"
              >
                <span>Explore the Work</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                href="/experience"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full bg-white hover:bg-surface text-ink text-sm font-semibold border border-editorial-border transition-all shadow-subtle"
              >
                <span>View Experience</span>
              </Link>

              <Link
                href="/book-a-conversation"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full border border-editorial-border bg-white hover:bg-surface text-ink text-sm font-semibold transition-all shadow-subtle"
              >
                <Calendar className="w-4 h-4 mr-2 text-accent" />
                <span>Book a Conversation</span>
              </Link>
            </div>

            {/* Four Core Dimensions of Work */}
            <div className="pt-7 sm:pt-10 mt-7 sm:mt-10 border-t border-editorial-border/60">
              <p className="sm:hidden mb-3 text-[11px] uppercase tracking-widest text-ink-muted font-mono">Swipe to explore</p>
              <div className="flex overflow-x-auto snap-x snap-mandatory gap-3 -mx-4 px-4 pb-3 sm:mx-0 sm:px-0 sm:pb-0 sm:grid sm:grid-cols-2 md:grid-cols-4 sm:overflow-visible text-xs font-mono mobile-card-rail">
                <Link
                  href="/experience"
                  className="min-w-[78vw] sm:min-w-0 snap-start p-4 bg-white border border-editorial-border/80 rounded-xl hover:border-ink transition-colors shadow-subtle group text-left flex flex-col justify-between"
                >
                  <div>
                    <span className="text-accent font-semibold block text-sm group-hover:text-navy-900 transition-colors">
                      11+ Years HR
                    </span>
                    <span className="text-ink font-sans font-medium text-xs block mt-0.5">
                      Strategic Advisory
                    </span>
                  </div>
                  <span className="text-ink-muted text-[11px] block mt-2">
                    Fintech & Automotive R&D →
                  </span>
                </Link>

                <Link
                  href="/book"
                  className="min-w-[78vw] sm:min-w-0 snap-start p-4 bg-white border border-editorial-border/80 rounded-xl hover:border-ink transition-colors shadow-subtle group text-left flex flex-col justify-between"
                >
                  <div>
                    <span className="text-accent font-semibold block text-sm group-hover:text-navy-900 transition-colors">
                      The Other Book
                    </span>
                    <span className="text-ink font-sans font-medium text-xs block mt-0.5">
                      Published Author
                    </span>
                  </div>
                  <span className="text-ink-muted text-[11px] block mt-2">
                    On Decision Memory →
                  </span>
                </Link>

                <Link
                  href="/sigmago"
                  className="min-w-[78vw] sm:min-w-0 snap-start p-4 bg-white border border-editorial-border/80 rounded-xl hover:border-ink transition-colors shadow-subtle group text-left flex flex-col justify-between"
                >
                  <div>
                    <span className="text-accent font-semibold block text-sm group-hover:text-navy-900 transition-colors">
                      SigmaGo
                    </span>
                    <span className="text-ink font-sans font-medium text-xs block mt-0.5">
                      Product Builder
                    </span>
                  </div>
                  <span className="text-ink-muted text-[11px] block mt-2">
                    Decision Intelligence →
                  </span>
                </Link>

                <Link
                  href="/autonomous-kitchen"
                  className="min-w-[78vw] sm:min-w-0 snap-start p-4 bg-white border border-editorial-border/80 rounded-xl hover:border-ink transition-colors shadow-subtle group text-left flex flex-col justify-between"
                >
                  <div>
                    <span className="text-accent font-semibold block text-sm group-hover:text-navy-900 transition-colors">
                      Autonomous Kitchen
                    </span>
                    <span className="text-ink font-sans font-medium text-xs block mt-0.5">
                      Systems Study
                    </span>
                  </div>
                  <span className="text-ink-muted text-[11px] block mt-2">
                    Closed-Loop Robotics →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE INTELLECTUAL THESIS: DECISION MEMORY */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-editorial-cream/60 border border-editorial-border rounded-2xl p-5 sm:p-12 space-y-6 sm:space-y-8">
          <div className="space-y-3 text-center sm:text-left">
            <span className="editorial-kicker text-xs uppercase font-mono tracking-widest text-accent font-semibold">
              The Question Behind My Work
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-ink font-normal leading-tight">
              Organizations remember transactions.{' '}
              <span className="text-navy-900 italic block mt-1">
                They rarely remember decisions.
              </span>
            </h2>
            <p className="text-base text-ink-light leading-relaxed font-light pt-2">
              Organizations record what happened. Far fewer preserve why it happened—the context, alternatives, judgment, and exceptions behind consequential decisions.
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-ink-light font-serif italic border-y border-editorial-rule py-6 list-disc list-inside marker:text-accent">
            <li>Some become policies.</li>
            <li>Some become exceptions.</li>
            <li>Some quietly become precedents.</li>
            <li>Some disappear entirely.</li>
          </ul>

          <div className="space-y-4">
            <p className="text-sm font-medium text-ink">
              Most organizations preserve the outcome. Very few preserve:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-ink-light font-sans">
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                <span>Why the decision was made</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                <span>What conditions existed</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                <span>What alternatives were considered</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                <span>Who interpreted the rule</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                <span>What exception was allowed</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                <span>Whether the decision worked</span>
              </div>
              <div className="flex items-center space-x-2 sm:col-span-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                <span>Whether the same reasoning should be reused</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-editorial-rule flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="font-serif text-lg text-navy-900 font-medium">
              I work on closing that gap.
            </p>
            <Link
              href="/thinking"
              className="inline-flex items-center text-xs font-semibold text-accent hover:text-navy-900 transition-colors"
            >
              <span>Explore the intellectual territory</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. THREE DIMENSIONS OF MY WORK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-10 text-center sm:text-left">
          <span className="editorial-kicker text-xs uppercase font-mono tracking-widest text-accent font-semibold">
            Research · Writing · Product
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-ink">
            One question, explored in three forms
          </h2>
          <p className="text-base text-ink-muted leading-relaxed max-w-2xl">
            My research, writing, and technology are not separate ventures—they are three connected dimensions solving organizational decision amnesia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Dimension 1: THINK */}
          <div className="bg-white border border-editorial-border rounded-xl p-8 flex flex-col justify-between hover:shadow-elevated transition-all duration-300 relative group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-accent">
                  THINK
                </span>
                <Compass className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-serif text-2xl text-ink font-normal">
                Decision Management
              </h3>
              <p className="text-sm text-ink-light leading-relaxed">
                Researching how organizational judgment, exceptions, approvals and precedents can become reusable intelligence.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-editorial-rule">
              <Link
                href="/thinking"
                className="inline-flex items-center text-xs font-semibold text-ink group-hover:text-accent transition-colors"
              >
                <span>Explore the thinking</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Dimension 2: WRITE */}
          <div className="bg-white border border-editorial-border rounded-xl p-8 flex flex-col justify-between hover:shadow-elevated transition-all duration-300 relative group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-navy-800">
                  WRITE
                </span>
                <BookOpen className="w-5 h-5 text-navy-800" />
              </div>
              <h3 className="font-serif text-2xl text-ink font-normal">
                The Other Book
              </h3>
              <p className="text-sm text-ink-light leading-relaxed">
                A book about something organizations create every day but rarely preserve: decisions and their context.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-editorial-rule">
              <Link
                href="/book"
                className="inline-flex items-center text-xs font-semibold text-ink group-hover:text-accent transition-colors"
              >
                <span>Explore the book</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Dimension 3: BUILD */}
          <div className="bg-navy-950 text-white rounded-xl p-8 flex flex-col justify-between hover:shadow-elevated transition-all duration-300 relative group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-300">
                  BUILD
                </span>
                <Sparkles className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="font-serif text-2xl text-white font-normal">
                SigmaGo
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                A decision intelligence platform designed to help organizations record, retrieve, understand and reuse decision context.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-navy-800">
              <Link
                href="/sigmago"
                className="inline-flex items-center text-xs font-semibold text-blue-300 hover:text-white transition-colors"
              >
                <span>Explore SigmaGo</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE BOOK FEATURE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-editorial-border rounded-2xl p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left column: Book premise */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-1">
                <span className="editorial-kicker text-xs font-mono uppercase tracking-widest text-accent font-semibold">
                  Forthcoming Book
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink font-normal leading-tight">
                  The Other Book
                </h2>
                <p className="text-sm sm:text-base font-serif italic text-ink-light pt-1">
                  Why every company keeps every rupee and loses every decision.
                </p>
              </div>

              <div className="text-sm text-ink-light leading-relaxed space-y-3 font-light">
                <p>
                  Organizations have spent decades building complex systems to account for money, people, inventory, customers, and transactions.
                </p>
                <p>
                  But one of the most consequential assets an organization creates every day is rarely recorded systematically: <strong className="font-medium text-ink">its decisions</strong>.
                </p>
                <p>
                  The book explores what organizations lose when decision context disappears and proposes the 4R Framework—a different way to think about corporate memory.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="https://amzn.in/d/0eymRvyu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-2.5 rounded-full bg-accent hover:bg-accent-hover text-white text-xs font-semibold transition-all shadow-sm"
                >
                  <span>Kindle Edition on Amazon</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                </a>

                <Link
                  href="/book"
                  className="inline-flex items-center px-5 py-2.5 rounded-full bg-navy-950 hover:bg-navy-900 text-white text-xs font-semibold transition-all shadow-sm"
                >
                  <span>Explore The Other Book</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>

                <Link
                  href="/thinking/four-r-framework"
                  className="inline-flex items-center px-5 py-2.5 rounded-full border border-editorial-border bg-white text-ink hover:bg-surface text-xs font-semibold transition-colors"
                >
                  <span>Read selected ideas</span>
                </Link>
              </div>
            </div>

            {/* Right column: Book Architectural Card */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-md bg-editorial-cream border-2 border-ink rounded-lg p-8 shadow-2xl relative">
                <div className="space-y-6 text-center">
                  <div className="inline-block px-3 py-1 bg-ink text-white font-mono text-[10px] uppercase tracking-widest rounded-full">
                    Volume I · Decision Memory
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-3xl sm:text-4xl text-ink font-normal tracking-tight">
                      The Other Book
                    </h3>
                    <p className="text-xs font-serif italic text-ink-muted">
                      Why every company keeps every rupee and loses every decision.
                    </p>
                  </div>

                  <div className="editorial-rule my-4" />

                  <div className="space-y-2 text-left bg-white p-4 rounded border border-editorial-border text-xs">
                    <span className="font-mono uppercase text-[10px] text-accent tracking-wider font-semibold block mb-1">
                      The 4R Connected Cycle
                    </span>
                    <div className="grid grid-cols-2 gap-2 text-ink-light">
                      <div className="p-2 bg-surface rounded">
                        <strong className="text-ink block">Record</strong>
                        <span>Hypothesis & trade-offs</span>
                      </div>
                      <div className="p-2 bg-surface rounded">
                        <strong className="text-ink block">Retrieve</strong>
                        <span>Live context indexing</span>
                      </div>
                      <div className="p-2 bg-surface rounded">
                        <strong className="text-ink block">Rely</strong>
                        <span>Outcome calibration</span>
                      </div>
                      <div className="p-2 bg-surface rounded">
                        <strong className="text-ink block">Reuse</strong>
                        <span>Precedent governance</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 text-xs text-ink font-serif">
                    Soma Kiran Gonella
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive 4R System Embed */}
          <div className="mt-12 pt-12 border-t border-editorial-rule">
            <FourRDiagram />
          </div>
        </div>
      </section>

      {/* 5. SIGMAGO PRODUCT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy-950 text-white border border-navy-800 rounded-2xl p-8 sm:p-12 lg:p-16 space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-blue-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Emerging Technology</span>
              </div>
              <div className="space-y-1">
                <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal leading-tight">
                  SigmaGo
                </h2>
                <p className="font-serif text-xl sm:text-2xl text-blue-200 italic font-normal">
                  Decision Intelligence for Organizations
                </p>
              </div>
              <p className="text-base text-slate-300 max-w-2xl font-light leading-relaxed">
                Organizations already have workflows for making decisions. SigmaGo is being designed to help them understand what those decisions collectively reveal.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end lg:items-end">
              <Link
                href="/sigmago"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all shadow-sm"
              >
                <span>Explore SigmaGo</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Link>
              <Link
                href="/book-a-conversation?type=sigmago"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-slate-700 bg-navy-900/80 hover:bg-navy-800 text-slate-200 text-xs font-semibold transition-colors"
              >
                <span>Discuss a SigmaGo Pilot</span>
              </Link>
            </div>
          </div>

          {/* Decision Relationship Pipeline */}
          <div className="pt-6 border-t border-navy-800/80 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
              Capturing the Relationship Between
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 text-center text-xs font-mono">
              {['Policy', 'Process', 'Approval', 'Exception', 'Reasoning', 'Outcome', 'Precedent'].map((step, idx) => (
                <div
                  key={step}
                  className="p-3 bg-navy-900/80 border border-navy-800 rounded-lg flex flex-col justify-center items-center"
                >
                  <span className="text-[10px] text-blue-400 font-semibold mb-1">0{idx + 1}</span>
                  <span className="text-white font-sans font-medium">{step}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-400 italic pt-1 text-center sm:text-left">
              Then turns that decision history into organizational intelligence.
            </p>
          </div>

          {/* STEP Framework Narrative Explanation */}
          <div className="p-6 sm:p-8 bg-navy-900/50 rounded-xl border border-navy-800 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-300 font-semibold block">
              The STEP Framework: Decision Roles
            </span>
            <p className="text-sm text-slate-300 font-light leading-relaxed">
              Different organizational decisions have different roles:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              <div className="p-3.5 bg-navy-950 rounded-lg border border-navy-800 space-y-1">
                <strong className="text-white block font-sans text-sm font-medium">Structural</strong>
                <p className="text-slate-400">A structural decision establishes boundaries.</p>
              </div>
              <div className="p-3.5 bg-navy-950 rounded-lg border border-navy-800 space-y-1">
                <strong className="text-white block font-sans text-sm font-medium">Process</strong>
                <p className="text-slate-400">A process decision defines how those boundaries operate.</p>
              </div>
              <div className="p-3.5 bg-navy-950 rounded-lg border border-navy-800 space-y-1">
                <strong className="text-white block font-sans text-sm font-medium">Transactional</strong>
                <p className="text-slate-400">A transactional decision applies them.</p>
              </div>
              <div className="p-3.5 bg-navy-950 rounded-lg border border-navy-800 space-y-1">
                <strong className="text-white block font-sans text-sm font-medium">Exceptional</strong>
                <p className="text-slate-400">An exceptional decision bends or crosses them.</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 italic pt-1">
              SigmaGo studies the relationships between these decisions over time.
            </p>
          </div>

          {/* Decision Telemetry Concepts Grid (All 7 Concepts) */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
              Decision Intelligence Telemetry & Concepts
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              <div className="bg-navy-900/60 p-4 rounded-lg border border-navy-800/80 space-y-1">
                <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider block">
                  Impact Factor
                </span>
                <p className="text-xs text-slate-300">
                  Quantifies organizational blast radius across headcount, capital, and risk.
                </p>
              </div>
              <div className="bg-navy-900/60 p-4 rounded-lg border border-navy-800/80 space-y-1">
                <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider block">
                  Deviation Factor
                </span>
                <p className="text-xs text-slate-300">
                  Measures how far an exceptional approval steps outside established policy.
                </p>
              </div>
              <div className="bg-navy-900/60 p-4 rounded-lg border border-navy-800/80 space-y-1">
                <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider block">
                  Confidence Factor
                </span>
                <p className="text-xs text-slate-300">
                  Rates the reliability of historical precedents based on actual realized outcomes.
                </p>
              </div>
              <div className="bg-navy-900/60 p-4 rounded-lg border border-navy-800/80 space-y-1">
                <span className="text-[11px] font-mono text-purple-400 uppercase tracking-wider block">
                  Policy Health
                </span>
                <p className="text-xs text-slate-300">
                  Monitors Policy Drift by correlating written rules with live exception velocity.
                </p>
              </div>
              <div className="bg-navy-900/60 p-4 rounded-lg border border-navy-800/80 space-y-1">
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block">
                  Decision History
                </span>
                <p className="text-xs text-slate-300">
                  A searchable, chronological cortex of why past choices were committed.
                </p>
              </div>
              <div className="bg-navy-900/60 p-4 rounded-lg border border-navy-800/80 space-y-1">
                <span className="text-[11px] font-mono text-rose-400 uppercase tracking-wider block">
                  Exception Intelligence
                </span>
                <p className="text-xs text-slate-300">
                  Aggregates recurring rule departures to guide proactive policy updates.
                </p>
              </div>
              <div className="bg-navy-900/60 p-4 rounded-lg border border-navy-800/80 space-y-1 sm:col-span-2 lg:col-span-2">
                <span className="text-[11px] font-mono text-indigo-300 uppercase tracking-wider block">
                  Institutional Memory
                </span>
                <p className="text-xs text-slate-300">
                  Preserves accumulated executive judgment so continuity survives human turnover.
                </p>
              </div>
            </div>
          </div>

          {/* STEP Framework diagram integration */}
          <div className="pt-4">
            <StepFrameworkDiagram />
          </div>
        </div>
      </section>

      {/* 6. FEATURED THINKING & FRAMEWORKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="editorial-kicker text-xs uppercase font-mono tracking-widest text-accent font-semibold">
              Original Frameworks
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-ink mt-1">
              Core Thinking on Decision Systems
            </h2>
          </div>
          <Link
            href="/thinking"
            className="inline-flex items-center text-xs font-semibold text-ink-muted hover:text-ink transition-colors"
          >
            <span>View all 12 frameworks</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredFrameworks.map((fw) => (
            <Link
              key={fw.slug}
              href={`/thinking/${fw.slug}`}
              className="bg-white border border-editorial-border rounded-xl p-6 sm:p-8 hover:border-ink/40 hover:shadow-elevated transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-accent uppercase tracking-wider font-semibold">
                    {fw.category}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-ink-muted group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-serif text-2xl text-ink font-normal group-hover:text-navy-900 transition-colors">
                  {fw.shortTitle}
                </h3>
                <p className="text-sm font-serif italic text-ink-muted leading-relaxed">
                  {fw.tagline}
                </p>
                <p className="text-sm text-ink-light leading-relaxed line-clamp-3">
                  {fw.proposition}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-editorial-rule flex items-center text-xs font-semibold text-accent">
                <span>Read framework analysis</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. FEATURED WRITING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="editorial-kicker text-xs uppercase font-mono tracking-widest text-accent font-semibold">
              Selected Articles & Research
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-ink mt-1">
              Ideas on People, Systems & Technology
            </h2>
          </div>
          <Link
            href="/writing"
            className="inline-flex items-center text-xs font-semibold text-ink-muted hover:text-ink transition-colors"
          >
            <span>View all articles</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </Link>
        </div>

        <div className="divide-y divide-editorial-border border-y border-editorial-border">
          {featuredArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/writing/${article.slug}`}
              className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline hover:bg-surface/50 transition-colors px-2 sm:px-4 rounded-lg group"
            >
              <div className="md:col-span-3 flex items-center space-x-3 text-xs text-ink-muted font-mono">
                <span className="px-2 py-0.5 rounded bg-surface border border-editorial-border text-ink">
                  {article.category}
                </span>
                <span>{article.readTime}</span>
              </div>

              <div className="md:col-span-7 space-y-1">
                <h3 className="font-serif text-xl sm:text-2xl text-ink font-normal group-hover:text-accent transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-ink-muted line-clamp-2 leading-relaxed font-light">
                  {article.abstract}
                </p>
              </div>

              <div className="md:col-span-2 flex justify-end">
                <span className="inline-flex items-center text-xs font-semibold text-ink-muted group-hover:text-accent transition-colors">
                  Read article
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 8. 11+ YEARS EXPERIENCE CREDIBILITY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-editorial-cream/40 border border-editorial-border rounded-2xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="editorial-kicker text-xs font-mono uppercase tracking-widest text-accent font-semibold">
                Operational Foundation
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-ink font-normal">
                11+ years inside organizations
              </h2>
              <p className="text-base text-ink-light leading-relaxed font-light">
                Experience across technology, fintech, and automotive R&D environments, working at the intersection of business strategy, people, leadership, and organizational systems.
              </p>
              <p className="text-sm text-ink-muted font-serif italic leading-relaxed max-w-2xl">
                "My ideas about organizations did not come from management textbooks. They came from observing what happens when critical decisions break down in real-world engineering and product environments."
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
              <Link
                href="/experience"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-navy-950 hover:bg-navy-900 text-white text-xs font-semibold transition-all shadow-sm"
              >
                <span>Read the professional journey</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-editorial-border bg-white text-ink text-xs font-semibold hover:bg-surface transition-colors"
              >
                <span>About Soma</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SYSTEMS & VENTURES: THE AUTONOMOUS KITCHEN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-editorial-border rounded-2xl p-8 sm:p-12 shadow-card overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="editorial-kicker inline-flex items-center text-xs font-mono uppercase tracking-widest text-accent font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Systems Architecture Study · Concept Film</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-ink font-normal leading-snug">
                The Autonomous Kitchen:{' '}
                <span className="italic text-navy-800 block">
                  From Alchemy to Algorithm
                </span>
              </h2>
              <p className="text-base text-ink-light leading-relaxed font-light">
                An architectural study and concept film on closed-loop culinary robotics. Exploring how sensory telemetry (VOC aroma detection and dynamic thermodynamic state machines) replaces crude timer recipes with deterministic domestic execution.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href="/autonomous-kitchen"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-navy-950 hover:bg-navy-900 text-white text-xs font-semibold transition-all shadow-sm group"
                >
                  <span>Watch Concept Film & Architecture Study</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="/writing/organizational-inheritance"
                  className="inline-flex items-center px-5 py-3 rounded-full border border-editorial-border bg-white text-ink text-xs font-semibold hover:bg-surface transition-colors"
                >
                  <span>Read "The Small Pancakes" Essay</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <Link
                href="/autonomous-kitchen"
                className="group relative block rounded-xl overflow-hidden border border-editorial-border shadow-md bg-navy-950 aspect-video"
              >
                <Image
                  src="/images/kitchen/modern_kitchen_twilight.jpg"
                  alt="The Autonomous Kitchen Master"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-navy-950/30 group-hover:bg-navy-950/10 transition-colors flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/90 text-navy-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <span className="ml-1 text-sm font-serif font-bold">▶</span>
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white/90 bg-navy-950/70 backdrop-blur-sm px-3 py-1.5 rounded">
                  <span>90-Sec Master Film</span>
                  <span>1080p 30fps</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 12. HOMEPAGE CONTACT CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="bg-editorial-cream/60 border border-editorial-border rounded-2xl p-8 sm:p-12 space-y-6">
          <span className="editorial-kicker text-xs uppercase font-mono tracking-widest text-accent font-semibold">
            Continue the Conversation
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-ink font-normal leading-snug max-w-2xl mx-auto">
            Interested in SigmaGo, the book, decision intelligence or simply exchanging ideas?
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/book-a-conversation"
              className="inline-flex items-center px-6 py-3 rounded-full bg-navy-950 hover:bg-navy-900 text-white text-xs font-semibold transition-all shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5 mr-2 text-blue-300" />
              <span>Book a Conversation</span>
            </Link>

            <a
              href="mailto:soma.kiran20@gmail.com"
              className="inline-flex items-center px-6 py-3 rounded-full border border-editorial-border bg-white hover:bg-surface text-ink text-xs font-semibold transition-colors"
            >
              <Mail className="w-3.5 h-3.5 mr-2 text-accent" />
              <span>Email Soma</span>
            </a>
          </div>
        </div>
      </section>

      {/* 15. FINAL HOMEPAGE CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 pt-6">
        <div className="editorial-rule" />

        <div className="space-y-4">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink font-normal leading-tight">
            Organizations accumulate decisions every day.{' '}
            <span className="text-navy-900 italic block mt-1">
              The question is whether they accumulate intelligence with them.
            </span>
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/sigmago"
            className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 mr-2" />
            <span>Explore SigmaGo</span>
          </Link>

          <Link
            href="/thinking"
            className="inline-flex items-center px-6 py-3 rounded-full border border-editorial-border bg-white hover:bg-surface text-ink text-xs font-semibold transition-colors"
          >
            <Compass className="w-3.5 h-3.5 mr-2 text-accent" />
            <span>Read my thinking</span>
          </Link>

          <Link
            href="/book-a-conversation"
            className="inline-flex items-center px-6 py-3 rounded-full bg-navy-950 hover:bg-navy-900 text-white text-xs font-semibold transition-all shadow-sm"
          >
            <Calendar className="w-3.5 h-3.5 mr-2 text-blue-300" />
            <span>Book a Conversation</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
