import { isDomElement } from "../../scripts/ui.js";

describe("isDomElement", () => {
  describe("valid DOM elements", () => {
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
      expect(isDomElement(el)).toBe(true);
    });

    test("returns true for HTMLDocument", () => {
      expect(isDomElement(document)).toBe(true);
    });
  });

  describe("invalid types (non-DOM elements)", () => {
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
      { nodeType: 1, nodeName: "DIV" }, // похожий на DOM, но не DOM элемент
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
      expect(isDomElement(value)).toBe(false);
    });
  });

  describe("String object wrappers", () => {
    test.each([new String("abc"), new String("")])(
      "returns false for %p",
      (value) => {
        expect(isDomElement(value)).toBe(false);
      },
    );
  });
});
