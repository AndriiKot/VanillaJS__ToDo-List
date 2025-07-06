"use strict";

import {
  getTodoInput,
  getTodoList,
  getTodoButton,
  getTodoValidationMessage,
  handleClickAddTodoButton,
  handleKeyDownTodo,
  handleInputTodo,
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
  todoInput.addEventListener(
    "keydown",
    handleKeyDownTodo(todoInput, todoList, todoValidMessage),
  );
  todoInput.addEventListener("input", handleInputTodo(todoValidMessage));
};
