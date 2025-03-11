import { Technology } from '@/data/technology/technology';
import { MDXContent } from 'mdx/types';

export interface Project {
  id: string;

  name: string;
  summary: string;

  content: MDXContent;

  technologies: Technology[];
}
