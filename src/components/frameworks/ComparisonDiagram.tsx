'use client';

import React, { useState } from 'react';
import { ArrowRight, Check, X, ShieldAlert, Sparkles, Scale } from 'lucide-react';

interface ComparisonDiagramProps {
  title?: string;
  leftTitle?: string;
  rightTitle?: string;
}

export default function ComparisonDiagram({
  title = "Structural Comparison: Ad-hoc Choice vs. Governed Decision",
  leftTitle = "Ad-hoc Choice (Conventional)",
  rightTitle = "Governed Decision (Decision Intelligence)",
}: ComparisonDiagramProps) {
  const [activeTab, setActiveTab] = useState<'comparison' | 'impact'>('comparison');

  const rows = [
    {
      dimension: "Deliberation Record",
      conventional: "Lost in ephemeral Slack threads, meeting minutes, and hallway chats",
      governed: "Context, constraints, hypotheses, and trade-offs preserved in indexed cortex",
      verdict: "Continuity vs. Amnesia"
    },
    {
      dimension: "Underlying Assumptions",
      conventional: "Implicit, subjective, unarticulated, and forgotten within months",
      governed: "Explicitly documented with validation horizon and falsification criteria",
      verdict: "Calibrated vs. Guesswork"
    },
    {
      dimension: "Alternatives Considered",
      conventional: "Discarded options disappear; rejected ideas are re-debated indefinitely",
      governed: "Structured registry of discarded options with precise rejection rationale",
      verdict: "Preserved vs. Re-litigated"
    },
    {
      dimension: "Review Triggers",
      conventional: "None; evaluated only retrospectively when catastrophic failure strikes",
      governed: "Time-bound or event-triggered audit gates (e.g. 6-month outcome review)",
      verdict: "Proactive vs. Reactive"
    },
    {
      dimension: "Precedent Impact",
      conventional: "Quietly creates unmonitored shadow entitlements and policy drift",
      governed: "Telemetry scores deviation factor and prevents shadow precedent mutation",
      verdict: "Governed vs. Chaotic"
    }
  ];

  return (
    <div className="bg-white border border-editorial-border rounded-xl p-6 sm:p-8 space-y-6 shadow-card">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-editorial-rule gap-3">
        <div className="space-y-1">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-accent font-semibold">
            <Scale className="w-3.5 h-3.5" />
            <span>Interactive Framework Diagram</span>
          </div>
          <h3 className="font-serif text-xl sm:text-2xl text-ink font-normal">
            {title}
          </h3>
        </div>

        <div className="flex items-center space-x-2 bg-surface p-1 rounded-lg border border-editorial-border self-start sm:self-auto text-xs font-medium">
          <button
            onClick={() => setActiveTab('comparison')}
            className={`px-3 py-1.5 rounded-md transition-colors ${
              activeTab === 'comparison'
                ? 'bg-navy-950 text-white shadow-xs'
                : 'text-ink-muted hover:text-ink'
            }`}
          >
            Detailed Comparison
          </button>
          <button
            onClick={() => setActiveTab('impact')}
            className={`px-3 py-1.5 rounded-md transition-colors ${
              activeTab === 'impact'
                ? 'bg-navy-950 text-white shadow-xs'
                : 'text-ink-muted hover:text-ink'
            }`}
          >
            Long-term Impact
          </button>
        </div>
      </div>

      {activeTab === 'comparison' ? (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-editorial-border text-ink-muted uppercase font-mono tracking-wider text-[11px]">
                <th className="py-3 px-3 w-1/4">Operational Dimension</th>
                <th className="py-3 px-3 w-3/8 text-rose-800 bg-rose-50/40 rounded-t-md">{leftTitle}</th>
                <th className="py-3 px-3 w-3/8 text-navy-950 bg-blue-50/40 rounded-t-md">{rightTitle}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-editorial-border">
              {rows.map((row, idx) => (
                <tr key={idx} className="hover:bg-surface/50 transition-colors">
                  <td className="py-3.5 px-3 font-medium text-ink align-top">
                    {row.dimension}
                    <span className="block text-[10px] text-ink-muted font-mono mt-0.5">{row.verdict}</span>
                  </td>
                  <td className="py-3.5 px-3 text-ink-light bg-rose-50/20 align-top">
                    <div className="flex items-start space-x-1.5">
                      <X className="w-3.5 h-3.5 text-rose-600 mt-0.5 flex-shrink-0" />
                      <span>{row.conventional}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-3 text-ink-light bg-blue-50/20 align-top font-normal">
                    <div className="flex items-start space-x-1.5">
                      <Check className="w-3.5 h-3.5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>{row.governed}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="p-5 rounded-xl border border-rose-200 bg-rose-50/30 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-rose-800 font-semibold block">
              Cost of Ungoverned Choices
            </span>
            <ul className="space-y-2 text-xs text-ink-light leading-relaxed">
              <li className="flex items-start">
                <span className="text-rose-600 mr-2 font-bold">·</span>
                <span><strong>Amnesia upon departure:</strong> Every leader reset resets institutional learning back to zero.</span>
              </li>
              <li className="flex items-start">
                <span className="text-rose-600 mr-2 font-bold">·</span>
                <span><strong>Policy Drift:</strong> Operations quietly abandon handbook guidelines as undocumented workarounds become law.</span>
              </li>
              <li className="flex items-start">
                <span className="text-rose-600 mr-2 font-bold">·</span>
                <span><strong>Decision Debt:</strong> Executive teams spend up to 40% of meetings re-debating settled dilemmas.</span>
              </li>
            </ul>
          </div>

          <div className="p-5 rounded-xl border border-blue-200 bg-blue-50/30 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-navy-950 font-semibold block">
              Advantage of Decision Intelligence
            </span>
            <ul className="space-y-2 text-xs text-ink-light leading-relaxed">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">·</span>
                <span><strong>Institutional Memory:</strong> High-stakes reasoning outlives executive tenure and turnover.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">·</span>
                <span><strong>Precedent Reuse:</strong> Past solutions inform future dilemmas with verified empirical telemetry.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">·</span>
                <span><strong>Living Policy Health:</strong> Governance surfaces exception patterns dynamically to keep rules relevant.</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      <div className="pt-4 border-t border-editorial-rule flex items-center justify-between text-xs text-ink-muted font-mono">
        <span>SigmaGo Integrated Taxonomy</span>
        <span>Harvard Business Review · Editorial Layout</span>
      </div>
    </div>
  );
}
