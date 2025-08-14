import { assertIsValidSelectorClassName } from '@asserts';

describe('assertIsValidSelectorClassName', () => {
  // ✅ Valid class selectors
  test.each([
    ['.todo__item'],
    ['.checked'],
    ['.A1_B2-C3'],
    ['.todo--done'],
    ['.a'],
    ['._' + 'valid'], // ._valid
  ])('does not throw for valid class selector: %s', (selector) => {
    expect(() => assertIsValidSelectorClassName(selector)).not.toThrow();
  });

  // ❌ Valid CSS selectors, but not class selectors
  test.each([['#id'], ['div'], ['[data-test]'], ['ul > li'], ['*'], [':root']])(
    "throws SyntaxError if selector does not start with '.': %s",
    (selector) => {
      expect(() => assertIsValidSelectorClassName(selector)).toThrow(SyntaxError);
      expect(() => assertIsValidSelectorClassName(selector)).toThrow(
        `Selector must start with "."`,
      );
    },
  );

  // ❌ Invalid CSS selectors
  test.each([['.'], ['..invalid'], ['[data-'], ['div>>span'], ['???']])(
    'throws SyntaxError for invalid CSS selector: %s',
    (selector) => {
      expect(() => assertIsValidSelectorClassName(selector)).toThrow(SyntaxError);
    },
  );

  // ❌ Non-string values
  test.each([[null], [undefined], [42], [false], [{}], [[]]])(
    'throws TypeError for non-string value: %s',
    (value) => {
      expect(() => assertIsValidSelectorClassName(value)).toThrow(TypeError);
    },
  );
});
