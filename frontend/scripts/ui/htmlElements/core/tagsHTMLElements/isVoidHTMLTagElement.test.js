/**
 * @jest-environment jsdom
 */

import { isVoidHTMLElement } from '@ui';
import { VOID_HTML_TAGS, VALID_STANDARD_HTML_TAGS } from '@ui';

describe('isVoidHTMLElement', () => {
  describe('returns true for void HTML elements', () => {
    test.each(Array.from(VOID_HTML_TAGS))('returns true for <%s>', (tagName) => {
      const el = document.createElement(tagName);
      expect(isVoidHTMLElement(el)).toBe(true);
    });
  });

  describe('returns false for non-void standard HTML elements', () => {
    const nonVoidTags = Array.from(VALID_STANDARD_HTML_TAGS).filter(
      (tag) => !VOID_HTML_TAGS.has(tag),
    );

    test.each(nonVoidTags)('returns false for <%s>', (tagName) => {
      const el = document.createElement(tagName);
      expect(isVoidHTMLElement(el)).toBe(false);
    });
  });

  describe('throws TypeError for non-HTMLElement arguments', () => {
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
      expect(() => isVoidHTMLElement(value)).toThrow(TypeError);
    });
  });
});
