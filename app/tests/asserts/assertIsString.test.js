import { assertIsString } from "../../scripts/asserts.js";

describe("assertIsString", () => {
  describe("valid string inputs (should NOT throw)", () => {
    const validStrings = [
      "abc",
      "",
      " ",
      "123",
      "!@#$%^&*()",
      "こんにちは",
      "😊",
      String("string object"),
    ];

    test.each(validStrings)("does not throw for string: %p", (value) => {
      expect(() => assertIsString(value)).not.toThrow();
    });
  });

  describe("invalid inputs (should throw TypeError)", () => {
    const invalidValues = [
      null,
      undefined,
      123,
      0,
      NaN,
      Infinity,
      -Infinity,
      true,
      false,
      [],
      ["a", "b"],
      {},
      { toString: () => "test" },
      () => {},
      Symbol("sym"),
      BigInt(10),
      /regex/,
      new Date(),
      new Map(),
      new Set(),
      new WeakMap(),
      new WeakSet(),
      Promise.resolve(),
      new Error("error"),
      new String("string object wrapper"),
    ];

    test.each(invalidValues)("throws TypeError for %p", (value) => {
      expect(() => assertIsString(value)).toThrow(TypeError);
      // Сообщение по умолчанию: Expected value to be a string
      expect(() => assertIsString(value)).toThrow(/Expected .* to be a string/);
    });

    test("supports custom argName", () => {
      expect(() => assertIsString(123, "myArg")).toThrow(
        "Expected myArg to be a string",
      );
    });
  });
});
