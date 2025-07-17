import { parseJSON } from "./parseJSON.js";
import { expectTypeErrorMessage } from "@asserts";

describe("parseJSON", () => {
  test("correctly parses valid JSON strings", () => {
    expect(parseJSON('"string"')).toBe("string");
    expect(parseJSON("123")).toBe(123);
    expect(parseJSON("true")).toBe(true);
    expect(parseJSON("null")).toBe(null);
    expect(parseJSON("[1, 2, 3]")).toEqual([1, 2, 3]);
    expect(parseJSON('{"a":1,"b":2}')).toEqual({ a: 1, b: 2 });
  });

  test("throws SyntaxError on invalid JSON string", () => {
    expect(() => parseJSON('{"a":1,}')).toThrow(SyntaxError);
    expect(() => parseJSON("not a json")).toThrow(SyntaxError);
  });

  test("throws TypeError if input is not a string", () => {
    const nonStrings = [undefined, null, 123, true, {}, [], () => {}];

    nonStrings.forEach((value) => {
      expectTypeErrorMessage(() => parseJSON(value), "raw", "string");
    });
  });
});
