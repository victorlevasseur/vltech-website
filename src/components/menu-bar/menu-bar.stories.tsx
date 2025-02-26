import {Meta, StoryObj} from "@storybook/react";
import {MenuBar} from "./menu-bar";

const meta: Meta<typeof MenuBar> = {
  component: MenuBar,
  parameters: {
    withMargins: false,
  }
};

export default meta;
type Story = StoryObj<typeof MenuBar>;

export const Standard: Story = {
  args: {
    items: [
      { id: 'home', label: 'Accueil', href: '/', onlyRootPageActive: true },
      { id: 'foo', label: 'Foo', href: '/foo' },
      { id: 'bar', label: 'Bar', href: '/bar' },
    ],
    currentPathname: '/'
  }
}
