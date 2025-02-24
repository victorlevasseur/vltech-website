import {Meta, StoryObj} from "@storybook/react";
import {LinkButton} from "@/components/button/link-button";

const meta: Meta<typeof LinkButton> = {
  component: LinkButton,
}

export default meta;
type Story = StoryObj<typeof LinkButton>;

export const Primary: Story = {
  args: {
    label: 'Foobar',
    href: 'https://www.foobar.com/',
    variant: 'primary',
  }
};

export const Secondary: Story = {
  args: {
    label: 'Foobar',
    href: 'https://www.foobar.com/',
    variant: 'secondary',
  }
};
