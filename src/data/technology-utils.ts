import React, { Children } from 'react';
import lodash from 'lodash';
import { Technology } from '@/data/technology/technology';
import { TECHNOLOGIES, TECHNOLOGIES_CATEGORIES } from '@/data/technology/data';
import { MDXContent } from 'mdx/types';
import { Project } from '@/data/projects/project';

export const parseTechKeywordFilter = (children?: React.ReactNode, override?: string) => {
  const childrenArray = Children.toArray(children);
  const computedTechnologyId = childrenArray
    .filter((child) => typeof child === "string")
    .reduce((text, part) => text + part, '');

  const technologyId = (override ?? computedTechnologyId)
    .toLowerCase()
    .replaceAll(' ', '-')
    .replaceAll('.', '');

  if (!technologyId) {
    throw Error('Unable to compute TechKeyword technology id, please provide one manually as a prop.');
  }

  return technologyId;
}

export const hasTechnology = (technologyId: string): technologyId is keyof typeof TECHNOLOGIES => {
  return technologyId in TECHNOLOGIES;
}

export const isTechnologyWithProjects = (technologyId: string): boolean => {
  return hasTechnology(technologyId); // FIXME: reimplement project search from tech with MDX.
}

export const groupAndSortTechnologies = (technologies: Technology[]) => {
  return lodash.chain(technologies)
    .groupBy((technology) => technology.category.id)
    .toPairs()
    .filter((pair): pair is [keyof typeof TECHNOLOGIES_CATEGORIES, Technology[]] =>
      pair[0] in TECHNOLOGIES_CATEGORIES)
    .map(([categoryId, technologies]) => ({
      category: TECHNOLOGIES_CATEGORIES[categoryId],
      technologies: technologies.sort((a, b) => a.name.localeCompare(b.name)),
    }))
    .sort((categoryA, categoryB) =>
      categoryA.category.priority - categoryB.category.priority)
    .value();
}

interface ProjectMDX {
  default: MDXContent;
  frontmatter: {
    name: string;
    summary: string;
    technologies: string[];
  }
}

export const parseProjectMdx =
  (projectId: string, projectMdx: ProjectMDX): Project => {
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
      .map((technologyId) => TECHNOLOGIES[technologyId])
  }
}

