import { expect } from '@jest/globals';
import {
  listProjectIds,
  listProjects,
  readProject,
} from '@/common/projects.actions';
import { listFilesInFolder } from '@/common/fs.actions';

jest.mock('../data/technology/data');

jest.mock<typeof import('./fs.actions')>('./fs.actions', () => ({
  listFilesInFolder: jest.fn(() => Promise.resolve(['file1', 'file2'])),
}));

describe('readProject', () => {
  test('should return a parsed Project interface', async () => {
    // Fake MDX doc.
    jest.doMock(
      '@/data/projects/contents/project.mdx',
      () => ({
        __esModule: true,
        default: () => (
          <div>
            This is a <strong>test</strong>.
          </div>
        ),
        frontmatter: {
          name: 'Project',
          summary: 'project summary',
          technologies: ['victorscript', 'arthurscript'],
        },
      }),
      { virtual: true }
    );

    const project = await readProject('project');

    expect(project).toEqual({
      id: 'project',
      name: 'Project',
      summary: 'project summary',
      content: expect.anything(),
      technologies: [
        {
          category: {
            id: 'CategoryB',
            name: 'Category B',
            priority: 0,
          },
          id: 'victorscript',
          name: 'VictorScript',
        },
        {
          category: {
            id: 'CategoryB',
            name: 'Category B',
            priority: 0,
          },
          id: 'arthurscript',
          name: 'ArthurScript',
        },
      ],
    });

    expect(project.content({})).toMatchSnapshot();
  });

  test('should fail if name metadata is missing', async () => {
    jest.doMock(
      '@/data/projects/contents/project-name-missing.mdx',
      () => ({
        __esModule: true,
        default: () => (
          <div>
            This is a <strong>test</strong>.
          </div>
        ),
        frontmatter: {
          summary: 'project summary',
          technologies: ['victorscript', 'arthurscript'],
        },
      }),
      { virtual: true }
    );

    await expect(async () => {
      await readProject('project-name-missing');
    }).rejects.toThrow('Project name is missing!');
  });

  test('should fail if summary metadata is missing', async () => {
    jest.doMock(
      '@/data/projects/contents/project-summary-missing.mdx',
      () => ({
        __esModule: true,
        default: () => (
          <div>
            This is a <strong>test</strong>.
          </div>
        ),
        frontmatter: {
          name: 'Project',
          technologies: ['victorscript', 'arthurscript'],
        },
      }),
      { virtual: true }
    );

    await expect(async () => {
      await readProject('project-summary-missing');
    }).rejects.toThrow('Project summary is missing!');
  });

  test('should fail if technologies metadata is missing', async () => {
    jest.doMock(
      '@/data/projects/contents/project-technologies-missing.mdx',
      () => ({
        __esModule: true,
        default: () => (
          <div>
            This is a <strong>test</strong>.
          </div>
        ),
        frontmatter: {
          name: 'Project',
          summary: 'project summary',
        },
      }),
      { virtual: true }
    );

    await expect(async () => {
      await readProject('project-technologies-missing');
    }).rejects.toThrow('Project technologies are missing!');
  });
});

describe('listProjectIds', () => {
  test('should return a list of projects ids', async () => {
    expect(await listProjectIds()).toEqual(['file1', 'file2']);

    expect(listFilesInFolder).toHaveBeenCalledWith(
      'src/data/projects/contents',
      'mdx'
    );
  });
});

describe('listProjects', () => {
  test('should return all projects listed and parsed', async () => {
    jest.doMock(
      '@/data/projects/contents/file1.mdx',
      () => ({
        __esModule: true,
        default: () => (
          <div>
            This is a <strong>test</strong>.
          </div>
        ),
        frontmatter: {
          name: 'File 1',
          summary: 'file 1 summary',
          technologies: ['victorscript', 'arthurscript'],
        },
      }),
      { virtual: true }
    );

    jest.doMock(
      '@/data/projects/contents/file2.mdx',
      () => ({
        __esModule: true,
        default: () => (
          <div>
            This is another <strong>test</strong>.
          </div>
        ),
        frontmatter: {
          name: 'File 2',
          summary: 'file 2 summary',
          technologies: ['victorscript', 'totorCloud'],
        },
      }),
      { virtual: true }
    );

    const projects = await listProjects();

    expect(projects).toEqual([
      {
        id: 'file1',
        name: 'File 1',
        summary: 'file 1 summary',
        content: expect.anything(),
        technologies: [
          {
            category: {
              id: 'CategoryB',
              name: 'Category B',
              priority: 0,
            },
            id: 'victorscript',
            name: 'VictorScript',
          },
          {
            category: {
              id: 'CategoryB',
              name: 'Category B',
              priority: 0,
            },
            id: 'arthurscript',
            name: 'ArthurScript',
          },
        ],
      },
      {
        id: 'file2',
        name: 'File 2',
        summary: 'file 2 summary',
        content: expect.anything(),
        technologies: [
          {
            category: {
              id: 'CategoryB',
              name: 'Category B',
              priority: 0,
            },
            id: 'victorscript',
            name: 'VictorScript',
          },
          {
            category: {
              id: 'CategoryA',
              name: 'Category A',
              priority: 1,
            },
            id: 'totorCloud',
            name: 'Totor Cloud',
          },
        ],
      },
    ]);

    expect(projects[0].content({})).toMatchSnapshot();
    expect(projects[1].content({})).toMatchSnapshot();
  });
});
