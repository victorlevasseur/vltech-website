import { Project } from '@/data/projects/project';
import { InfoCard } from '@/components/card/info-card';
import Link from 'next/link';

import styles from './project-card.module.scss';

export interface ProjectCardProps {
  project: Project;
  href: string;
}

export function ProjectCard({ project, href }: ProjectCardProps) {
  const technologiesNames = project.technologies
    .slice(0, 5)
    .map((technology) => technology.name);

  return (
    <Link href={href} className={'no-link-style'}>
      <InfoCard title={project.name} fullHeight>
        <p>{project.summary}</p>
        <p className={styles.technologiesList}>
          {technologiesNames.join(', ')}
        </p>
      </InfoCard>
    </Link>
  );
}
