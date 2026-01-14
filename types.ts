export interface Project {
  title: string;
  date: string;
  role: string;
  description: string;
  tags: string[];
}

export interface Experience {
  company: string;
  role: string;
  date: string;
  description: string[];
}

export interface Achievement {
  title: string;
  event: string;
  date: string;
  rank: string;
  description: string;
}

export interface Publication {
  title: string;
  journal: string;
  date: string;
  doi: string;
}

export interface SkillItem {
  name: string;
  iconUrl?: string; // Optional URL for the logo
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}