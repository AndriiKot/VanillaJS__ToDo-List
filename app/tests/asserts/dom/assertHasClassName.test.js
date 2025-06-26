import { assertHasClassName } from "@asserts";

describe("assertHasClassName", () => {
  describe("valid HTML elements with className", () => {
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
      expect(() => assertHasClassName(el)).not.toThrow();
    });
  });

  describe("non-element DOM nodes", () => {
    test("throws for HTMLDocument", () => {
      expect(() => assertHasClassName(document)).toThrow();
    });

    test("throws for Text node", () => {
      const textNode = document.createTextNode("hello");
      expect(() => assertHasClassName(textNode)).toThrow();
    });

    test("throws for Comment node", () => {
      const comment = document.createComment("comment");
      expect(() => assertHasClassName(comment)).toThrow();
    });

    test("throws for DocumentFragment", () => {
      const fragment = document.createDocumentFragment();
      expect(() => assertHasClassName(fragment)).toThrow();
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

    test.each(invalidValues)("throws for %p", (value) => {
      expect(() => assertHasClassName(value)).toThrow();
    });
  });

  describe("String object wrappers", () => {
    test.each([new String("abc"), new String("")])("throws for %p", (value) => {
      expect(() => assertHasClassName(value)).toThrow();
    });
  });

  describe("fallback catch block coverage", () => {
    test("uses Object.prototype.toString.call when String(el) throws", () => {
      const badObject = {
        toString() {
          throw new Error("fail in toString");
        },
      };

      expect(() => assertHasClassName(badObject)).toThrow(TypeError);
    });
  });
});
