import { expect } from '@jest/globals';
import { parseTechKeywordFilter } from '@/components/keywords/tech-keyword';

const FakeComponent = () => <></>;

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
    expect(
      // eslint-disable-next-line react/jsx-key
      parseTechKeywordFilter(['foobaz', <FakeComponent />], undefined)
    ).toEqual('foobaz');

    expect(
      // eslint-disable-next-line react/jsx-key
      parseTechKeywordFilter(['foo', <FakeComponent />, 'baz'], undefined)
    ).toEqual('foobaz');
  });

  test('should encode the tech keyword by replacing spaces and dots', () => {
    expect(parseTechKeywordFilter(['foo bar'])).toEqual('foo-bar');
    expect(parseTechKeywordFilter(['foo bar baz'])).toEqual('foo-bar-baz');
    expect(parseTechKeywordFilter(['foo ba.r baz'])).toEqual('foo-bar-baz');
  });

  test('should throw if no string children are found and no override is provided', () => {
    expect(() => parseTechKeywordFilter([], undefined)).toThrow();

    expect(() =>
      // eslint-disable-next-line react/jsx-key
      parseTechKeywordFilter([<FakeComponent />], undefined)
    ).toThrow();
  });
});
