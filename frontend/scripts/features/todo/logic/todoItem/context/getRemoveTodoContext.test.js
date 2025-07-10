import {
  getTodoItemLiSelectorClassName,
  getTodoItemLiRemoveClassName,
  getRemoveTodoContext,
} from "@features";

describe("getRemoveTodoContext", () => {
  test("returns correct context with selector, className, target, currentTarget", () => {
    const currentTarget = document.createElement("ul");
    const li = document.createElement("li");
    li.className = getTodoItemLiSelectorClassName().slice(1);
    const button = document.createElement("button");
    button.className = getTodoItemLiRemoveClassName().slice(1);

    li.appendChild(button);
    currentTarget.appendChild(li);

    const event = new MouseEvent("click", { bubbles: true });
    Object.defineProperty(event, "target", {
      value: button,
      configurable: true,
    });
    Object.defineProperty(event, "currentTarget", {
      value: currentTarget,
      configurable: true,
    });

    const context = getRemoveTodoContext(event);

    expect(context.selector).toBe(getTodoItemLiSelectorClassName());
    expect(context.className).toBe(getTodoItemLiRemoveClassName());
    expect(context.target).toBe(li);
    expect(context.currentTarget).toBe(currentTarget);
  });
});
