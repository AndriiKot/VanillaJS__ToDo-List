"use strict";

import { getTodoValidMessage } from "@selectors";
import {
  clearInput,
  isValidInputValue,
  createListItem,
  setListItemClassName,
  setListItemTextContent,
  appendTodoItemLi,
  getInputValue,
} from "@ui";

import { submitTaskSuccessfully } from "./handlers/submitTaskSuccessfully.js";
import { showNotValidMessage } from "./handlers/showNotValidMessage.js";

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
  appendTodoItemLi(list, todoItem);
};

export {
  handleTaskSubmission,
  clearInput,
  createTodoItemLi,
  appendTodoItemLi,
  addTaskToList,
};
