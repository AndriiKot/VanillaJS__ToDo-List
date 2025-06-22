"use strict";

import { safeString } from "../../scripts/utils.js";

describe("safeString", () => {
  describe("valid string inputs", () => {
    test.each([
      ["normal string", "hello", "hello"],
      ["string with special chars", "!@#$%^&*()_+", "!@#$%^&*()_+"],
      ["long string", "a".repeat(10000), "a".repeat(10000)],
      ["empty string", "", ""],
      ["string with spaces only", "   ", "   "],
      ["string with internal whitespace", "a \t b \n c", "a \t b \n c"],
    ])("%s", (_desc, input, expected) => {
      expect(safeString(input)).toBe(expected);
    });
  });

  describe("non-string primitive inputs", () => {
    test.each([
      ["null", null, ""],
      ["undefined", undefined, ""],
      ["number 123", 123, ""],
      ["NaN", NaN, ""],
      ["Infinity", Infinity, ""],
      ["-Infinity", -Infinity, ""],
      ["boolean true", true, ""],
      ["boolean false", false, ""],
      ["symbol", Symbol("abc"), ""],
      ["BigInt", BigInt(123), ""],
    ])("%s", (_desc, input, expected) => {
      expect(safeString(input)).toBe(expected);
    });
  });

  describe("non-string objects", () => {
    test.each([
      ["empty array", [], ""],
      ["array with strings", ["a"], ""],
      ["array with numbers", [1, 2, 3], ""],
      ["empty object", {}, ""],
      ["object with props", { a: 1 }, ""],
      ["RegExp", /abc/, ""],
      ["Date object", new Date(), ""],
      ["Map", new Map(), ""],
      ["Set", new Set(), ""],
      ["WeakMap", new WeakMap(), ""],
      ["WeakSet", new WeakSet(), ""],
      ["Promise", Promise.resolve("abc"), ""],
      ["Error object", new Error("fail"), ""],
    ])("%s", (_desc, input, expected) => {
      expect(safeString(input)).toBe(expected);
    });

    test("Buffer (Node.js) if defined", () => {
      if (typeof Buffer !== "undefined") {
        expect(safeString(Buffer.from("abc"))).toBe("");
      }
    });
  });

  describe("function and wrapper types", () => {
    test.each([
      ["function", () => "hello", ""],
      ["String object wrapper with text", new String("test"), ""],
      ["String object wrapper empty", new String(""), ""],
    ])("%s", (_desc, input, expected) => {
      expect(safeString(input)).toBe(expected);
    });
  });
});
