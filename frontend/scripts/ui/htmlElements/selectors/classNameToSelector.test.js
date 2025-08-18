import { classNameToSelector } from '@ui';

describe('classNameToSelector', () => {
  test('returns selector string when given a valid class name', () => {
    const className = 'todo__item';
    const result = classNameToSelector(className);
    expect(result).toBe(`.${className}`);
  });

  test.each(['todo__item', 'some-class', 'todo__button--disabled'])(
    "does not throw for valid class name: '%s'",
    (className) => {
      expect(() => classNameToSelector(className)).not.toThrow();
      expect(classNameToSelector(className)).toBe(`.${className}`);
    },
  );

  test.each(['', '   '])("throws SyntaxError for empty class name: '%s'", (className) => {
    expect(() => classNameToSelector(className)).toThrow(SyntaxError);
  });

  test.each(['#main', '[data-action]', ':root', '*', '.already-dot'])(
    "throws SyntaxError for invalid class name: '%s'",
    (value) => {
      expect(() => classNameToSelector(value)).toThrow(SyntaxError);
    },
  );

  test.each([null, undefined, 42, true, false, {}, [], () => {}, Symbol('x')])(
    'throws TypeError for non-string input: %s',
    (value) => {
      expect(() => classNameToSelector(value)).toThrow(TypeError);
    },
  );
});
