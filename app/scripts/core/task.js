"use strict";

import { getTodoValidMessage } from "@selectors";
import {
  clearInputValue,
  isValidInputValue,
  createListItem,
  setListItemClassName,
  setListItemTextContent,
  appendListItemLi,
  getInputValue,
} from "@ui";

import { submitTaskSuccessfully } from "@handlers";
import { showNotValidMessage } from "@handlers";

// const getTodoValidMessage = () => document.querySelector(".todo__error");

const todoElementMessage = getTodoValidMessage();
const todoLiElementClassName = "todo__item";

const isValidateTask = (input) => {
  return isValidInputValue(input);
};

const handleTaskSubmission = (input, list) => {
  if (isValidateTask(input)) {
    submitTaskSuccessfully(list, input);
  } else {
    showNotValidMessage(todoElementMessage, "Task cannot be empty");
  }
};

const createTodoItemLi = (taskText) => {
  const li = createListItem();
  setListItemTextContent(li, taskText);
  setListItemClassName(li, todoLiElementClassName);
  return li;
};

const addTaskToList = (list, input) => {
  const taskText = getInputValue(input);
  const todoItem = createTodoItemLi(taskText);
  appendListItemLi(list, todoItem);
};

export {
  handleTaskSubmission,
  clearInputValue,
  createTodoItemLi,
  appendListItemLi,
  addTaskToList,
};
