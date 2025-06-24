"use strict";

import { getTodoValidMessage } from "./dom.js";
import {
  showNotValidMessage,
  clearInput,
  isValidInputValue,
  createListItem,
  setListItemClassName,
  setListItemTextContent,
  appendTodoItemLi,
  getInputValue,
} from "./ui.js";

const todoElementMessage = getTodoValidMessage();
const todoLiElementClassName = "todo__item";

const isValidateTask = (task) => {
  return isValidInputValue(task);
};

const addTask = (input, list) => {
  if (isValidateTask(input)) {
    const inputValue = getInputValue(input);
    const todoItem = createTodoItemLi(inputValue);
    appendTodoItemLi(list, todoItem);
  } else {
    showNotValidMessage(todoElementMessage, "Task cannot be empty");
  }
  clearInput(input);
  input.focus();
};

const createTodoItemLi = (taskText) => {
  const li = createListItem();
  setListItemClassName(li, todoLiElementClassName);
  setListItemTextContent(li, taskText);
  return li;
};

export { addTask, clearInput, createTodoItemLi, appendTodoItemLi };
