import { getInputValue } from "../../scripts/ui.js";

describe("getInputValue", () => {
  test("returns the value of a valid <input> element", () => {
    const input = document.createElement("input");
    input.value = "Test value";
    expect(getInputValue(input)).toBe("Test value");
  });

  describe("throws TypeError for invalid inputs", () => {
    const invalidInputs = [
      null,
      undefined,
      "",
      "string",
      0,
      123,
      -1,
      NaN,
      Infinity,
      -Infinity,
      true,
      false,
      [],
      ["input"],
      {},
      { value: "fake" },
      () => {},
      function () {},
      Symbol("sym"),
      BigInt(10),
      /regex/,
      new Date(),
      new Map(),
      new Set(),
      new WeakMap(),
      new WeakSet(),
      Promise.resolve("input"),
      new Error("fail"),
      document.createElement("div"),
      document.createElement("textarea"),
      document.createElement("select"),
      document.createTextNode("text"),
    ];

    test.each(invalidInputs)("throws TypeError for %p", (value) => {
      expect(() => getInputValue(value)).toThrow(TypeError);
      expect(() => getInputValue(value)).toThrow(
        /Expected a DOM element of type <input>/,
      );
    });
  });
});
