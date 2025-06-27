import React, { useState } from 'react';
import Section from '@components/ui/Section';
import ProjectCard from '@components/ui/ProjectCard';
import Button from '@components/ui/Button';
import { projects } from '@/data/projects';

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll
    ? projects
    : projects.filter(project => project.featured);

  return (
    <Section
      id="projects"
      title="My Projects"
      subtitle="Check out some of my recent work"
      className="bg-white dark:bg-background-dark"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {!showAll && projects.length > displayedProjects.length && (
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setShowAll(true)}
          >
            View All Projects
          </Button>
        </div>
      )}
    </Section>
  );
};
