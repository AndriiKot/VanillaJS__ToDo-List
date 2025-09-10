import { TODO_STATIC_DATA_SELECTORS } from './TODO_STATIC_DATA_SELECTORS';

describe('TODO_STATIC_DATA_SELECTORS', () => {
  it('should contain expected selectors', () => {
    expect(TODO_STATIC_DATA_SELECTORS).toEqual({
      todoButton: '[data-js-todo-btn-add]',
      todoInput: '[data-js-todo-new-task-input]',
      todoList: '[data-js-todo-list]',
      todoValidMessage: '[data-js-todo-error-empty-task]',
    });
  });

  it('should be an object', () => {
    expect(typeof TODO_STATIC_DATA_SELECTORS).toBe('object');
  });

  it('all values should start with [data-', () => {
    Object.values(TODO_STATIC_DATA_SELECTORS).forEach((selector) => {
      expect(selector.startsWith('[data-')).toBe(true);
    });
  });
});
