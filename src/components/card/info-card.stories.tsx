import {Meta, StoryObj} from "@storybook/react";
import {InfoCard} from "@/components/card/info-card";

const meta: Meta<typeof InfoCard> = {
  component: InfoCard,
  render: (args) => (
    <InfoCard {...args}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Duis eu nulla laoreet, sagittis tellus at, sodales nisi.
        Nunc dignissim efficitur feugiat. Praesent nec mattis purus.
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Donec placerat dolor eros, quis facilisis massa dictum non.
        Pellentesque volutpat nisl non diam fermentum rutrum.
      </p>
    </InfoCard>
  )
}

export default meta;
type Story = StoryObj<typeof InfoCard>;

export const Standard: Story = {
  args: {
    title: 'Card title'
  }
}

export const StandardAndHover: Story = {
  args: {
    title: 'Card title'
  },
  parameters: {
    pseudo: {
      hover: true
    }
  }
}

export const WithLink: Story = {
  args: {
    title: 'Card title',
    link: {
      label: 'Go there',
      href: 'https://www.google.com/'
    }
  }
}