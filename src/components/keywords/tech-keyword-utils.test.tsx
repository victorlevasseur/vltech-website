import {parseTechKeywordFilter} from "@/components/keywords/tech-keyword-utils";

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

  test('should throw if no string children are found and no override is provided', () => {
    expect(() => parseTechKeywordFilter([], undefined)).toThrow();
    // eslint-disable-next-line react/jsx-key
    expect(() => parseTechKeywordFilter([<FakeComponent />], undefined)).toThrow();
  })

});