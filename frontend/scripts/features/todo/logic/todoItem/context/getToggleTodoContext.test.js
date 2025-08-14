import {
  getTodoItemLiSelectorClassName,
  getTodoItemLiCheckedClassName,
  getToggleTodoContext,
} from '@features';

describe('getToggleTodoContext', () => {
  test('returns correct context with selector, className, target, currentTarget', () => {
    const currentTarget = document.createElement('ul');
    const li = document.createElement('li');
    li.className = getTodoItemLiSelectorClassName().slice(1);
    const span = document.createElement('span');

    li.appendChild(span);
    currentTarget.appendChild(li);

    const event = new MouseEvent('click', { bubbles: true });
    Object.defineProperty(event, 'target', { value: span, configurable: true });
    Object.defineProperty(event, 'currentTarget', {
      value: currentTarget,
      configurable: true,
    });

    const context = getToggleTodoContext(event);

    expect(context.selector).toBe(getTodoItemLiSelectorClassName());
    expect(context.className).toBe(getTodoItemLiCheckedClassName());
    expect(context.target).toBe(li);
    expect(context.currentTarget).toBe(currentTarget);
  });
});
