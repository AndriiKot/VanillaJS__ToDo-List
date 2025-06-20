"use strict";

const showError = (message) => {
  const error = document.querySelector(".todo__error");
  if (error) {
    error.textContent = message;
  }
};

const focusInput = (input) => {
  input.focus();
};

const addTask = (input, list) => {
  const task = validateInput(input);
  if (task) {
    const todoItem = createTodoItem(task);
    appendTodoItem(list, todoItem);
  }
  clearInput(input);
  focusInput(input);
};

const validateInput = (input) => {
  const task = input.value.trim();
  if (task === "") {
    showError("Task can't be empty");
    input.focus();
    return;
  }
  showError("");
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

export {
  addTask,
  validateInput,
  clearInput,
  createTodoItem,
  appendTodoItem,
  showError,
};
