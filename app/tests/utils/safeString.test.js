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

    test("returns '' for number", () => {
      expect(safeString(123)).toBe("");
    });

    test("returns '' for boolean true", () => {
      expect(safeString(true)).toBe("");
    });

    test("returns '' for boolean false", () => {
      expect(safeString(false)).toBe("");
    });

    test("returns '' for symbol type", () => {
      expect(safeString(Symbol())).toBe("");
    });

    test("returns '' for bigint type", () => {
      expect(safeString(BigInt(10))).toBe("");
    });
  });

  describe("complex types", () => {
    test("returns '' for array", () => {
      expect(safeString([])).toBe("");
      expect(safeString(["a"])).toBe("");
    });

    test("returns '' for object", () => {
      expect(safeString({})).toBe("");
    });

    test("returns '' for String object wrapper", () => {
      expect(safeString(new String("test"))).toBe("");
      expect(safeString(new String(""))).toBe("");
    });

    test("returns '' for function type", () => {
      expect(safeString(() => "test")).toBe("");
    });
  });
});
