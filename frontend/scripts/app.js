'use strict';

import {
  getStaticTodoElements,
  handleClickAddTodoButton,
  handleKeyDownTodo,
  handleInputTodo,
  handleClickItemTodo,
  handleClickDeleteTodoTaskElement,
  createTodoItem,
  loadTodos,
  createTodosChannel,
  initTodosFromStorage,
} from '@features';

import { appendListItemLi } from '@ui';

const todosChannel = createTodosChannel();

todosChannel.addEventListener('message', (event) => {
  const { type, todos } = event.data;

  if (type === 'update') {
    const { todoList } = getStaticTodoElements();
    todoList.innerHTML = '';

    todos.forEach((todo) => appendListItemLi(todoList, initTodosFromStorage(todo)));
  }
});

export const initTodoApp = () => {
  const { todoButton, todoInput, todoList, todoValidMessage } = getStaticTodoElements();

  const storedTodos = loadTodos();
  storedTodos.forEach((todo) => appendListItemLi(todoList, initTodosFromStorage(todo)));

  todoButton.addEventListener(
    'click',
    handleClickAddTodoButton(todoInput, todoList, todoValidMessage),
  );

  todoList.addEventListener('click', (event) => {
    handleClickItemTodo(event);
    handleClickDeleteTodoTaskElement(event);
  });

  todoInput.addEventListener('keydown', handleKeyDownTodo(todoInput, todoList, todoValidMessage));

  todoInput.addEventListener('input', handleInputTodo(todoValidMessage));
};
