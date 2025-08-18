import { getTodoItemCheckedClassName } from '@features';

describe('getTodoItemCheckedClassName', () => {
  test('returns the correct class name string', () => {
    const result = getTodoItemCheckedClassName();
    expect(result).toBe('todo__item--checked');
  });
});
