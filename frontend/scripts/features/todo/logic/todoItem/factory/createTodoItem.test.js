import { createTodoItem } from "@features";

describe("createTodoItem", () => {
  test("creates a <li> element with provided text and default class", () => {
    const li = createTodoItem("Buy milk");

    expect(li).toBeInstanceOf(HTMLLIElement);
    expect(li.className).toBe("todo__item");

    const textSpan = li.querySelector(".todo__text");
    expect(textSpan).toBeInstanceOf(HTMLSpanElement);
    expect(textSpan.textContent).toBe("Buy milk");

    const removeSpan = li.querySelector(".todo__remove");
    expect(removeSpan).toBeInstanceOf(HTMLSpanElement);
    expect(removeSpan.textContent).toBe("\u00d7");
    expect(removeSpan.className).toBe("todo__remove");
    expect(removeSpan.getAttribute("aria-label")).toBe("Delete task");
    expect(removeSpan.getAttribute("role")).toBe("button");
  });

  test("creates a <li> element with provided text and custom class", () => {
    const li = createTodoItem("Write code", "custom-class");

    expect(li).toBeInstanceOf(HTMLLIElement);
    expect(li.className).toBe("custom-class");

    const textSpan = li.querySelector(".todo__text");
    expect(textSpan).toBeInstanceOf(HTMLSpanElement);
    expect(textSpan.textContent).toBe("Write code");

    const removeSpan = li.querySelector(".todo__remove");
    expect(removeSpan).toBeInstanceOf(HTMLSpanElement);
    expect(removeSpan.textContent).toBe("\u00d7");
    expect(removeSpan.className).toBe("todo__remove");
    expect(removeSpan.getAttribute("aria-label")).toBe("Delete task");
    expect(removeSpan.getAttribute("role")).toBe("button");
  });
});
