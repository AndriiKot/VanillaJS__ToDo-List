import { expectTypeErrorMessage, assertIsLocalStorage } from "@asserts";

describe("assertIsLocalStorage", () => {
  test("does not throw when passed exactly globalThis.localStorage", () => {
    expect(() => assertIsLocalStorage(globalThis.localStorage)).not.toThrow();
  });

  test("throws TypeError when passed undefined", () => {
    expectTypeErrorMessage(
      () => assertIsLocalStorage(undefined),
      "storage",
      "globalThis.localStorage",
    );
  });

  test("throws TypeError when passed null", () => {
    expectTypeErrorMessage(
      () => assertIsLocalStorage(null),
      "storage",
      "globalThis.localStorage",
    );
  });

  test("throws TypeError when passed an empty object", () => {
    expectTypeErrorMessage(
      () => assertIsLocalStorage({}),
      "storage",
      "globalThis.localStorage",
    );
  });

  test("throws TypeError when passed sessionStorage", () => {
    expectTypeErrorMessage(
      () => assertIsLocalStorage(globalThis.sessionStorage),
      "storage",
      "globalThis.localStorage",
    );
  });

  test("throws TypeError when passed a mocked localStorage-like object", () => {
    const fakeStorage = {
      setItem: () => {},
      getItem: () => null,
      removeItem: () => {},
      clear: () => {},
    };
    expectTypeErrorMessage(
      () => assertIsLocalStorage(fakeStorage),
      "storage",
      "globalThis.localStorage",
    );
  });
});
