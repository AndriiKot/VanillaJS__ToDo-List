import { getTodoItemLiSelectorClassName } from "@features";

describe("getTodoItemLiSelectorClassName", () => {
  test("returns the correct class name selector", () => {
    const result = getTodoItemLiSelectorClassName();
    expect(result).toBe(".todo__item");
  });
});
