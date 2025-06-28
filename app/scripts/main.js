"use strict";

import { getTodoElements } from "@selectors";
import {
  hiddenNotValidMessage,
  handleTodoTaskSubmission as addTodoTask,
} from "@handlers";

export const initTodoApp = () => {
  const { todoInput, todoList, todoButton, todoValidMessage } =
    getTodoElements();

  todoButton.addEventListener("click", () => {
    addTodoTask(todoInput, todoList, todoValidMessage);
  });

  todoInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      addTodoTask(todoInput, todoList, todoValidMessage);
    }
  });

  todoInput.addEventListener("input", () => {
    hiddenNotValidMessage(todoValidMessage);
  });
};
