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
    handleClickItemTodo(event);
    handleClickDeleteTodoTaskElement(event);
  });

  todoInput.addEventListener(
    "keydown",
    handleKeyDownTodo(todoInput, todoList, todoValidMessage),
  );

  todoInput.addEventListener("input", handleInputTodo(todoValidMessage));
};
