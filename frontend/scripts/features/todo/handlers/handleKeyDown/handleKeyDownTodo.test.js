import { handleKeyDownTodo } from "@features";

describe("handleKeyDownTodo", () => {
  let input, list, validationMsg;

  beforeEach(() => {
    input = document.createElement("input");
    list = document.createElement("ul");
    validationMsg = document.createElement("div");

    input.value = "Test task";
  });

  test("calls addTodoTask on Enter key", () => {
    const event = new KeyboardEvent("keydown", { key: "Enter" });
    const handler = handleKeyDownTodo(input, list, validationMsg);

    handler(event);

    expect(list.children.length).toBeGreaterThan(0);
  });

  test("does not call addTodoTask on other keys", () => {
    const event = new KeyboardEvent("keydown", { key: "Escape" });
    const handler = handleKeyDownTodo(input, list, validationMsg);

    handler(event);

    expect(list.children.length).toBe(0);
  });
});
