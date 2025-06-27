import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '@/types';
import Button from './Button';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group overflow-hidden rounded-lg bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 shadow-md transition-all hover:shadow-lg">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center rounded-full bg-primary-50 dark:bg-primary-900/30 px-2.5 py-0.5 text-xs font-medium text-primary-700 dark:text-primary-300"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-800 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:text-gray-200">
              +{project.tags.length - 3} more
            </span>
          )}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{project.description}</p>
        <div className="flex gap-3 mt-auto">
          {project.demoUrl && (
            <Button variant="primary" size="sm" className="flex items-center gap-1.5">
              <ExternalLink size={16} />
              <span>Demo</span>
            </Button>
          )}
          {project.repoUrl && (
            <Button variant="outline" size="sm" className="flex items-center gap-1.5">
              <Github size={16} />
              <span>Code</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
