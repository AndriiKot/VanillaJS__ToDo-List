import { hasClassName } from "../../../scripts/ui/";

describe("hasClassName", () => {
  describe("valid HTML elements with className", () => {
    const elementsWithClassName = [
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

    test.each(elementsWithClassName)(
      "returns true for <%s> element",
      (tagName) => {
        const el = document.createElement(tagName);
        expect(hasClassName(el)).toBe(true);
      },
    );
  });

  describe("non-HTMLElement nodes", () => {
    test("returns false for HTMLDocument", () => {
      expect(hasClassName(document)).toBe(false);
    });

    test("returns false for Text node", () => {
      const textNode = document.createTextNode("Hello");
      expect(hasClassName(textNode)).toBe(false);
    });

    test("returns false for Comment node", () => {
      const comment = document.createComment("comment");
      expect(hasClassName(comment)).toBe(false);
    });

    test("returns false for DocumentFragment", () => {
      const fragment = document.createDocumentFragment();
      expect(hasClassName(fragment)).toBe(false);
    });
  });

  describe("invalid types (non-DOM)", () => {
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
      { className: "fake" },
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
      expect(hasClassName(value)).toBe(false);
    });
  });

  describe("String object wrappers", () => {
    test.each([new String("abc"), new String("")])(
      "returns false for %p",
      (value) => {
        expect(hasClassName(value)).toBe(false);
      },
    );
  });
});
