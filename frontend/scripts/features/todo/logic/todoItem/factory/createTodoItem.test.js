import { createTodoItem } from "@features";

describe("createTodoItem", () => {
  test("creates a <li> element with provided text and default class", () => {
    const li = createTodoItem("Buy milk");

    expect(li).toBeInstanceOf(HTMLLIElement);
    expect(li.textContent).toBe("Buy milk");
    expect(li.className).toBe("todo__item");
  });

  test("creates a <li> element with provided text and custom class", () => {
    const li = createTodoItem("Write code", "custom-class");

    expect(li).toBeInstanceOf(HTMLLIElement);
    expect(li.textContent).toBe("Write code");
    expect(li.className).toBe("custom-class");
  });
});
