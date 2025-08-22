import { serializeTodosFromList, saveTodosToLocalStorage } from '@features';
import { resetInput, classNameToSelector, getElementTarget, validatedClosest } from '@ui';
import {
  toggleTodoItem,
  getToggleTodoContext,
  getTodoItemRemoveButtonClassName,
  getTodoItemClassName,
} from '@features';

export const handleClickTodoList = (event, todoList, todoInput) => {
  const target = getElementTarget(event);
  const removeBtn = validatedClosest(
    target,
    classNameToSelector(getTodoItemRemoveButtonClassName()),
  );
  if (removeBtn) {
    const li = validatedClosest(removeBtn, classNameToSelector(getTodoItemClassName()));
    if (li) {
      li.remove();
    }
  }

  const li = validatedClosest(target, classNameToSelector(getTodoItemClassName()));
  if (li) {
    const { target, className } = getToggleTodoContext(event);
    toggleTodoItem(target, className);
  }
  saveTodosToLocalStorage(serializeTodosFromList(todoList));
  resetInput(todoInput);
};
