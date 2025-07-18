/**
 * @private
 *
 * INTERNAL: Throws an error if the provided storage is not usable
 * at runtime (e.g., `setItem`/`removeItem` methods fail or throw,
 * due to browser restrictions, storage quotas, or private mode).
 *
 * This function assumes that `storage` has already been validated
 * as `globalThis.localStorage` via `assertIsLocalStorage`.
 *
 * It does **not** check for the presence of the storage object itself,
 * only whether core methods like `setItem` and `removeItem` work without errors.
 *
 * @param {*} storage - Expected to be a working `localStorage` object
 * @throws {Error} if runtime access to localStorage fails
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
    throw new Error(
      "globalThis.localStorage is present but not usable at runtime — possibly due to browser restrictions (e.g., Safari private mode, quota exceeded, or disabled access).",
    );
  }
};
