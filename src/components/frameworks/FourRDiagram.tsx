'use client';

import React, { useState } from 'react';
import { Database, Search, ShieldCheck, Repeat, ArrowRight, CheckCircle2 } from 'lucide-react';

interface Stage {
  id: string;
  name: string;
  stepNumber: string;
  icon: React.ElementType;
  headline: string;
  summary: string;
  artifacts: string[];
  failureMode: string;
  sigmagoFeature: string;
}

const STAGES: Stage[] = [
  {
    id: 'record',
    name: 'Record',
    stepNumber: '01',
    icon: Database,
    headline: 'Capture Reasoning at the Point of Commitment',
    summary: 'Preserve the hypothesis, constraints, stakeholder trade-offs, and rejected options rather than merely the binary sign-off.',
    artifacts: ['Decision Context Card', 'Constraint Vector', 'Alternative Matrix'],
    failureMode: 'Binary approval without context leads to instant knowledge amnesia.',
    sigmagoFeature: 'SigmaGo Context Capture prompts decision architects during Jira, Slack, or ERP approvals.'
  },
  {
    id: 'retrieve',
    name: 'Retrieve',
    stepNumber: '02',
    icon: Search,
    headline: 'Surface Historical Precedent in Real-Time',
    summary: 'Enable operational leaders to index and search historical reasoning dynamically while confronting new problems.',
    artifacts: ['Semantic Precedent Graph', 'Similarity Search Engine', 'Timeline Index'],
    failureMode: 'Precedents remain buried in departing employees\' email archives and private Slack channels.',
    sigmagoFeature: 'Contextual AI surfacing presents relevant past decisions inside active review workflows.'
  },
  {
    id: 'rely',
    name: 'Rely',
    stepNumber: '03',
    icon: ShieldCheck,
    headline: 'Calibrate Confidence Against Realized Outcomes',
    summary: 'Evaluate past decision hypotheses against actual business outcomes to determine whether past reasoning remains valid.',
    artifacts: ['Confidence Factor Score', 'Outcome Audit', 'Assumption Validity Check'],
    failureMode: 'Teams blindly repeat outdated procedures whose underlying conditions expired years ago.',
    sigmagoFeature: 'SigmaGo Confidence Factor measures the historical reliability of similar policy interpretations.'
  },
  {
    id: 'reuse',
    name: 'Reuse',
    stepNumber: '04',
    icon: Repeat,
    headline: 'Apply Validated Judgment to New Frontiers',
    summary: 'Scale institutional intelligence across business units without requiring executive committees to re-litigate established ground.',
    artifacts: ['Governed Precedent Template', 'Policy Update Proposal', 'Institutional Playbook'],
    failureMode: 'Leaders waste 30-40% of executive hours reinventing solutions to problems solved before.',
    sigmagoFeature: 'Precedent Engine bridges operational exceptions directly into living policy enhancements.'
  }
];

export default function FourRDiagram() {
  const [activeStage, setActiveStage] = useState<string>('record');
  const current = STAGES.find(s => s.id === activeStage) || STAGES[0];

  return (
    <div className="my-10 bg-white border border-editorial-border rounded-xl p-6 sm:p-8 shadow-card">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-editorial-rule gap-4">
        <div>
          <span className="text-xs font-semibold tracking-wider text-accent uppercase">Architecture</span>
          <h3 className="font-serif text-2xl text-ink font-normal mt-1">The 4R Decision Memory System</h3>
        </div>
        <p className="text-xs text-ink-muted max-w-xs sm:text-right">
          Interactive visual system: click each discipline to inspect its organizational mechanics.
        </p>
      </div>

      {/* 4 Steps Horizontal Track */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
        {STAGES.map((stage) => {
          const Icon = stage.icon;
          const isActive = activeStage === stage.id;
          return (
            <button
              key={stage.id}
              onClick={() => setActiveStage(stage.id)}
              className={`text-left p-4 rounded-lg border transition-all duration-200 relative ${
                isActive
                  ? 'bg-navy-950 text-white border-navy-950 shadow-md ring-2 ring-navy-950/20'
                  : 'bg-editorial-cream/50 text-ink border-editorial-border hover:border-ink-muted/50 hover:bg-white'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs font-mono font-semibold ${isActive ? 'text-accent-soft/80' : 'text-ink-muted'}`}>
                  {stage.stepNumber}
                </span>
                <Icon className={`w-4 h-4 ${isActive ? 'text-blue-400' : 'text-ink-muted'}`} />
              </div>
              <div className={`font-serif text-lg font-medium ${isActive ? 'text-white' : 'text-ink'}`}>
                {stage.name}
              </div>
              <div className={`text-xs mt-1 truncate ${isActive ? 'text-slate-300' : 'text-ink-muted'}`}>
                {stage.headline}
              </div>
            </button>
          );
        })}
      </div>

      {/* Detailed Stage Preview */}
      <div className="bg-editorial-cream/30 border border-editorial-border rounded-lg p-6 transition-all">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
          <div className="flex-1">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold text-accent mb-2">
              <span>Discipline {current.stepNumber}</span>
              <span>·</span>
              <span>{current.name}</span>
            </div>
            <h4 className="font-serif text-xl sm:text-2xl text-ink font-normal mb-3">
              {current.headline}
            </h4>
            <p className="text-sm text-ink-light leading-relaxed mb-6">
              {current.summary}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-editorial-rule">
              <div>
                <span className="text-xs font-semibold text-ink-muted uppercase tracking-wider block mb-2">
                  Key Artifacts Produced
                </span>
                <ul className="space-y-1.5">
                  {current.artifacts.map((art, i) => (
                    <li key={i} className="flex items-center text-xs text-ink-light">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent mr-2 flex-shrink-0" />
                      <span>{art}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="text-xs font-semibold text-rose-700 uppercase tracking-wider block mb-2">
                  Conventional Failure Mode
                </span>
                <p className="text-xs text-ink-light leading-relaxed bg-rose-50/50 p-2.5 rounded border border-rose-100">
                  {current.failureMode}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-72 bg-white p-4 rounded-lg border border-editorial-border flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-navy-800 uppercase tracking-wider block mb-1">
                SigmaGo Platform Role
              </span>
              <p className="text-xs text-ink-light leading-relaxed mt-2">
                {current.sigmagoFeature}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-editorial-rule flex items-center text-xs text-accent font-medium">
              <span>Engineered in SigmaGo Cortex</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
