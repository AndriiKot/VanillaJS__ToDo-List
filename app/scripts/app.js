"use strict";

import { getTodoElements } from "./dom.js";
import { addTask } from "./task.js";
import { showValidMessage } from "./ui.js";

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
    showValidMessage(todoValidMessage, "");
  });
};
