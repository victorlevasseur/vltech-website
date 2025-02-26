import {Viewport, ViewportMap} from "@storybook/addon-viewport";

export const ALL_VIEWPORTS: Viewport[] = [
  {
    name: 'xsmall',
    type: 'mobile',
    styles: {
      width: '420px',
      height: '750px',
    }
  },
  {
    name: 'small',
    type: 'mobile',
    styles: {
      width: '576px',
      height: '800px',
    }
  },
  {
    name: 'medium',
    type: 'tablet',
    styles: {
      width: '768px',
      height: '1024px',
    }
  },
  {
    name: 'large',
    type: 'desktop',
    styles: {
      width: '992px',
      height: '800px',
    }
  },
  {
    name: 'xlarge',
    type: 'desktop',
    styles: {
      width: '1200px',
      height: '900px',
    }
  },
  {
    name: 'xxlarge',
    type: 'desktop',
    styles: {
      width: '1440px',
      height: '900px',
    }
  }
]

export const VIEWPORTS: ViewportMap = ALL_VIEWPORTS
  .map((viewport) => ({
    [viewport.name]: viewport
  }))
  .reduce((acc, viewport) => ({...acc, ...viewport}), {})