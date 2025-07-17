import { STORAGE_KEYS } from "@services";
import { getRawItem, parseJSONWithFallback } from "@utils";

export const loadTodos = (defaultValue = []) => {
  try {
    const stored = getRawItem(localStorage, STORAGE_KEYS.todo, defaultValue);
    return parseJSONWithFallback(stored, defaultValue);
  } catch (e) {
    console.error("Failed to load todos:", e);
    return defaultValue;
  }
};
