'use strict';

import {
  getStaticTodoElements,
  handleClickAddTodoButton,
  handleKeyDownTodo,
  handleInputTodo,
  handleClickTodoList,
  loadTodos,
  createTodosChannel,
  renderTodosFromStorage,
} from '@features';
import { STORAGE_KEYS } from '@services';

export const initTodoApp = () => {
  const { todoButton, todoInput, todoList, todoValidMessage } = getStaticTodoElements();
  if (!localStorage.getItem(STORAGE_KEYS.todo))
    localStorage.setItem(
      STORAGE_KEYS.todo,
      JSON.stringify([{ text: 'Tesk Task', checked: false }]),
    );

  const todosChannel = createTodosChannel();

  todosChannel.addEventListener('message', (event) => {
    const { type, todos } = event.data;

    if (type === 'update') {
      todoList.innerHTML = '';
      renderTodosFromStorage(todoList, todos);
    }
  });

  const storedTodos = loadTodos();
  renderTodosFromStorage(todoList, storedTodos);

  todoButton.addEventListener(
    'click',
    handleClickAddTodoButton(todoInput, todoList, todoValidMessage),
  );

  todoList.addEventListener('click', (event) => {
    handleClickTodoList(event, todoList, todoInput);
  });

  todoInput.addEventListener('keydown', handleKeyDownTodo(todoInput, todoList, todoValidMessage));

  todoInput.addEventListener('input', handleInputTodo(todoValidMessage));
};
