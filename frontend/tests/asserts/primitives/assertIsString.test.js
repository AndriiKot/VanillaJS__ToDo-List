import { assertIsString } from "@asserts";

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
      new String("string object wrapper"), // объект-обертка, не строка
    ];

    test.each(invalidValues)("throws TypeError for %p", (value) => {
      expect(() => assertIsString(value)).toThrow(TypeError);
      expect(() => assertIsString(value)).toThrow(/Expected .* to be a string/);
    });

    test("supports custom argName in error message", () => {
      expect(() => assertIsString(123, "myArg")).toThrow(
        /Expected myArg to be a string/,
      );
    });
  });
  describe("assertIsString - fallback to Object.prototype.toString.call", () => {
    test("uses Object.prototype.toString.call if String(value) throws", () => {
      const badToString = {
        toString() {
          throw new Error("Cannot convert to string");
        },
      };

      expect(() => assertIsString(badToString)).toThrow(TypeError);

      try {
        assertIsString(badToString);
      } catch (e) {
        expect(e.message).toMatch(/\[object Object\]/);
      }
    });
  });
});
