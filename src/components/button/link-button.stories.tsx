import { Meta, StoryObj } from '@storybook/react';
import { LinkButton } from '@/components/button/link-button';
import { expect, within } from '@storybook/test';

const meta: Meta<typeof LinkButton> = {
  component: LinkButton,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = await canvas.findByText('Foobar');
    await expect(link.getAttribute('href')).toEqual('https://www.foobar.com/');
  },
};

export default meta;
type Story = StoryObj<typeof LinkButton>;

export const Primary: Story = {
  args: {
    label: 'Foobar',
    href: 'https://www.foobar.com/',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Foobar',
    href: 'https://www.foobar.com/',
    variant: 'secondary',
  },
};
