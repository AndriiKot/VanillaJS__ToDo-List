import { safeString, trim, isEmpty } from "../scripts/utils.js";

describe("utils.js", () => {
  test("safeString returns same string", () => {
    expect(safeString("hello")).toBe("hello");
  });

  test("safeString returns '' for non-string values", () => {
    expect(safeString(null)).toBe("");
    expect(safeString(undefined)).toBe("");
    expect(safeString(123)).toBe("");
    expect(safeString({})).toBe("");
  });

  test("safeString returns empty string if input is empty string", () => {
    expect(safeString("")).toBe("");
  });

  test("safeString returns string with spaces unchanged", () => {
    expect(safeString("   ")).toBe("   ");
  });

  test("safeString returns empty string for boolean values", () => {
    expect(safeString(true)).toBe("");
    expect(safeString(false)).toBe("");
  });

  test("safeString returns empty string for array", () => {
    expect(safeString([])).toBe("");
    expect(safeString(["a"])).toBe("");
  });

  test("trim trims strings", () => {
    expect(trim("  abc ")).toBe("abc");
  });

  test("trim returns '' for non-string", () => {
    expect(trim(null)).toBe("");
  });

  test("trim trims tabs and newlines", () => {
    expect(trim("\t abc \n")).toBe("abc");
  });

  test("trim does not trim internal spaces", () => {
    expect(trim(" a b c ")).toBe("a b c");
  });

  test("isEmpty detects empty string", () => {
    expect(isEmpty("")).toBe(true);
    expect(isEmpty("   ")).toBe(true);
  });

  test("isEmpty returns true for non-string values", () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty(123)).toBe(true);
  });
});
