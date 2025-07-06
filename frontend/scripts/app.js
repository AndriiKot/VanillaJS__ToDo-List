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
} from "@features";

export const initTodoApp = () => {
  const todoInput = getTodoInput(),
    todoList = getTodoList(),
    todoButton = getTodoButton(),
    todoValidMessage = getTodoValidationMessage();

  todoButton.addEventListener(
    "click",
    handleClickAddTodoButton(todoInput, todoList, todoValidMessage),
  );
  todoList.addEventListener("click", (event) => {
    const target = event.target.closest(".todo__item");

    if (target && event.currentTarget.contains(target)) {
      handleClickItemTodo(target, "todo__item--checked");
    }
  });
  todoInput.addEventListener(
    "keydown",
    handleKeyDownTodo(todoInput, todoList, todoValidMessage),
  );
  todoInput.addEventListener("input", handleInputTodo(todoValidMessage));
};
