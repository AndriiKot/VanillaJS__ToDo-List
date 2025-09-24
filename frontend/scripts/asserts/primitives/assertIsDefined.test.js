import { assertIsDefined } from './assertIsDefined';

describe('assertIsDefined', () => {
  describe('valid (non-null and non-undefined) values', () => {
    const validValues = [
      '',
      'string',
      0,
      1,
      -1,
      NaN,
      Infinity,
      -Infinity,
      true,
      false,
      Symbol('sym'),
      BigInt(123),
      {},
      { key: 'value' },
      [],
      [1, 2, 3],
      () => {},
      function () {},
      new String('str'),
      new Number(123),
      new Boolean(false),
      new Date(),
      new Error('error'),
      new Map(),
      new Set(),
      new WeakMap(),
      new WeakSet(),
      document.createElement('div'),
      document.createTextNode('text'),
      document.createComment('comment'),
      document.createDocumentFragment(),
      Promise.resolve('ok'),
    ];

    test.each(validValues)('does not throw for %p', (value) => {
      expect(() => assertIsDefined(value, 'arg')).not.toThrow();
    });
  });

  describe('invalid (null and undefined) values', () => {
    const invalidValues = [null, undefined];

    test.each(invalidValues)('throws TypeError for %p', (value) => {
      expect(() => assertIsDefined(value, 'arg')).toThrow(TypeError);
      expect(() => assertIsDefined(value, 'arg')).toThrow(/arg.*non-null and non-undefined/i);
    });
  });

  describe('default argument values', () => {
    test('throws with default argName and expectedDescription', () => {
      expect(() => assertIsDefined(undefined)).toThrow(TypeError);
      expect(() => assertIsDefined(undefined)).toThrow(/value.*non-null and non-undefined/i);
    });

    test('throws with custom expectedDescription', () => {
      expect(() => assertIsDefined(null, 'input', 'a valid object')).toThrow(TypeError);
      expect(() => assertIsDefined(null, 'input', 'a valid object')).toThrow(
        /input.*a valid object/i,
      );
    });
  });
});
