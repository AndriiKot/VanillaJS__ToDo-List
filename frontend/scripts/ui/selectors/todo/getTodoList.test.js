import { getTodoList } from "@ui";

const TODO_LIST_CLASS = "todo__list";

describe("getTodoList", () => {
  beforeEach(() => {
    document.body.innerHTML = `<ul class="${TODO_LIST_CLASS}"></ul>`;
  });

  test(`should return the list <ul> element with class .${TODO_LIST_CLASS}`, () => {
    const list = getTodoList();
    expect(list).not.toBeNull();
    expect(list.tagName).toBe("UL");
    expect(list.classList.contains(TODO_LIST_CLASS)).toBe(true);
  });
});
