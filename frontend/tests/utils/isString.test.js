import { isString } from "@utils";

describe("isString", () => {
  describe("primitive strings", () => {
    test.each([
      ["empty string", "", true],
      ["normal string", "hello", true],
      ["string with spaces", "   ", true],
      ["string with tabs/newlines", "\t\n", true],
      ["string with emojis", "😊🚀", true],
      ["string with special characters", "!@#$%^&*", true],
      ["long string", "a".repeat(10000), true],
    ])("returns true for %s", (_desc, input, expected) => {
      expect(isString(input)).toBe(expected);
    });
  });

  describe("non-string primitive values", () => {
    test.each([
      ["null", null],
      ["undefined", undefined],
      ["number", 123],
      ["zero", 0],
      ["NaN", NaN],
      ["Infinity", Infinity],
      ["-Infinity", -Infinity],
      ["boolean true", true],
      ["boolean false", false],
      ["symbol", Symbol("abc")],
      ["BigInt", BigInt(123)],
    ])("returns false for %s", (_desc, input) => {
      expect(isString(input)).toBe(false);
    });
  });

  describe("non-string objects and functions", () => {
    test.each([
      ["String object wrapper", new String("abc")],
      ["empty String object", new String("")],
      ["array", []],
      ["array with string", ["abc"]],
      ["object", {}],
      ["function", () => "abc"],
      ["Date", new Date()],
      ["RegExp", /abc/],
      ["Map", new Map()],
      ["Set", new Set()],
      ["WeakMap", new WeakMap()],
      ["WeakSet", new WeakSet()],
      ["Promise", Promise.resolve("abc")],
      ["Error", new Error("fail")],
    ])("returns false for %s", (_desc, input) => {
      expect(isString(input)).toBe(false);
    });

    test("returns false for Buffer (Node.js)", () => {
      if (typeof Buffer !== "undefined") {
        expect(isString(Buffer.from("abc"))).toBe(false);
      }
    });
  });
});
