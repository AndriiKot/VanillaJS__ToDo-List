"use strict";

import { getTodoValidMessage } from "./dom.js";
import { showNotValidMessage } from "./ui.js";

const todoValidMessage = getTodoValidMessage();

const addTask = (input, list) => {
  const task = validateInput(input);
  if (task) {
    const todoItem = createTodoItem(task);
    appendTodoItem(list, todoItem);
  }
  clearInput(input);
};

const validateInput = (input) => {
  const task = input.value.trim();
  if (task === "") {
    showNotValidMessage(todoValidMessage, "Task can't be empty");
    return;
  }
  showNotValidMessage(todoValidMessage, "");
  return task;
};

const clearInput = (input) => {
  input.value = "";
};

const createTodoItem = (taskText) => {
  const li = document.createElement("li");
  li.className = "todo__item";
  li.textContent = taskText;
  return li;
};

const appendTodoItem = (list, item) => {
  list.appendChild(item);
};

export { addTask, validateInput, clearInput, createTodoItem, appendTodoItem };
