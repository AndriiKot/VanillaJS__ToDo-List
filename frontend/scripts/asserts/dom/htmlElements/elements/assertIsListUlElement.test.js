import { assertIsListUlElement } from '@asserts';

describe('assertIsListUlElement', () => {
  describe('valid <ul> elements (should NOT throw)', () => {
    test('does not throw for a valid <ul> element', () => {
      const ul = document.createElement('ul');
      expect(() => assertIsListUlElement(ul)).not.toThrow();
    });
  });

  describe('invalid inputs (should throw TypeError)', () => {
    const invalidValues = [
      null,
      undefined,
      '',
      'ul',
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
      { tagName: 'UL' },
      [],
      ['ul'],
      () => {},
      function () {},
      Symbol('ul'),
      BigInt(100),
      new String('ul'),
      new Number(42),
      new Boolean(false),
      new Date(),
      new Map(),
      new Set(),
      new WeakMap(),
      new WeakSet(),
      new Error('fail'),
      Promise.resolve('ul'),

      // Wrong DOM elements
      document.createElement('div'),
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
      expect(() => assertIsListUlElement(value)).toThrow(TypeError);
      expect(() => assertIsListUlElement(value)).toThrow(
        /Expected .* to be a DOM element of type <ul>/,
      );
    });
  });

  describe('String object wrappers', () => {
    test.each([new String('ul'), new String('')])('throws TypeError for %p', (value) => {
      expect(() => assertIsListUlElement(value)).toThrow(TypeError);
    });
  });
});
