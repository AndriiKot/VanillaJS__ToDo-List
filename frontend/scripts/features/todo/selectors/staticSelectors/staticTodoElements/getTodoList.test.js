import { getTodoList } from "@features";

const TODO_LIST_CLASS = "todo__list";

describe("getTodoList", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  test(`should return the <ul> element with class .${TODO_LIST_CLASS}`, () => {
    document.body.innerHTML = `<ul class="${TODO_LIST_CLASS}"></ul>`;
    const list = getTodoList(`.${TODO_LIST_CLASS}`);
    expect(list).toBeInstanceOf(HTMLUListElement);
    expect(list.classList.contains(TODO_LIST_CLASS)).toBe(true);
  });

  test("should throw TypeError if element is not <ul>", () => {
    document.body.innerHTML = `<div class="${TODO_LIST_CLASS}"></div>`;
    expect(() => getTodoList(`.${TODO_LIST_CLASS}`)).toThrow(TypeError);
    expect(() => getTodoList(`.${TODO_LIST_CLASS}`)).toThrow(
      /DOM element of type <ul>/,
    );
  });

  test("should throw TypeError if element does not exist", () => {
    expect(() => getTodoList(`.${TODO_LIST_CLASS}`)).toThrow(TypeError);
    expect(() => getTodoList(`.${TODO_LIST_CLASS}`)).toThrow(
      /instance of HTMLElement/,
    );
  });
});
