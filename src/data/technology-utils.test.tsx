import {
  groupAndSortTechnologies,
  hasProject,
  hasTechnology,
  isTechnologyWithProjects,
  parseTechKeywordFilter
} from "./technology-utils";
import {Technology} from "@/data/technology/technology";
import {TECHNOLOGIES_CATEGORIES} from "@/data/technology/data";

jest.mock('./projects/data');
jest.mock('./technology/data');

const FakeComponent = () => (<></>);

describe('parseTechKeywordFilter', () => {

  test('should return the override if present and empty children', () => {
    expect(parseTechKeywordFilter(undefined, 'foobar')).toEqual('foobar');
    expect(parseTechKeywordFilter([], 'foobar')).toEqual('foobar');
  });

  test('should return the override if present and children are available', () => {
    expect(parseTechKeywordFilter(['foobaz'], 'foobar')).toEqual('foobar');
    expect(parseTechKeywordFilter(['foo', 'baz'], 'foobar')).toEqual('foobar');
  });

  test('should return the string children concatenated if no override', () => {
    expect(parseTechKeywordFilter(['foobaz'], undefined)).toEqual('foobaz');
    expect(parseTechKeywordFilter(['foo', 'baz'], undefined)).toEqual('foobaz');
  });

  test('should return only the string children concatenated if no override', () => {
    // eslint-disable-next-line react/jsx-key
    expect(parseTechKeywordFilter(['foobaz', <FakeComponent />], undefined)).toEqual('foobaz');
    // eslint-disable-next-line react/jsx-key
    expect(parseTechKeywordFilter(['foo', <FakeComponent />, 'baz'], undefined)).toEqual('foobaz');
  });

  test('should encode the tech keyword by replacing spaces and dots', () => {
    expect(parseTechKeywordFilter(['foo bar'])).toEqual('foo-bar');
    expect(parseTechKeywordFilter(['foo bar baz'])).toEqual('foo-bar-baz');
    expect(parseTechKeywordFilter(['foo ba.r baz'])).toEqual('foo-bar-baz');
  });

  test('should throw if no string children are found and no override is provided', () => {
    expect(() => parseTechKeywordFilter([], undefined)).toThrow();
    // eslint-disable-next-line react/jsx-key
    expect(() => parseTechKeywordFilter([<FakeComponent />], undefined)).toThrow();
  });

});

describe('hasTechnology', () => {
  test('should return true if the technology exists', () => {
    expect(hasTechnology('arthurscript')).toEqual(true);
  });

  test('should return false if the technology does not exist', () => {
    expect(hasTechnology('futureHypeTech')).toEqual(false);
  });
});

describe('hasProject', () => {
  test('should return true if the project exists', () => {
    expect(hasProject('projectA')).toEqual(true);
  });

  test('should return false if the project does not exist', () => {
    expect(hasTechnology('projectY')).toEqual(false);
  });
});

describe('isTechnologyWithProjects', () => {
  test('should return true if the technology exists and has at least one project', () => {
    expect(isTechnologyWithProjects('arthurscript')).toEqual(true);
    expect(isTechnologyWithProjects('victorscript')).toEqual(true);
  });

  test('should return false if the technology exists but has not projects', () => {
    expect(isTechnologyWithProjects('chaumontProcessor')).toEqual(false);
  });

  test('should return false if the technology does not exist', () => {
    expect(isTechnologyWithProjects('randomTech')).toEqual(false);
  });
});

describe('groupAndSortTechnologies', () => {
  const catA = TECHNOLOGIES_CATEGORIES['CategoryA'];
  const catB = TECHNOLOGIES_CATEGORIES['CategoryB'];
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
