import { throwTypeErrorWithTypeInfo } from "@asserts";

/**
 * Throws a TypeError if the provided storage is not exactly globalThis.localStorage.
 *
 * @param {*} storage - the value to check
 * @throws {TypeError} if storage is not exactly globalThis.localStorage
 */
export const assertIsLocalStorage = (storage) => {
  if (storage !== globalThis.localStorage) {
    throwTypeErrorWithTypeInfo(storage, "storage", "globalThis.localStorage");
  }
};
