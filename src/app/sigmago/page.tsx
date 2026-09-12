import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  Sparkles,
  ArrowRight,
  GitBranch,
  ShieldCheck,
  Activity,
  Layers,
  Cpu,
  Calendar,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import StepFrameworkDiagram from '@/components/frameworks/StepFrameworkDiagram';
import FourRDiagram from '@/components/frameworks/FourRDiagram';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'SigmaGo · Decision Intelligence for Organizations',
  description: 'An emerging decision intelligence platform designed to help organizations record, retrieve, understand, and reuse decision context across structural, transactional, and exceptional boundaries.',
};

export default function SigmaGoPage() {
  const telemetryFeatures = [
    {
      title: 'Impact Factor',
      tag: 'Risk & Scale',
      description: 'Calculates the multi-dimensional blast radius of a decision across headcount, capital expenditure, customer exposure, and contractual risk.',
    },
    {
      title: 'Deviation Factor',
      tag: 'Policy Boundaries',
      description: 'Measures how far an exceptional approval bends or violates established standard operating procedures, preventing silent shadow precedents.',
    },
    {
      title: 'Confidence Factor',
      tag: 'Outcome Telemetry',
      description: 'Scores the historical reliability of similar past decisions by auditing whether past hypotheses held true over 6, 12, and 24-month horizons.',
    },
    {
      title: 'Policy Health',
      tag: 'Governance Velocity',
      description: 'Continuously tracks the gap between written policies and live frontline decisions, alerting committees when Policy Drift warrants intentional revision.',
    },
    {
      title: 'Decision History',
      tag: 'Contextual Timeline',
      description: 'A chronological, searchable cortex of why past choices were made, who authorized them, and what trade-offs were accepted.',
    },
    {
      title: 'Exception Intelligence',
      tag: 'Adaptive Learning',
      description: 'Aggregates recurring operational exceptions across business units to recommend formal structural improvements before friction mounts.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-20">
      <JsonLd
        type="SoftwareApplication"
        data={{
          name: 'SigmaGo',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Cloud / Web',
          description: 'A decision intelligence platform designed to help organizations record, retrieve, understand, and reuse decision context.',
        }}
      />

      {/* Hero Header */}
      <section className="bg-navy-950 text-white rounded-2xl p-8 sm:p-12 lg:p-16 border border-navy-800 space-y-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-blue-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Emerging Technology · Alpha In Development</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-white font-normal leading-tight">
            SigmaGo
          </h1>

          <p className="font-serif text-xl sm:text-2xl text-blue-200 italic font-normal">
            Decision Intelligence for Organizations
          </p>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl">
            Organizations already have workflows for making decisions. SigmaGo is being designed to help them understand what those decisions collectively reveal.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-3">
            <Link
              href="/book-a-conversation?type=sigmago"
              className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5 mr-2" />
              <span>Discuss a SigmaGo Pilot</span>
            </Link>

            <Link
              href="/contact?reason=sigmago"
              className="inline-flex items-center px-6 py-3 rounded-full border border-slate-700 bg-navy-900/60 hover:bg-navy-900 text-slate-200 text-xs font-semibold transition-colors"
            >
              <span>Request Architecture Overview</span>
            </Link>
          </div>
        </div>

        {/* The Decision Context Flow Ribbon */}
        <div className="pt-8 border-t border-navy-800/80">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-4">
            The Decision Context Lifecycle
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
        </div>
      </section>

      {/* Core Narrative & Positioning */}
      <section className="bg-white border border-editorial-border rounded-xl p-8 sm:p-12 space-y-6">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase font-mono tracking-widest text-accent font-semibold">
            Product Philosophy
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-ink font-normal">
            Moving From Decision Tracking to Decision Intelligence
          </h2>
          <p className="text-base text-ink-light leading-relaxed font-light">
            SigmaGo does not seek to replace existing ERPs, Jira boards, HRIS tools, or communication channels. Instead, it operates as an intelligent contextual layer that captures the relationship between policies, exceptions, approvals, and outcomes.
          </p>
          <p className="text-base text-ink-light leading-relaxed font-light">
            When an executive approves an exception or a project team changes an architecture, SigmaGo records the reasoning, evaluates the deviation, and builds an indexed organizational memory.
          </p>
        </div>

        {/* 3 Core Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-editorial-rule">
          <div className="space-y-2">
            <h3 className="font-serif text-lg text-ink font-medium">1. Context Capture</h3>
            <p className="text-xs text-ink-light leading-relaxed">
              Seamlessly prompts decision architects for constraints, hypotheses, and discarded alternatives right at the moment of commitment.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-serif text-lg text-ink font-medium">2. Real-time Retrieval</h3>
            <p className="text-xs text-ink-light leading-relaxed">
              Surfaces relevant historical precedents and outcome audits inside active review meetings, preventing repetitive debate.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-serif text-lg text-ink font-medium">3. Adaptive Governance</h3>
            <p className="text-xs text-ink-light leading-relaxed">
              Monitors exception velocity to alert leadership when static policies have drifted away from operational realities.
            </p>
          </div>
        </div>
      </section>

      {/* STEP Framework Interactive Hierarchy */}
      <section className="space-y-6">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-accent font-semibold">
            The Architectural Engine
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-ink font-normal">
            The STEP Decision Taxonomy
          </h2>
          <p className="text-sm text-ink-light">
            SigmaGo organizes enterprise choices into four clear layers: Structural boundaries, Process mechanics, Transactional throughput, and Exceptional departures.
          </p>
        </div>

        <StepFrameworkDiagram />
      </section>

      {/* Telemetry Metrics Grid */}
      <section className="bg-editorial-cream/40 border border-editorial-border rounded-xl p-8 sm:p-12 space-y-8">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-accent font-semibold">
            Institutional Telemetry
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-ink font-normal">
            Measuring What Conventional Dashboards Ignore
          </h2>
          <p className="text-sm text-ink-light">
            Conventional analytics measure activity: how many tickets were closed, how many dollars were billed. SigmaGo measures judgment: how policies hold up under stress.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {telemetryFeatures.map((feat) => (
            <div
              key={feat.title}
              className="bg-white border border-editorial-border rounded-lg p-5 space-y-2 shadow-card"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-accent uppercase font-semibold">
                  {feat.tag}
                </span>
                <Activity className="w-3.5 h-3.5 text-ink-muted" />
              </div>
              <h3 className="font-serif text-xl text-ink font-normal">
                {feat.title}
              </h3>
              <p className="text-xs text-ink-light leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Discuss a Pilot Banner */}
      <section className="bg-navy-950 text-white rounded-2xl p-8 sm:p-12 border border-navy-800 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400">
            Alpha Pilot Program
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
            Explore a Guided SigmaGo Pilot in Your Organization
          </h3>
          <p className="text-sm text-slate-300 font-light leading-relaxed">
            We are collaborating with forward-thinking leaders, CHROs, and engineering directors to map decision memory, evaluate policy health, and eliminate decision debt.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
          <Link
            href="/book-a-conversation?type=sigmago"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all shadow-sm"
          >
            <Calendar className="w-3.5 h-3.5 mr-2" />
            <span>Book a 45-Min Pilot Briefing</span>
          </Link>

          <Link
            href="/contact?reason=sigmago"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-slate-700 hover:bg-navy-900 text-slate-200 text-xs font-semibold transition-colors"
          >
            <span>Send Direct Pilot Inquiry</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
