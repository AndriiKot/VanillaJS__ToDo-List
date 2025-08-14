import { isElement } from '@ui';
import { VALID_STANDARD_HTML_TAGS } from '@ui';

describe('isElement', () => {
  describe('valid standard HTML elements', () => {
    test.each(VALID_STANDARD_HTML_TAGS)('returns true for <%s> element', (tagName) => {
      const el = document.createElement(tagName);
      expect(isElement(el)).toBe(true);
    });
  });

  describe('valid non-standard but valid elements (e.g. SVG)', () => {
    test('returns true for SVGElement', () => {
      const svgEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      expect(isElement(svgEl)).toBe(true);
    });

    test('returns true for MathMLElement', () => {
      const mathEl = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'math');
      expect(isElement(mathEl)).toBe(true);
    });
  });

  describe('invalid values (non-elements)', () => {
    const invalidValues = [
      null,
      undefined,
      '',
      'div',
      0,
      1,
      NaN,
      Infinity,
      -Infinity,
      true,
      false,
      Symbol('sym'),
      BigInt(123),
      {},
      [],
      () => {},
      function () {},
      new String('str'),
      new Number(123),
      new Boolean(true),
      new Date(),
      new Error('error'),
      new Map(),
      new Set(),
      new WeakMap(),
      new WeakSet(),
      document.createTextNode('text'),
      document.createComment('comment'),
      document.createDocumentFragment(),
      Promise.resolve('ok'),
    ];

    test.each(invalidValues)('returns false for %p', (value) => {
      expect(isElement(value)).toBe(false);
    });
  });
});
