"use strict";

const getElement = (selector) => document.querySelector(selector);

export const getTodoInput = () => getElement(".todo__input");
export const getTodoList = () => getElement(".todo__list");
export const getTodoButton = () => getElement(".todo__btn");
export const getTodoErrorMessage = () => getElement(".todo__error");

export const getTodoElements = () => ({
  todoInput: getTodoInput(),
  todoList: getTodoList(),
  todoButton: getTodoButton(),
  todoError: getTodoErrorMessage(),
});
