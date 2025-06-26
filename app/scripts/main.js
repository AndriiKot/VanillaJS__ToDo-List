"use strict";

import { getTodoElements } from "@selectors";
import { handleTaskSubmission as addTask } from "@task";
import { hiddenNotValidMessage } from "@handlers";

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
