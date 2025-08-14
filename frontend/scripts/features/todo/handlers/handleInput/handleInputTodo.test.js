import { handleInputTodo } from '@features';

describe('handleInputTodo', () => {
  let validationMsg;

  beforeEach(() => {
    validationMsg = document.createElement('div');
    validationMsg.textContent = 'Task cannot be empty';
    document.body.appendChild(validationMsg);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('clears the validation message content', () => {
    const handler = handleInputTodo(validationMsg);
    handler();

    expect(validationMsg.textContent).toBe('');
  });
});
