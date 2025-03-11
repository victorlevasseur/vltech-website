import { MDXContent } from 'mdx/types';

export interface ProjectMDX {
  default: MDXContent;
  frontmatter: {
    name: string;
    summary: string;
    technologies: string[];
  };
}
