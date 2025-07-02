"use strict";

import { getTodoInput } from "@ui";
import { getTodoList } from "@ui";
import { getTodoButton } from "@ui";
import { getTodoValidationMessage } from "@ui";

import { handleClick } from "@features";
import { handleKeyDown } from "@features";
import { handleInput } from "@features";

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
