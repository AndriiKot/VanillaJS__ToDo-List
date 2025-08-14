import { readParsedLocalStorageValue } from './readParsedLocalStorageValue.js';

describe('readParsedLocalStorageValue', () => {
  const TEST_KEY = 'test_key';

  afterEach(() => {
    localStorage.clear();
  });

  test('returns parsed object when valid JSON is stored', () => {
    const value = { a: 1, b: true };
    localStorage.setItem(TEST_KEY, JSON.stringify(value));

    const result = readParsedLocalStorageValue(localStorage, TEST_KEY, null);
    expect(result).toEqual(value);
  });

  test('returns default value when key is missing', () => {
    const fallback = { fallback: true };

    const result = readParsedLocalStorageValue(localStorage, 'missing_key', fallback);
    expect(result).toEqual(fallback);
  });

  test('returns default value when stored value is invalid JSON', () => {
    localStorage.setItem(TEST_KEY, 'not a json');

    const fallback = { fallback: true };
    const result = readParsedLocalStorageValue(localStorage, TEST_KEY, fallback);
    expect(result).toEqual(fallback);
  });

  test("returns null when stored value is 'null'", () => {
    localStorage.setItem(TEST_KEY, 'null');

    const fallback = { fallback: true };
    const result = readParsedLocalStorageValue(localStorage, TEST_KEY, fallback);
    expect(result).toBeNull();
  });
});
