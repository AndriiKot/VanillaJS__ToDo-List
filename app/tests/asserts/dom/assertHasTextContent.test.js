import { assertHasTextContent } from "../../../scripts/asserts/";

describe("assertHasTextContent", () => {
  describe("valid HTML elements with textContent", () => {
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

    test.each(validTags)("passes for <%s> element", (tagName) => {
      const el = document.createElement(tagName);
      expect(() => assertHasTextContent(el)).not.toThrow();
    });
  });

  describe("non-element DOM nodes", () => {
    test("throws for HTMLDocument", () => {
      expect(() => assertHasTextContent(document)).toThrow();
    });

    test("throws for Text node", () => {
      const textNode = document.createTextNode("hello");
      expect(() => assertHasTextContent(textNode)).toThrow();
    });

    test("throws for Comment node", () => {
      const comment = document.createComment("comment");
      expect(() => assertHasTextContent(comment)).toThrow();
    });

    test("throws for DocumentFragment", () => {
      const fragment = document.createDocumentFragment();
      expect(() => assertHasTextContent(fragment)).toThrow();
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

    test.each(invalidValues)("throws for %p", (value) => {
      expect(() => assertHasTextContent(value)).toThrow();
    });
  });

  describe("String object wrappers", () => {
    test.each([new String("abc"), new String("")])("throws for %p", (value) => {
      expect(() => assertHasTextContent(value)).toThrow();
    });
  });
});
