"use strict";

import { trim } from "../../scripts/utils.js";

describe("trim", () => {
  describe("normal strings", () => {
    test.each([
      ["trims spaces around the string", "  abc ", "abc"],
      ["returns same string when no trimming needed", "abc", "abc"],
      ["returns empty string for empty string", "", ""],
      ["returns empty string for string with only spaces", "     ", ""],
      ["does not trim internal spaces", " a b c ", "a b c"],
      ["trims tabs and newlines", "\t abc \n", "abc"],
      [
        "returns same string with internal tabs/newlines",
        " a\tb\nc ",
        "a\tb\nc",
      ],
      ["trims mixed whitespace chars", " \n\tabc\t\n ", "abc"],
      ["string with unicode spaces", "\u2002\u2003abc\u2002\u2003", "abc"],
      ["string with zero-width spaces inside", "a\u200bbc", "a\u200bbc"],
      [
        "trims spaces from a very long string",
        " ".repeat(1000) + "long string" + " ".repeat(1000),
        "long string",
      ],
    ])("%s", (_desc, input, expected) => {
      expect(trim(input)).toBe(expected);
    });
  });

  describe("non-string inputs", () => {
    test.each([
      ["null", null, ""],
      ["undefined", undefined, ""],
      ["number 123", 123, ""],
      ["number 0", 0, ""],
      ["NaN", NaN, ""],
      ["Infinity", Infinity, ""],
      ["-Infinity", -Infinity, ""],
      ["boolean true", true, ""],
      ["boolean false", false, ""],
      ["empty array", [], ""],
      ["array with string", ["a"], ""],
      ["array with numbers", [1, 2, 3], ""],
      ["empty object", {}, ""],
      ["object with props", { a: 1 }, ""],
      ["function", () => "abc", ""],
      ["symbol", Symbol("abc"), ""],
      ["BigInt", BigInt(123), ""],
      ["RegExp", /abc/, ""],
      ["Date object", new Date(), ""],
      ["Map", new Map(), ""],
      ["Set", new Set(), ""],
      ["WeakMap", new WeakMap(), ""],
      ["WeakSet", new WeakSet(), ""],
      ["Promise", Promise.resolve("abc"), ""],
      ["Error object", new Error("fail"), ""],
    ])("%s", (_desc, input, expected) => {
      expect(trim(input)).toBe(expected);
    });

    test("Buffer (Node.js) if defined", () => {
      if (typeof Buffer !== "undefined") {
        expect(trim(Buffer.from("abc"))).toBe("");
      }
    });
  });

  describe("String object wrapper", () => {
    test.each([
      ["new String('abc')", new String("abc"), ""],
      ["new String('')", new String(""), ""],
    ])("%s", (_desc, input, expected) => {
      expect(trim(input)).toBe(expected);
    });
  });
});
