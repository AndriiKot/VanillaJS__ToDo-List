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

  test("adds trimmed input as a todo item and clears the input value", () => {
    expect(list.children.length).toBe(0);
    expect(input.value).toBe("  New Task  ");

    submitTodoTaskSuccessfully(list, input);

    expect(list.children.length).toBe(1);

    const li = list.children[0];
    const [textNode, span] = li.childNodes;

    // Check the <li> element
    expect(li).toBeInstanceOf(HTMLLIElement);
    expect(li.className).toBe("todo__item");

    // Check the task text
    expect(textNode.textContent).toBe("New Task");

    // Check the delete <span> element
    expect(span).toBeInstanceOf(HTMLElement);
    expect(span.textContent).toBe("×");
    expect(span.getAttribute("aria-label")).toBe("Delete task");
    expect(span.getAttribute("role")).toBe("button");

    // Check that the input value was cleared
    expect(input.value).toBe("");
  });
});
