import { throwTypeErrorWithTypeInfo, expectTypeErrorMessage } from "@asserts";

describe("expectTypeErrorMessage", () => {
  test("passes when function throws TypeError with expected message", () => {
    const fn = () => {
      throwTypeErrorWithTypeInfo(123, "value", "string");
    };

    expect(() => {
      expectTypeErrorMessage(fn, "value", "string");
    }).not.toThrow();
  });

  test("fails if function does not throw", () => {
    const fn = () => {};

    expect(() => {
      expectTypeErrorMessage(fn, "value", "string");
    }).toThrow("Expected the function to throw, but it did not.");
  });

  test("fails if error is not TypeError", () => {
    const fn = () => {
      throw new Error("Not a type error");
    };

    expect(() => {
      expectTypeErrorMessage(fn, "value", "string");
    }).toThrow(/Expected the function to throw a TypeError/);
  });

  test("fails if error message does not match expected pattern", () => {
    const fn = () => {
      throw new TypeError("Completely different message");
    };

    expect(() => {
      expectTypeErrorMessage(fn, "value", "string");
    }).toThrow(/Expected.*to be.*string/i);
  });

  test("works with custom argName and description", () => {
    const fn = () => {
      throwTypeErrorWithTypeInfo([], "input", "non-empty string");
    };

    expect(() => {
      expectTypeErrorMessage(fn, "input", "non-empty string");
    }).not.toThrow();
  });
});
