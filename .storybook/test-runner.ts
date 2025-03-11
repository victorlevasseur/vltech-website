import { getStoryContext, TestRunnerConfig } from '@storybook/test-runner';
import { checkA11y, injectAxe } from 'axe-playwright';
import { VIEWPORTS } from './viewports';

const DEFAULT_VIEWPORT_SIZE = { width: 1200, height: 900 };

const config: TestRunnerConfig = {
  async preVisit(page, story) {
    const context = await getStoryContext(page, story);

    // Set the viewport to the default viewport of the story
    // to best mimic Storybook behavior.
    const viewportName = context.parameters?.viewport?.defaultViewport;
    const viewportParameter = VIEWPORTS[viewportName];

    if (viewportParameter) {
      const viewportSize = Object.entries(
        viewportParameter.styles ?? {}
      ).reduce(
        (acc, [screen, size]) => ({
          ...acc,
          // make sure your viewport config in Storybook only uses numbers, not percentages
          [screen]: parseInt(size),
        }),
        DEFAULT_VIEWPORT_SIZE
      );

      await page.setViewportSize(viewportSize);
    } else {
      await page.setViewportSize(DEFAULT_VIEWPORT_SIZE);
    }

    await injectAxe(page);
  },
  async postVisit(page) {
    await checkA11y(
      page,
      'body',
      {
        detailedReport: true,
        detailedReportOptions: {
          html: true,
        },
      },
      true
    );
  },
};

export default config;
