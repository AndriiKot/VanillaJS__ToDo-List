"use strict";

import { getTodoValidMessage } from "./dom.js";
import { showNotValidMessage, clearInput, getTrimmedInputValue } from "./ui.js";
import { isEmpty } from "./utils.js";

const todoValidMessage = getTodoValidMessage();

const addTask = (input, list) => {
  const task = validateInput(input);
  if (task) {
    const todoItem = createTodoItem(task);
    appendTodoItem(list, todoItem);
  }
  clearInput(input);
  input.focus();
};

const validateInput = (input) => {
  const task = getTrimmedInputValue(input);
  if (isEmpty(task)) {
    showNotValidMessage(todoValidMessage, "Task can't be empty");
    return;
  }
  return task;
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
