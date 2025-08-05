import { getTodoButton } from "@features";

const TODO_BUTTON_CLASS = "todo__button";

describe("getTodoButton", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  test(`should return the <button> element with class .${TODO_BUTTON_CLASS}`, () => {
    document.body.innerHTML = `<button class="${TODO_BUTTON_CLASS}"></button>`;
    const button = getTodoButton(`.${TODO_BUTTON_CLASS}`);
    expect(button).toBeInstanceOf(HTMLButtonElement);
    expect(button.classList.contains(TODO_BUTTON_CLASS)).toBe(true);
  });

  test("should throw TypeError if element is not <button>", () => {
    document.body.innerHTML = `<div class="${TODO_BUTTON_CLASS}"></div>`;
    expect(() => getTodoButton(`.${TODO_BUTTON_CLASS}`)).toThrow(TypeError);
    expect(() => getTodoButton(`.${TODO_BUTTON_CLASS}`)).toThrow(
      /DOM element of type <button>/,
    );
  });

  test("should throw TypeError if element does not exist", () => {
    expect(() => getTodoButton(`.${TODO_BUTTON_CLASS}`)).toThrow(TypeError);
    expect(() => getTodoButton(`.${TODO_BUTTON_CLASS}`)).toThrow(
      /instance of HTMLElement/,
    );
  });
});
