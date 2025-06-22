import { isInputElement } from "../../scripts/ui.js";

describe("isInputElement", () => {
  test("returns true for input element", () => {
    const input = document.createElement("input");
    expect(isInputElement(input)).toBe(true);
  });

  describe("valid DOM elements but NOT input", () => {
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
      "li",
    ];

    test.each(elements)("returns false for <%s> element", (tagName) => {
      const el = document.createElement(tagName);
      expect(isInputElement(el)).toBe(false);
    });

    test("returns false for HTMLDocument", () => {
      expect(isInputElement(document)).toBe(false);
    });
  });

  describe("invalid types (non-DOM elements)", () => {
    const invalidValues = [
      null,
      undefined,
      "<input>",
      123,
      NaN,
      Infinity,
      -Infinity,
      true,
      false,
      [],
      ["input"],
      {},
      { tagName: "INPUT" },
      () => {},
      Symbol("input"),
      BigInt(123),
      /input/,
      new Date(),
      new Map(),
      new Set(),
      new WeakMap(),
      new WeakSet(),
      Promise.resolve("input"),
      new Error("fail"),
    ];

    if (typeof Buffer !== "undefined") {
      invalidValues.push(Buffer.from("input"));
    }

    test.each(invalidValues)("returns false for %p", (value) => {
      expect(isInputElement(value)).toBe(false);
    });
  });

  describe("String object wrappers", () => {
    test.each([new String("input"), new String("")])(
      "returns false for %p",
      (value) => {
        expect(isInputElement(value)).toBe(false);
      },
    );
  });
});
