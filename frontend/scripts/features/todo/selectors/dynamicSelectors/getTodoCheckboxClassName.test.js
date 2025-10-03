import { getTodoCheckboxClassName } from './getTodoCheckboxClassName';

describe('getTodoCheckboxClassName', () => {
  test('returns a valid string', () => {
    const className = getTodoCheckboxClassName();
    expect(typeof className).toBe('string');
  });

  test('returns the expected class name', () => {
    const className = getTodoCheckboxClassName();
    expect(className).toBe('todo__check');
  });

  test('assertIsHTMLClassName does not throw', () => {
    expect(() => getTodoCheckboxClassName()).not.toThrow();
  });
});
