import { isValidInputValue } from "../../scripts/ui.js"; // поправь путь при необходимости

describe("isValidInputValue", () => {
  describe("valid <input> elements", () => {
    test.each([
      ["non-empty string", "hello"],
      ["number-like string", "123"],
      ["emoji", "🔥"],
      ["non-Latin characters", "привет"],
      ["string with spaces around", " trimmed "],
    ])("returns true for: %s", (_desc, value) => {
      const input = document.createElement("input");
      input.value = value;
      expect(isValidInputValue(input)).toBe(true);
    });

    test.each([
      ["empty string", ""],
      ["only spaces", "   "],
      ["only newlines", "\n\n"],
      ["tabs only", "\t\t"],
      ["mixed whitespace", " \n\t "],
    ])("returns false for: %s", (_desc, value) => {
      const input = document.createElement("input");
      input.value = value;
      expect(isValidInputValue(input)).toBe(false);
    });
  });

  describe("invalid input types (should throw TypeError)", () => {
    const invalidInputs = [
      null,
      undefined,
      "",
      "text",
      0,
      123,
      NaN,
      Infinity,
      true,
      false,
      [],
      ["input"],
      {},
      { value: "fake" },
      () => {},
      Symbol("sym"),
      BigInt(1),
      /regex/,
      new Date(),
      new Map(),
      new Set(),
      new WeakMap(),
      new WeakSet(),
      Promise.resolve("ok"),
      new Error("fail"),
      document.createElement("div"),
      document.createElement("textarea"),
      document.createElement("select"),
      document.createTextNode("node"),
    ];

    test.each(invalidInputs)("throws TypeError for %p", (value) => {
      expect(() => isValidInputValue(value)).toThrow(TypeError);
      expect(() => isValidInputValue(value)).toThrow(
        /Expected a DOM element of type <input>/,
      );
    });
  });
});
