import { getTodoItemClassName } from './getTodoItemClassName';

describe('getTodoItemClassName', () => {
  test('returns the correct class name string', () => {
    const result = getTodoItemClassName();
    expect(result).toBe('todo__item');
  });
});
