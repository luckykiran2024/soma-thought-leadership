'use client';

import React, { useState } from 'react';
import { Grid, Layers, ShieldCheck, Zap, Activity } from 'lucide-react';

interface DecisionMatrixDiagramProps {
  title?: string;
}

export default function DecisionMatrixDiagram({
  title = "Decision Debt & Institutional Telemetry Quadrant",
}: DecisionMatrixDiagramProps) {
  const [selectedQuadrant, setSelectedQuadrant] = useState<string>('high-impact-untracked');

  const quadrants = [
    {
      id: 'high-impact-tracked',
      title: 'Institutional Capital',
      quadrant: 'High Impact · High Reasoning Recorded',
      color: 'border-emerald-300 bg-emerald-50/40 text-emerald-950',
      tagColor: 'text-emerald-700 bg-emerald-100',
      description: 'Strategic structural commitments with preserved rationale, outcome calibration, and review triggers. The highest value asset an enterprise holds.',
      example: 'Core architecture overhaul with logged trade-offs, evaluated 12 months later.',
      metric: 'Telemetry: High Confidence Factor (>0.85)'
    },
    {
      id: 'high-impact-untracked',
      title: 'Critical Decision Debt',
      quadrant: 'High Impact · Zero Reasoning Recorded',
      color: 'border-rose-300 bg-rose-50/40 text-rose-950',
      tagColor: 'text-rose-700 bg-rose-100',
      description: 'Massive headcount allocations, non-standard enterprise discounts, and policy overrides made in private meetings. High compounding organizational liability.',
      example: 'Unprecedented 40% salary hike granted without market documentation.',
      metric: 'Telemetry: High Deviation Factor (>0.70) + Zero Historical Trace'
    },
    {
      id: 'low-impact-tracked',
      title: 'Operational Governance',
      quadrant: 'Routine Impact · High Reasoning Recorded',
      color: 'border-blue-300 bg-blue-50/40 text-blue-950',
      tagColor: 'text-blue-700 bg-blue-100',
      description: 'Repeatable transactional workflows managed through playbooks and automated governance limits. Highly predictable throughput.',
      example: 'Standardized vendor procurement under predefined spend thresholds.',
      metric: 'Telemetry: High Policy Health'
    },
    {
      id: 'low-impact-untracked',
      title: 'Operational Noise',
      quadrant: 'Routine Impact · Low Reasoning Recorded',
      color: 'border-slate-300 bg-slate-50/60 text-slate-900',
      tagColor: 'text-slate-700 bg-slate-200',
      description: 'Day-to-day choices (e.g. scheduling, routine approvals). Low immediate risk, but accumulates meeting bloat if unmanaged.',
      example: 'Informal schedule adjustments and minor task prioritization.',
      metric: 'Telemetry: Low Impact Factor'
    }
  ];

  const activeData = quadrants.find(q => q.id === selectedQuadrant) || quadrants[0];

  return (
    <div className="bg-white border border-editorial-border rounded-xl p-6 sm:p-8 space-y-6 shadow-card">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-editorial-rule gap-2">
        <div className="space-y-1">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-accent font-semibold">
            <Grid className="w-3.5 h-3.5" />
            <span>Governance Telemetry Matrix</span>
          </div>
          <h3 className="font-serif text-xl sm:text-2xl text-ink font-normal">
            {title}
          </h3>
        </div>
        <span className="text-xs font-mono text-ink-muted">
          Click quadrants to examine exposure
        </span>
      </div>

      {/* 2x2 Quadrant Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {quadrants.map((q) => {
          const isSelected = selectedQuadrant === q.id;
          return (
            <button
              key={q.id}
              onClick={() => setSelectedQuadrant(q.id)}
              className={`p-5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between ${
                q.color
              } ${
                isSelected
                  ? 'ring-2 ring-navy-950 shadow-md scale-[1.01]'
                  : 'opacity-85 hover:opacity-100 hover:shadow-subtle'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded font-semibold ${q.tagColor}`}>
                    {q.quadrant}
                  </span>
                  {isSelected && <Activity className="w-3.5 h-3.5 text-navy-950" />}
                </div>
                <h4 className="font-serif text-xl font-medium">
                  {q.title}
                </h4>
                <p className="text-xs leading-relaxed opacity-90">
                  {q.description}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-black/10 text-[11px] font-mono">
                {q.metric}
              </div>
            </button>
          );
        })}
      </div>

      {/* Detail Inspector Panel */}
      <div className="p-5 bg-surface rounded-xl border border-editorial-border space-y-3">
        <div className="flex items-center justify-between border-b border-editorial-rule pb-2 text-xs font-mono">
          <span className="text-ink font-semibold uppercase">Inspection Profile: {activeData.title}</span>
          <span className="text-accent">{activeData.metric}</span>
        </div>
        <p className="text-xs sm:text-sm text-ink-light leading-relaxed">
          <strong>Real-World Illustration: </strong> {activeData.example}
        </p>
        <p className="text-xs text-ink-muted leading-relaxed">
          SigmaGo identifies when high-impact decisions hover in untracked territory and injects real-time rationale capture prompts into the executive workflow.
        </p>
      </div>
    </div>
  );
}
