import {Meta, StoryObj} from "@storybook/react";
import MenuBarLink from "@/components/menu-bar/menu-bar-link";
import {expect, within} from "@storybook/test";

const meta: Meta<typeof MenuBarLink> = {
  component: MenuBarLink,
  args: {
    label: 'Foobar',
    href: 'https://www.foobar.com/',
  },
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link');
    await expect(link.getAttribute('href')).toEqual('https://www.foobar.com/');
  }
};

export default meta;
type Story = StoryObj<typeof MenuBarLink>;

export const Standard: Story = {}

export const StandardAndHover: Story = {
  parameters: {
    pseudo: {
      hover: true
    }
  }
}

export const Active: Story = {
  args: {
    active: true,
  }
}

export const ActiveAndHover: Story = {
  args: {
    active: true,
  },
  parameters: {
    pseudo: {
      hover: true
    }
  }
}
