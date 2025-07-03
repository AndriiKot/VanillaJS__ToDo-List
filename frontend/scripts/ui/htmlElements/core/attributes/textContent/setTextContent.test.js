/**
 * @jest-environment jsdom
 */

import { setTextContent } from "@ui";

describe("setTextContent", () => {
  describe("valid usage", () => {
    test("sets text content correctly on a div", () => {
      const el = document.createElement("div");
      setTextContent(el, "Hello");
      expect(el.textContent).toBe("Hello");
    });

    test("overwrites existing text content", () => {
      const el = document.createElement("p");
      el.textContent = "Old";
      setTextContent(el, "New");
      expect(el.textContent).toBe("New");
    });

    test("works with empty string", () => {
      const el = document.createElement("span");
      setTextContent(el, "");
      expect(el.textContent).toBe("");
    });
  });

  describe("invalid first argument (element)", () => {
    const invalidElements = [
      null,
      undefined,
      "",
      123,
      true,
      {},
      [],
      document.createTextNode("text"),
      document.createComment("comment"),
      document.createDocumentFragment(),
      Promise.resolve("text"),
    ];

    test.each(invalidElements)("throws TypeError if element is %p", (el) => {
      expect(() => setTextContent(el, "text")).toThrow(TypeError);
      expect(() => setTextContent(el, "text")).toThrow(
        /Expected .* to be an instance of HTMLElement/,
      );
    });
  });

  describe("invalid second argument (text)", () => {
    const invalidTexts = [
      null,
      undefined,
      123,
      true,
      false,
      {},
      [],
      () => {},
      Symbol("abc"),
      new Date(),
    ];

    test.each(invalidTexts)("throws TypeError if text is %p", (text) => {
      const el = document.createElement("div");
      expect(() => setTextContent(el, text)).toThrow(TypeError);
      expect(() => setTextContent(el, text)).toThrow(
        /Expected .* to be a string/,
      );
    });
  });
});
