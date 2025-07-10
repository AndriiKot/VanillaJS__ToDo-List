import { createTodoItem } from "@features";

describe("createTodoItem", () => {
  test("creates a <li> element with provided text and default class", () => {
    const li = createTodoItem("Buy milk");

    expect(li).toBeInstanceOf(HTMLLIElement);
    expect(li.className).toBe("todo__item");

    const span = li.querySelector("span");
    expect(span).toBeInstanceOf(HTMLSpanElement);
    expect(span.textContent).toBe("\u00d7");
    expect(span.className).toBe("todo__item-remove");
    expect(span.getAttribute("aria-label")).toBe("Delete task");
    expect(span.getAttribute("role")).toBe("button");

    expect(li.firstChild.nodeType).toBe(Node.TEXT_NODE);
    expect(li.firstChild.textContent).toBe("Buy milk");
  });

  test("creates a <li> element with provided text and custom class", () => {
    const li = createTodoItem("Write code", "custom-class");

    expect(li).toBeInstanceOf(HTMLLIElement);
    expect(li.className).toBe("custom-class");

    const span = li.querySelector("span");
    expect(span).toBeInstanceOf(HTMLSpanElement);
    expect(span.textContent).toBe("\u00d7");
    expect(span.className).toBe("todo__item-remove");
    expect(span.getAttribute("aria-label")).toBe("Delete task");
    expect(span.getAttribute("role")).toBe("button");

    expect(li.firstChild.nodeType).toBe(Node.TEXT_NODE);
    expect(li.firstChild.textContent).toBe("Write code");
  });
});
