"use strict";

import { getTodoElements } from "./dom.js";
import { addTask, showError } from "./task.js";

export const initTodoApp = () => {
  const { todoInput, todoList, todoButton } = getTodoElements();

  todoButton.addEventListener("click", () => {
    addTask(todoInput, todoList);
  });

  todoInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      addTask(todoInput, todoList);
    }
  });

  todoInput.addEventListener("input", () => {
    showError("");
  });
};
