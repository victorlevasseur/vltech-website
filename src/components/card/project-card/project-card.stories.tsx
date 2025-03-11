import { Meta, StoryObj } from '@storybook/react';
import { ProjectCard } from '@/components/card/project-card/project-card';
import { Project } from '@/data/projects/project';
import { TECHNOLOGIES } from '@/data/technology/data';

const meta: Meta<typeof ProjectCard> = {
  component: ProjectCard,
  render: (args) => <ProjectCard {...args} />,
};

export default meta;
type Story = StoryObj<typeof ProjectCard>;

const project: Project = {
  id: 'lorem',
  name: 'Project Lorem Ipsum',
  summary:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ipsum metus, pretium vel pulvinar non.',
  content: () => <></>,
  technologies: [
    { ...TECHNOLOGIES.java },
    { ...TECHNOLOGIES['spring-boot'] },
    { ...TECHNOLOGIES.grpc },
    { ...TECHNOLOGIES.aws },
    { ...TECHNOLOGIES.typescript },
    { ...TECHNOLOGIES.sass },
    { ...TECHNOLOGIES['gitlab-ci'] },
  ],
};

export const Standard: Story = {
  args: {
    project,
    href: 'https://github.com/lorem/ipsum',
  },
};

export const StandardAndHover: Story = {
  args: {
    project,
    href: 'https://github.com/lorem/ipsum',
  },
  parameters: {
    pseudo: {
      hover: true,
    },
  },
};
