import React from "react";
import {NextPage} from "next";
import {PROJECTS} from "@/data/projects/data";
import {LayoutContainer} from "@/components/layout/layout-container";
import {LayoutColumn} from "@/components/layout/layout-column";
import {hasProject} from "@/data/technology-utils";
import {notFound} from "next/navigation";
import {Project} from "@/data/projects/project";
import {TechnologiesCard} from "@/components/card/technologies-card/technologies-card";

interface ProjectPageProps {
  params: Promise<{id: string}>
}

const ProjectPage: NextPage<ProjectPageProps> = async (props) => {
  const projectId = (await props.params).id;
  if (!projectId) {
    throw Error('id must be set!');
  }

  if (!hasProject(projectId)) {
    return notFound();
  }

  const project: Project = PROJECTS[projectId];

  return (
    <LayoutContainer>
      <LayoutColumn small={12}>
        <hgroup>
          <h1>{project.name}</h1>
          <p>{project.summary}</p>
        </hgroup>
      </LayoutColumn>
      <LayoutColumn small={12} medium={8}>
        <p>
          {
            typeof project.content === 'string' ?
              project.content :
              <project.content />
          }
        </p>
      </LayoutColumn>
      <LayoutColumn small={12} medium={4}>
        <TechnologiesCard technologies={project.technologies} />
      </LayoutColumn>
    </LayoutContainer>
  )
}

export default ProjectPage;