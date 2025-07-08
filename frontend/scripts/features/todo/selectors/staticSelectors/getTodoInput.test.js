import { getTodoInput } from "@features";

const TODO_INPUT_CLASS = "todo__input";

describe("getTodoInput", () => {
  beforeEach(() => {
    document.body.innerHTML = `<input class="${TODO_INPUT_CLASS}" />`;
  });

  test(`should return the input <input> element with class .${TODO_INPUT_CLASS}`, () => {
    const input = getTodoInput();
    expect(input).not.toBeNull();
    expect(input.tagName).toBe("INPUT");
    expect(input.classList.contains(TODO_INPUT_CLASS)).toBe(true);
  });
});
