"use strict";

import { getTodoElements } from "./dom.js";

window.addEventListener("DOMContentLoaded", () => {
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

  todoInput.focus();
});

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
    showError("Task can't be empty");
    input.focus();
    return;
  }
  showError(""); // очистить ошибку
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

const showError = (message) => {
  const error = document.querySelector(".todo__error");
  if (error) {
    error.textContent = message;
  }
};
