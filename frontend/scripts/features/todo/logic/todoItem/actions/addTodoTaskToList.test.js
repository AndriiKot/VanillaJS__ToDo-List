import { addTodoTaskToList } from "@features";

describe("addTodoTaskToList", () => {
  let input, list;

  beforeEach(() => {
    document.body.innerHTML = `
      <input type="text" id="todo-input" value="  Buy milk  " />
      <ul id="todo-list"></ul>
    `;
    input = document.getElementById("todo-input");
    list = document.getElementById("todo-list");
  });

  test("adds a trimmed todo item to the list", () => {
    addTodoTaskToList(list, input);

    const listItems = list.querySelectorAll("li");

    expect(listItems).toHaveLength(1);
    expect(listItems[0].textContent).toBe("Buy milk");
    expect(listItems[0].className).toBe("todo__item");
    expect(listItems[0].tagName).toBe("LI");
  });

  test("adds multiple items if called multiple times", () => {
    input.value = "First";
    addTodoTaskToList(list, input);

    input.value = "Second";
    addTodoTaskToList(list, input);

    const items = list.querySelectorAll("li");

    expect(items).toHaveLength(2);
    expect(items[0].textContent).toBe("First");
    expect(items[1].textContent).toBe("Second");
  });
});
