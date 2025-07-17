/**
 * @private
 * Low-level function to get raw value from a storage by key.
 * Does NOT perform validation or logging.
 *
 * Designed to be used internally in higher-level modules that enforce input checks.
 *
 * @param {Storage|Object} storage - validated storage-like object
 * @param {string} key - validated string key
 * @returns {string|null|undefined} raw value or null if missing
 */
export const readStorageValue = (storage, key) => {
  return storage[key];
};
