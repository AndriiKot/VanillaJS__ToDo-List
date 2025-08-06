"use strict";

import {
  getStaticTodoElements,
  handleClickAddTodoButton,
  handleKeyDownTodo,
  handleInputTodo,
  handleClickItemTodo,
  handleClickDeleteTodoTaskElement,
  createTodoItem,
  loadTodos,
} from "@features";

import { appendListItemLi } from "@ui";

export const initTodoApp = () => {
  const { todoButton, todoInput, todoList, todoValidMessage } =
    getStaticTodoElements();

  const storedTodos = loadTodos();
  storedTodos.forEach((text) =>
    appendListItemLi(todoList, createTodoItem(text)),
  );

  todoButton.addEventListener(
    "click",
    handleClickAddTodoButton(todoInput, todoList, todoValidMessage),
  );

  todoList.addEventListener("click", (event) => {
    handleClickItemTodo(event);
    handleClickDeleteTodoTaskElement(event);
  });

  todoInput.addEventListener(
    "keydown",
    handleKeyDownTodo(todoInput, todoList, todoValidMessage),
  );

  todoInput.addEventListener("input", handleInputTodo(todoValidMessage));
};
