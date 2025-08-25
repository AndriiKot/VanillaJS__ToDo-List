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
  initTodosToLocalStorage,
  handleTodosChannelMessage,
} from '@features';

export const initTodoApp = () => {
  const { todoButton, todoInput, todoList, todoValidMessage } = getStaticTodoElements();
  const todosChannel = createTodosChannel();
  initTodosToLocalStorage();

  todosChannel.addEventListener('message', (event) => {
    handleTodosChannelMessage(event.data, todoList);
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
