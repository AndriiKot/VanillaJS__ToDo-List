import { assertValidLocalStorage, assertIsString } from "@asserts";

/**
 * Returns raw string value from the provided storage by key.
 *
 * @param {Storage} storage - localStorage or sessionStorage-like object
 * @param {string} key - the key to retrieve
 * @returns {string|null} - raw string value or null if key not found
 *
 * @throws {TypeError} if assertions fail
 */
export const getRawLocalStorageValue = (storage, key) => {
  assertValidLocalStorage(storage);
  assertIsString(key, "key");

  return storage.getItem(key);
};
