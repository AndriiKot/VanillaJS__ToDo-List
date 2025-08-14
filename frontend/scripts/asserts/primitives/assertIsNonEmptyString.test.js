import { assertIsNonEmptyString } from './assertIsNonEmptyString.js';

describe('assertIsNonEmptyString', () => {
  describe('valid non-empty strings (should NOT throw)', () => {
    const validStrings = [
      'a',
      'abc',
      '  x  ',
      '123',
      '!@#$',
      'こんにちは',
      '😊',
      String('string object'),
    ];

    test.each(validStrings)('does not throw for valid string: %p', (value) => {
      expect(() => assertIsNonEmptyString(value)).not.toThrow();
    });

    test('does not throw with custom argName', () => {
      expect(() => assertIsNonEmptyString('hello', 'myArg')).not.toThrow();
    });
  });

  describe('invalid strings (empty or whitespace only, should throw)', () => {
    const invalidStrings = ['', ' ', '     ', '\n', '\t'];

    test.each(invalidStrings)("throws for empty or whitespace string: '%s'", (value) => {
      expect(() => assertIsNonEmptyString(value)).toThrow(
        'value must be a non-empty string, but an empty string was provided',
      );
    });

    test('throws with custom argName', () => {
      const customArg = 'second argument';
      expect(() => assertIsNonEmptyString('', customArg)).toThrow(
        'second argument must be a non-empty string, but an empty string was provided',
      );
    });
  });

  describe('invalid types (non-string, should throw TypeError)', () => {
    const invalidValues = [
      null,
      undefined,
      123,
      0,
      NaN,
      Infinity,
      -Infinity,
      true,
      false,
      [],
      ['a', 'b'],
      {},
      { toString: () => 'test' },
      () => {},
      Symbol('sym'),
      Symbol(),
      BigInt(10),
      /regex/,
      new Date(),
      new Map(),
      new Set(),
      new WeakMap(),
      new WeakSet(),
      Promise.resolve(),
      new Error('error'),
      new String('string object wrapper'), // object-wrapper, not primitive
      Object.create(null),
      String,
      Number,
    ];

    test.each(invalidValues)('throws TypeError for %p', (value) => {
      expect(() => assertIsNonEmptyString(value)).toThrow(TypeError);
    });
  });
});
