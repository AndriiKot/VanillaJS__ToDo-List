import { getTodoInput } from "@features";

const TODO_INPUT_CLASS = "todo__input";

describe("getTodoInput", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  test(`should return the <input> element with class .${TODO_INPUT_CLASS}`, () => {
    document.body.innerHTML = `<input class="${TODO_INPUT_CLASS}" />`;
    const input = getTodoInput(`.${TODO_INPUT_CLASS}`);
    expect(input).toBeInstanceOf(HTMLInputElement);
    expect(input.classList.contains(TODO_INPUT_CLASS)).toBe(true);
  });

  test("should throw TypeError if element is not <input>", () => {
    document.body.innerHTML = `<div class="${TODO_INPUT_CLASS}"></div>`;
    expect(() => getTodoInput(`.${TODO_INPUT_CLASS}`)).toThrow(TypeError);
    expect(() => getTodoInput(`.${TODO_INPUT_CLASS}`)).toThrow(
      /DOM element of type <input>/,
    );
  });

  test("should throw TypeError if element does not exist", () => {
    expect(() => getTodoInput(`.${TODO_INPUT_CLASS}`)).toThrow(TypeError);
    expect(() => getTodoInput(`.${TODO_INPUT_CLASS}`)).toThrow(
      /instance of HTMLElement/,
    );
  });
});
