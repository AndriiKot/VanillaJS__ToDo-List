import { getTodoButton } from "@ui";

const TODO_BUTTON_CLASS = "todo__btn";

describe("getTodoButton", () => {
  beforeEach(() => {
    document.body.innerHTML = `<button class="${TODO_BUTTON_CLASS}"></button>`;
  });

  test(`should return the button element with class .${TODO_BUTTON_CLASS}`, () => {
    const button = getTodoButton();
    expect(button).not.toBeNull();
    expect(button.tagName).toBe("BUTTON");
    expect(button.classList.contains(TODO_BUTTON_CLASS)).toBe(true);
  });
});
