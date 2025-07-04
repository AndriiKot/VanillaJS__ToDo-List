import { assertIsString, expectTypeErrorMessage } from "@asserts";

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
      String("string object"), // primitive
    ];

    test.each(validStrings)("does not throw for valid string: %p", (value) => {
      expect(() => assertIsString(value)).not.toThrow();
    });

    test("does not throw with custom argName", () => {
      expect(() => assertIsString("hello", "myArg")).not.toThrow();
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
      Symbol(),
      BigInt(10),
      /regex/,
      new Date(),
      new Map(),
      new Set(),
      new WeakMap(),
      new WeakSet(),
      Promise.resolve(),
      new Error("error"),
      new String("string object wrapper"), // object-wrapper, not primitive
      Object.create(null),
      String,
      Number,
    ];

    test.each(invalidValues)("throws TypeError for %p", (value) => {
      expect(() => {
        expectTypeErrorMessage(() => assertIsString(value), "value", "string");
      }).not.toThrow();
    });

    test("supports custom argName in error message", () => {
      expectTypeErrorMessage(
        () => assertIsString(123, "customArg"),
        "customArg",
        "string",
      );
    });

    test("throws for object without toString", () => {
      const value = Object.create(null);
      expectTypeErrorMessage(() => assertIsString(value), "value", "string");
    });

    test("throws for function with no prototype.toString", () => {
      function WeirdFn() {}
      WeirdFn.prototype.toString = undefined;
      expectTypeErrorMessage(
        () => assertIsString(new WeirdFn()),
        "value",
        "string",
      );
    });

    test("throws for arguments object", () => {
      function getArgs() {
        return arguments;
      }
      const args = getArgs("a", "b");
      expectTypeErrorMessage(() => assertIsString(args), "value", "string");
    });

    test("error message includes argName and expected type", () => {
      try {
        assertIsString(42, "testArg");
      } catch (e) {
        expect(e).toBeInstanceOf(TypeError);
        expect(e.message).toMatch(/Expected testArg to be string/i);
        expect(e.message).toMatch(/number/i);
      }
    });
  });

  describe("fallback to Object.prototype.toString.call", () => {
    test("uses Object.prototype.toString.call if String(value) throws", () => {
      const badToString = {
        toString() {
          throw new Error("toString failed");
        },
      };

      try {
        assertIsString(badToString);
      } catch (e) {
        expect(e).toBeInstanceOf(TypeError);
        expect(e.message).toMatch(/\[object Object\]/);
      }
    });
  });
});
