import { submitTodoTaskSuccessfully } from "@features";

describe("submitTodoTaskSuccessfully", () => {
  let list, input;

  beforeEach(() => {
    list = document.createElement("ul");
    input = document.createElement("input");
    input.value = "  New Task  ";

    document.body.appendChild(list);
    document.body.appendChild(input);
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  test("adds trimmed input as todo item and clears input value", () => {
    expect(list.children.length).toBe(0);
    expect(input.value).toBe("  New Task  ");

    submitTodoTaskSuccessfully(list, input);

    expect(list.children.length).toBe(1);
    const li = list.children[0];

    expect(li).toBeInstanceOf(HTMLLIElement);
    expect(li.textContent).toBe("New Task");
    expect(li.className).toBe("todo__item");

    expect(input.value).toBe("");
  });
});
