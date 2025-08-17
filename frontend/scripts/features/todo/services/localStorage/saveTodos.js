import { STORAGE_KEYS } from '@services';
import { createTodosChannel } from '@features';

export const saveTodos = (todos) => {
  try {
    localStorage.setItem(STORAGE_KEYS.todo, JSON.stringify(todos));
    createTodosChannel().postMessage({ type: 'update', todos });
  } catch (e) {
    console.error('Failed to save todos:', e);
  }
};
