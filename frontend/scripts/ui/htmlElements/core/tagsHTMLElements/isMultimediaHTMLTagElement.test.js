/**
 * @jest-environment jsdom
 */

import { isMultimediaHTMLTagElement } from '@ui';
import { MULTIMEDIA_HTML_TAGS, VALID_STANDARD_HTML_TAGS, VOID_HTML_TAGS } from '@ui';

describe('isMultimediaHTMLTagElement', () => {
  describe('returns true for multimedia HTML elements', () => {
    test.each(Array.from(MULTIMEDIA_HTML_TAGS))('returns true for <%s>', (tagName) => {
      const el = document.createElement(tagName);
      expect(isMultimediaHTMLTagElement(el)).toBe(true);
    });
  });

  describe('returns false for void HTML elements', () => {
    test.each(Array.from(VOID_HTML_TAGS))('returns false for void tag <%s>', (tagName) => {
      const el = document.createElement(tagName);
      expect(isMultimediaHTMLTagElement(el)).toBe(false);
    });
  });

  describe('returns false for non-multimedia standard HTML elements', () => {
    const nonMultimediaTags = Array.from(VALID_STANDARD_HTML_TAGS).filter(
      (tag) => !MULTIMEDIA_HTML_TAGS.has(tag) && !VOID_HTML_TAGS.has(tag),
    );

    test.each(nonMultimediaTags)('returns false for <%s>', (tagName) => {
      const el = document.createElement(tagName);
      expect(isMultimediaHTMLTagElement(el)).toBe(false);
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
      expect(() => isMultimediaHTMLTagElement(value)).toThrow(TypeError);
    });
  });
});
