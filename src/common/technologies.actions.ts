'use server';

import lodash from 'lodash';
import { listProjects } from '@/common/projects.actions';
import { hasTechnology } from '@/common/technologies.utils';

/**
 * Stores a list of technologies ids with at least one project.
 * Populated and used by isTechnologyWithProjects.
 */
let technologiesWithProjects: Set<string> | undefined = undefined;

export async function isTechnologyWithProjects(
  technologyId: string
): Promise<boolean> {
  if (!technologiesWithProjects) {
    const projects = await listProjects();
    technologiesWithProjects = new Set(
      lodash.flatMap(
        projects.map((project) =>
          project.technologies.map((technology) => technology.id)
        )
      )
    );
  }

  return (
    hasTechnology(technologyId) && technologiesWithProjects.has(technologyId)
  );
}
