import { assertIsString } from "@asserts";
import { warnIfKeyMissing } from "@utils";
/**
 * Gets raw value from a storage by key.
 * Logs a warning if key is not found (value === null).
 * Does NOT parse or validate the value.
 *
 * @param {Storage|Object} storage - storage-like object (localStorage or plain object)
 * @param {string} key - key to retrieve
 * @returns {string|null} raw value or null if missing
 */

export const getRawItem = (storage, key) => {
  assertIsString(key, "key");
  const raw = storage[key];
  warnIfKeyMissing(key, raw);

  return raw;
};
