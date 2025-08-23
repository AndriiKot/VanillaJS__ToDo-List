import { findClosestByClassName } from './findClosestByClassName';

describe('findClosestByClassName', () => {
  let root, parent, child;

  beforeEach(() => {
    document.body.innerHTML = ''; // reset DOM before each test
    root = document.createElement('div');
    root.className = 'root';

    parent = document.createElement('div');
    parent.className = 'parent';

    child = document.createElement('div');
    child.className = 'child';

    parent.appendChild(child);
    root.appendChild(parent);
    document.body.appendChild(root);
  });

  test('returns the element itself if it has the given class', () => {
    const found = findClosestByClassName(child, 'child');
    expect(found).toBe(child);
  });

  test('returns the closest parent with the given class', () => {
    const found = findClosestByClassName(child, 'parent');
    expect(found).toBe(parent);
  });

  test('returns null if no matching ancestor exists', () => {
    const found = findClosestByClassName(child, 'nonexistent');
    expect(found).toBeNull();
  });

  test('returns the root element if it matches the class', () => {
    const found = findClosestByClassName(child, 'root');
    expect(found).toBe(root);
  });

  test('throws TypeError if element is not a DOM element', () => {
    expect(() => findClosestByClassName(null, 'root')).toThrow(TypeError);
    expect(() => findClosestByClassName({}, 'root')).toThrow(TypeError);
  });

  test('throws SyntaxError if className is invalid', () => {
    expect(() => findClosestByClassName(child, 'invalid class')).toThrow(SyntaxError);
    expect(() => findClosestByClassName(child, '')).toThrow(SyntaxError);
  });
});
