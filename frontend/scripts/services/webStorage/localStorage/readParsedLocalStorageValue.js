import { getRawLocalStorageValue } from '@services';
import { parseJSONWithFallback } from '@utils';

/**
 * Reads and parses a JSON value from localStorage (or similar).
 *
 * @param {Storage} storage - Storage object (e.g., localStorage)
 * @param {string} key - Storage key
 * @param {*} defaultValue - Fallback value if parsing fails or key is missing
 * @returns {*} - Parsed value or fallback
 */
export const readParsedLocalStorageValue = (storage, key, defaultValue) => {
  const raw = getRawLocalStorageValue(storage, key);
  return parseJSONWithFallback(raw, defaultValue);
};
