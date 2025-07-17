import { expectTypeErrorMessage } from "@asserts";
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

    expectTypeErrorMessage(
      () => assertCanUseLocalStorage(brokenStorage),
      "storage",
      "a usable Storage object (supports setItem/removeItem)",
    );
  });

  test("throws if removeItem throws error", () => {
    const brokenStorage = {
      setItem: () => {},
      removeItem: () => {
        throw new Error("fail");
      },
    };

    expectTypeErrorMessage(
      () => assertCanUseLocalStorage(brokenStorage),
      "storage",
      "a usable Storage object (supports setItem/removeItem)",
    );
  });

  test("throws if storage is missing setItem or removeItem", () => {
    const brokenStorage1 = { removeItem: () => {} }; // no setItem
    const brokenStorage2 = { setItem: () => {} }; // no removeItem

    expectTypeErrorMessage(
      () => assertCanUseLocalStorage(brokenStorage1),
      "storage",
      "a usable Storage object (supports setItem/removeItem)",
    );

    expectTypeErrorMessage(
      () => assertCanUseLocalStorage(brokenStorage2),
      "storage",
      "a usable Storage object (supports setItem/removeItem)",
    );
  });
});
