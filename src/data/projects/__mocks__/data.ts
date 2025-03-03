import {TECHNOLOGIES} from "@/data/technology/__mocks__/data";

export const PROJECTS = {
  'projectA': {
    id: 'projectA',
    name: 'Projet A',
    summary: 'Cool comme projet A',
    content: `
      Super projet A
    `,
    technologies: [
      TECHNOLOGIES.victorscript,
      TECHNOLOGIES.totorCloud
    ]
  },
  'projectB': {
    id: 'projectB',
    name: 'Projet B',
    summary: 'Cool comme projet B',
    content: `
      Super projet B
    `,
    technologies: [
      TECHNOLOGIES.totorCloud,
      TECHNOLOGIES.arthurscript,
      TECHNOLOGIES.victorscript
    ]
  },
};
