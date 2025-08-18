import { getTodoItemRemoveButtonClassName } from './getTodoItemRemoveButtonClassName';

describe('getTodoItemRemoveButtonClassName', () => {
  test('returns the correct class name string', () => {
    const result = getTodoItemRemoveButtonClassName();
    expect(result).toBe('todo__remove');
  });
});
