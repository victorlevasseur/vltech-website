import React from 'react';
import { NextPage } from 'next';
import { LayoutContainer } from '@/components/layout/layout-container';
import { LayoutColumn } from '@/components/layout/layout-column';
import { readProject } from '@/common/projects.actions';
import { notFound } from 'next/navigation';
import { TechnologiesCard } from '@/components/card/technologies-card/technologies-card';
import { Page } from '@/components/layout/page';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface ProjectPageProps {
  params: Promise<{id: string}>
}

const ProjectPage: NextPage<ProjectPageProps> = async (props) => {
  const projectId = (await props.params).id;
  if (!projectId) {
    throw Error('id must be set!');
  }

  try {
    const project = await readProject(projectId);

    return (
      <Page>
        { /* Breadcrumbs
           FIXME: rework breadcrumb as a component and accessible
           https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/examples/breadcrumb/
          */ }
        <LayoutContainer>
          <LayoutColumn small={12}>
            <Link href={'.'}>Projets</Link> <FontAwesomeIcon icon={faChevronRight} /> <em>{project.name}</em>
          </LayoutColumn>
        </LayoutContainer>
        <LayoutContainer>
          <LayoutColumn small={12}>
            <hgroup>
              <h1>{project.name}</h1>
              <p>{project.summary}</p>
            </hgroup>
          </LayoutColumn>
          <LayoutColumn small={12} medium={8}>
            <project.content
              components={{ h1: 'h2', h2: 'h3', h3: 'h4', h4: 'h5', h5: 'h6' }} /> { /* TODO: custom MDX components: https://mdxjs.com/table-of-components/ */ }
          </LayoutColumn>
          <LayoutColumn small={12} medium={4}>
            <TechnologiesCard technologies={project.technologies} />
          </LayoutColumn>
        </LayoutContainer>
      </Page>
    )
  } catch (err) {
    console.log(err);
    return notFound();
  }
}

export default ProjectPage;