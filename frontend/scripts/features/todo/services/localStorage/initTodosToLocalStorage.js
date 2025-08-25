import { STORAGE_KEYS } from '@services';
import { isNullOrUndefined } from '@utils';
import { createTodosChannel } from '@features';

export const initTodosToLocalStorage = () => {
  const DefaultTodos = [];
  const key = STORAGE_KEYS.todo;
  if (isNullOrUndefined(localStorage.getItem(key))) {
    try {
      localStorage.setItem(key, JSON.stringify(DefaultTodos));
      createTodosChannel().postMessage({ type: 'update', DefaultTodos });
    } catch (e) {
      console.error('Failed to initialize todos:', e);
    }
  }
};
