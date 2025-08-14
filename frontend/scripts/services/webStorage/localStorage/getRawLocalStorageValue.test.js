import { getRawLocalStorageValue } from './getRawLocalStorageValue.js';
import { expectTypeErrorMessage } from '@asserts';

describe('getRawLocalStorageValue', () => {
  const storage = globalThis.localStorage;
  const testKey = '__test_key__';

  beforeEach(() => {
    storage.clear();
  });

  test('returns string value for existing key', () => {
    storage.setItem(testKey, 'value123');
    expect(getRawLocalStorageValue(storage, testKey)).toBe('value123');
  });

  test('returns null for non-existing key', () => {
    expect(getRawLocalStorageValue(storage, 'nonexistent')).toBeNull();
  });

  test('throws if key is not a string', () => {
    expectTypeErrorMessage(() => getRawLocalStorageValue(storage, 123), 'key', 'string');
  });
});
