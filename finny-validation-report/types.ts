
export interface Interview {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  fullTranscript: string;
  keyInsight: string;
  sentiment: 'positive' | 'neutral' | 'negative' | 'mixed';
  tags: string[];
}

export interface Proposal {
  id: number;
  title: string;
  problem: string;
  solution: string;
  feature: string;
  icon: string;
  evidence: string[];
  impact: string;
}

export interface InsightPoint {
  category: 'Green' | 'Yellow' | 'Red';
  title: string;
  description: string;
  evidence: string[];
}

export interface BehavioralPattern {
  id: number;
  title: string;
  caseStudy: string;
  finding: string;
  insight: string;
  strategy: string;
}

export enum Section {
  HERO = 'hero',
  METHODOLOGY = 'methodology',
  INTERVIEWS = 'interviews',
  ANALYSIS = 'analysis',
  BEHAVIOR = 'behavior',
  PROPOSALS = 'proposals',
  CONCLUSION = 'conclusion'
}
