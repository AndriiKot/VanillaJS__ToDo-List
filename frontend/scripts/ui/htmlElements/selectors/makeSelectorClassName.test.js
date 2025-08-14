import { makeSelectorClassName } from '@ui';

describe('makeSelectorClassName', () => {
  test('returns the same selector string when valid', () => {
    const selector = '.todo__item';
    const result = makeSelectorClassName(selector);
    expect(result).toBe(selector);
  });

  test.each([
    '.todo__item',
    '.some-class',
    '.todo__button--disabled',
    '.wrapper .nested', // still valid even with space
  ])("does not throw for valid class selector: '%s'", (selector) => {
    expect(() => makeSelectorClassName(selector)).not.toThrow();
    expect(makeSelectorClassName(selector)).toBe(selector);
  });

  test.each(['', '   '])("throws SyntaxError for empty selector string: '%s'", (selector) => {
    expect(() => makeSelectorClassName(selector)).toThrow(SyntaxError);
  });

  test.each(['#main', 'ul > li', '[data-action]', ':root', '*'])(
    "throws SyntaxError for non-class selector: '%s'",
    (selector) => {
      expect(() => makeSelectorClassName(selector)).toThrow(SyntaxError);
    },
  );

  test.each([null, undefined, 42, true, false, {}, [], () => {}, Symbol('x')])(
    'throws TypeError for non-string input: %s',
    (value) => {
      expect(() => makeSelectorClassName(value)).toThrow(TypeError);
    },
  );
});
