import { TECHNOLOGIES_CATEGORIES } from '@/data/technology/data';
import { Technology } from '@/data/technology/technology';
import { groupAndSortTechnologies } from '@/components/card/technologies-card/technologies-card';

jest.mock('../../../data/technology/data');

describe('groupAndSortTechnologies', () => {
  // @ts-expect-error because we are accessing mocked data;
  const catA = TECHNOLOGIES_CATEGORIES['CategoryA'];
  // @ts-expect-error because we are accessing mocked data;
  const catB = TECHNOLOGIES_CATEGORIES['CategoryB'];
  // @ts-expect-error because we are accessing mocked data;
  const catC = TECHNOLOGIES_CATEGORIES['CategoryC'];

  const techA: Technology = {
    id: 'techA',
    name: 'Z Tech A',
    category: catA
  };
  const techB: Technology = {
    id: 'techB',
    name: 'Tech B',
    category: catC
  };
  const techC: Technology = {
    id: 'techB',
    name: 'Tech B',
    category: catA
  };
  const techD: Technology = {
    id: 'techD',
    name: 'Tech D',
    category: catB
  };

  test('should return an empty array if an empty array is provided', () => {
    expect(groupAndSortTechnologies([])).toEqual([]);
  });

  test('should properly group by tech categories and order them', () => {
    expect(groupAndSortTechnologies([
      techA,
      techB,
      techC,
      techD
    ])).toEqual([
      {
        category: catB,
        technologies: [techD]
      },
      {
        category: catA,
        technologies: [techC, techA]
      },
      {
        category: catC,
        technologies: [techB]
      }
    ])
  });

  test('should not return categories with empty technologies array', () => {
    expect(groupAndSortTechnologies([
      techA,
      techC,
      techD
    ])).toEqual([
      {
        category: catB,
        technologies: [techD]
      },
      {
        category: catA,
        technologies: [techC, techA]
      }
    ])
  });
});
