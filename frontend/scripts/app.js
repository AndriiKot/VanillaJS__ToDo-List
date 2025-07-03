"use strict";

import {
  getTodoInput,
  getTodoList,
  getTodoButton,
  getTodoValidationMessage,
  handleClick,
  handleKeyDown,
  handleInput,
} from "@features";

export const initTodoApp = () => {
  const todoInput = getTodoInput(),
    todoList = getTodoList(),
    todoButton = getTodoButton(),
    todoValidMessage = getTodoValidationMessage();

  todoButton.addEventListener(
    "click",
    handleClick(todoInput, todoList, todoValidMessage),
  );
  todoInput.addEventListener(
    "keydown",
    handleKeyDown(todoInput, todoList, todoValidMessage),
  );
  todoInput.addEventListener("input", handleInput(todoValidMessage));
};
