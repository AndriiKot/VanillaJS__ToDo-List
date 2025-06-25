import { isHTMLTagElement } from "../../../scripts/ui/";

describe("isHTMLTagElement", () => {
  describe("valid HTML tag elements", () => {
    const validElements = [
      "input",
      "div",
      "span",
      "p",
      "textarea",
      "button",
      "select",
      "option",
      "label",
      "form",
      "iframe",
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

    test.each(validElements)("returns true for <%s> element", (tagName) => {
      const el = document.createElement(tagName);
      expect(isHTMLTagElement(el)).toBe(true);
    });
  });

  describe("non-HTMLElement nodes", () => {
    test("returns false for HTMLDocument (document)", () => {
      expect(isHTMLTagElement(document)).toBe(false);
    });

    test("returns false for Text node", () => {
      const textNode = document.createTextNode("hello");
      expect(isHTMLTagElement(textNode)).toBe(false);
    });

    test("returns false for Comment node", () => {
      const comment = document.createComment("comment");
      expect(isHTMLTagElement(comment)).toBe(false);
    });

    test("returns false for DocumentFragment", () => {
      const fragment = document.createDocumentFragment();
      expect(isHTMLTagElement(fragment)).toBe(false);
    });
  });

  describe("invalid values (non-DOM)", () => {
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
      { nodeType: 1, nodeName: "DIV" }, // fake DOM-like object
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
      expect(isHTMLTagElement(value)).toBe(false);
    });
  });

  describe("String object wrappers", () => {
    test.each([new String("abc"), new String("")])(
      "returns false for %p",
      (value) => {
        expect(isHTMLTagElement(value)).toBe(false);
      },
    );
  });
});
