import type { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Backend Development',
    icon: 'Server',
    iconColorClass: 'text-blue-500',
    skills: [
      { name: 'Python', icon: 'SiPython' },
      { name: 'PHP', icon: 'SiPhp' },
      { name: 'FastAPI', icon: 'SiFastapi' },
      { name: 'Laravel', icon: 'SiLaravel' },
      { name: 'NestJS', icon: 'SiNestjs' },
      { name: 'PostgreSQL', icon: 'SiPostgresql' },
      { name: 'MySQL', icon: 'SiMysql' },
      { name: 'Redis', icon: 'SiRedis' },
    ],
  },
  {
    title: 'DevOps',
    icon: 'GitBranch',
    iconColorClass: 'text-green-500',
    skills: [
      { name: 'Kubernetes', icon: 'SiKubernetes' },
      { name: 'Docker', icon: 'SiDocker' },
      { name: 'GitHub Actions', icon: 'SiGithubactions' },
      { name: 'AWS', icon: 'SiCloudways' },
    ],
  },
  {
    title: 'Frontend',
    icon: 'Code2',
    iconColorClass: 'text-purple-500',
    skills: [
      { name: 'JavaScript', icon: 'SiJavascript' },
      { name: 'React', icon: 'SiReact' },
      { name: 'Next.js', icon: 'SiNextdotjs' },
      { name: 'TypeScript', icon: 'SiTypescript' },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
    ],
  },
];
