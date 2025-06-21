"use strict";

import { trim } from "../../scripts/utils.js";

describe("trim", () => {
  describe("normal strings", () => {
    test("trims spaces around the string", () => {
      expect(trim("  abc ")).toBe("abc");
    });

    test("returns the same string when no trimming needed", () => {
      expect(trim("abc")).toBe("abc");
    });

    test("returns '' for empty string", () => {
      expect(trim("")).toBe("");
    });

    test("returns '' for string with only spaces", () => {
      expect(trim("     ")).toBe("");
    });

    test("does not trim internal spaces", () => {
      expect(trim(" a b c ")).toBe("a b c");
    });

    test("trims tabs and newlines", () => {
      expect(trim("\t abc \n")).toBe("abc");
    });

    test("returns same string with internal tabs/newlines", () => {
      expect(trim(" a\tb\nc ")).toBe("a\tb\nc");
    });
  });

  describe("non-string inputs", () => {
    test("returns '' for null", () => {
      expect(trim(null)).toBe("");
    });

    test("returns '' for undefined", () => {
      expect(trim(undefined)).toBe("");
    });

    test("returns '' for numbers", () => {
      expect(trim(123)).toBe("");
      expect(trim(NaN)).toBe("");
      expect(trim(Infinity)).toBe("");
      expect(trim(-Infinity)).toBe("");
    });

    test("returns '' for booleans", () => {
      expect(trim(true)).toBe("");
      expect(trim(false)).toBe("");
    });

    test("returns '' for arrays", () => {
      expect(trim([])).toBe("");
      expect(trim(["a"])).toBe("");
      expect(trim([1, 2, 3])).toBe("");
    });

    test("returns '' for objects", () => {
      expect(trim({})).toBe("");
      expect(trim({ a: 1 })).toBe("");
    });

    test("returns '' for functions", () => {
      expect(trim(() => "abc")).toBe("");
    });

    test("returns '' for symbols", () => {
      expect(trim(Symbol("abc"))).toBe("");
    });

    test("returns '' for BigInt", () => {
      expect(trim(BigInt(123))).toBe("");
    });

    test("returns '' for RegExp", () => {
      expect(trim(/abc/)).toBe("");
    });

    test("returns '' for Date object", () => {
      expect(trim(new Date())).toBe("");
    });

    test("returns '' for Map and Set", () => {
      expect(trim(new Map())).toBe("");
      expect(trim(new Set())).toBe("");
    });

    test("returns '' for WeakMap and WeakSet", () => {
      expect(trim(new WeakMap())).toBe("");
      expect(trim(new WeakSet())).toBe("");
    });

    test("returns '' for Promise", () => {
      expect(trim(Promise.resolve("abc"))).toBe("");
    });

    test("returns '' for Error", () => {
      expect(trim(new Error("fail"))).toBe("");
    });

    test("returns '' for Buffer (Node.js)", () => {
      if (typeof Buffer !== "undefined") {
        expect(trim(Buffer.from("abc"))).toBe("");
      }
    });
  });

  describe("String object wrapper", () => {
    test("returns '' for new String('abc')", () => {
      expect(trim(new String("abc"))).toBe("");
    });

    test("returns '' for new String('')", () => {
      expect(trim(new String(""))).toBe("");
    });
  });
});
