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

export const initTodoApp = () => {
  const { todoButton, todoInput, todoList, todoValidMessage } = getStaticTodoElements();

  const todosChannel = createTodosChannel();

  todosChannel.addEventListener('message', (event) => {
    const { type, todos } = event.data;

    if (type === 'update') {
      const { todoList } = getStaticTodoElements();
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
