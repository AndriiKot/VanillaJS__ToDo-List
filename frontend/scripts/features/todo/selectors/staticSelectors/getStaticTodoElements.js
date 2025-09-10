import { TODO_STATIC_DATA_SELECTORS } from './TODO_STATIC_DATA_SELECTORS';
import {
  getTodoButton,
  getTodoInput,
  getTodoList,
  getTodoValidMessage,
} from './staticTodoElements/';

const { todoButton, todoInput, todoList, todoValidMessage } = TODO_STATIC_DATA_SELECTORS;

export const getStaticTodoElements = () => ({
  todoButton: getTodoButton(todoButton),
  todoInput: getTodoInput(todoInput),
  todoList: getTodoList(todoList),
  todoValidMessage: getTodoValidMessage(todoValidMessage),
});
