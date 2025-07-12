import { STORAGE_KEYS } from "@services";

export const loadTodos = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.todo);
    return stored ? JSON.parse(stored) : [];
  } catch (e) {
    console.error("Failed to load todos:", e);
    return [];
  }
};
