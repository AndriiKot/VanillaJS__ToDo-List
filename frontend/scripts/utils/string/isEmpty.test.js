"use strict";

import { isEmpty } from "@utils";

describe("isEmpty", () => {
  // 🔤 Normal string values
  describe("valid string inputs", () => {
    test.each([
      ["empty string", "", true],
      ["string with only spaces", "     ", true],
      ["string with tabs/newlines only", "\t\n", true],
      ["string with non-whitespace chars", "abc", false],
      ["string with leading/trailing spaces", " a ", false],
      ["string with special chars", "!@#$", false],
    ])("%s", (_desc, input, expected) => {
      expect(isEmpty(input)).toBe(expected);
    });
  });

  // 🧱 Non-string primitive values
  describe("non-string primitive values", () => {
    test.each([
      ["null", null, true],
      ["undefined", undefined, true],
      ["number 123", 123, true],
      ["number 0", 0, true],
      ["NaN", NaN, true],
      ["Infinity", Infinity, true],
      ["-Infinity", -Infinity, true],
      ["BigInt", BigInt(123), true],
      ["boolean true", true, true],
      ["boolean false", false, true],
      ["symbol", Symbol("abc"), true],
    ])("%s", (_desc, input, expected) => {
      expect(isEmpty(input)).toBe(expected);
    });
  });

  // 📦 Object & function types
  describe("object and wrapper types", () => {
    test.each([
      ["empty array", [], true],
      ["array with elements", ["a"], true],
      ["empty object", {}, true],
      ["object with properties", { a: 1 }, true],
      ["function", () => "abc", true],
      ["RegExp", /abc/, true],
      ["Date", new Date(), true],
      ["Map", new Map(), true],
      ["Set", new Set(), true],
      ["WeakMap", new WeakMap(), true],
      ["WeakSet", new WeakSet(), true],
      ["Promise", Promise.resolve("abc"), true],
      ["Error", new Error("fail"), true],
    ])("%s", (_desc, input, expected) => {
      expect(isEmpty(input)).toBe(expected);
    });

    test("Buffer (Node.js) if defined", () => {
      if (typeof Buffer !== "undefined") {
        expect(isEmpty(Buffer.from("abc"))).toBe(true);
      }
    });

    test.each([
      ["new String('abc')", new String("abc"), true],
      ["new String('')", new String(""), true],
    ])("%s", (_desc, input, expected) => {
      expect(isEmpty(input)).toBe(expected);
    });
  });
});
