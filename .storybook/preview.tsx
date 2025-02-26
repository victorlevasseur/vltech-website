import type { Preview } from '@storybook/react';

import '../src/styles/globals/globals.scss';

const preview: Preview = {
  decorators: [
    (Story, context) => {
      // A decorator to force paddings, even for Chromatic,
      // (which ignores the default layout margins...).
      //
      // Add a "withMargins" parameter (true by default) to allow stories to
      // disable the padding.
      console.log(context);
      if (context.parameters.withMargins === false) {
        return (<Story />);
      } else {
        return (
          <div style={{ padding: '16px' }}>
            <Story />
          </div>
        )
      }
    }
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'fullscreen',
  },
};

export default preview;
