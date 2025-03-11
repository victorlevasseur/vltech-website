import { Project } from '@/data/projects/project';
import { LayoutColumn } from '@/components/layout/layout-column';
import { ProjectCard } from '@/components/card/project-card/project-card';

export interface ProjectsListProps {
  projects: Project[];
}

export function ProjectsList(props: ProjectsListProps) {
  return (
    <>
      {props.projects.map((project) => (
        <LayoutColumn key={project.id} small={12} medium={6}>
          <ProjectCard project={project} href={'/projects/' + project.id} />
        </LayoutColumn>
      ))}
    </>
  );
}
