import { addClassName } from './addClassName';

describe('addClassName', () => {
  test('adds class on a valid HTMLElement', () => {
    const div = document.createElement('div');
    div.className = 'existing';

    addClassName(div, 'new-class');

    // The new class should be added
    expect(div.classList.contains('new-class')).toBe(true);
    // The old class should remain
    expect(div.classList.contains('existing')).toBe(true);
  });

  test('does not duplicate class if added twice', () => {
    const div = document.createElement('div');

    addClassName(div, 'unique-class');
    addClassName(div, 'unique-class'); // try adding again

    // Count occurrences of the class name
    const count = div.className.split(' ').filter((c) => c === 'unique-class').length;
    expect(count).toBe(1); // should not be duplicated
  });

  test('throws TypeError if first argument is not an HTMLElement', () => {
    expect(() => addClassName(null, 'test')).toThrow();
    expect(() => addClassName({}, 'test')).toThrow();
    expect(() => addClassName('string', 'test')).toThrow();
    expect(() => addClassName(123, 'test')).toThrow();
  });

  test('throws TypeError if second argument is not a valid class name', () => {
    const div = document.createElement('div');

    expect(() => addClassName(div, null)).toThrow();
    expect(() => addClassName(div, 123)).toThrow();
    expect(() => addClassName(div, {})).toThrow();
    expect(() => addClassName(div, 'invalid class')).toThrow(); // contains a space
  });
});
