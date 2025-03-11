import React from 'react';
import { LayoutContainer } from '@/components/layout/layout-container';
import { LayoutColumn } from '@/components/layout/layout-column';
import { Page } from '@/components/layout/page';
import { listProjects } from '@/common/projects.actions';
import { ProjectsList } from '@/app/projects/projects-list';

const ProjectsPage: React.FC<{
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}> = async () => {
  // TODO: Support filters. const searchParams = await props.searchParams;

  const projects = await listProjects();

  return (
    <Page>
      <LayoutContainer>
        <LayoutColumn small={12}>
          <h1>Projets</h1>
          <p>
            Retrouvez ici des projets que j&apos;ai pu réaliser ou auxquels
            j&apos;ai contribué.
          </p>
        </LayoutColumn>
        <ProjectsList projects={projects} />
      </LayoutContainer>
    </Page>
  );
};

export default ProjectsPage;
