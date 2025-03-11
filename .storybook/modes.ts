import { ALL_VIEWPORTS } from './viewports';

export const ALL_MODES = ALL_VIEWPORTS.map((viewport) => ({
  [viewport.name]: {
    viewport: viewport.name,
  },
})).reduce((acc, viewport) => ({ ...acc, ...viewport }), {});
