import { isSpanElement } from '@ui';

describe('isSpanElement', () => {
  test('returns true for <span> element', () => {
    const span = document.createElement('span');
    expect(isSpanElement(span)).toBe(true);
  });

  describe('valid DOM elements but NOT <span>', () => {
    const elements = [
      'div',
      'li',
      'p',
      'textarea',
      'button',
      'select',
      'option',
      'label',
      'form',
      'iframe',
      'img',
      'ul',
      'input',
      'table',
      'thead',
      'tbody',
      'tfoot',
      'tr',
      'td',
      'th',
      'header',
      'footer',
      'nav',
      'section',
      'article',
      'aside',
      'main',
      'canvas',
      'svg',
      'video',
      'audio',
      'picture',
      'figure',
      'figcaption',
    ];

    test.each(elements)('returns false for <%s> element', (tagName) => {
      const el = document.createElement(tagName);
      expect(isSpanElement(el)).toBe(false);
    });

    test('returns false for HTMLDocument', () => {
      expect(isSpanElement(document)).toBe(false);
    });
  });

  describe('invalid types (non-DOM elements)', () => {
    const invalidValues = [
      null,
      undefined,
      '<span>',
      123,
      NaN,
      Infinity,
      -Infinity,
      true,
      false,
      [],
      ['span'],
      {},
      { tagName: 'SPAN' },
      () => {},
      Symbol('span'),
      BigInt(123),
      /span/,
      new Date(),
      new Map(),
      new Set(),
      new WeakMap(),
      new WeakSet(),
      Promise.resolve('span'),
      new Error('fail'),
    ];

    if (typeof Buffer !== 'undefined') {
      invalidValues.push(Buffer.from('span'));
    }

    test.each(invalidValues)('returns false for %p', (value) => {
      expect(isSpanElement(value)).toBe(false);
    });
  });

  describe('String object wrappers', () => {
    test.each([new String('span'), new String('')])('returns false for %p', (value) => {
      expect(isSpanElement(value)).toBe(false);
    });
  });
});
