"use strict";

import { getTodoElements } from "./dom.js";

const { todoInput, todoList, todoButton } = getTodoElements();
console.log("From getTodoElements:", todoInput, todoList, todoButton);
