import { STORAGE_KEYS, readParsedLocalStorageValue } from '@services';

/**
 * Loads todos from localStorage and ensures it returns an array of strings.
 *
 * @returns {string[]} - Array of todo item texts
 */
export const loadTodos = () => {
  const defaultValue = [];

  const result = readParsedLocalStorageValue(localStorage, STORAGE_KEYS.todo, defaultValue);

  return Array.isArray(result) ? result : defaultValue;
};
