'use client';

import React, { useState } from 'react';
import { CheckCircle2, Mail } from 'lucide-react';

export default function BookNewsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="p-5 bg-emerald-50 rounded-lg border border-emerald-200 text-center space-y-2">
        <CheckCircle2 className="w-6 h-6 text-emerald-600 mx-auto" />
        <span className="text-xs font-semibold text-emerald-900 block font-serif text-sm">
          Priority Reservation Confirmed
        </span>
        <p className="text-[11px] text-emerald-800 leading-relaxed font-light">
          You will receive chapter previews and early release notifications at {email}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your professional email"
          className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-editorial-border bg-white text-ink focus:outline-none focus:ring-1 focus:ring-ink"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2.5 px-4 rounded-lg bg-navy-950 text-white text-xs font-semibold hover:bg-navy-900 transition-colors shadow-sm flex items-center justify-center space-x-1.5"
      >
        <Mail className="w-3.5 h-3.5" />
        <span>Notify Me on Release</span>
      </button>
    </form>
  );
}
