import { assertIsValidSelector } from '@asserts';

// ✅ Valid CSS selectors
describe('assertIsValidSelector - valid selectors', () => {
  test.each([
    ['.todo__item'],
    ['#id'],
    ['div'],
    ['ul > li'],
    ['[data-action]'],
    ['section.todo .todo__item--checked'],
    [':root'],
    ['*'],
  ])('does not throw for valid selector: %s', (selector) => {
    expect(() => assertIsValidSelector(selector)).not.toThrow();
  });
});

// ❌ Empty strings
describe('assertIsValidSelector - empty strings', () => {
  test.each([[''], ['   ']])("throws SyntaxError for empty string: '%s'", (selector) => {
    expect(() => assertIsValidSelector(selector)).toThrow(SyntaxError);
  });
});

// ❌ Invalid CSS selector syntax
describe('assertIsValidSelector - invalid syntax', () => {
  test.each([['???'], ['div>>span'], ['#'], ['.'], ['[data-'], ['()']])(
    'throws SyntaxError for invalid selector: %s',
    (selector) => {
      expect(() => assertIsValidSelector(selector)).toThrow(SyntaxError);
    },
  );
});

// ❌ Non-string values (TypeError from assertIsString)
describe('assertIsValidSelector - non-string values', () => {
  test.each([[null], [undefined], [42], [true], [false], [{}], [[]], [() => {}], [Symbol('s')]])(
    'throws TypeError for non-string value: %s',
    (value) => {
      expect(() => assertIsValidSelector(value)).toThrow(TypeError);
    },
  );
});
