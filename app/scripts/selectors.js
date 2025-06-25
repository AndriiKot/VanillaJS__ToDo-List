"use strict";

import { getElement } from "./ui/";

export const getTodoInput = () => getElement(".todo__input");
export const getTodoList = () => getElement(".todo__list");
export const getTodoButton = () => getElement(".todo__btn");
export const getTodoValidMessage = () => getElement(".todo__error");

export const getTodoElements = () => ({
  todoInput: getTodoInput(),
  todoList: getTodoList(),
  todoButton: getTodoButton(),
  todoValidMessage: getTodoValidMessage(),
});
