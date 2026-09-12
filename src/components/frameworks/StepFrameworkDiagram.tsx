'use client';

import React, { useState } from 'react';
import { Layers, GitBranch, Cpu, AlertTriangle, ArrowDown, Activity } from 'lucide-react';

interface StepLayer {
  id: 'structural' | 'process' | 'transactional' | 'exceptional';
  title: string;
  role: string;
  cadence: string;
  description: string;
  corporateExample: string;
  telemetryMetric: string;
  riskFactor: string;
}

const LAYERS: StepLayer[] = [
  {
    id: 'structural',
    title: 'Structural Decisions',
    role: 'Establishes the Boundaries',
    cadence: 'Infrequent / Strategic (Annual / Multi-Year)',
    description: 'Foundational choices defining corporate governance, risk appetite, capital allocation, organizational topology, and core company philosophies.',
    corporateExample: 'Establishing global engineering remote work guidelines, salary band architecture, or entering a regulated market.',
    telemetryMetric: 'Governance Stability Score',
    riskFactor: 'If unrecorded, new executive leadership re-architects structures blindly.'
  },
  {
    id: 'process',
    title: 'Process Decisions',
    role: 'Defines How Boundaries Operate',
    cadence: 'Periodic / Operational (Quarterly / Monthly)',
    description: 'Rules, authorization matrices, approval chains, and standard operating procedures that operationalize structural boundaries.',
    corporateExample: 'Specifying that VP approval is required for vendor contracts over $50k or salary deviations beyond 15%.',
    telemetryMetric: 'Policy Health Index',
    riskFactor: 'Prone to Policy Drift when frontline operational reality bypasses written steps.'
  },
  {
    id: 'transactional',
    title: 'Transactional Decisions',
    role: 'Applies Boundaries in Daily Work',
    cadence: 'Continuous / High Volume (Hourly / Daily)',
    description: 'Standard, rule-abiding operational decisions executed within established process guidelines without requiring deviation.',
    corporateExample: 'Routine invoice approvals within budget, standard candidate offers within approved grade bands.',
    telemetryMetric: 'Throughput Velocity & Confidence',
    riskFactor: 'Consumes vast human hours if forced into manual bureaucratic approval loops.'
  },
  {
    id: 'exceptional',
    title: 'Exceptional Decisions',
    role: 'Bends or Crosses Boundaries',
    cadence: 'Variable / Critical Trigger Points',
    description: 'Deliberate departures from established rules to resolve unforeseen emergencies, capture strategic opportunities, or solve novel problems.',
    corporateExample: 'Granting a 35% compensation exception to secure a specialized AI researcher, or waiving Net 30 billing for a key account.',
    telemetryMetric: 'Deviation Factor & Precedent Velocity',
    riskFactor: 'Dangerously hardens into unmonitored shadow policy if rationale is not systematically governed.'
  }
];

export default function StepFrameworkDiagram() {
  const [selectedLayer, setSelectedLayer] = useState<string>('exceptional');
  const active = LAYERS.find(l => l.id === selectedLayer) || LAYERS[3];

  return (
    <div className="my-10 bg-white border border-editorial-border rounded-xl p-6 sm:p-8 shadow-card">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-editorial-rule gap-4">
        <div>
          <span className="text-xs font-semibold tracking-wider text-accent uppercase">Taxonomy</span>
          <h3 className="font-serif text-2xl text-ink font-normal mt-1">The STEP Decision Hierarchy</h3>
        </div>
        <div className="inline-flex items-center space-x-2 text-xs text-navy-800 bg-surface px-3 py-1.5 rounded-full border border-editorial-border">
          <Activity className="w-3.5 h-3.5 text-accent" />
          <span>Continuous Organizational Telemetry</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-6 items-center">
        {/* Layer Stack */}
        <div className="lg:col-span-5 space-y-2.5">
          {LAYERS.map((layer) => {
            const isSelected = selectedLayer === layer.id;
            const isExceptional = layer.id === 'exceptional';
            return (
              <button
                key={layer.id}
                onClick={() => setSelectedLayer(layer.id)}
                className={`w-full text-left p-3.5 rounded-lg border transition-all duration-200 flex items-center justify-between ${
                  isSelected
                    ? 'bg-navy-950 text-white border-navy-950 shadow-md ring-2 ring-navy-950/20'
                    : isExceptional
                    ? 'bg-amber-50/70 border-amber-200 text-amber-950 hover:bg-amber-100/60'
                    : 'bg-editorial-cream/40 border-editorial-border text-ink hover:bg-white hover:border-ink-muted/40'
                }`}
              >
                <div>
                  <div className="flex items-center space-x-2">
                    <span className={`text-[10px] uppercase font-mono tracking-wider px-1.5 py-0.5 rounded ${
                      isSelected
                        ? 'bg-white/20 text-white'
                        : isExceptional
                        ? 'bg-amber-200 text-amber-900 font-semibold'
                        : 'bg-slate-200 text-slate-700'
                    }`}>
                      {layer.id.toUpperCase()}
                    </span>
                    <span className={`text-sm font-medium ${isSelected ? 'text-white' : 'text-ink'}`}>
                      {layer.title}
                    </span>
                  </div>
                  <p className={`text-xs mt-1 ${isSelected ? 'text-slate-300' : 'text-ink-muted'}`}>
                    {layer.role}
                  </p>
                </div>
                {isExceptional && !isSelected && (
                  <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 ml-2" />
                )}
              </button>
            );
          })}

          <div className="pt-2 px-2 text-[11px] text-ink-muted flex items-center justify-center space-x-2">
            <span>Structural</span>
            <ArrowDown className="w-3 h-3 text-accent" />
            <span>Process</span>
            <ArrowDown className="w-3 h-3 text-accent" />
            <span>Transactional</span>
            <ArrowDown className="w-3 h-3 text-amber-600" />
            <span className="font-semibold text-amber-800">Exceptional (Precedent loop)</span>
          </div>
        </div>

        {/* Dynamic Detail Panel */}
        <div className="lg:col-span-7 bg-editorial-cream/30 border border-editorial-border rounded-lg p-5 sm:p-6">
          <div className="flex items-center justify-between pb-3 border-b border-editorial-rule">
            <h4 className="font-serif text-xl text-ink font-normal">
              {active.title}
            </h4>
            <span className="text-xs font-mono text-ink-muted bg-white px-2.5 py-1 rounded border border-editorial-border">
              {active.cadence}
            </span>
          </div>

          <p className="text-sm text-ink-light leading-relaxed my-4">
            {active.description}
          </p>

          <div className="space-y-3 pt-3 border-t border-editorial-rule text-xs">
            <div>
              <span className="font-semibold text-ink uppercase tracking-wider block mb-1">
                Real-World Corporate Context
              </span>
              <div className="bg-white p-3 rounded border border-editorial-border text-ink-light leading-relaxed">
                {active.corporateExample}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="bg-white p-3 rounded border border-blue-100">
                <span className="text-[11px] font-semibold text-accent uppercase tracking-wider block mb-1">
                  SigmaGo Telemetry
                </span>
                <span className="text-ink font-medium">{active.telemetryMetric}</span>
              </div>
              <div className="bg-white p-3 rounded border border-rose-100">
                <span className="text-[11px] font-semibold text-rose-700 uppercase tracking-wider block mb-1">
                  Organizational Failure Risk
                </span>
                <span className="text-ink-light">{active.riskFactor}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
