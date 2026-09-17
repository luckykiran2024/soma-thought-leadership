'use client';

import React, { useState } from 'react';
import { ArrowRight, AlertTriangle, ShieldCheck, RefreshCw, Layers } from 'lucide-react';

interface LifecycleFlowDiagramProps {
  title?: string;
}

export default function LifecycleFlowDiagram({
  title = "The Exception-to-Precedent Mutation Cycle",
}: LifecycleFlowDiagramProps) {
  const [selectedStep, setSelectedStep] = useState<number>(0);

  const steps = [
    {
      number: "01",
      name: "Operational Friction",
      badge: "Frontline Reality",
      summary: "A client urgency, rare talent requirement, or project deadline collides with rigid corporate policy.",
      symptom: "A strict Net-30 payment rule or travel authorization cap is impossible to fulfill without missing revenue.",
      failureMode: "Informal, unmonitored approval via chat or email."
    },
    {
      number: "02",
      name: "Ad-hoc Exception",
      badge: "Local Authority",
      summary: "A manager grants an off-band exemption believing they are solving an isolated, one-time bottleneck.",
      symptom: "The exception is approved without recording constraints, assumptions, or expiry conditions.",
      failureMode: "The exception outcome is preserved in the transaction, but the reasoning evaporates."
    },
    {
      number: "03",
      name: "Shadow Citation",
      badge: "Informal Law",
      summary: "Peers and other teams cite the prior approval: 'If marketing got this exception, engineering should too.'",
      symptom: "Unwritten precedents begin governing decisions without structural oversight or audit readiness.",
      failureMode: "Fairness degrades as access to exceptions depends on political relationships."
    },
    {
      number: "04",
      name: "Policy Drift",
      badge: "Governance Divorce",
      summary: "The formal written policy becomes ceremonial; the actual operational rulebook is a chaotic web of precedents.",
      symptom: "Management believes policy is protecting the firm, while frontline operations have completely bypassed it.",
      failureMode: "Regulatory exposure, decision debt, and disorientation when leadership turnover occurs."
    },
    {
      number: "05",
      name: "Decision Intelligence Loop",
      badge: "SigmaGo Resolution",
      summary: "Telemetry tracks exception velocity. Recurring exceptions trigger formal, deliberate policy evolution.",
      symptom: "High-frequency exceptions are transformed from silent leaks into explicit, updated governance.",
      failureMode: "Eliminates shadow entitlements and restores operational velocity."
    }
  ];

  return (
    <div className="bg-white border border-editorial-border rounded-xl p-6 sm:p-8 space-y-6 shadow-card">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-editorial-rule gap-2">
        <div className="space-y-1">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-accent font-semibold">
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Process Lifecycle Architecture</span>
          </div>
          <h3 className="font-serif text-xl sm:text-2xl text-ink font-normal">
            {title}
          </h3>
        </div>
        <span className="text-xs font-mono text-ink-muted">
          Click steps to inspect mechanics
        </span>
      </div>

      {/* Stepper Pipeline */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
        {steps.map((step, idx) => {
          const isSelected = selectedStep === idx;
          return (
            <button
              key={step.number}
              onClick={() => setSelectedStep(idx)}
              className={`p-3.5 rounded-lg text-left transition-all duration-200 border flex flex-col justify-between ${
                isSelected
                  ? 'bg-navy-950 text-white border-navy-950 shadow-md ring-2 ring-navy-950/20'
                  : 'bg-surface/60 text-ink border-editorial-border hover:bg-surface hover:border-ink/30'
              }`}
            >
              <div className="space-y-1">
                <span
                  className={`text-[10px] font-mono uppercase tracking-wider block font-semibold ${
                    isSelected ? 'text-blue-300' : 'text-accent'
                  }`}
                >
                  Step {step.number}
                </span>
                <h4 className="font-serif text-sm font-medium leading-snug">
                  {step.name}
                </h4>
              </div>
              <span
                className={`text-[9px] font-mono uppercase px-1.5 py-0.5 rounded mt-3 self-start ${
                  isSelected ? 'bg-white/10 text-slate-300' : 'bg-white text-ink-muted border border-editorial-border'
                }`}
              >
                {step.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* Detail Showcase */}
      <div className="p-6 bg-editorial-cream/50 rounded-xl border border-editorial-border space-y-4">
        <div className="flex items-center justify-between border-b border-editorial-rule pb-2">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-mono font-bold text-accent uppercase">
              Phase {steps[selectedStep].number}
            </span>
            <span className="text-sm font-serif text-ink font-medium">
              {steps[selectedStep].name}
            </span>
          </div>
          <span className="text-xs font-mono text-ink-muted">
            {steps[selectedStep].badge}
          </span>
        </div>

        <p className="text-sm text-ink leading-relaxed font-light">
          {steps[selectedStep].summary}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
          <div className="p-3 bg-white rounded border border-editorial-border space-y-1">
            <strong className="text-ink uppercase tracking-wider text-[10px] font-mono block text-ink-muted">
              Operational Manifestation:
            </strong>
            <p className="text-ink-light leading-relaxed">
              {steps[selectedStep].symptom}
            </p>
          </div>

          <div className="p-3 bg-white rounded border border-editorial-border space-y-1">
            <strong className="text-accent uppercase tracking-wider text-[10px] font-mono block font-semibold">
              Institutional Governance Consequence:
            </strong>
            <p className="text-ink-light leading-relaxed">
              {steps[selectedStep].failureMode}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
