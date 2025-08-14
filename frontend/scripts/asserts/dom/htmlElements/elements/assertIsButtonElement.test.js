import { assertIsButtonElement } from '@asserts';

describe('assertIsButtonElement', () => {
  describe('valid <button> elements (should NOT throw)', () => {
    test('does not throw for a valid <button> element', () => {
      const button = document.createElement('button');
      expect(() => assertIsButtonElement(button)).not.toThrow();
    });
  });

  describe('invalid inputs (should throw TypeError)', () => {
    const invalidValues = [
      null,
      undefined,
      '',
      'button',
      'text',
      123,
      0,
      1,
      -1,
      NaN,
      Infinity,
      -Infinity,
      true,
      false,
      {},
      { tagName: 'BUTTON' },
      [],
      ['button'],
      () => {},
      function () {},
      Symbol('button'),
      BigInt(100),
      new String('button'),
      new Number(42),
      new Boolean(false),
      new Date(),
      new Map(),
      new Set(),
      new WeakMap(),
      new WeakSet(),
      new Error('fail'),
      Promise.resolve('button'),

      // Wrong DOM elements
      document.createElement('div'),
      document.createElement('ul'),
      document.createElement('li'),
      document.createElement('ol'),
      document.createElement('span'),
      document.createElement('input'),
      document.createElement('section'),
      document.createElement('table'),

      // Non-element DOM nodes
      document.createTextNode('text'),
      document.createComment('comment'),
      document.createDocumentFragment(),
    ];

    test.each(invalidValues)('throws TypeError for %p', (value) => {
      expect(() => assertIsButtonElement(value)).toThrow(TypeError);
      expect(() => assertIsButtonElement(value)).toThrow(
        /Expected .* to be a DOM element of type <button>/,
      );
    });
  });

  describe('String object wrappers', () => {
    test.each([new String('button'), new String('')])('throws TypeError for %p', (value) => {
      expect(() => assertIsButtonElement(value)).toThrow(TypeError);
    });
  });
});
