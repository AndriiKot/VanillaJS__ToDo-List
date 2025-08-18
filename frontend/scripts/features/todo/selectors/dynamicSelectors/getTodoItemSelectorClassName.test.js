import { getTodoItemSelectorClassName } from '@features';

describe('getTodoItemSelectorClassName', () => {
  test('returns the correct class name selector', () => {
    const result = getTodoItemSelectorClassName();
    expect(result).toBe('.todo__item');
  });
});
