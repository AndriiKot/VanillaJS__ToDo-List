import { STORAGE_KEYS } from '@services';

export const saveTodos = (todos) => {
  try {
    localStorage.setItem(STORAGE_KEYS.todo, JSON.stringify(todos));
  } catch (e) {
    console.error('Failed to save todos:', e);
  }
};
