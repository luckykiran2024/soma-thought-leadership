import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowRight, User, Briefcase, BookOpen, Sparkles, Mail, Phone, Calendar, Linkedin } from 'lucide-react';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'About Soma Kiran Gonella · Thinker, Author, Builder',
  description: 'HR Business Partner with 11+ years of operational experience. Working at the intersection of practice, research, and building decision intelligence software.',
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-20">
      <JsonLd type="Person" />

      {/* Main Profile & Opening Narrative */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Professional Portrait & Credentials */}
        <div className="lg:col-span-4 space-y-6">
          <div className="relative aspect-square max-w-sm mx-auto lg:max-w-none rounded-2xl overflow-hidden border border-editorial-border shadow-elevated bg-white">
            <Image
              src="/images/profile.jpg"
              alt="Soma Kiran Gonella"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          <div className="bg-white border border-editorial-border rounded-xl p-5 space-y-3 text-xs">
            <span className="font-mono uppercase text-[10px] tracking-wider text-accent font-semibold block">
              Professional Positioning
            </span>
            <div className="space-y-1 text-ink">
              <strong className="block text-sm font-serif">Soma Kiran Gonella</strong>
              <p className="text-ink-muted">HR Business Partner</p>
              <p className="text-ink-muted">Author, <em>The Other Book</em></p>
              <p className="text-ink-muted">Builder, <em>SigmaGo</em></p>
            </div>

            <div className="pt-3 border-t border-editorial-rule space-y-2 text-ink-light">
              <a
                href="mailto:soma.kiran20@gmail.com"
                className="flex items-center hover:text-ink transition-colors"
              >
                <Mail className="w-3.5 h-3.5 mr-2 text-accent" />
                <span>soma.kiran20@gmail.com</span>
              </a>
              <a
                href="tel:+919381548500"
                className="flex items-center hover:text-ink transition-colors"
              >
                <Phone className="w-3.5 h-3.5 mr-2 text-emerald-600" />
                <span>+91 93815 48500</span>
              </a>
              <a
                href="https://www.linkedin.com/in/soma-kiran-gonella-a9160626/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-ink transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 mr-2 text-[#0A66C2]" />
                <span>LinkedIn Profile</span>
              </a>
            </div>

            <div className="pt-2">
              <Link
                href="/book-a-conversation"
                className="w-full inline-flex items-center justify-center py-2 px-3 rounded-lg bg-navy-950 text-white font-medium hover:bg-navy-900 transition-colors shadow-sm"
              >
                <Calendar className="w-3 h-3 mr-1.5" />
                <span>Book a Conversation</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Right: Narrative Story */}
        <div className="lg:col-span-8 space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-accent font-semibold">
              <User className="w-3.5 h-3.5" />
              <span>Biography & Philosophy</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl text-ink font-normal leading-tight">
              About Soma Kiran Gonella
            </h1>
          </div>

          <div className="p-6 sm:p-8 bg-editorial-cream/70 border-l-4 border-ink rounded-r-xl">
            <p className="font-serif text-lg sm:text-xl text-ink leading-relaxed font-normal">
              "I have spent more than a decade working with organizations, leaders and teams. Somewhere along the way, I became increasingly interested in a question that sat underneath many of the problems I was helping solve: <strong className="italic">How does an organization remember why it decided what it decided?</strong>"
            </p>
          </div>

          <div className="text-base text-ink-light leading-relaxed space-y-4 font-light">
            <p>
              Over 11+ years across high-velocity technology environments, fintech unicorns (such as Zeta), and automotive R&D centers (such as Hyundai Mobis), I noticed a recurring corporate tragedy:
            </p>
            <p>
              When a software system makes a transaction, it is immutable, traceable, and audited down to the millisecond. When an enterprise spends capital, double-entry bookkeeping preserves the ledger forever. But when an executive leadership team makes a consequential decision—granting an exception, restructuring a department, pivoting compensation, or interpreting a governance rule—that context disappears into emails, Slack threads, and the mortal memory of the people in the room.
            </p>
            <p>
              When those leaders leave, the organization suffers profound amnesia. New leaders arrive, repeat old mistakes, restart resolved debates, and accidentally repeal essential safeguards simply because no one preserved the reasoning.
            </p>
          </div>
        </div>
      </section>

      {/* The Three Connected Areas */}
      <section className="space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-accent font-semibold">
            The Trinity of My Work
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-ink font-normal">
            Practice · Research & Writing · Building
          </h2>
          <p className="text-sm text-ink-light">
            My work spans three connected areas. Each informs and strengthens the others.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1: Practice */}
          <div className="bg-white border border-editorial-border rounded-xl p-8 space-y-4 shadow-card flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-ink border border-editorial-border">
                <Briefcase className="w-5 h-5 text-accent" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold block">
                Pillar 01
              </span>
              <h3 className="font-serif text-2xl text-ink font-normal">
                Practice
              </h3>
              <p className="text-sm text-ink-light leading-relaxed font-light">
                Working inside organizations, advising engineering and product leadership, and understanding how decisions actually happen—messy, pressured, political, and fast.
              </p>
            </div>
            <div className="pt-4 border-t border-editorial-rule">
              <Link
                href="/experience"
                className="text-xs font-semibold text-ink hover:text-accent inline-flex items-center"
              >
                <span>View operational journey</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </div>

          {/* Pillar 2: Research & Writing */}
          <div className="bg-white border border-editorial-border rounded-xl p-8 space-y-4 shadow-card flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-ink border border-editorial-border">
                <BookOpen className="w-5 h-5 text-navy-800" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-navy-800 font-semibold block">
                Pillar 02
              </span>
              <h3 className="font-serif text-2xl text-ink font-normal">
                Research & Writing
              </h3>
              <p className="text-sm text-ink-light leading-relaxed font-light">
                Developing original frameworks around decision management, institutional memory, decision debt, and authoring <em>The Other Book</em>.
              </p>
            </div>
            <div className="pt-4 border-t border-editorial-rule">
              <Link
                href="/book"
                className="text-xs font-semibold text-ink hover:text-accent inline-flex items-center"
              >
                <span>Discover The Other Book</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </div>

          {/* Pillar 3: Building */}
          <div className="bg-navy-950 text-white rounded-xl p-8 space-y-4 shadow-card flex flex-col justify-between border border-navy-800">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-navy-900 flex items-center justify-center text-blue-400 border border-navy-800">
                <Sparkles className="w-5 h-5 text-blue-400" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold block">
                Pillar 03
              </span>
              <h3 className="font-serif text-2xl text-white font-normal">
                Building
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                Turning philosophical insights and empirical taxonomies into software: developing <em>SigmaGo</em> to help organizations capture, index, and reuse decision context.
              </p>
            </div>
            <div className="pt-4 border-t border-navy-800">
              <Link
                href="/sigmago"
                className="text-xs font-semibold text-blue-300 hover:text-white inline-flex items-center"
              >
                <span>Explore SigmaGo architecture</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement & Collaboration CTA */}
      <section className="bg-white border border-editorial-border rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-2 max-w-xl">
          <h3 className="font-serif text-2xl sm:text-3xl text-ink font-normal">
            Open for Thought Leadership & Conversations
          </h3>
          <p className="text-sm text-ink-light font-light leading-relaxed">
            I regularly converse with founders, CHROs, engineering leaders, publishers, and podcast hosts on the evolution of organizational memory and decision governance.
          </p>
        </div>

        <div className="flex gap-3 flex-shrink-0">
          <Link
            href="/book-a-conversation"
            className="px-6 py-3 rounded-full bg-navy-950 hover:bg-navy-900 text-white text-xs font-semibold transition-all shadow-sm flex items-center"
          >
            <Calendar className="w-3.5 h-3.5 mr-2 text-blue-300" />
            <span>Schedule a Time</span>
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-full border border-editorial-border bg-white text-ink hover:bg-surface text-xs font-semibold transition-colors"
          >
            <span>Direct Message</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
