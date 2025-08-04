import { TODO_STATIC_SELECTORS } from "./TODO_STATIC_SELECTORS";

describe("TODO_STATIC_SELECTORS", () => {
  it("should contain expected selectors", () => {
    expect(TODO_STATIC_SELECTORS).toEqual({
      todoButton: ".todo__btn",
      todoInput: ".todo__input",
      todoList: ".todo__list",
      todoValidationMessage: ".todo__error",
    });
  });

  it("should be an object", () => {
    expect(typeof TODO_STATIC_SELECTORS).toBe("object");
  });

  it("all values should start with a dot", () => {
    Object.values(TODO_STATIC_SELECTORS).forEach((selector) => {
      expect(selector.startsWith(".")).toBe(true);
    });
  });
});
