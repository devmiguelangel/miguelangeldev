import React from 'react';
import * as LucideIcons from 'lucide-react';
import * as SimpleIcons from '@icons-pack/react-simple-icons';
import type { Skill } from '@/types';

interface SkillCategoryCardProps {
  title: string;
  icon: string;
  iconColorClass: string;
  skills: Skill[];
}

const SkillCategoryCard: React.FC<SkillCategoryCardProps> = ({ title, icon, iconColorClass, skills }) => {
  // Dynamically get the Lucide icon component
  const IconComponent = LucideIcons[icon as keyof typeof LucideIcons] as React.ComponentType<{ size?: number }>;

  return (
    <div className="bg-[#f4f4f9] dark:bg-[#101623] rounded-xl p-6 flex flex-col gap-4 shadow-md">
      <div className="flex items-center gap-3 mb-2">
        {IconComponent && (
          <span className={`text-2xl ${iconColorClass}`}>
            <IconComponent size={28} />
          </span>
        )}
        <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => {
          // Dynamically get the Simple Icon component
          const SkillIcon = SimpleIcons[skill.icon as keyof typeof SimpleIcons] as React.ComponentType<{ size?: number }>;

          return (
            <span
              key={skill.name}
              className="bg-[#192b4b] text-gray-100 px-4 py-2 rounded-full text-sm font-medium shadow-sm flex items-center gap-2"
            >
              {SkillIcon && <SkillIcon size={16} />}
              {skill.name}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default SkillCategoryCard;
