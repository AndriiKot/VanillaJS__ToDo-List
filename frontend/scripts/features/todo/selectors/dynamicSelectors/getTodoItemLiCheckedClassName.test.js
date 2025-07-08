import { getTodoItemLiCheckedClassName } from "@features";

describe("getTodoItemLiCheckedClassName", () => {
  test("returns the correct class name string", () => {
    const result = getTodoItemLiCheckedClassName();
    expect(result).toBe("todo__item--checked");
  });
});
