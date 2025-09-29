import { isBoolean } from './isBoolean';

describe('isBoolean', () => {
  test('returns true for true', () => {
    expect(isBoolean(true)).toBe(true);
  });

  test('returns true for false', () => {
    expect(isBoolean(false)).toBe(true);
  });

  test('returns false for numbers', () => {
    expect(isBoolean(0)).toBe(false);
    expect(isBoolean(1)).toBe(false);
    expect(isBoolean(-1)).toBe(false);
  });

  test('returns false for strings', () => {
    expect(isBoolean('')).toBe(false);
    expect(isBoolean('true')).toBe(false);
  });

  test('returns false for null and undefined', () => {
    expect(isBoolean(null)).toBe(false);
    expect(isBoolean(undefined)).toBe(false);
  });

  test('returns false for objects, arrays, and functions', () => {
    expect(isBoolean({})).toBe(false);
    expect(isBoolean([])).toBe(false);
    expect(isBoolean(() => {})).toBe(false);
  });
});
