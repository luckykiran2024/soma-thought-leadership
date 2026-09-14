import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Briefcase, ArrowRight, CheckCircle2, AlertTriangle, Lightbulb, Compass, Sparkles } from 'lucide-react';
import { TIMELINE, OBSERVATIONS } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Experience · Soma Kiran Gonella',
  description: 'A professional narrative grounded in 11+ years of HR leadership across fintech and automotive R&D environments, and the core operational observations that gave rise to decision intelligence.',
};

export default function ExperiencePage() {
  const competencies = [
    'Strategic HR Partnering',
    'Organization Design',
    'Talent Management',
    'Performance Calibration',
    'Leadership Advisory & NLP Coaching',
    'Employee Listening Systems',
    'People Analytics & Predictive Modeling',
    'Organizational Change Governance',
    'Technology Organization Design & Architecture',
    'Engineering & Product Leadership Alignment',
    'HR SaaS & Digital Transformation',
    'Decision Management Architecture',
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-20">
      {/* Header Narrative */}
      <section className="max-w-4xl space-y-6">
        <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-accent font-semibold">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Operational Foundations</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl text-ink font-normal leading-tight">
          My ideas about organizations come from working inside them.
        </h1>

        <div className="text-base sm:text-lg text-ink-light leading-relaxed space-y-4 font-light">
          <p>
            This is not an academic exercise in management theory. Over the past 11+ years, I have worked inside high-velocity engineering, fintech unicorn, and automotive R&D environments—partnering directly with Vice Presidents of Engineering, Product Directors, and technical founders.
          </p>
          <p>
            I have been inside the rooms where critical decisions are debated: re-architecting engineering pods, negotiating non-standard compensation exceptions for scarce AI talent, establishing specialized engineering and research centers, calibrating performance across distributed teams, and managing cross-cultural leadership alignment.
          </p>
          <p>
            Working at this operational ground level revealed a persistent structural flaw: organizations have robust software to account for transactions, but almost zero infrastructure to preserve the judgment and reasoning behind consequential decisions.
          </p>
        </div>
      </section>

      {/* Core Competencies Matrix */}
      <section className="bg-white border border-editorial-border rounded-xl p-8 sm:p-12 space-y-6 shadow-subtle">
        <div className="border-b border-editorial-rule pb-4">
          <span className="text-xs uppercase font-mono tracking-widest text-accent font-semibold">
            Areas of Practice
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-ink font-normal mt-1">
            Core Practice Domains & Strategic Leadership
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {competencies.map((comp) => (
            <div
              key={comp}
              className="p-3 bg-surface rounded-lg border border-editorial-border text-xs font-medium text-ink flex items-center space-x-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
              <span>{comp}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Vertical Narrative Timeline */}
      <section className="space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-accent font-semibold">
            Career Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-ink font-normal">
            Milestones & Organizational Contexts
          </h2>
          <p className="text-sm text-ink-light">
            Each organizational chapter presented distinct challenges in scale, culture, and governance that directly informed the development of decision intelligence.
          </p>
        </div>

        <div className="relative border-l-2 border-editorial-border pl-6 sm:pl-10 space-y-12 ml-2 sm:ml-4">
          {TIMELINE.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline marker node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-3.5 h-3.5 rounded-full bg-navy-950 border-4 border-background ring-1 ring-editorial-border group-hover:scale-125 transition-transform" />

              <div className="bg-white border border-editorial-border rounded-xl p-6 sm:p-8 space-y-4 shadow-card">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-editorial-rule pb-3">
                  <div>
                    <span className="text-xs font-mono font-semibold text-accent uppercase tracking-wider block">
                      {item.sector}
                    </span>
                    <h3 className="font-serif text-2xl text-ink font-normal mt-0.5">
                      {item.role}
                    </h3>
                    <p className="text-sm font-medium text-ink-muted">
                      {item.organization}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-ink-muted bg-surface px-3 py-1 rounded-full border border-editorial-border self-start sm:self-center">
                    {item.period}
                  </span>
                </div>

                <p className="text-sm text-ink-light leading-relaxed font-light">
                  {item.description}
                </p>

                {/* Key achievements */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-semibold text-ink uppercase tracking-wider block">
                    Key Initiatives & Deliverables
                  </span>
                  <ul className="space-y-1.5">
                    {item.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="flex items-start text-xs text-ink-light">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* The Decision Insight */}
                <div className="p-4 rounded-lg bg-editorial-cream/70 border-l-2 border-navy-900 text-xs">
                  <strong className="text-navy-900 block font-serif text-sm mb-1">
                    Operational Discovery
                  </strong>
                  <p className="text-ink-light italic font-serif leading-relaxed">
                    "{item.decisionInsight}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What Working Inside Organizations Taught Me */}
      <section className="bg-editorial-cream/40 border border-editorial-border rounded-2xl p-8 sm:p-12 space-y-8">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-accent font-semibold">
            <Lightbulb className="w-3.5 h-3.5" />
            <span>Empirical Synthesis</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-ink font-normal">
            What Working Inside Organizations Taught Me
          </h2>
          <p className="text-base text-ink-light font-light leading-relaxed">
            Six universal symptoms observed across hundreds of leadership discussions that directly proved the necessity of organizational decision intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {OBSERVATIONS.map((obs) => (
            <div
              key={obs.id}
              className="bg-white border border-editorial-border rounded-xl p-6 space-y-4 shadow-card"
            >
              <h3 className="font-serif text-xl text-ink font-normal">
                {obs.observation}
              </h3>

              <div className="space-y-2 text-xs">
                <div className="p-3 bg-surface rounded border border-editorial-border">
                  <strong className="text-ink-muted block uppercase text-[10px] tracking-wider mb-0.5">
                    Observable Symptom:
                  </strong>
                  <p className="text-ink-light">{obs.symptom}</p>
                </div>

                <div className="p-3 bg-amber-50/50 rounded border border-amber-200/60">
                  <strong className="text-amber-800 block uppercase text-[10px] tracking-wider mb-0.5">
                    Underlying Root Cause:
                  </strong>
                  <p className="text-amber-950">{obs.underlyingCause}</p>
                </div>

                <div className="p-3 bg-blue-50/50 rounded border border-blue-200/60">
                  <strong className="text-accent block uppercase text-[10px] tracking-wider mb-0.5">
                    Decision Intelligence Resolution:
                  </strong>
                  <p className="text-navy-950">{obs.decisionIntelligenceSolution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Connect back to SigmaGo & Book */}
      <div className="p-8 rounded-xl bg-navy-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-navy-800">
        <div className="space-y-1">
          <h3 className="font-serif text-2xl text-white font-normal">
            Turning 11+ Years of Observation into Industry
          </h3>
          <p className="text-xs text-slate-300 max-w-lg">
            See how these lessons informed real-world industry practice, the architecture of SigmaGo, and the core thesis of The Other Book.
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <Link
            href="/sigmago"
            className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors"
          >
            Explore SigmaGo
          </Link>
          <Link
            href="/book-a-conversation"
            className="px-5 py-2.5 rounded-full border border-slate-700 hover:bg-navy-900 text-slate-200 text-xs font-semibold transition-colors"
          >
            Schedule a Chat
          </Link>
        </div>
      </div>
    </div>
  );
}
