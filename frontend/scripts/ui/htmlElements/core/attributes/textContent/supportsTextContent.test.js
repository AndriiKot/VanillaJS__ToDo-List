/**
 * @jest-environment jsdom
 */

import { supportsTextContent } from "@ui";
import {
  VOID_HTML_TAGS,
  MULTIMEDIA_HTML_TAGS,
  VALID_STANDARD_HTML_TAGS,
} from "@ui";

describe("supportsTextContent", () => {
  describe("void HTML elements", () => {
    test.each(Array.from(VOID_HTML_TAGS))(
      "returns false for void element <%s>",
      (tag) => {
        const el = document.createElement(tag);
        expect(supportsTextContent(el)).toBe(false);
      },
    );
  });

  describe("multimedia HTML elements", () => {
    test.each(Array.from(MULTIMEDIA_HTML_TAGS))(
      "returns false for multimedia element <%s>",
      (tag) => {
        const el = document.createElement(tag);
        expect(supportsTextContent(el)).toBe(false);
      },
    );
  });

  describe("non-void, non-multimedia standard HTML elements", () => {
    const normalTags = Array.from(VALID_STANDARD_HTML_TAGS).filter(
      (tag) => !VOID_HTML_TAGS.has(tag) && !MULTIMEDIA_HTML_TAGS.has(tag),
    );

    test.each(normalTags)("returns true for <%s>", (tag) => {
      const el = document.createElement(tag);
      expect(supportsTextContent(el)).toBe(true);
    });
  });

  describe("throws TypeError for non-HTMLElement arguments", () => {
    const invalidValues = [
      null,
      undefined,
      123,
      "div",
      {},
      [],
      document.createTextNode("text"),
      document.createComment("comment"),
      document.createDocumentFragment(),
    ];

    test.each(invalidValues)("throws for %p", (value) => {
      expect(() => supportsTextContent(value)).toThrow(TypeError);
    });
  });
});
