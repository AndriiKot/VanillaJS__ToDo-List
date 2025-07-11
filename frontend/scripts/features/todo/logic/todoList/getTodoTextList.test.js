import { getTodoTextList } from "./getTodoTextList";

describe("getTodoTextList", () => {
  let ul;

  beforeEach(() => {
    ul = document.createElement("ul");
  });

  test("returns a list of task texts without remove buttons", () => {
    ul.innerHTML = `
      <li>Task 1<span class="todo__item-remove">×</span></li>
      <li>Task 2<span class="todo__item-remove">×</span></li>
      <li>Task 3<span class="todo__item-remove">×</span></li>
    `;

    const result = getTodoTextList(ul);
    expect(result).toEqual(["Task 1", "Task 2", "Task 3"]);
  });

  test("ignores <li> without a text node (starts with <span>)", () => {
    ul.innerHTML = `
      <li><span class="todo__item-remove">×</span></li>
      <li>Task<span class="todo__item-remove">×</span></li>
    `;

    const result = getTodoTextList(ul);
    expect(result).toEqual(["", "Task"]);
  });

  test("returns an empty string if <li> contains only nested tags (e.g., <strong>)", () => {
    ul.innerHTML = `
      <li><strong>Task</strong></li>
      <li><em>Another</em></li>
    `;

    const result = getTodoTextList(ul);
    expect(result).toEqual(["", ""]);
  });

  test("trims text from <li> if firstChild is a text node with surrounding spaces", () => {
    ul.innerHTML = `
      <li>   Padded   <span class="todo__item-remove">×</span></li>
    `;

    const result = getTodoTextList(ul);
    expect(result).toEqual(["Padded"]);
  });

  test("handles an empty <ul> without errors", () => {
    const result = getTodoTextList(ul);
    expect(result).toEqual([]);
  });

  test("handles <li> with no firstChild", () => {
    const li = document.createElement("li");
    // intentionally empty
    ul.appendChild(li);

    const result = getTodoTextList(ul);
    expect(result).toEqual([""]);
  });
});
