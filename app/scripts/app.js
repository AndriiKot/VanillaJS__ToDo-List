"use strict";

import { getTodoElements } from "./selectors.js";
import { handleTaskSubmission as addTask } from "./task.js";
import { hiddenNotValidMessage } from "./handlers/hiddenNotValidMessage.js";

export const initTodoApp = () => {
  const { todoInput, todoList, todoButton, todoValidMessage } =
    getTodoElements();

  todoButton.addEventListener("click", () => {
    addTask(todoInput, todoList);
  });

  todoInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      addTask(todoInput, todoList);
    }
  });

  todoInput.addEventListener("input", () => {
    hiddenNotValidMessage(todoValidMessage);
  });
};
