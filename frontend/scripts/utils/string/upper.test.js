import { upper } from '@utils';

describe('upper', () => {
  describe('valid string inputs', () => {
    test.each([
      ['converts lowercase letters to uppercase', 'abc', 'ABC'],
      ['keeps uppercase letters', 'ABC', 'ABC'],
      ['numbers are unchanged', '123', '123'],
      ['mixed letters', 'aBcDe', 'ABCDE'],
      ['string with symbols', '!@#$%^', '!@#$%^'],
      ['string with spaces', 'hello world', 'HELLO WORLD'],
      ['empty string', '', ''],
      ['string with tabs/newlines', '\nabc\t', '\nABC\t'],
      ['unicode: кириллица', 'привет', 'ПРИВЕТ'],
      ['unicode: emoji', '😊abc', '😊ABC'],
      ['string with zero-width space', 'a\u200bbc', 'A\u200BBC'],
      ['very long string', 'a'.repeat(1000), 'A'.repeat(1000)],
    ])('%s', (_desc, input, expected) => {
      expect(upper(input)).toBe(expected);
    });
  });

  describe('non-string inputs', () => {
    test.each([
      ['null', null],
      ['undefined', undefined],
      ['number', 123],
      ['boolean true', true],
      ['boolean false', false],
      ['NaN', NaN],
      ['Infinity', Infinity],
      ['array', ['a']],
      ['object', { a: 1 }],
      ['function', () => 'abc'],
      ['symbol', Symbol('abc')],
      ['BigInt', BigInt(123)],
      ['RegExp', /abc/],
      ['Date object', new Date()],
      ['Map', new Map()],
      ['Set', new Set()],
      ['WeakMap', new WeakMap()],
      ['WeakSet', new WeakSet()],
      ['Promise', Promise.resolve('abc')],
      ['Error', new Error('fail')],
    ])('throws TypeError for %s', (_desc, input) => {
      expect(() => upper(input)).toThrow(TypeError);
    });

    test('Buffer (Node.js) if defined', () => {
      if (typeof Buffer !== 'undefined') {
        expect(() => upper(Buffer.from('abc'))).toThrow(TypeError);
      }
    });
  });

  describe('String object wrapper', () => {
    test.each([
      ["new String('abc')", new String('abc')],
      ["new String('')", new String('')],
    ])('throws TypeError for %s', (_desc, input) => {
      expect(() => upper(input)).toThrow(TypeError);
    });
  });
});
