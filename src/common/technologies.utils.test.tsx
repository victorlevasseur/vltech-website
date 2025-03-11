import { hasTechnology } from './technologies.utils';

jest.mock('../data/technology/data');

describe('hasTechnology', () => {
  test('should return true if the technology exists', () => {
    expect(hasTechnology('arthurscript')).toEqual(true);
  });

  test('should return false if the technology does not exist', () => {
    expect(hasTechnology('futureHypeTech')).toEqual(false);
  });
});
