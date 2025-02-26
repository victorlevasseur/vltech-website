import type {Preview} from '@storybook/react';

import '../src/styles/globals/globals.scss';
import {StoryDecorator} from "./story-decorator";
import {VIEWPORTS} from "./viewports";

const preview: Preview = {
  decorators: [
    StoryDecorator
  ],
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
        ...VIEWPORTS
      }
    }
  },
};

export default preview;
