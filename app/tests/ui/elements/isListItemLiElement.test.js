import { isListItemLiElement } from "../../../scripts/ui/";

describe("isListItemLiElement", () => {
  test("returns true for <li> element", () => {
    const li = document.createElement("li");
    expect(isListItemLiElement(li)).toBe(true);
  });

  describe("valid DOM elements but NOT <li>", () => {
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
      "ul",
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
      expect(isListItemLiElement(el)).toBe(false);
    });

    test("returns false for HTMLDocument", () => {
      expect(isListItemLiElement(document)).toBe(false);
    });
  });

  describe("invalid types (non-DOM elements)", () => {
    const invalidValues = [
      null,
      undefined,
      "<li>",
      123,
      NaN,
      Infinity,
      -Infinity,
      true,
      false,
      [],
      ["li"],
      {},
      { tagName: "LI" },
      () => {},
      Symbol("li"),
      BigInt(123),
      /li/,
      new Date(),
      new Map(),
      new Set(),
      new WeakMap(),
      new WeakSet(),
      Promise.resolve("li"),
      new Error("fail"),
    ];

    if (typeof Buffer !== "undefined") {
      invalidValues.push(Buffer.from("li"));
    }

    test.each(invalidValues)("returns false for %p", (value) => {
      expect(isListItemLiElement(value)).toBe(false);
    });
  });

  describe("String object wrappers", () => {
    test.each([new String("li"), new String("")])(
      "returns false for %p",
      (value) => {
        expect(isListItemLiElement(value)).toBe(false);
      },
    );
  });
});
