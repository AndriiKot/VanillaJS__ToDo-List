import { isListUlElement } from "../../../scripts/ui/";

describe("isListUlElement", () => {
  test("returns true for <ul> element", () => {
    const ul = document.createElement("ul");
    expect(isListUlElement(ul)).toBe(true);
  });

  describe("valid DOM elements but NOT <ul>", () => {
    const elements = [
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
      "li",
      "input",
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

    test.each(elements)("returns false for <%s> element", (tagName) => {
      const el = document.createElement(tagName);
      expect(isListUlElement(el)).toBe(false);
    });

    test("returns false for HTMLDocument", () => {
      expect(isListUlElement(document)).toBe(false);
    });
  });

  describe("invalid types (non-DOM elements)", () => {
    const invalidValues = [
      null,
      undefined,
      "<ul>",
      123,
      NaN,
      Infinity,
      -Infinity,
      true,
      false,
      [],
      ["ul"],
      {},
      { tagName: "UL" },
      () => {},
      Symbol("ul"),
      BigInt(123),
      /ul/,
      new Date(),
      new Map(),
      new Set(),
      new WeakMap(),
      new WeakSet(),
      Promise.resolve("ul"),
      new Error("fail"),
    ];

    if (typeof Buffer !== "undefined") {
      invalidValues.push(Buffer.from("ul"));
    }

    test.each(invalidValues)("returns false for %p", (value) => {
      expect(isListUlElement(value)).toBe(false);
    });
  });

  describe("String object wrappers", () => {
    test.each([new String("ul"), new String("")])(
      "returns false for %p",
      (value) => {
        expect(isListUlElement(value)).toBe(false);
      },
    );
  });
});
