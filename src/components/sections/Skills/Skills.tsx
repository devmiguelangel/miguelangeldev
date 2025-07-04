import Section from '@components/ui/Section';
import SkillCategoryCard from '@components/ui/SkillCategoryCard';
import { skillCategories } from '@/data/skills';
import type { SkillCategory } from '@/types';

export const Skills = () => {
  return (
    <Section
      id="skills"
      title="Technical Skills"
      subtitle="Technologies and tools I'm proficient with"
      className="bg-surface-light dark:bg-surface-dark"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat: SkillCategory) => (
          <SkillCategoryCard
            key={cat.title}
            title={cat.title}
            icon={cat.icon}
            iconColorClass={cat.iconColorClass}
            skills={cat.skills}
          />
        ))}
      </div>
    </Section>
  );
};
