import { expect } from '@jest/globals';
import { isTechnologyWithProjects } from './technologies.actions';

jest.mock('../data/technology/data');

jest.mock('./projects.actions', () => ({
  listProjects: () =>
    Promise.resolve([
      {
        id: 'p1',
        name: 'Project 1',
        content: () => <></>,
        summary: 'Lorem ipsum',
        technologies: [
          {
            id: 'arthurscript',
          },
          {
            id: 'totorCloud',
          },
        ],
      },
      {
        id: 'p2',
        name: 'Project 2',
        content: () => <></>,
        summary: 'Lorem ipsum',
        technologies: [
          {
            id: 'victorscript',
          },
        ],
      },
    ]),
}));

describe('isTechnologyWithProjects', () => {
  // FIXME: currently Jest does not work as NextJS and is not able to import MDX files properly...
  test('should return true if the technology exists and has at least one project', async () => {
    expect(await isTechnologyWithProjects('arthurscript')).toEqual(true);
    expect(await isTechnologyWithProjects('victorscript')).toEqual(true);
  });

  test('should return false if the technology exists but has not projects', async () => {
    expect(await isTechnologyWithProjects('chaumontProcessor')).toEqual(false);
  });

  test('should return false if the technology does not exist', async () => {
    expect(await isTechnologyWithProjects('randomTech')).toEqual(false);
  });
});
