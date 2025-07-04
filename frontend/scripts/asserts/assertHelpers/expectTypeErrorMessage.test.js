import { throwTypeErrorWithTypeInfo, expectTypeErrorMessage } from "@asserts";

describe("expectTypeErrorMessage", () => {
  test("passes when function throws TypeError with expected message", () => {
    const fn = () => {
      throwTypeErrorWithTypeInfo(123, "value", "string");
    };

    expect(() => {
      expectTypeErrorMessage(fn, "value", "string");
    }).not.toThrow(); // проверяем, что хелпер работает без ошибок
  });

  test("fails if error is not TypeError", () => {
    const fn = () => {
      throw new Error("Not a type error");
    };

    expect(() => {
      expectTypeErrorMessage(fn, "value", "string");
    }).toThrow(/Expected the function to throw a TypeError/); // Jest сам отлавливает fail
  });

  test("fails if error message does not match expected pattern", () => {
    const fn = () => {
      throw new TypeError("Completely different message");
    };

    expect(() => {
      expectTypeErrorMessage(fn, "value", "string");
    }).toThrow(/Expected.*to be.*string/i); // может быть конкретнее, если надо
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
