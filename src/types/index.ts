export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  proficiency: number; // 1-5
  category: 'frontend' | 'backend' | 'devops' | 'other';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavLink {
  name: string;
  href: string;
}
