import { getTodoItemLiRemoveClassName } from "@features";

describe("getTodoItemLiRemoveClassName", () => {
  test("returns the correct class name string", () => {
    const result = getTodoItemLiRemoveClassName();
    expect(result).toBe("todo__item-remove");
  });
});
