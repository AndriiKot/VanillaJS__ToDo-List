/**
 * @jest-environment jsdom
 */

import { isStandardHTMLTagElement } from '@ui';
import { VALID_STANDARD_HTML_TAGS } from '@ui';

describe('isStandardHTMLTagElement', () => {
  describe('valid standard HTML tag elements', () => {
    test.each(VALID_STANDARD_HTML_TAGS)('returns true for <%s> element', (tagName) => {
      const el = document.createElement(tagName);
      expect(isStandardHTMLTagElement(el)).toBe(true);
    });
  });

  describe('non-standard/custom tag elements', () => {
    const customTags = ['custom-element', 'my-button', 'x-widget'];

    test.each(customTags)('returns false for <%s> custom element', (tagName) => {
      const el = document.createElement(tagName);
      expect(isStandardHTMLTagElement(el)).toBe(false);
    });
  });

  describe('invalid values (should throw TypeError)', () => {
    const invalidValues = [
      null,
      undefined,
      123,
      'div',
      {},
      [],
      document.createTextNode('text'),
      document.createComment('comment'),
      document.createDocumentFragment(),
    ];

    test.each(invalidValues)('throws for %p', (value) => {
      expect(() => isStandardHTMLTagElement(value)).toThrow(TypeError);
      expect(() => isStandardHTMLTagElement(value)).toThrow(
        /Expected .* to be an instance of HTMLElement/,
      );
    });
  });
});
