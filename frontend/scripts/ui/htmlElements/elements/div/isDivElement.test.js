import { isDivElement } from './isDivElement';

describe('isDivElement', () => {
  test('returns true for <div> element', () => {
    const div = document.createElement('div');
    expect(isDivElement(div)).toBe(true);
  });

  describe('valid DOM elements but NOT <div>', () => {
    const elements = [
      'span',
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
      expect(isDivElement(el)).toBe(false);
    });

    test('returns false for HTMLDocument', () => {
      expect(isDivElement(document)).toBe(false);
    });
  });

  describe('invalid types (non-DOM elements)', () => {
    const invalidValues = [
      null,
      undefined,
      '<div>',
      123,
      NaN,
      Infinity,
      -Infinity,
      true,
      false,
      [],
      ['div'],
      {},
      { tagName: 'DIV' },
      () => {},
      Symbol('div'),
      BigInt(123),
      /div/,
      new Date(),
      new Map(),
      new Set(),
      new WeakMap(),
      new WeakSet(),
      Promise.resolve('div'),
      new Error('fail'),
    ];

    if (typeof Buffer !== 'undefined') {
      invalidValues.push(Buffer.from('div'));
    }

    test.each(invalidValues)('returns false for %p', (value) => {
      expect(isDivElement(value)).toBe(false);
    });
  });

  describe('String object wrappers', () => {
    test.each([new String('div'), new String('')])('returns false for %p', (value) => {
      expect(isDivElement(value)).toBe(false);
    });
  });
});
