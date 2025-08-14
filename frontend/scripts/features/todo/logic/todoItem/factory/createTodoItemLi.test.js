import { createTodoItemLi } from './createTodoItemLi';

describe('createTodoItemLi', () => {
  test('creates an li element when given a valid className', () => {
    const el = createTodoItemLi('todo__item');

    expect(el).toBeInstanceOf(HTMLLIElement);
    expect(el.className).toBe('todo__item');
  });

  test('creates an li element with a custom class', () => {
    const customClass = 'custom-item';
    const el = createTodoItemLi(customClass);

    expect(el).toBeInstanceOf(HTMLLIElement);
    expect(el.className).toBe(customClass);
  });

  describe('throws when className is not a string', () => {
    const invalidValues = [
      undefined, // invalid now, since no default value
      123,
      -5,
      0,
      NaN,
      Infinity,
      true,
      false,
      null,
      {},
      [],
      Symbol('sym'),
      () => {},
    ];

    test.each(invalidValues)('throws TypeError for className: %p', (value) => {
      expect(() => createTodoItemLi(value)).toThrow(TypeError);
    });
  });
});
