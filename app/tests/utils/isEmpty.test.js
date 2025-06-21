"use strict";

import { isEmpty } from "../../scripts/utils.js";

describe("isEmpty", () => {
  // 🔤 Normal string values
  describe("valid string inputs", () => {
    test("returns true for empty string", () => {
      expect(isEmpty("")).toBe(true);
    });

    test("returns true for string with only spaces", () => {
      expect(isEmpty("     ")).toBe(true);
    });

    test("returns true for string with tabs/newlines only", () => {
      expect(isEmpty("\t\n")).toBe(true);
    });

    test("returns false for string with non-whitespace characters", () => {
      expect(isEmpty("abc")).toBe(false);
      expect(isEmpty(" a ")).toBe(false);
    });

    test("returns false for string with special characters", () => {
      expect(isEmpty("!@#$")).toBe(false);
    });
  });

  // 🧱 Non-string primitive values
  describe("non-string primitive values", () => {
    test("returns true for null", () => {
      expect(isEmpty(null)).toBe(true);
    });

    test("returns true for undefined", () => {
      expect(isEmpty(undefined)).toBe(true);
    });

    test("returns true for numbers", () => {
      expect(isEmpty(123)).toBe(true);
      expect(isEmpty(0)).toBe(true);
      expect(isEmpty(NaN)).toBe(true);
      expect(isEmpty(Infinity)).toBe(true);
      expect(isEmpty(-Infinity)).toBe(true);
    });

    test("returns true for BigInt", () => {
      expect(isEmpty(BigInt(123))).toBe(true);
    });

    test("returns true for booleans", () => {
      expect(isEmpty(true)).toBe(true);
      expect(isEmpty(false)).toBe(true);
    });

    test("returns true for symbols", () => {
      expect(isEmpty(Symbol("abc"))).toBe(true);
    });
  });

  // 📦 Object & function types
  describe("object and wrapper types", () => {
    test("returns true for arrays", () => {
      expect(isEmpty([])).toBe(true);
      expect(isEmpty(["a"])).toBe(true);
    });

    test("returns true for objects", () => {
      expect(isEmpty({})).toBe(true);
      expect(isEmpty({ a: 1 })).toBe(true);
    });

    test("returns true for functions", () => {
      expect(isEmpty(() => "abc")).toBe(true);
    });

    test("returns true for RegExp", () => {
      expect(isEmpty(/abc/)).toBe(true);
    });

    test("returns true for Date", () => {
      expect(isEmpty(new Date())).toBe(true);
    });

    test("returns true for Map, Set, WeakMap, WeakSet", () => {
      expect(isEmpty(new Map())).toBe(true);
      expect(isEmpty(new Set())).toBe(true);
      expect(isEmpty(new WeakMap())).toBe(true);
      expect(isEmpty(new WeakSet())).toBe(true);
    });

    test("returns true for Promise", () => {
      expect(isEmpty(Promise.resolve("abc"))).toBe(true);
    });

    test("returns true for Error", () => {
      expect(isEmpty(new Error("fail"))).toBe(true);
    });

    test("returns true for Buffer (Node.js)", () => {
      if (typeof Buffer !== "undefined") {
        expect(isEmpty(Buffer.from("abc"))).toBe(true);
      }
    });

    test("returns true for new String object wrapper", () => {
      expect(isEmpty(new String("abc"))).toBe(true);
      expect(isEmpty(new String(""))).toBe(true);
    });
  });
});
