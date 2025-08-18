import { queryClassNameInDocument } from './queryClassNameInDocument';

describe('queryClassNameInDocument', () => {
  let container;
  let child;

  beforeEach(() => {
    container = document.createElement('div');
    container.id = 'test-container';
    document.body.appendChild(container);

    child = document.createElement('span');
    child.className = 'todo__item';
    container.appendChild(child);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  test('returns the first element in the document with the given class name', () => {
    const result = queryClassNameInDocument('todo__item');
    expect(result).toBe(child);
  });

  test('returns null if no element with the given class name exists', () => {
    const result = queryClassNameInDocument('nonexistent');
    expect(result).toBeNull();
  });

  test('works when multiple elements with the same class exist', () => {
    const another = document.createElement('div');
    another.className = 'todo__item';
    container.appendChild(another);

    const result = queryClassNameInDocument('todo__item');
    expect(result).toBe(child);
  });
});
