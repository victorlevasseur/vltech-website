'use server';

import { Project } from '@/data/projects/project';
import { TECHNOLOGIES } from '@/data/technology/data';
import { hasTechnology } from '@/common/technologies.utils';
import { ProjectMDX } from '@/data/projects/project-mdx';
import { listFilesInFolder } from '@/common/fs.actions';

export async function readProject(projectId: string): Promise<Project> {
  'use server';
  const projectMdx: ProjectMDX = await import(
    '@/data/projects/contents/' + projectId + '.mdx'
  );
  return parseProjectMdx(projectId, projectMdx);
}

export async function listProjectIds(): Promise<string[]> {
  'use server';
  return await listFilesInFolder('src/data/projects/contents', 'mdx');
}

export async function listProjects(): Promise<Project[]> {
  'use server';
  const projectIds = await listProjectIds();

  return await Promise.all(
    projectIds.map((projectId) => readProject(projectId))
  );
}

function parseProjectMdx(projectId: string, projectMdx: ProjectMDX): Project {
  if (!projectMdx.frontmatter?.name) {
    throw Error('Project name is missing!');
  }
  if (!projectMdx.frontmatter?.summary) {
    throw Error('Project summary is missing!');
  }
  if (!projectMdx.frontmatter?.technologies) {
    throw Error('Project technologies are missing!');
  }

  return {
    id: projectId,
    name: projectMdx.frontmatter.name,
    summary: projectMdx.frontmatter.summary,
    content: projectMdx.default,
    technologies: projectMdx.frontmatter.technologies
      .filter(hasTechnology)
      .map((technologyId) => TECHNOLOGIES[technologyId]),
  };
}
