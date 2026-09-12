import React from 'react';

interface JsonLdProps {
  type: 'Person' | 'Book' | 'SoftwareApplication' | 'Article' | 'WebSite';
  data?: Record<string, any>;
}

export default function JsonLd({ type, data = {} }: JsonLdProps) {
  let schema: Record<string, any> = {
    '@context': 'https://schema.org',
  };

  if (type === 'Person') {
    schema = {
      ...schema,
      '@type': 'Person',
      name: 'Soma Kiran Gonella',
      jobTitle: 'HR Business Partner, Author, Decision Management Thinker, Builder of SigmaGo',
      description: 'HR Business Partner with 11+ years of experience across fintech and automotive R&D, exploring organizational decision intelligence and institutional memory.',
      email: 'mailto:soma.kiran20@gmail.com',
      telephone: '+91 93815 48500',
      url: 'https://somakirangonella.com',
      sameAs: [
        'https://www.linkedin.com',
      ],
      knowsAbout: [
        'Organizational Decision Intelligence',
        'Decision Management',
        'Human Resources Business Partnering',
        'Strategic HR Transformation',
        'Institutional Memory',
        'Policy Governance'
      ],
      ...data,
    };
  } else if (type === 'Book') {
    schema = {
      ...schema,
      '@type': 'Book',
      name: 'The Other Book',
      alternateName: 'The Other Book: Why every company keeps every rupee and loses every decision',
      author: {
        '@type': 'Person',
        name: 'Soma Kiran Gonella',
      },
      description: 'A study on why companies account for every currency unit, customer, and transaction while allowing the reasoning behind their critical decisions to dissolve into memory.',
      inLanguage: 'en',
      genre: 'Business & Management / Organizational Behavior',
      ...data,
    };
  } else if (type === 'SoftwareApplication') {
    schema = {
      ...schema,
      '@type': 'SoftwareApplication',
      name: 'SigmaGo',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Cloud / Web',
      description: 'A decision intelligence platform designed to help organizations record, retrieve, understand, and reuse decision context across structural, transactional, and exceptional boundaries.',
      creator: {
        '@type': 'Person',
        name: 'Soma Kiran Gonella',
      },
      ...data,
    };
  } else if (type === 'Article') {
    schema = {
      ...schema,
      '@type': 'Article',
      author: {
        '@type': 'Person',
        name: 'Soma Kiran Gonella',
      },
      publisher: {
        '@type': 'Person',
        name: 'Soma Kiran Gonella',
      },
      ...data,
    };
  } else if (type === 'WebSite') {
    schema = {
      ...schema,
      '@type': 'WebSite',
      name: 'Soma Kiran Gonella — Organizational Decision Intelligence',
      url: 'https://somakirangonella.com',
      description: 'The central digital home for Soma Kiran Gonella, author of The Other Book, builder of SigmaGo, and thinker on organizational decision intelligence.',
      ...data,
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
