import { Technology } from '@/data/technology/technology';
import { MDXContent } from 'mdx/types';

export interface Project {
  id: string;

  name: string;
  summary: string;

  content: MDXContent;

  technologies: Technology[];

  /**
   * All projects with undefined priority will be ordered as read on
   * the filesystem (alphabetical).
   */
  priority?: number;
}
