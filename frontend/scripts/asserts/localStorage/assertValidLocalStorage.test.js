import { assertValidLocalStorage } from "./assertValidLocalStorage.js";

describe("assertValidLocalStorage", () => {
  // ✅ Should not throw when using the real localStorage
  test("does not throw when passed globalThis.localStorage", () => {
    expect(() =>
      assertValidLocalStorage(globalThis.localStorage),
    ).not.toThrow();
  });

  // ❌ null is not localStorage
  test("throws TypeError when passed null", () => {
    expect(() => assertValidLocalStorage(null)).toThrow(TypeError);
  });

  // ❌ undefined is not localStorage
  test("throws TypeError when passed undefined", () => {
    expect(() => assertValidLocalStorage(undefined)).toThrow(TypeError);
  });

  // ❌ String is not localStorage
  test("throws TypeError when passed a string", () => {
    expect(() => assertValidLocalStorage("localStorage")).toThrow(TypeError);
  });

  // ❌ Object that mimics localStorage but is not the real one
  test("throws TypeError when passed an object that looks like localStorage", () => {
    const fakeStorage = {
      getItem: () => {},
      setItem: () => {},
      removeItem: () => {},
      key: () => {},
      length: 0,
    };

    expect(() => assertValidLocalStorage(fakeStorage)).toThrow(TypeError);
  });
});
