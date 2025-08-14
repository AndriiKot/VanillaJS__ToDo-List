import { getTodoItemLiCheckedClassName, handleClickItemTodo } from '@features';

describe('handleClickItemTodo', () => {
  test('toggles class on todo item when clicked', () => {
    const container = document.createElement('ul');
    container.className = 'todo__list'; // если в getToggleTodoContext есть поиск по классу

    const li = document.createElement('li');
    li.className = 'todo__item'; // элемент, на котором проверяется класс

    const span = document.createElement('span');
    li.appendChild(span);
    container.appendChild(li);
    document.body.appendChild(container); // для полноты — элемент должен быть в DOM

    const event = new MouseEvent('click', { bubbles: true });

    Object.defineProperty(event, 'target', { value: span, configurable: true });
    Object.defineProperty(event, 'currentTarget', {
      value: container,
      configurable: true,
    });

    expect(li.classList.contains(getTodoItemLiCheckedClassName())).toBe(false);

    handleClickItemTodo(event);

    expect(li.classList.contains(getTodoItemLiCheckedClassName())).toBe(true);

    document.body.removeChild(container);
  });
});
