import {ProjectCard} from '@/components/ui/ProjectCard';

type Project = {
  title: string;
  summary: string;
  tags: string[];
};

type ProjectGridProps = {
  projects: Project[];
};

export function ProjectGrid({projects}: ProjectGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.title} title={project.title} summary={project.summary} tags={project.tags} />
      ))}
    </div>
  );
}
