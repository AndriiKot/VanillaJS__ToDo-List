import { getTodoValidMessage } from '@features';

const TODO_ERROR_CLASS = 'todo__error';

describe('getTodoValidMessage', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  test(`should return the <div> element with class .${TODO_ERROR_CLASS}`, () => {
    document.body.innerHTML = `<div class="${TODO_ERROR_CLASS}"></div>`;
    const el = getTodoValidMessage(`.${TODO_ERROR_CLASS}`);
    expect(el).toBeInstanceOf(HTMLDivElement);
    expect(el.classList.contains(TODO_ERROR_CLASS)).toBe(true);
  });

  test('should throw TypeError if element is not <div>', () => {
    document.body.innerHTML = `<section class="${TODO_ERROR_CLASS}"></section>`;
    expect(() => getTodoValidMessage(`.${TODO_ERROR_CLASS}`)).toThrow(TypeError);
  });

  test('should throw TypeError if element does not exist', () => {
    expect(() => getTodoValidMessage(`.${TODO_ERROR_CLASS}`)).toThrow(TypeError);
  });
});
