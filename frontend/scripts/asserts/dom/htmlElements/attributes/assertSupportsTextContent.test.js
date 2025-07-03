/**
 * @jest-environment jsdom
 */

import { assertSupportsTextContent } from "@asserts";
import {
  VOID_HTML_TAGS,
  MULTIMEDIA_HTML_TAGS,
  VALID_STANDARD_HTML_TAGS,
} from "@ui";

describe("assertSupportsTextContent", () => {
  describe("passes without error for elements that support textContent", () => {
    const normalTags = Array.from(VALID_STANDARD_HTML_TAGS).filter(
      (tag) => !VOID_HTML_TAGS.has(tag) && !MULTIMEDIA_HTML_TAGS.has(tag),
    );

    test.each(normalTags)("does not throw for <%s>", (tag) => {
      const el = document.createElement(tag);
      expect(() => assertSupportsTextContent(el)).not.toThrow();
    });
  });

  describe("throws TypeError for void or multimedia elements", () => {
    const voidAndMultimediaTags = [
      ...Array.from(VOID_HTML_TAGS),
      ...Array.from(MULTIMEDIA_HTML_TAGS),
    ];

    test.each(voidAndMultimediaTags)("throws for <%s>", (tag) => {
      const el = document.createElement(tag);
      expect(() => assertSupportsTextContent(el)).toThrow(TypeError);
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
      expect(() => assertSupportsTextContent(value)).toThrow(TypeError);
    });
  });

  describe("error message contains argument name if provided", () => {
    test("contains custom argument name in error message", () => {
      const el = document.createElement("br");
      const argName = "myArg";
      try {
        assertSupportsTextContent(el, argName);
      } catch (e) {
        expect(e).toBeInstanceOf(TypeError);
        expect(e.message).toMatch(argName);
      }
    });

    test("contains default argument name 'value' if not provided", () => {
      const el = document.createElement("br");
      try {
        assertSupportsTextContent(el);
      } catch (e) {
        expect(e).toBeInstanceOf(TypeError);
        expect(e.message).toMatch("value");
      }
    });
  });
});
