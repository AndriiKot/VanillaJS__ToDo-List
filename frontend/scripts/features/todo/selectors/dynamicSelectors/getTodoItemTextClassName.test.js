import { getTodoItemTextClassName } from '@features';

describe('getTodoItemTextClassName', () => {
  test('returns the correct class name string', () => {
    const result = getTodoItemTextClassName();
    expect(result).toBe('todo__text');
  });
});
