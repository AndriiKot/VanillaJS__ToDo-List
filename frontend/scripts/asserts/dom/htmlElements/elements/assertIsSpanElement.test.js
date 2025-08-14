import { assertIsSpanElement } from '@asserts';

describe('assertIsSpanElement', () => {
  describe('valid <span> element (should NOT throw)', () => {
    test('does not throw for a valid <span> element', () => {
      const span = document.createElement('span');
      expect(() => assertIsSpanElement(span)).not.toThrow();
    });
  });

  describe('invalid inputs (should throw TypeError)', () => {
    const invalidValues = [
      null,
      undefined,
      '',
      'span',
      123,
      true,
      false,
      0,
      1,
      -1,
      42,
      NaN,
      Infinity,
      -Infinity,
      Symbol('el'),
      BigInt(10),
      {},
      { textContent: 'fake' },
      [],
      ['span'],
      () => {},
      function () {},
      new String('str'),
      new Number(123),
      new Boolean(false),
      new Date(),
      new Map(),
      new Set(),
      new WeakMap(),
      new WeakSet(),
      new Error('fail'),
      document.createElement('div'),
      document.createElement('input'),
      document.createElement('ul'),
      document.createElement('section'),
      document.createTextNode('text'),
      document.createComment('comment'),
      document.createDocumentFragment(),
      Promise.resolve('ok'),
    ];

    test.each(invalidValues)('throws TypeError for %p', (value) => {
      expect(() => assertIsSpanElement(value)).toThrow(TypeError);
      expect(() => assertIsSpanElement(value)).toThrow(
        /Expected value to be a DOM element of type <span>, but received \[object .*] of type .*/,
      );
    });
  });
});
