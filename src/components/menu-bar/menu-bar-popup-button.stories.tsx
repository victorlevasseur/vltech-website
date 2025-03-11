import { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import { MenuBarPopupButton } from '@/components/menu-bar/menu-bar-popup-button';

const meta: Meta<typeof MenuBarPopupButton> = {
  component: MenuBarPopupButton,
  args: {
    label: 'Foobar',
    active: false,
    onClick: fn(),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));

    await expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};

export default meta;
type Story = StoryObj<typeof MenuBarPopupButton>;

export const Standard: Story = {};

export const Hover: Story = {
  parameters: {
    pseudo: {
      hover: true,
    },
  },
};

export const Active: Story = {
  args: {
    active: true,
  },
};

export const ActiveAndHover: Story = {
  args: {
    active: true,
  },
  parameters: {
    pseudo: {
      hover: true,
    },
  },
};
