import type { MetadataRoute } from 'next';
import { CONFIG } from '@/config';

export default function sitemap(): MetadataRoute.Sitemap {
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
      priority: 2,
    },
  ];
}
