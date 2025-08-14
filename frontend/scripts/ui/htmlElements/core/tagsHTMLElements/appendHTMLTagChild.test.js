import { appendHTMLTagChild } from './appendHTMLTagChild';

describe('appendHTMLTagChild', () => {
  let parent;

  beforeEach(() => {
    parent = document.createElement('ul');
  });

  describe('valid HTML elements', () => {
    test('appends a valid child element', () => {
      const child = document.createElement('li');
      const result = appendHTMLTagChild(parent, child);

      expect(result).toBe(child);
      expect(parent.contains(child)).toBe(true);
      expect(parent.firstChild).toBe(child);
    });

    test('can append multiple valid children', () => {
      const child1 = document.createElement('li');
      const child2 = document.createElement('li');

      appendHTMLTagChild(parent, child1);
      appendHTMLTagChild(parent, child2);

      expect(parent.childNodes).toHaveLength(2);
    });
  });

  describe('invalid HTML elements', () => {
    test('throws when child is not allowed for given parent', () => {
      const invalidChild = document.createElement('table');
      expect(() => appendHTMLTagChild(parent, invalidChild)).toThrow();
    });
  });

  describe('non-element values', () => {
    const invalidValues = [
      null,
      undefined,
      '',
      'li',
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

    test.each(invalidValues)('throws when child is %p', (value) => {
      expect(() => appendHTMLTagChild(parent, value)).toThrow();
    });
  });

  describe('disallowed by category rules', () => {
    // Examples based on your provided rules
    const invalidPairs = [
      // UL / OL should not contain TABLE directly (TABLE = Flow content but SPECIAL_ALLOWED_CHILDREN may deny it)
      ['ul', 'table'],
      ['ol', 'table'],

      // SELECT only allows Phrasing & Metadata content, so DIV is not allowed
      ['select', 'div'],

      // COLGROUP only allows Metadata content, so DIV is not allowed
      ['colgroup', 'div'],

      // THEAD only allows Flow content, so SCRIPT is not allowed
      ['thead', 'script'],

      // SPAN only allows Phrasing content, so DIV is not allowed
      ['span', 'div'],
    ];

    test.each(invalidPairs)(
      'throws when <%s> contains <%s> by category restriction',
      (parentTag, childTag) => {
        const p = document.createElement(parentTag);
        const c = document.createElement(childTag);
        expect(() => appendHTMLTagChild(p, c)).toThrow();
      },
    );
  });

  describe('disallowed by explicit exceptions', () => {
    const exceptionPairs = [
      // A cannot contain A
      ['a', 'a'],

      // BUTTON cannot contain BUTTON
      ['button', 'button'],

      // LABEL cannot contain LABEL
      ['label', 'label'],

      // FORM cannot contain FORM
      ['form', 'form'],

      // P cannot contain DIV, SECTION, ARTICLE, HEADER, FOOTER, NAV, ASIDE, MAIN, TABLE, UL, OL, FORM
      ['p', 'div'],
      ['p', 'section'],
      ['p', 'article'],
      ['p', 'header'],
      ['p', 'footer'],
      ['p', 'nav'],
      ['p', 'aside'],
      ['p', 'main'],
      ['p', 'table'],
      ['p', 'ul'],
      ['p', 'ol'],
      ['p', 'form'],
    ];

    test.each(exceptionPairs)(
      'throws when <%s> contains <%s> by explicit exception',
      (parentTag, childTag) => {
        const p = document.createElement(parentTag);
        const c = document.createElement(childTag);
        expect(() => appendHTMLTagChild(p, c)).toThrow();
      },
    );
  });
});
