'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, ExternalLink, Shield, CheckCircle2, User, Sparkles, BookOpen, Compass, Mail } from 'lucide-react';
import { APPOINTMENT_TYPES } from '@/lib/content';

export default function BookConversationPage() {
  const [selectedType, setSelectedType] = useState<string>('general');
  const [showEmbed, setShowEmbed] = useState<boolean>(false);

  // Read environment variable or fallback to Google Calendar appointment scheduling link
  const defaultBookingUrl =
    process.env.NEXT_PUBLIC_GOOGLE_BOOKING_URL ||
    'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Conversation+with+Soma+Kiran+Gonella&add=soma.kiran20@gmail.com';

  const currentAppointment = APPOINTMENT_TYPES.find((a) => a.id === selectedType) || APPOINTMENT_TYPES[0];

  const handleOpenGoogleBooking = () => {
    // Open in new tab securely
    window.open(defaultBookingUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-accent font-semibold">
          <Calendar className="w-3.5 h-3.5" />
          <span>Direct Calendar Scheduling</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-ink font-normal leading-tight">
          Book a Conversation
        </h1>
        <p className="font-serif text-xl sm:text-2xl italic text-navy-900 font-normal">
          Some ideas are better explored through conversation.
        </p>
        <p className="text-base text-ink-light leading-relaxed font-light">
          The main purpose of this platform is to grow my network. I would love to converse with founders, CHROs, engineering leaders, and practitioners navigating scale, organizational design, decision memory, or simply looking to exchange ideas.
        </p>
      </div>

      {/* Appointment Category Selection */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-editorial-rule pb-3">
          <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
            Select Conversation Focus
          </span>
          <span className="text-xs text-ink-muted">
            Choose the agenda that fits your inquiry
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {APPOINTMENT_TYPES.map((type) => {
            const isSelected = selectedType === type.id;
            return (
              <button
                key={type.id}
                onClick={() => {
                  setSelectedType(type.id);
                  setShowEmbed(false);
                }}
                className={`text-left p-5 rounded-xl border transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-navy-950 text-white border-navy-950 shadow-elevated ring-2 ring-navy-950/20'
                    : 'bg-white text-ink border-editorial-border hover:border-ink-muted/50 hover:bg-surface/50'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded ${
                        isSelected
                          ? 'bg-white/20 text-blue-200'
                          : 'bg-surface text-ink-muted border border-editorial-border'
                      }`}
                    >
                      {type.badge}
                    </span>
                    <span
                      className={`text-xs font-mono flex items-center ${
                        isSelected ? 'text-blue-300' : 'text-ink-muted'
                      }`}
                    >
                      <Clock className="w-3 h-3 mr-1" />
                      {type.duration}
                    </span>
                  </div>

                  <h3 className={`font-serif text-xl font-normal ${isSelected ? 'text-white' : 'text-ink'}`}>
                    {type.title}
                  </h3>

                  <p
                    className={`text-xs leading-relaxed font-light ${
                      isSelected ? 'text-slate-300' : 'text-ink-light'
                    }`}
                  >
                    {type.description}
                  </p>
                </div>

                <div
                  className={`pt-4 mt-4 border-t text-[11px] font-mono ${
                    isSelected ? 'border-navy-800 text-slate-300' : 'border-editorial-rule text-ink-muted'
                  }`}
                >
                  <strong className={isSelected ? 'text-white' : 'text-ink'}>Intended for: </strong>
                  {type.intendedFor}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Booking Action Card */}
      <div className="bg-white border border-editorial-border rounded-2xl p-8 sm:p-10 shadow-card space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-editorial-rule gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold block mb-1">
              Confirmed Format: {currentAppointment.duration}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-ink font-normal">
              {currentAppointment.title}
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleOpenGoogleBooking}
              className="px-6 py-3 rounded-full bg-navy-950 hover:bg-navy-900 text-white text-xs font-semibold transition-all shadow-sm flex items-center space-x-2 group"
            >
              <span>Schedule on Google Calendar</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <a
              href="mailto:soma.kiran20@gmail.com?subject=Schedule%20a%20Conversation%20with%20Soma%20Kiran%20Gonella"
              className="px-5 py-3 rounded-full border border-editorial-border bg-white hover:bg-surface text-ink text-xs font-semibold transition-colors flex items-center space-x-1.5 shadow-xs"
            >
              <Mail className="w-3.5 h-3.5 text-accent" />
              <span>Email Directly</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-ink-light">
          <div className="space-y-1">
            <strong className="text-ink block font-sans">Google Calendar Synchronized</strong>
            <p>
              Integrated directly with Google Calendar Appointment Scheduling for <span className="font-mono text-ink">soma.kiran20@gmail.com</span>.
            </p>
          </div>

          <div className="space-y-1">
            <strong className="text-ink block font-sans">Instant Confirmation</strong>
            <p>
              You will automatically receive Google’s standard calendar invite with a Google Meet link and confirmation email.
            </p>
          </div>

          <div className="space-y-1">
            <strong className="text-ink block font-sans">Privacy Guarded</strong>
            <p>
              Only explicitly designated available slots are presented. Personal calendar details remain completely private.
            </p>
          </div>
        </div>

        {/* Toggleable Embed View */}
        <div className="pt-4 border-t border-editorial-rule flex flex-col items-center justify-center space-y-4">
          <button
            onClick={() => setShowEmbed(!showEmbed)}
            className="text-xs font-semibold text-accent hover:text-navy-900 underline"
          >
            {showEmbed ? 'Hide embedded scheduler' : 'Preview inline calendar scheduler here'}
          </button>

          {showEmbed && (
            <div className="w-full h-[650px] border border-editorial-border rounded-xl overflow-hidden bg-surface relative">
              <iframe
                src={defaultBookingUrl}
                width="100%"
                height="100%"
                frameBorder="0"
                title="Google Calendar Appointment Schedule"
                className="w-full h-full"
              />
            </div>
          )}
        </div>

        {/* Warm Closing Note */}
        <div className="p-4 rounded-lg bg-editorial-cream/80 border border-editorial-border text-center">
          <p className="font-serif italic text-sm text-navy-950">
            "Looking forward to the conversation."
          </p>
          <span className="text-[11px] text-ink-muted block mt-1">
            If you experience any scheduling difficulty, feel free to email directly at{' '}
            <a href="mailto:soma.kiran20@gmail.com" className="underline text-accent">
              soma.kiran20@gmail.com
            </a>
          </span>
        </div>
      </div>

      {/* Alternative direct inquiry link */}
      <div className="text-center text-xs text-ink-muted">
        Prefer to send a written summary first?{' '}
        <Link href="/contact" className="text-ink font-medium underline hover:text-accent">
          Submit context via the contact form
        </Link>
      </div>
    </div>
  );
}
