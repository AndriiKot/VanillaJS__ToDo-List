import { assertCanUseLocalStorage } from "./assertCanUseLocalStorage.js";

describe("assertCanUseLocalStorage", () => {
  const realStorage = globalThis.localStorage;

  test("does not throw for real localStorage", () => {
    expect(() => assertCanUseLocalStorage(realStorage)).not.toThrow();
  });

  test("throws if setItem throws error", () => {
    const brokenStorage = {
      setItem: () => {
        throw new Error("fail");
      },
      removeItem: () => {},
    };

    expect(() =>
      assertCanUseLocalStorage(brokenStorage),
    ).toThrowErrorMatchingInlineSnapshot(
      `"globalThis.localStorage is present but not usable at runtime — possibly due to browser restrictions (e.g., Safari private mode, quota exceeded, or disabled access)."`,
    );
  });

  test("throws if removeItem throws error", () => {
    const brokenStorage = {
      setItem: () => {},
      removeItem: () => {
        throw new Error("fail");
      },
    };

    expect(() =>
      assertCanUseLocalStorage(brokenStorage),
    ).toThrowErrorMatchingInlineSnapshot(
      `"globalThis.localStorage is present but not usable at runtime — possibly due to browser restrictions (e.g., Safari private mode, quota exceeded, or disabled access)."`,
    );
  });

  test("throws if storage is missing setItem or removeItem", () => {
    const brokenStorage1 = { removeItem: () => {} }; // no setItem
    const brokenStorage2 = { setItem: () => {} }; // no removeItem

    expect(() =>
      assertCanUseLocalStorage(brokenStorage1),
    ).toThrowErrorMatchingInlineSnapshot(
      `"globalThis.localStorage is present but not usable at runtime — possibly due to browser restrictions (e.g., Safari private mode, quota exceeded, or disabled access)."`,
    );

    expect(() =>
      assertCanUseLocalStorage(brokenStorage2),
    ).toThrowErrorMatchingInlineSnapshot(
      `"globalThis.localStorage is present but not usable at runtime — possibly due to browser restrictions (e.g., Safari private mode, quota exceeded, or disabled access)."`,
    );
  });
});
