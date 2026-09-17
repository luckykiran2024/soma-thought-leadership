import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import {
  Play,
  Sparkles,
  ArrowRight,
  Cpu,
  Flame,
  Activity,
  Layers,
  CheckCircle2,
  Calendar,
  ExternalLink,
  Download
} from 'lucide-react';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'The Autonomous Kitchen · Architecture Study & Concept Film | Soma Kiran Gonella',
  description: 'An architectural study and 90-second concept film exploring closed-loop culinary robotics, thermodynamic state machines, and executable Digital Dish Models.',
};

export default function AutonomousKitchenPage() {
  const systemPillars = [
    {
      icon: Activity,
      title: 'Sensory State Telemetry',
      tag: 'Chemical Fingerprinting',
      description:
        'Replaces crude timers with real-time Volatile Organic Compound (VOC) detection and thermal imaging, detecting the exact onset of the Maillard reaction and aroma inflection points.',
    },
    {
      icon: Flame,
      title: 'Thermodynamic Closed-Loop Control',
      tag: 'Physical Actuation',
      description:
        'Dynamically adjusts induction zones and surface conduction in response to live pan telemetry, preventing moisture drowning and thermal shock regardless of ingredient variance.',
    },
    {
      icon: Cpu,
      title: 'Algorithmic Dosing Engine',
      tag: 'Precision Dispensing',
      description:
        'Multi-axis automated dispensing for spices, emulsified gravies, and aromatics, synchronized to temperature phase transitions rather than arbitrary intervals.',
    },
    {
      icon: Layers,
      title: 'Digital Dish Models (DDM)',
      tag: 'Culinary Code',
      description:
        'Enables master chefs to record, calibrate, and distribute executable culinary algorithms. Food becomes a deterministic state program running on intelligent hardware.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-20">
      <JsonLd
        type="Article"
        data={{
          headline: 'The Autonomous Kitchen: From Alchemy to Algorithm',
          description: 'A concept film and systems study on closed-loop culinary robotics and executable thermodynamic dish models.',
          author: {
            '@type': 'Person',
            name: 'Soma Kiran Gonella',
          },
        }}
      />

      {/* Hero Showcase */}
      <section className="bg-white border border-editorial-border rounded-2xl p-8 sm:p-12 lg:p-16 shadow-subtle space-y-10">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-accent font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Systems Architecture Study · Concept Film</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-ink font-normal leading-[1.15]">
            The Autonomous Kitchen
          </h1>

          <p className="font-serif text-xl sm:text-2xl text-navy-900 italic font-normal">
            From Alchemy to Algorithm: Closed-Loop Culinary State Machines
          </p>

          <p className="text-base sm:text-lg text-ink-light leading-relaxed font-light">
            Cooking is the final domestic frontier that automation has failed to solve with conventional appliances. We do not need another timer with Bluetooth. We need a closed-loop sensory state machine that executes culinary craft as deterministic thermodynamic physics.
          </p>
        </div>

        {/* Cinematic Video Player Container */}
        <div className="space-y-4">
          <div className="relative rounded-2xl overflow-hidden bg-navy-950 border-2 border-navy-900 shadow-2xl">
            <video
              controls
              playsInline
              preload="metadata"
              poster="/images/kitchen/modern_kitchen_twilight.jpg"
              className="w-full aspect-video object-cover bg-black"
            >
              <source src="/videos/autonomous-kitchen.mp4" type="video/mp4" />
              Your browser does not support HTML5 video playback.
            </video>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 text-xs text-ink-muted border-b border-editorial-border/60 pb-6">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
              <span className="font-mono uppercase tracking-wider font-semibold text-ink">
                Concept Film: 90-Second Master (1080p 30fps)
              </span>
              <span>· Sound Design & Visual Score</span>
            </div>

            <div className="flex items-center space-x-4 font-mono text-[11px]">
              <a
                href="/videos/autonomous-kitchen.mp4"
                download="Autonomous-Kitchen-Concept-Film.mp4"
                className="inline-flex items-center text-accent hover:text-accent-hover font-semibold transition-colors"
              >
                <Download className="w-3.5 h-3.5 mr-1.5" />
                <span>Download Master Video (.mp4)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Core Systems Thesis */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs uppercase font-mono tracking-widest text-accent font-semibold">
            The Architectural Premise
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-ink font-normal leading-snug">
            Food is Not a Recipe.{' '}
            <span className="italic text-navy-800 block">
              It is a Sequence of Thermodynamic States.
            </span>
          </h2>
          <div className="text-sm sm:text-base text-ink-light space-y-4 font-light leading-relaxed">
            <p>
              For a century, kitchen appliances treated cooking as a function of time and power level: <em>"Bake at 180°C for 25 minutes"</em>. But ingredients are biologically variable, room ambient temperatures drift, and moisture evaporates at fluctuating rates.
            </p>
            <p>
              When a master chef cooks, they do not watch a clock. They listen to the frequency of sizzling oil, monitor the opacity of caramelizing onions, and register the volatile aromatic compounds released as proteins brown.
            </p>
            <p>
              The Autonomous Kitchen replaces blind timers with an <strong>intelligent state machine</strong>: sensing chemical thresholds, actuating dynamic heat boundaries, and dosing ingredients precisely when the physical reaction demands it.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 bg-surface border border-editorial-border rounded-xl p-8 space-y-6">
          <div className="relative h-64 sm:h-72 rounded-lg overflow-hidden border border-editorial-border">
            <Image
              src="/images/kitchen/exploded_appliance_render.jpg"
              alt="Autonomous Kitchen Appliance Engineering"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-ink-muted">
              Hardware Architecture Diagram
            </span>
            <h3 className="font-serif text-lg text-ink font-medium">
              Exploded Hardware Subsystems
            </h3>
            <p className="text-xs text-ink-light leading-relaxed font-light">
              Dual-plane induction stator, multi-chamber vacuum spice carousel, active VOC olfactory sniffer, and optical temperature array operating under an embedded real-time microkernel.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Architectural Pillars Grid */}
      <section className="space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-accent font-semibold">
            System Taxonomy
          </span>
          <h2 className="font-serif text-3xl text-ink font-normal">
            Four Foundational Subsystems
          </h2>
          <p className="text-sm text-ink-light font-light">
            How hardware intelligence translates complex culinary artistry into reliable domestic execution.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {systemPillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="bg-white border border-editorial-border rounded-xl p-6 space-y-3 shadow-card flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-lg bg-navy-950 text-white flex items-center justify-center">
                    <Icon className="w-4 h-4 text-blue-300" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-accent uppercase font-semibold block">
                      {p.tag}
                    </span>
                    <h3 className="font-serif text-lg text-ink font-medium mt-0.5">
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-xs text-ink-light leading-relaxed font-light">
                    {p.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Visual Study Gallery */}
      <section className="bg-editorial-cream/30 border border-editorial-border rounded-2xl p-8 sm:p-12 space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-accent font-semibold">
            Concept Gallery
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-ink font-normal">
            The Human & Physical Interface
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl border border-editorial-border overflow-hidden shadow-sm">
            <div className="relative h-64 sm:h-72">
              <Image
                src="/images/kitchen/chef_arjun_culinary_lab.jpg"
                alt="Chef calibrating Digital Dish Model"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 space-y-2">
              <span className="text-[10px] font-mono uppercase text-accent font-semibold">
                Culinary Authoring
              </span>
              <h3 className="font-serif text-lg text-ink font-medium">
                The Chef as Software Architect
              </h3>
              <p className="text-xs text-ink-light leading-relaxed font-light">
                Instead of packaging pre-frozen sauce packets, master chefs author executable Digital Dish Models. The culinary artisan encodes intuition into calibrated parameters.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-editorial-border overflow-hidden shadow-sm">
            <div className="relative h-64 sm:h-72">
              <Image
                src="/images/kitchen/sizzling_paneer_masala.jpg"
                alt="Closed Loop Sizzling Pan Telemetry"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 space-y-2">
              <span className="text-[10px] font-mono uppercase text-accent font-semibold">
                Closed-Loop Pan Execution
              </span>
              <h3 className="font-serif text-lg text-ink font-medium">
                Zero-Variance Thermodynamic Execution
              </h3>
              <p className="text-xs text-ink-light leading-relaxed font-light">
                Sensory feedback loops monitor oil viscosity and protein caramelization in real-time, executing delicate regional recipes (e.g. Paneer Butter Masala) with authentic texture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Connection to Organizational Systems & Decision Intelligence */}
      <section className="bg-navy-950 text-white rounded-2xl p-8 sm:p-12 lg:p-14 border border-navy-800 space-y-6">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400">
            The Deeper Thesis
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-white font-normal leading-snug">
            Why an HR & Decision Thinker Studies Autonomous Cooking
          </h2>
          <div className="text-sm sm:text-base text-slate-300 font-light leading-relaxed space-y-4">
            <p>
              At first glance, an autonomous kitchen appliance appears distant from enterprise decision management and strategic HR. In reality, they are identical problems occurring in different substrates:
            </p>
            <p className="border-l-2 border-blue-500 pl-4 italic text-blue-100 font-serif">
              "An organization that blindly inherits stale policies without remembering their reasoning is no different than an automated cooker that follows a timer recipe while the food is burning. Both systems fail because they lack closed-loop sensory feedback and context memory."
            </p>
            <p>
              Whether engineering <strong>SigmaGo</strong> to capture organizational exceptions and precedent, or designing an <strong>Autonomous Kitchen</strong> to sense chemical state transitions, the mission is identical: transforming tacit human art into enduring, intelligent systems.
            </p>
          </div>
        </div>

        <div className="pt-4 flex flex-wrap items-center gap-4">
          <Link
            href="/book-a-conversation?type=research"
            className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all shadow-sm"
          >
            <Calendar className="w-3.5 h-3.5 mr-2" />
            <span>Discuss Hardware & Systems Research</span>
          </Link>

          <Link
            href="/sigmago"
            className="inline-flex items-center px-6 py-3 rounded-full border border-slate-700 bg-navy-900/60 hover:bg-navy-900 text-slate-200 text-xs font-semibold transition-colors"
          >
            <span>Explore SigmaGo Decision Intelligence</span>
            <ArrowRight className="w-3.5 h-3.5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
