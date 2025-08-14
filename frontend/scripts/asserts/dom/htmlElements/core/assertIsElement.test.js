import { assertIsElement } from '@asserts';
import { VALID_STANDARD_HTML_TAGS } from '@ui';

describe('assertIsElement', () => {
  describe('valid standard HTML elements', () => {
    test.each(VALID_STANDARD_HTML_TAGS)('does not throw for <%s> element', (tagName) => {
      const el = document.createElement(tagName);
      expect(() => assertIsElement(el)).not.toThrow();
    });
  });

  describe('valid non-standard but valid elements (SVG, MathML)', () => {
    test('does not throw for SVGElement', () => {
      const svgEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      expect(() => assertIsElement(svgEl)).not.toThrow();
    });

    test('does not throw for MathMLElement', () => {
      const mathEl = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'math');
      expect(() => assertIsElement(mathEl)).not.toThrow();
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
      ['div'],
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

    test.each(invalidValues)('throws TypeError for %p', (value) => {
      expect(() => assertIsElement(value, 'arg')).toThrow(TypeError);
      expect(() => assertIsElement(value, 'arg')).toThrow(/arg.*instance of Element/i);
    });
  });
});
