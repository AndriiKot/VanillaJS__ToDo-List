/**
 * Logs a warning if the key is missing (i.e., value is null or undefined).
 *
 * This is a generic utility for any key-value storage or object.
 *
 * @param {string} key - The key checked in the storage or object
 * @param {*} value - The value associated with the key (can be any type)
 * @param {string} [contextName] - Optional name/context of the storage (for clearer logs)
 */
export const warnIfKeyMissing = (key, value, contextName = "storage") => {
  if (value === null || value === undefined) {
    console.warn(`${contextName}: key "${key}" not found or value is missing.`);
  }
};
