import { renderTodosFromStorage } from '@features';

/**
 * Handles a message event from the BroadcastChannel for syncing todos.
 *
 * @param {{ type: string, todos: Array }} data - The data from the message event
 * @param {HTMLElement} todoList - The UL element where todos should be rendered
 */

export function handleTodosChannelMessage(data, todoList) {
  const { type, todos } = data;

  if (type === 'update') {
    todoList.innerHTML = '';
    renderTodosFromStorage(todoList, todos);
  }
}
