import { submitTodoTaskSuccessfully } from '@features';

describe('submitTodoTaskSuccessfully', () => {
  let list, input;

  beforeEach(() => {
    list = document.createElement('ul');
    input = document.createElement('input');
    input.value = '  New Task  ';

    document.body.appendChild(list);
    document.body.appendChild(input);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('adds trimmed input as a todo item and clears the input value', () => {
    expect(list.children.length).toBe(0);
    expect(input.value).toBe('  New Task  ');

    submitTodoTaskSuccessfully(list, input);

    // Проверяем, что появился один элемент списка
    expect(list.children.length).toBe(1);

    const li = list.children[0];
    const checkbox = li.querySelector('input[type="checkbox"]');
    const label = li.querySelector('label');
    const button = li.querySelector('button');

    // Проверка <li>
    expect(li).toBeInstanceOf(HTMLLIElement);
    expect(li.classList.contains('todo__item')).toBe(true);

    // Проверка чекбокса
    expect(checkbox).toBeInstanceOf(HTMLInputElement);
    expect(checkbox.type).toBe('checkbox');
    expect(checkbox.checked).toBe(false); // новый таск всегда по умолчанию "не выполнен"

    // Проверка текста задачи
    expect(label).toBeInstanceOf(HTMLLabelElement);
    expect(label.textContent).toBe('New Task');
    expect(label.getAttribute('for')).toMatch(/^taskId-/); // указывает на id чекбокса

    // Проверка кнопки удаления
    expect(button).toBeInstanceOf(HTMLButtonElement);
    expect(button.textContent).toBe('×');
    expect(button.getAttribute('aria-label')).toBe('Delete task: New Task');
    expect(button.getAttribute('role')).toBe('button');

    // Проверка очистки input после добавления
    expect(input.value).toBe('');
  });

  test('adds multiple items if called multiple times', () => {
    input.value = 'Task 1';
    submitTodoTaskSuccessfully(list, input);

    input.value = 'Task 2';
    submitTodoTaskSuccessfully(list, input);

    const items = list.querySelectorAll('li');
    expect(items).toHaveLength(2);

    const [first, second] = items;

    expect(first.querySelector('label').textContent).toBe('Task 1');
    expect(second.querySelector('label').textContent).toBe('Task 2');
  });
});
