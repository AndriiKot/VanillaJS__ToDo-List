"use strict";

import {
  getTodoInput,
  getTodoList,
  getTodoButton,
  getTodoValidationMessage,
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
  const todoInput = getTodoInput(".todo__input"),
    todoList = getTodoList(".todo__list"),
    todoButton = getTodoButton(".todo__btn"),
    todoValidMessage = getTodoValidationMessage(".todo__error");

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
