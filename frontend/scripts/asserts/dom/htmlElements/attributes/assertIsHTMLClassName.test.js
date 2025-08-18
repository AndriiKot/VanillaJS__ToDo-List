import { assertIsHTMLClassName } from './assertIsHTMLClassName.js';

describe('assertIsHTMLClassName', () => {
  describe('valid class names', () => {
    const validNames = [
      'my-class',
      '_header',
      '-variable',
      'btn123',
      'こんにちは', // Unicode letters
      'école', // accented letters
      '-_fooBar123',
    ];

    test.each(validNames)("does not throw for valid class name: '%s'", (value) => {
      expect(() => assertIsHTMLClassName(value)).not.toThrow();
    });
  });

  describe('invalid class names', () => {
    const invalidNames = [
      '', // empty string
      ' ', // whitespace only
      '123btn', // starts with a digit
      'my class', // contains space
      'btn!', // invalid character
      '\n', // newline
      '🙂emoji', // emoji at start
      '1variable', // starts with digit
    ];

    test.each(invalidNames)("throws for invalid class name: '%s'", (value) => {
      expect(() => assertIsHTMLClassName(value)).toThrow();
    });
  });

  test('supports custom argument name in error message', () => {
    const argName = 'second argument';
    expect(() => assertIsHTMLClassName('', argName)).toThrow();
  });
});
