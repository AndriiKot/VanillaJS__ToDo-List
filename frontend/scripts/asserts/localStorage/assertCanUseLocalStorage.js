import { throwTypeErrorWithTypeInfo } from "@asserts";

/**
 * Throws a TypeError if the provided storage is not usable
 * (setItem/removeItem operations fail).
 *
 * @param {*} storage - the storage object to test (expected to be localStorage)
 * @throws {TypeError} if storage is unavailable or does not function properly
 */
export const assertCanUseLocalStorage = (storage) => {
  const canUse = (() => {
    try {
      const testKey = "__test__";

      storage.setItem(testKey, "1");
      storage.removeItem(testKey);

      return true;
    } catch {
      return false;
    }
  })();

  if (!canUse) {
    throwTypeErrorWithTypeInfo(
      storage,
      "storage",
      "a usable Storage object (supports setItem/removeItem)",
    );
  }
};
