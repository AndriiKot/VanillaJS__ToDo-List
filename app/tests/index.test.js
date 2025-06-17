import { testFn } from '../scripts/index.js';

describe('testFn', () => {
  test('should add two numbers', () => {
    expect(testFn(2, 3)).toBe(5);
  });

  test('should work with negative numbers', () => {
    expect(testFn(-2, -3)).toBe(-5);
  });

  test('should work with zero', () => {
    expect(testFn(0, 5)).toBe(5);
  });
});
