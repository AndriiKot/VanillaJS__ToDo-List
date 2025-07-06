import { handleClickAddTodoButton } from "@features";

describe("handleClickAddTodoButton", () => {
  let input, list, message;

  beforeEach(() => {
    input = document.createElement("input");
    list = document.createElement("ul");
    message = document.createElement("div");

    document.body.appendChild(input);
    document.body.appendChild(list);
    document.body.appendChild(message);
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  test("calls handleTodoTaskSubmission when invoked", () => {
    input.value = "  Learn Testing  ";

    const handler = handleClickAddTodoButton(input, list, message);
    handler();

    expect(list.children.length).toBe(1);
    expect(list.children[0].textContent).toBe("Learn Testing");

    expect(input.value).toBe("");

    expect(message.textContent).toBe("");
  });

  test("shows validation message if input is empty", () => {
    input.value = "   ";

    const handler = handleClickAddTodoButton(input, list, message);
    handler();

    expect(list.children.length).toBe(0);
    expect(message.textContent).toBe("Task cannot be empty");
    expect(document.activeElement).toBe(input);
  });
});
