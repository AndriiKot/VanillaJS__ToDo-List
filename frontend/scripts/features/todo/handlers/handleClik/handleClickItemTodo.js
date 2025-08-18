import { toggleTodoItem, getToggleTodoContext, getStaticTodoElements } from '@features';
import { safeContains } from '@ui';
import { saveTodosToLocalStorage } from '@features';

export const handleClickItemTodo = (event) => {
  const { target, currentTarget, className } = getToggleTodoContext(event);
  safeContains(currentTarget, target);
  toggleTodoItem(target, className);
  const { todoList } = getStaticTodoElements();
  const todos = Array.from(todoList.children).map((li) => ({
    text: li.querySelector('.todo__text').textContent,
    checked: li.classList.contains('todo__item--checked'),
  }));

  saveTodosToLocalStorage(todos);
};
