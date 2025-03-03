import React, {PropsWithChildren} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {Page} from "@/components/layout/page";
import {LayoutContainer} from "@/components/layout/layout-container";
import {LayoutColumn} from "@/components/layout/layout-column";
import Link from "next/link";
import {hasProject} from "@/data/technology-utils";
import {PROJECTS} from "@/data/projects/data";

interface ProjectLayoutProps {
  params: Promise<{id: string}>
}

const ProjectLayout: React.FC<PropsWithChildren<ProjectLayoutProps>> = async (props) => {
  const projectId = (await props.params).id;
  if (!projectId) {
    throw Error('id must be set!');
  }

  const projectTitle = hasProject(projectId) ?
    PROJECTS[projectId].name : undefined;

  return (
    <Page>
      { /* Breadcrumbs
           FIXME: rework breadcrumb as a component and accessible
           https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/examples/breadcrumb/
      */ }
      <LayoutContainer>
        <LayoutColumn small={12}>
          <Link href={'.'}>Projets</Link>
          {
            projectTitle ?
              (<> <FontAwesomeIcon icon={faChevronRight} /> <em>{projectTitle}</em></>) : null
          }
        </LayoutColumn>
      </LayoutContainer>
      {props.children}
    </Page>
  )
}

export default ProjectLayout;