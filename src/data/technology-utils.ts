import React, {Children} from "react";
import {PROJECTS} from "@/data/projects/data";
import {TECHNOLOGIES} from "@/data/technology/data";

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

export const hasProject = (projectId: string): projectId is keyof typeof PROJECTS => {
  return projectId in PROJECTS;
}

export const hasTechnology = (technologyId: string): technologyId is keyof typeof TECHNOLOGIES => {
  return technologyId in TECHNOLOGIES;
}

export const isTechnologyWithProjects = (technologyId: string): boolean => {
  return hasTechnology(technologyId) &&
    !!Object.values(PROJECTS)
      .find((project) => project.technologies
        .map((technology) => technology.id)
        .indexOf(technologyId) !== -1)
}