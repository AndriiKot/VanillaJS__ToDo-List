import { STORAGE_KEYS, readParsedLocalStorageValue } from "@services";

/**
 * Loads todos from localStorage and ensures it returns an array of strings.
 *
 * @returns {string[]} - Array of todo item texts
 */
export const loadTodos = () => {
  const storage = localStorage;
  const key = STORAGE_KEYS.todo;
  const defaultValue = [];

  const result = readParsedLocalStorageValue(storage, key, defaultValue);

  return Array.isArray(result) ? result : defaultValue;
};
