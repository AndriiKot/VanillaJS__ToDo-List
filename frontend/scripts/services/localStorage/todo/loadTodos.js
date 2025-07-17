import { STORAGE_KEYS, getRawLocalStorageValue } from "@services";
import { parseJSONWithFallback } from "@utils";

export const loadTodos = (defaultValue = []) => {
  try {
    const stored = getRawLocalStorageValue(
      localStorage,
      STORAGE_KEYS.todo,
      defaultValue,
    );
    return parseJSONWithFallback(stored, defaultValue);
  } catch (e) {
    console.error("Failed to load todos:", e);
    return defaultValue;
  }
};
