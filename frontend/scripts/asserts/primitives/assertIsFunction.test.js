import { assertIsFunction } from './assertIsFunction';

describe('assertIsFunction', () => {
  describe('valid function values', () => {
    const validValues = [
      () => {},
      function () {},
      async function () {},
      function* () {},
      new Function(),
      Object.getPrototypeOf(function () {}).constructor,
    ];

    test.each(validValues)('does not throw for %p', (value) => {
      expect(() => assertIsFunction(value, 'arg')).not.toThrow();
    });
  });

  describe('invalid non-function values', () => {
    const invalidValues = [
      null,
      undefined,
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

    test.each(invalidValues)('throws TypeError for %p', (value) => {
      expect(() => assertIsFunction(value, 'arg')).toThrow(TypeError);
      expect(() => assertIsFunction(value, 'arg')).toThrow(/arg.*a function/i);
    });
  });

  describe('default argument name', () => {
    test('throws with default argName', () => {
      expect(() => assertIsFunction(123)).toThrow(TypeError);
      expect(() => assertIsFunction(123)).toThrow(/value.*a function/i);
    });
  });
});
