'use client';

import React, { useState } from 'react';
import { Share2, Check, Link2, Linkedin, Twitter } from 'lucide-react';

interface SocialShareProps {
  title: string;
  url?: string;
}

export default function SocialShare({ title, url }: SocialShareProps) {
  const [copied, setCopied] = useState(false);

  const getUrl = () => {
    if (typeof window !== 'undefined') {
      return url || window.location.href;
    }
    return url || '';
  };

  const handleCopyLink = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(getUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleLinkedInShare = () => {
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(getUrl())}`;
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
  };

  const handleTwitterShare = () => {
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(getUrl())}`;
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex items-center space-x-2">
      <span className="text-xs text-ink-muted mr-1 font-medium hidden sm:inline">Share:</span>
      <button
        onClick={handleLinkedInShare}
        className="p-2 rounded-full border border-editorial-border bg-white hover:bg-slate-50 text-ink-muted hover:text-[#0A66C2] transition-colors"
        title="Share on LinkedIn"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="w-3.5 h-3.5" />
      </button>

      <button
        onClick={handleTwitterShare}
        className="p-2 rounded-full border border-editorial-border bg-white hover:bg-slate-50 text-ink-muted hover:text-ink transition-colors"
        title="Share on X"
        aria-label="Share on X"
      >
        <Twitter className="w-3.5 h-3.5" />
      </button>

      <button
        onClick={handleCopyLink}
        className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-editorial-border bg-white hover:bg-slate-50 text-xs font-medium text-ink-light transition-colors"
        title="Copy article link"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-emerald-700">Copied</span>
          </>
        ) : (
          <>
            <Link2 className="w-3.5 h-3.5 text-ink-muted" />
            <span>Copy Link</span>
          </>
        )}
      </button>
    </div>
  );
}
