import type { Preview } from '@storybook/react';

import { StoryDecorator } from './story-decorator';
import { VIEWPORTS } from './viewports';

import '../src/styles/globals/globals.scss';

const preview: Preview = {
  decorators: [StoryDecorator],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'fullscreen',
    viewport: {
      viewports: {
        ...VIEWPORTS,
      },
    },
  },
};

export default preview;
