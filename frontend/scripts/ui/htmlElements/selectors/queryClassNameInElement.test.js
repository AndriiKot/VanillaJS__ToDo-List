import { queryClassNameInElement } from './queryClassNameInElement';

describe('queryClassNameInElement ', () => {
  let container;
  let child;

  beforeEach(() => {
    container = document.createElement('div');
    child = document.createElement('span');
    child.className = 'todo__item';
    container.appendChild(child);
  });

  test('returns the child element with the given class name', () => {
    const result = queryClassNameInElement(container, 'todo__item');
    expect(result).toBe(child);
  });

  test('returns null if no child with given class name exists', () => {
    const result = queryClassNameInElement(container, 'nonexistent');
    expect(result).toBeNull();
  });

  test('throws if first argument is not an HTML element', () => {
    expect(() => queryClassNameInElement(null, 'todo__item')).toThrow();
    expect(() => queryClassNameInElement({}, 'todo__item')).toThrow();
    expect(() => queryClassNameInElement('string', 'todo__item')).toThrow();
  });
});
