'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, Linkedin, Send, CheckCircle2, Shield, Calendar, AlertCircle } from 'lucide-react';

const REASON_OPTIONS = [
  'SigmaGo Pilot & Product Inquiry',
  'The Other Book & Publishing',
  'Speaking Engagement / Keynote',
  'Podcast Guest Appearance',
  'Research & Academic Collaboration',
  'Leadership & Strategic Advisory',
  'Founder & Investor Discussion',
  'Professional Networking',
  'Other',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    role: '',
    email: '',
    reason: 'SigmaGo Pilot & Product Inquiry',
    message: '',
    honeypot: '', // hidden field for bot trap
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to send message.');
      }

      setStatus('success');
      setFormData({
        name: '',
        organization: '',
        role: '',
        email: '',
        reason: 'SigmaGo Pilot & Product Inquiry',
        message: '',
        honeypot: '',
      });
    } catch (err: any) {
      console.error(err);
      setStatus('error');
      setErrorMessage(err.message || 'An error occurred. Please email directly at soma.kiran20@gmail.com');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-accent font-semibold">
          <Mail className="w-3.5 h-3.5" />
          <span>Direct Inquiries & Collaboration</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-ink font-normal leading-tight">
          Let’s talk about decisions, organizations and what comes next.
        </h1>
        <p className="text-base sm:text-lg text-ink-light leading-relaxed font-light">
          Whether you want to explore a SigmaGo enterprise pilot, discuss publishing rights for <em>The Other Book</em>, invite me to speak on organizational memory, or exchange perspectives on the future of people systems—I welcome serious discussions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Contact Info & Topics */}
        <div className="lg:col-span-5 space-y-8">
          {/* Direct channels card */}
          <div className="bg-white border border-editorial-border rounded-xl p-6 sm:p-8 space-y-6 shadow-card">
            <h2 className="font-serif text-2xl text-ink font-normal">
              Direct Contact Information
            </h2>

            <div className="space-y-4 text-sm">
              <a
                href="mailto:soma.kiran20@gmail.com"
                className="flex items-start p-3 rounded-lg border border-editorial-border bg-surface hover:bg-white transition-all group"
              >
                <Mail className="w-4 h-4 text-accent mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="text-xs font-mono uppercase text-ink-muted block font-semibold">
                    Email Address
                  </span>
                  <span className="font-medium text-ink group-hover:text-accent transition-colors">
                    soma.kiran20@gmail.com
                  </span>
                  <span className="text-[11px] text-ink-muted block mt-0.5">
                    Click to compose in default mail client
                  </span>
                </div>
              </a>

              <a
                href="tel:+919381548500"
                className="flex items-start p-3 rounded-lg border border-editorial-border bg-surface hover:bg-white transition-all group"
              >
                <Phone className="w-4 h-4 text-emerald-600 mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="text-xs font-mono uppercase text-ink-muted block font-semibold">
                    Direct Phone / WhatsApp
                  </span>
                  <span className="font-medium text-ink group-hover:text-emerald-700 transition-colors">
                    +91 93815 48500
                  </span>
                  <span className="text-[11px] text-ink-muted block mt-0.5">
                    One-tap direct calling on mobile
                  </span>
                </div>
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start p-3 rounded-lg border border-editorial-border bg-surface hover:bg-white transition-all group"
              >
                <Linkedin className="w-4 h-4 text-[#0A66C2] mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="text-xs font-mono uppercase text-ink-muted block font-semibold">
                    LinkedIn Network
                  </span>
                  <span className="font-medium text-ink group-hover:text-[#0A66C2] transition-colors">
                    Connect on LinkedIn
                  </span>
                  <span className="text-[11px] text-ink-muted block mt-0.5">
                    Professional profile & discussions
                  </span>
                </div>
              </a>
            </div>

            {/* Quick Link to Calendar */}
            <div className="pt-4 border-t border-editorial-rule">
              <Link
                href="/book-a-conversation"
                className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-full bg-navy-950 text-white text-xs font-semibold hover:bg-navy-900 transition-all shadow-sm"
              >
                <Calendar className="w-3.5 h-3.5 text-blue-300" />
                <span>Prefer to schedule a call directly?</span>
              </Link>
            </div>
          </div>

          {/* Topics of Conversation */}
          <div className="bg-editorial-cream/40 border border-editorial-border rounded-xl p-6 sm:p-8 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold block">
              Open For Conversations Around
            </span>
            <ul className="space-y-2 text-xs text-ink-light">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-navy-950 mr-2" />
                <span>SigmaGo enterprise pilot programs and partnerships</span>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-navy-950 mr-2" />
                <span>Organizational decision intelligence and memory</span>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-navy-950 mr-2" />
                <span>Book, publishing, and serialization inquiries</span>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-navy-950 mr-2" />
                <span>Keynotes, executive workshops, and podcast interviews</span>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-navy-950 mr-2" />
                <span>Founder and seed-stage advisory discussions</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="lg:col-span-7 bg-white border border-editorial-border rounded-xl p-8 sm:p-10 shadow-card">
          <div className="space-y-2 pb-6 border-b border-editorial-rule mb-6">
            <h2 className="font-serif text-2xl sm:text-3xl text-ink font-normal">
              Send a Direct Message
            </h2>
            <p className="text-xs text-ink-muted">
              Please provide brief context so I can prepare a relevant response.
            </p>
          </div>

          {status === 'success' ? (
            <div className="p-8 text-center space-y-4 bg-emerald-50/60 rounded-xl border border-emerald-200">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <div className="space-y-1">
                <h3 className="font-serif text-2xl text-emerald-950 font-medium">
                  Message Transmitted
                </h3>
                <p className="text-sm text-emerald-800 font-light">
                  Thank you for reaching out. I have received your note and will get back to you shortly.
                </p>
              </div>
              <button
                onClick={() => setStatus('idle')}
                className="text-xs font-semibold text-emerald-900 underline pt-2"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Honeypot anti-spam trap */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="honeypot">Leave empty</label>
                <input
                  type="text"
                  id="honeypot"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-ink-light uppercase font-semibold block">
                    Full Name <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Elena Rostova"
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-editorial-border bg-surface focus:bg-white focus:outline-none focus:ring-1 focus:ring-ink"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-ink-light uppercase font-semibold block">
                    Email Address <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="elena@organization.com"
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-editorial-border bg-surface focus:bg-white focus:outline-none focus:ring-1 focus:ring-ink"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-ink-light uppercase font-semibold block">
                    Organization / Company
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. Apex Dynamics"
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-editorial-border bg-surface focus:bg-white focus:outline-none focus:ring-1 focus:ring-ink"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-ink-light uppercase font-semibold block">
                    Designation / Role
                  </label>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    placeholder="e.g. VP Engineering / CHRO"
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-editorial-border bg-surface focus:bg-white focus:outline-none focus:ring-1 focus:ring-ink"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-ink-light uppercase font-semibold block">
                  Primary Reason for Reaching Out <span className="text-rose-600">*</span>
                </label>
                <select
                  value={formData.reason}
                  onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-editorial-border bg-surface focus:bg-white focus:outline-none focus:ring-1 focus:ring-ink"
                >
                  {REASON_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-ink-light uppercase font-semibold block">
                  Message / Context <span className="text-rose-600">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details about your challenge, pilot interest, or discussion topic..."
                  className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-editorial-border bg-surface focus:bg-white focus:outline-none focus:ring-1 focus:ring-ink resize-y"
                />
              </div>

              {status === 'error' && (
                <div className="p-3 bg-rose-50 border border-rose-200 rounded text-xs text-rose-800 flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-3 px-6 rounded-full bg-navy-950 hover:bg-navy-900 text-white text-xs font-semibold transition-all shadow-sm flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{status === 'loading' ? 'Transmitting...' : 'Send Message'}</span>
              </button>

              <div className="pt-3 border-t border-editorial-rule flex items-center justify-between text-[11px] text-ink-muted">
                <div className="flex items-center space-x-1.5">
                  <Shield className="w-3.5 h-3.5 text-accent" />
                  <span>Spam protected · Zero data sharing</span>
                </div>
                <span>Direct delivery to Soma</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
