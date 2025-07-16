import { getTodoItemLiRemoveButtonClassName } from "@features";

describe("getTodoItemLiRemoveButtonClassName", () => {
  test("returns the correct class name string", () => {
    const result = getTodoItemLiRemoveButtonClassName();
    expect(result).toBe("todo__item--remove");
  });
});
