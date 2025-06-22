import { hasTextContent } from "../../scripts/ui.js";

describe("hasTextContent", () => {
  describe("valid DOM elements with textContent", () => {
    const validTags = [
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

    test.each(validTags)("returns true for <%s> element", (tagName) => {
      const el = document.createElement(tagName);
      expect(hasTextContent(el)).toBe(true);
    });

    test("returns true for HTMLDocument", () => {
      expect(hasTextContent(document)).toBe(true);
    });
  });

  describe("valid Node types but NOT DOM elements", () => {
    test("returns false for Text node", () => {
      const textNode = document.createTextNode("hello");
      expect(hasTextContent(textNode)).toBe(false);
    });

    test("returns false for Comment node", () => {
      const comment = document.createComment("comment");
      expect(hasTextContent(comment)).toBe(false);
    });

    test("returns false for DocumentFragment", () => {
      const fragment = document.createDocumentFragment();
      expect(hasTextContent(fragment)).toBe(false);
    });
  });

  describe("invalid types (not DOM elements)", () => {
    const invalidValues = [
      null,
      undefined,
      "",
      "<div>",
      0,
      123,
      NaN,
      Infinity,
      -Infinity,
      true,
      false,
      [],
      ["div"],
      {},
      { textContent: "fake" },
      () => {},
      Symbol("abc"),
      BigInt(123),
      /abc/,
      new Date(),
      new Map(),
      new Set(),
      new WeakMap(),
      new WeakSet(),
      Promise.resolve("abc"),
      new Error("fail"),
    ];

    if (typeof Buffer !== "undefined") {
      invalidValues.push(Buffer.from("abc"));
    }

    test.each(invalidValues)("returns false for %p", (value) => {
      expect(hasTextContent(value)).toBe(false);
    });
  });

  describe("String object wrappers", () => {
    test.each([new String("abc"), new String("")])(
      "returns false for %p",
      (value) => {
        expect(hasTextContent(value)).toBe(false);
      },
    );
  });
});
