"use strict";

const getElement = (selector) => document.querySelector(selector);

export const getTodoInput = () => getElement(".todo__input");
export const getTodoList = () => getElement(".todo__list");
export const getTodoBtn = () => getElement(".todo__btn");

export const getTodoElements = () => ({
  todoInput: getTodoInput(),
  todoList: getTodoList(),
  todoButton: getTodoBtn(),
});
