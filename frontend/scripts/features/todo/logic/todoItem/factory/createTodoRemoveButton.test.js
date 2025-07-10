import { createTodoRemoveButton } from "@features";
import { getTodoItemLiRemoveButtonClassName } from "@features";

describe("createTodoRemoveButton", () => {
  test("creates a span element with correct attributes and content", () => {
    const button = createTodoRemoveButton();

    expect(button).toBeInstanceOf(HTMLSpanElement);
    expect(button.className).toBe(getTodoItemLiRemoveButtonClassName());
    expect(button.textContent).toBe("\u00d7"); // ×
    expect(button.getAttribute("aria-label")).toBe("Delete task");
    expect(button.getAttribute("role")).toBe("button");
  });
});
