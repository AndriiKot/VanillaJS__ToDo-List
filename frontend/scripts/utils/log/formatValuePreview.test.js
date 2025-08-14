import { formatValuePreview } from "./formatValuePreview.js";

describe("formatValuePreview – full coverage", () => {
  test.each([
    ["string", "hello", '"hello"'],
    ["empty string", "", '""'],
    ["number", 42, "42"],
    ["negative number", -7, "-7"],
    ["zero", 0, "0"],
    ["NaN", NaN, "null"], // JSON.stringify(NaN) -> "null"
    ["Infinity", Infinity, "null"], // JSON.stringify(Infinity) -> "null"
    ["boolean true", true, "true"],
    ["boolean false", false, "false"],
    ["null", null, "null"],
    ["undefined", undefined, "undefined"],
    ["function", () => {}, "() => {}"],
    ["named function", function foo() {}, "function foo() {}"],
    ["arrow function", () => 1, "() => 1"],
    ["symbol", Symbol("id"), "Symbol(id)"],
    ["BigInt", BigInt(123), "123n"],
    ["Date", new Date("2025-01-01T00:00:00Z"), `"2025-01-01T00:00:00.000Z"`],
    ["array", [1, 2, 3], "[1,2,3]"],
    ["object", { a: 1, b: 2 }, '{"a":1,"b":2}'],
    ["empty object", {}, "{}"],
    ["Map", new Map([["a", 1]]), "[object Map]"],
    ["Set", new Set([1, 2]), "[object Set]"],
    ["WeakMap", new WeakMap(), "[object WeakMap]"], // fallback to String
    ["WeakSet", new WeakSet(), "[object WeakSet]"], // fallback to String
    ["Promise resolved", Promise.resolve(1), "[object Promise]"],
    [
      "Promise rejected",
      (() => {
        const p = Promise.reject(new Error());
        p.catch(() => {});
        return p;
      })(),
      "[object Promise]",
    ],
    ["Object.create(null)", Object.create(null), "{}"],
  ])("value type: %s", (_, value, expectedStart) => {
    const result = formatValuePreview(value);
    expect(result.startsWith(expectedStart)).toBe(true);
  });

  test("truncates long strings correctly", () => {
    const longStr = "x".repeat(100);
    const result = formatValuePreview(longStr, 50);
    expect(result).toHaveLength(51); // 50 chars + "…"
    expect(result.endsWith("…")).toBe(true);
  });

  test("handles circular objects safely", () => {
    const circularObj = {};
    circularObj.self = circularObj;
    const result = formatValuePreview(circularObj);
    expect(result).toBe("[object Object]");
  });

  test("handles arrays with undefined, functions, symbols", () => {
    const arr = [undefined, () => {}, Symbol("s")];
    const result = formatValuePreview(arr);
    expect(result).toBe("[null,null,null]"); // JSON.stringify converts undefined, functions, symbols
  });

  test("respects default maxLength (80)", () => {
    const longStr = "y".repeat(100);
    const result = formatValuePreview(longStr);
    expect(result.length).toBe(81); // 80 + ellipsis
  });

  test("works with nested objects", () => {
    const obj = { a: { b: { c: 1 } } };
    const result = formatValuePreview(obj);
    expect(result).toBe('{"a":{"b":{"c":1}}}');
  });

  test("works with mixed types in array", () => {
    const arr = [1, "two", null, undefined, () => {}, Symbol("s"), true];
    const result = formatValuePreview(arr);
    expect(result).toBe('[1,"two",null,null,null,null,true]');
  });
});
