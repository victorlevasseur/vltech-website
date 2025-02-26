import {Meta, StoryObj} from "@storybook/react";
import {MenuBar} from "./menu-bar";
import {ALL_MODES} from "../../../.storybook/modes";
import {userEvent, within} from "@storybook/test";

const meta: Meta<typeof MenuBar> = {
  component: MenuBar,
  args: {
    items: [
      { id: 'home', label: 'Accueil', href: '/', onlyRootPageActive: true },
      { id: 'foo', label: 'Foo', href: '/foo' },
      { id: 'bar', label: 'Bar', href: '/bar' },
    ],
    currentPathname: '/'
  },
  parameters: {
    withMargins: false,
    chromatic: {
      modes: ALL_MODES
    }
  }
};

export default meta;
type Story = StoryObj<typeof MenuBar>;

export const Standard: Story = {}

export const WithMobileMenuOpen: Story = {
  parameters: {
    chromatic: {
      modes: [
        ALL_MODES.xsmall,
        ALL_MODES.small,
        ALL_MODES.medium,
      ]
    },
    viewport: {
      defaultViewport: 'small'
    }
  },
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
  }
}