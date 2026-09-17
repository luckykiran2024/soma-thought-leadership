'use client';

import React from 'react';

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  // Split content by double newlines into blocks
  const blocks = content.trim().split(/\n\s*\n/);

  return (
    <div className="space-y-6 text-ink-light font-sans font-light leading-relaxed text-base sm:text-lg">
      {blocks.map((block, idx) => {
        const trimmed = block.trim();

        // Heading 3
        if (trimmed.startsWith('### ')) {
          return (
            <h3
              key={idx}
              className="font-serif text-2xl sm:text-3xl text-ink font-normal mt-10 mb-4 pt-2 border-t border-editorial-rule/40 first:mt-0 first:pt-0 first:border-0"
            >
              {trimmed.replace(/^###\s+/, '')}
            </h3>
          );
        }

        // Heading 2
        if (trimmed.startsWith('## ')) {
          return (
            <h2
              key={idx}
              className="font-serif text-3xl sm:text-4xl text-ink font-normal mt-12 mb-4 pt-4 border-t border-editorial-rule"
            >
              {trimmed.replace(/^##\s+/, '')}
            </h2>
          );
        }

        // Blockquote
        if (trimmed.startsWith('> ')) {
          return (
            <blockquote
              key={idx}
              className="p-6 bg-editorial-cream/70 border-l-4 border-ink rounded-r-lg font-serif italic text-ink my-6 leading-relaxed"
            >
              {trimmed.replace(/^>\s*/gm, '')}
            </blockquote>
          );
        }

        // Unordered list
        if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
          const items = trimmed.split(/\n/).filter(line => line.trim().length > 0);
          return (
            <ul key={idx} className="space-y-2.5 my-4 pl-5 list-disc marker:text-accent">
              {items.map((item, itemIdx) => {
                const text = item.replace(/^[-*]\s+/, '');
                return (
                  <li key={itemIdx} className="leading-relaxed">
                    <span dangerouslySetInnerHTML={{ __html: formatInline(text) }} />
                  </li>
                );
              })}
            </ul>
          );
        }

        // Ordered list
        if (/^\d+\.\s+/.test(trimmed)) {
          const items = trimmed.split(/\n/).filter(line => line.trim().length > 0);
          return (
            <ol key={idx} className="space-y-2.5 my-4 pl-5 list-decimal marker:text-ink-muted font-mono text-sm sm:text-base">
              {items.map((item, itemIdx) => {
                const text = item.replace(/^\d+\.\s+/, '');
                return (
                  <li key={itemIdx} className="font-sans leading-relaxed">
                    <span dangerouslySetInnerHTML={{ __html: formatInline(text) }} />
                  </li>
                );
              })}
            </ol>
          );
        }

        // Standard Paragraph
        return (
          <p
            key={idx}
            className="leading-relaxed"
            dangerouslySetInnerHTML={{ __html: formatInline(trimmed) }}
          />
        );
      })}
    </div>
  );
}

// Inline formatting for **bold**, *italic*, and [link](url)
function formatInline(str: string): string {
  return str
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-medium text-ink">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="italic font-serif text-ink">$1</em>')
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-accent underline underline-offset-4 hover:text-navy-900">$1</a>');
}
