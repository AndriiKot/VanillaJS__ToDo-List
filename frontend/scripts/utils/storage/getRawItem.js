import { readStorageValue } from "./internal/readStorageValue.js";
import { warnIfKeyMissing } from "@utils";
import { assertIsStorageLike, assertIsString } from "@asserts";

/**
 * Gets raw value from a storage by key.
 * Logs a warning if key is not found (value === null).
 * Does NOT parse or validate the value.
 *
 * @param {Storage|Object} storage - storage-like object
 * @param {string} key - key to retrieve
 * @returns {string|null} raw value or null if missing
 */
export const getRawItem = (storage, key, defaultValue = null) => {
  assertIsStorageLike(storage, "first argument 'storage': ");
  assertIsString(key, "second argument 'key': ");

  let raw = readStorageValue(storage, key);

  if (raw === undefined) {
    raw = defaultValue;
  }

  warnIfKeyMissing(key, raw);

  return raw;
};
