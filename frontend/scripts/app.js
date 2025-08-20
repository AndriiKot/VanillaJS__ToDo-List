'use strict';

import {
  getStaticTodoElements,
  handleClickAddTodoButton,
  handleKeyDownTodo,
  handleInputTodo,
  handleClickItemTodo,
  handleClickDeleteTodoTaskElement,
  loadTodos,
  createTodosChannel,
  renderTodosFromStorage,
} from '@features';

const todosChannel = createTodosChannel();

todosChannel.addEventListener('message', (event) => {
  const { type, todos } = event.data;

  if (type === 'update') {
    const { todoList } = getStaticTodoElements();
    todoList.innerHTML = '';
    renderTodosFromStorage(todoList, todos);
  }
});

export const initTodoApp = () => {
  const { todoButton, todoInput, todoList, todoValidMessage } = getStaticTodoElements();

  const storedTodos = loadTodos();
  renderTodosFromStorage(todoList, storedTodos);

  todoButton.addEventListener(
    'click',
    handleClickAddTodoButton(todoInput, todoList, todoValidMessage),
  );

  todoList.addEventListener('click', (event) => {
    handleClickItemTodo(event, todoList, todoInput);
    handleClickDeleteTodoTaskElement(event, todoList, todoInput);
  });

  todoInput.addEventListener('keydown', handleKeyDownTodo(todoInput, todoList, todoValidMessage));

  todoInput.addEventListener('input', handleInputTodo(todoValidMessage));
};
