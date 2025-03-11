import type { MetadataRoute } from 'next';
import { CONFIG } from '@/config';
import { listProjects } from '@/common/projects.actions';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allProjects = await listProjects();
  const allProjectPages: MetadataRoute.Sitemap = allProjects.map((project) => ({
    url: `https://${CONFIG.domain}/projects/${project.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.5,
  }));

  return [
    {
      url: `https://${CONFIG.domain}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `https://${CONFIG.domain}/skills`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `https://${CONFIG.domain}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...allProjectPages,
  ];
}
