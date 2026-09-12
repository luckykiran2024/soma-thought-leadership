export interface Article {
  slug: string;
  title: string;
  subtitle?: string;
  abstract: string;
  category: 'Decision Making' | 'Organizations' | 'Leadership' | 'People' | 'Technology' | 'AI' | 'SigmaGo';
  date: string;
  readTime: string;
  featured?: boolean;
  externalUrl?: string;
  source?: string;
  author: {
    name: string;
    role: string;
  };
  content: string;
  tags: string[];
}

export interface Framework {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  proposition: string;
  category: string;
  explanation: string;
  diagramType: 'four-r' | 'step' | 'flow' | 'comparison' | 'matrix';
  practicalExample: {
    context: string;
    conventionalApproach: string;
    decisionIntelligenceApproach: string;
    outcome: string;
  };
  relationshipToSigmaGo: string;
  relatedSlugs: string[];
}

export interface TimelineMilestone {
  period: string;
  role: string;
  organization: string;
  sector: string;
  description: string;
  achievements: string[];
  decisionInsight: string;
}

export interface Observation {
  id: string;
  observation: string;
  symptom: string;
  underlyingCause: string;
  decisionIntelligenceSolution: string;
}

export interface AppointmentType {
  id: string;
  title: string;
  duration: string;
  badge: string;
  description: string;
  intendedFor: string;
  googleBookingParam?: string;
}
