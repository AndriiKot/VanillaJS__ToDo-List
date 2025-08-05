import { getTodoValidationMessage } from "@features";

const TODO_ERROR_CLASS = "todo__error";

describe("getTodoValidationMessage", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  test(`should return the <div> element with class .${TODO_ERROR_CLASS}`, () => {
    document.body.innerHTML = `<div class="${TODO_ERROR_CLASS}"></div>`;
    const el = getTodoValidationMessage(`.${TODO_ERROR_CLASS}`);
    expect(el).toBeInstanceOf(HTMLDivElement);
    expect(el.classList.contains(TODO_ERROR_CLASS)).toBe(true);
  });

  test("should throw TypeError if element is not <div>", () => {
    document.body.innerHTML = `<section class="${TODO_ERROR_CLASS}"></section>`;
    expect(() => getTodoValidationMessage(`.${TODO_ERROR_CLASS}`)).toThrow(
      TypeError,
    );
    expect(() => getTodoValidationMessage(`.${TODO_ERROR_CLASS}`)).toThrow(
      /DOM element of type <div>/,
    );
  });

  test("should throw TypeError if element does not exist", () => {
    expect(() => getTodoValidationMessage(`.${TODO_ERROR_CLASS}`)).toThrow(
      TypeError,
    );
    expect(() => getTodoValidationMessage(`.${TODO_ERROR_CLASS}`)).toThrow(
      /instance of HTMLElement/,
    );
  });
});
