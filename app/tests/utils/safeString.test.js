"use strict";

import { safeString } from "../../scripts/utils.js";

describe("safeString", () => {
  describe("valid string inputs", () => {
    test("returns same string", () => {
      expect(safeString("hello")).toBe("hello");
    });

    test("returns same string with special characters", () => {
      expect(safeString("!@#$%^&*()_+")).toBe("!@#$%^&*()_+");
    });

    test("returns same long string", () => {
      const longStr = "a".repeat(10000);
      expect(safeString(longStr)).toBe(longStr);
    });

    test("returns empty string if input is empty string", () => {
      expect(safeString("")).toBe("");
    });

    test("returns string with spaces unchanged", () => {
      expect(safeString("   ")).toBe("   ");
    });

    test("returns string with internal whitespace unchanged", () => {
      expect(safeString("a \t b \n c")).toBe("a \t b \n c");
    });
  });

  describe("non-string primitive inputs", () => {
    test("returns '' for null", () => {
      expect(safeString(null)).toBe("");
    });

    test("returns '' for undefined", () => {
      expect(safeString(undefined)).toBe("");
    });

    test("returns '' for numbers", () => {
      expect(safeString(123)).toBe("");
      expect(safeString(NaN)).toBe("");
      expect(safeString(Infinity)).toBe("");
      expect(safeString(-Infinity)).toBe("");
    });

    test("returns '' for booleans", () => {
      expect(safeString(true)).toBe("");
      expect(safeString(false)).toBe("");
    });

    test("returns '' for symbol", () => {
      expect(safeString(Symbol("abc"))).toBe("");
    });

    test("returns '' for bigint", () => {
      expect(safeString(BigInt(123))).toBe("");
    });
  });

  describe("non-string objects", () => {
    test("returns '' for array", () => {
      expect(safeString([])).toBe("");
      expect(safeString(["a"])).toBe("");
      expect(safeString([1, 2, 3])).toBe("");
    });

    test("returns '' for plain object", () => {
      expect(safeString({})).toBe("");
      expect(safeString({ a: 1 })).toBe("");
    });

    test("returns '' for RegExp", () => {
      expect(safeString(/abc/)).toBe("");
    });

    test("returns '' for Date object", () => {
      expect(safeString(new Date())).toBe("");
    });

    test("returns '' for Map and Set", () => {
      expect(safeString(new Map())).toBe("");
      expect(safeString(new Set())).toBe("");
    });

    test("returns '' for WeakMap and WeakSet", () => {
      expect(safeString(new WeakMap())).toBe("");
      expect(safeString(new WeakSet())).toBe("");
    });

    test("returns '' for Promise", () => {
      expect(safeString(Promise.resolve("abc"))).toBe("");
    });

    test("returns '' for Error", () => {
      expect(safeString(new Error("fail"))).toBe("");
    });

    test("returns '' for Buffer (Node.js)", () => {
      if (typeof Buffer !== "undefined") {
        expect(safeString(Buffer.from("abc"))).toBe("");
      }
    });
  });

  describe("function and wrapper types", () => {
    test("returns '' for function", () => {
      expect(safeString(() => "hello")).toBe("");
    });

    test("returns '' for String object wrapper", () => {
      expect(safeString(new String("test"))).toBe("");
      expect(safeString(new String(""))).toBe("");
    });
  });
});
