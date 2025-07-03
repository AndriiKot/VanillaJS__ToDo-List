/**
 * @jest-environment jsdom
 */

import { setListItemClassName } from "@ui";

describe("setListItemClassName", () => {
  describe("valid cases", () => {
    test("sets className on valid <li> element with valid string", () => {
      const li = document.createElement("li");
      setListItemClassName(li, "todo__item");
      expect(li.className).toBe("todo__item");
    });

    test.each([
      ["empty string", ""],
      ["string with spaces", "   "],
      ["string with hyphen", "todo-item"],
      ["string with multiple classes", "a b c"],
      ["long string", "a".repeat(100)],
    ])("sets %s as className", (_desc, value) => {
      const li = document.createElement("li");
      setListItemClassName(li, value);
      expect(li.className).toBe(value);
    });
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
      expect(() => setListItemClassName(el, "todo")).toThrow(TypeError);
      expect(() => setListItemClassName(el, "todo")).toThrow(
        /first argument.*<li>/,
      );
    });
  });

  describe("invalid second argument (className)", () => {
    const invalidClassNames = [
      null,
      undefined,
      123,
      true,
      false,
      {},
      [],
      () => {},
      Symbol("text"),
      new Date(),
    ];

    test.each(invalidClassNames)(
      "throws TypeError if className is %p",
      (value) => {
        const li = document.createElement("li");
        expect(() => setListItemClassName(li, value)).toThrow(TypeError);
        expect(() => setListItemClassName(li, value)).toThrow(
          /second argument.*string/,
        );
      },
    );
  });
});
