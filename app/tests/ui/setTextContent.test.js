import { setTextContent } from "../../scripts/ui.js";

describe("setTextContent", () => {
  describe("valid cases", () => {
    test("sets textContent on valid element with valid string", () => {
      const el = document.createElement("p");
      setTextContent(el, "Hello");
      expect(el.textContent).toBe("Hello");
    });

    test.each([
      ["empty string", ""],
      ["string with spaces", "   "],
      ["string with newlines", "\n\n"],
      ["string with emojis", "🚀🔥"],
      ["long string", "a".repeat(1000)],
    ])("sets %s as textContent", (_desc, value) => {
      const el = document.createElement("div");
      setTextContent(el, value);
      expect(el.textContent).toBe(value);
    });
  });

  describe("invalid first argument (element)", () => {
    const notDomElements = [
      null,
      undefined,
      {},
      [],
      () => {},
      document.createTextNode("text"), // Node, но не Element
      Symbol("el"),
      123,
      new Map(),
      new Set(),
    ];

    test.each(notDomElements)(
      "throws TypeError if element is %p",
      (invalidEl) => {
        expect(() => setTextContent(invalidEl, "text")).toThrow(TypeError);
        expect(() => setTextContent(invalidEl, "text")).toThrow(
          "Expected first argument to be a DOM element",
        );
      },
    );
  });

  describe("invalid second argument (text)", () => {
    const invalidTexts = [
      null,
      undefined,
      {},
      [],
      123,
      NaN,
      true,
      false,
      Symbol("text"),
      () => "text",
      new String("wrapped"),
      new Date(),
    ];

    test.each(invalidTexts)("throws TypeError if text is %p", (invalidText) => {
      const el = document.createElement("div");
      expect(() => setTextContent(el, invalidText)).toThrow(TypeError);
      expect(() => setTextContent(el, invalidText)).toThrow(
        "Expected second argument to be a string",
      );
    });
  });
});
