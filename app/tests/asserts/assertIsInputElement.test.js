import { assertIsInputElement } from "../../scripts/asserts.js"; // поправь путь, если нужно

describe("assertIsInputElement", () => {
  describe("valid input elements (should NOT throw)", () => {
    test("does not throw for a valid <input> element", () => {
      const input = document.createElement("input");
      expect(() => assertIsInputElement(input)).not.toThrow();
    });
  });

  describe("invalid inputs (should throw TypeError)", () => {
    const invalidValues = [
      null,
      undefined,
      "",
      "text",
      123,
      true,
      {},
      [],
      () => {},
      document.createElement("div"),
      document.createElement("textarea"),
      document.createElement("select"),
      document.createTextNode("text"),
      Symbol("sym"),
      new Map(),
      new Set(),
    ];

    test.each(invalidValues)("throws TypeError for %p", (value) => {
      expect(() => assertIsInputElement(value)).toThrow(TypeError);
      expect(() => assertIsInputElement(value)).toThrow(
        /Expected a DOM element of type <input>/,
      );
    });
  });
});
