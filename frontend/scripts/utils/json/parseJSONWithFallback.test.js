import { parseJSONWithFallback } from "./parseJSONWithFallback.js";

describe("parseJSONWithFallback – valid JSON strings", () => {
  test.each([
    ['"hello"', "hello"],
    ["123", 123],
    ["true", true],
    ["false", false],
    ["null", null],
    ["[1, 2, 3]", [1, 2, 3]],
    ['{"a": 1}', { a: 1 }],
  ])("should correctly parse %s", (json, expected) => {
    expect(parseJSONWithFallback(json)).toEqual(expected);
  });
});

describe("parseJSONWithFallback – invalid JSON strings", () => {
  test.each([
    ["{a: 1}"], // unquoted key
    ["[1, 2,"], // incomplete array
    ["truue"], // invalid keyword
    ["nulla"], // invalid keyword
    ['{"a": undefined}'], // undefined is not valid JSON
  ])("should return default fallback (null) for %s", (invalidJson) => {
    expect(parseJSONWithFallback(invalidJson)).toBeNull();
  });

  test.each([
    ["{a: 1}", 0],
    ["truue", "fallback"],
    ["[1, 2,", []],
  ])("should return provided fallback for %s", (invalidJson, fallback) => {
    expect(parseJSONWithFallback(invalidJson, fallback)).toEqual(fallback);
  });
});
