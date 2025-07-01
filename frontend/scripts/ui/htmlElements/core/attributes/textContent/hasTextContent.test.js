/**
 * @jest-environment jsdom
 */

import { hasTextContent } from "@ui";

describe("hasTextContent", () => {
  describe("valid HTML elements with textContent", () => {
    const elements = [
      "div",
      "span",
      "p",
      "input",
      "textarea",
      "button",
      "select",
      "option",
      "label",
      "form",
      "img",
      "ul",
      "li",
      "table",
      "thead",
      "tbody",
      "tfoot",
      "tr",
      "td",
      "th",
      "header",
      "footer",
      "nav",
      "section",
      "article",
      "aside",
      "main",
      "canvas",
      "svg",
      "video",
      "audio",
      "picture",
      "figure",
      "figcaption",
    ];

    test.each(elements)("returns true for <%s>", (tag) => {
      const el = document.createElement(tag);
      expect(hasTextContent(el)).toBe(true);
    });
  });

  describe("non-HTMLElement DOM nodes", () => {
    const invalidDOM = [
      ["Text node", document.createTextNode("text")],
      ["Comment node", document.createComment("comment")],
      ["DocumentFragment", document.createDocumentFragment()],
      ["HTMLDocument", document],
    ];

    test.each(invalidDOM)("throws for %s", (_, node) => {
      expect(() => hasTextContent(node)).toThrow(TypeError);
    });
  });

  describe("invalid JS values", () => {
    const invalidValues = [
      null,
      undefined,
      "",
      "<div>",
      123,
      NaN,
      Infinity,
      true,
      false,
      [],
      ["div"],
      {},
      { textContent: "fake" },
      () => {},
      Symbol("x"),
      BigInt(1),
      /abc/,
      new Date(),
      new Map(),
      new Set(),
      new WeakMap(),
      new WeakSet(),
      Promise.resolve("x"),
      new Error("fail"),
      new String("wrapped"),
    ];

    test.each(invalidValues)("throws for %p", (value) => {
      expect(() => hasTextContent(value)).toThrow(TypeError);
    });
  });
});
