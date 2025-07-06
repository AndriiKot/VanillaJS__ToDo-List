import { lower } from "@utils";

describe("lower", () => {
  describe("valid string inputs", () => {
    test.each([
      ["converts uppercase letters to lowercase", "ABC", "abc"],
      ["keeps lowercase letters", "abc", "abc"],
      ["numbers are unchanged", "123", "123"],
      ["mixed letters", "aBcDe", "abcde"],
      ["string with symbols", "!@#$%^", "!@#$%^"],
      ["string with spaces", "HELLO WORLD", "hello world"],
      ["empty string", "", ""],
      ["string with tabs/newlines", "\nABC\t", "\nabc\t"],
      ["unicode: кириллица", "ПРИВЕТ", "привет"],
      ["unicode: emoji", "😊ABC", "😊abc"],
      ["string with zero-width space", "A\u200BBC", "a\u200bbc"],
      ["very long string", "A".repeat(1000), "a".repeat(1000)],
    ])("%s", (_desc, input, expected) => {
      expect(lower(input)).toBe(expected);
    });
  });

  describe("non-string inputs", () => {
    test.each([
      ["null", null],
      ["undefined", undefined],
      ["number", 123],
      ["boolean true", true],
      ["boolean false", false],
      ["NaN", NaN],
      ["Infinity", Infinity],
      ["array", ["A"]],
      ["object", { a: 1 }],
      ["function", () => "ABC"],
      ["symbol", Symbol("ABC")],
      ["BigInt", BigInt(123)],
      ["RegExp", /ABC/],
      ["Date object", new Date()],
      ["Map", new Map()],
      ["Set", new Set()],
      ["WeakMap", new WeakMap()],
      ["WeakSet", new WeakSet()],
      ["Promise", Promise.resolve("ABC")],
      ["Error", new Error("fail")],
    ])("throws TypeError for %s", (_desc, input) => {
      expect(() => lower(input)).toThrow(TypeError);
    });

    test("Buffer (Node.js) if defined", () => {
      if (typeof Buffer !== "undefined") {
        expect(() => lower(Buffer.from("ABC"))).toThrow(TypeError);
      }
    });
  });

  describe("String object wrapper", () => {
    test.each([
      ["new String('ABC')", new String("ABC")],
      ["new String('')", new String("")],
    ])("throws TypeError for %s", (_desc, input) => {
      expect(() => lower(input)).toThrow(TypeError);
    });
  });
});
