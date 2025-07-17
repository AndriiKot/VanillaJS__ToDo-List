import { parseJSON } from "./parseJSON.js";

/**
 * Tests for parseJSON utility.
 *
 * This function assumes that the input is a valid string.
 * Type validation is the responsibility of the caller (e.g., assertIsString).
 *
 * Therefore, only string inputs are tested here — as raw JSON strings.
 * Non-string input types are NOT included in this test suite by design.
 */

describe("parseJSON (valid JSON strings)", () => {
  test.each([
    ['"hello"', "hello"],
    ["123", 123],
    ["true", true],
    ["false", false],
    ["null", null],
    ["[1, 2, 3]", [1, 2, 3]],
    ['{"a": 1, "b": "text"}', { a: 1, b: "text" }],
  ])("should correctly parse %s", (json, expected) => {
    expect(parseJSON(json)).toEqual(expected);
  });
});

describe("parseJSON (invalid JSON strings)", () => {
  test.each([
    ["{a: 1}"], // Keys must be quoted
    ["[1, 2,"], // Incomplete array
    ["truue"], // Misspelled boolean
    ["nulla"], // Invalid null-like word
    ['{"a": undefined}'], // undefined is not valid JSON
  ])("should throw SyntaxError for invalid string: %s", (json) => {
    expect(() => parseJSON(json)).toThrow(SyntaxError);
  });
});
