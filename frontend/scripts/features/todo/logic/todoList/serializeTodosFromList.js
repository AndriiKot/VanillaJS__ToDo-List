import { getTodoItemCheckedClassName, getStaticTodoElements } from '@features';

export const serializeTodosFromList = () => {
  const { todoList } = getStaticTodoElements();
  return Array.from(todoList.children, (li) => {
    return {
      text: li.querySelector('.todo__text').textContent,
      checked: li.matches(`.${getTodoItemCheckedClassName()}`),
    };
  });
};
