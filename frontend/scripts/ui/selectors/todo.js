"use strict";

import { getHTMLTagElement } from "@ui";

export const getTodoInput = () => getHTMLTagElement(".todo__input");
export const getTodoList = () => getHTMLTagElement(".todo__list");
export const getTodoButton = () => getHTMLTagElement(".todo__btn");
export const getTodoValidMessage = () => getHTMLTagElement(".todo__error");

export const getTodoElements = () => ({
  todoInput: getTodoInput(),
  todoList: getTodoList(),
  todoButton: getTodoButton(),
  todoValidMessage: getTodoValidMessage(),
});
