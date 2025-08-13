/**
 * @jest-environment jsdom
 */

import { setListItemClassName } from "./setListItemClassName";

describe("setListItemClassName", () => {
  describe("valid cases", () => {
    const validClassNames = [
      "todo-item",
      "_header",
      "-variable",
      "btn123",
      "école",
      "こんにちは",
      "-_fooBar123",
    ];

    test.each(validClassNames)(
      "sets className '%s' on a valid <li> element",
      (className) => {
        const li = document.createElement("li");
        setListItemClassName(li, className);
        expect(li.className).toBe(className);
      },
    );
  });

  describe("invalid first argument (li element)", () => {
    const invalidElements = [
      null,
      undefined,
      123,
      "li",
      {},
      [],
      document.createElement("div"),
      document.createElement("ul"),
      document.createTextNode("text"),
      document.createComment("comment"),
      document.createDocumentFragment(),
    ];

    test.each(invalidElements)("throws TypeError if element is %p", (el) => {
      expect(() => setListItemClassName(el, "todo-item")).toThrow();
    });
  });

  describe("invalid second argument (className)", () => {
    const invalidClassNames = [
      "", // empty string
      "   ", // whitespace only
      "123btn", // starts with digit
      "my class", // contains space
      "btn!", // invalid character
      "\n", // newline
      "🙂emoji", // emoji at start
      "1variable", // starts with digit

      null,
      undefined,
      0,
      123,
      NaN,
      Infinity,
      -Infinity,
      true,
      false,
      [],
      ["a", "b"],
      {},
      { toString: () => "test" },
      () => {},
      Symbol("sym"),
      Symbol(),
      BigInt(10),
      /regex/,
      new Date(),
      new Map(),
      new Set(),
      new WeakMap(),
      new WeakSet(),
      Promise.resolve(),
      new Error("error"),
      new String("string object wrapper"), // object wrapper, not primitive
      Object.create(null),
      String,
      Number,
    ];

    test.each(invalidClassNames)(
      "throws TypeError if className is invalid: %p",
      (className) => {
        const li = document.createElement("li");
        expect(() => setListItemClassName(li, className)).toThrow();
      },
    );
  });
});
