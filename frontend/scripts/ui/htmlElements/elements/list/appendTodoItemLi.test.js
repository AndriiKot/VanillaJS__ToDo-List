import { appendListItemLi } from "@ui";
import { createExpectedTypeMessage } from "@asserts";

describe("appendListItemLi", () => {
  test("throws if first argument is not a <ul> element", () => {
    const invalidList = document.createElement("div"); // not UL
    const item = document.createElement("li");

    expect(() => appendListItemLi(invalidList, item)).toThrow(
      createExpectedTypeMessage("first argument", "a DOM element of type <ul>"),
    );
  });

  test("throws if second argument is not a <li> element", () => {
    const list = document.createElement("ul");
    const invalidItem = document.createElement("div"); // not LI

    expect(() => appendListItemLi(list, invalidItem)).toThrow(
      createExpectedTypeMessage(
        "second argument",
        "a DOM element of type <li>",
      ),
    );
  });

  test("appends <li> to <ul> correctly", () => {
    const list = document.createElement("ul");
    const item = document.createElement("li");
    item.textContent = "Item";

    appendListItemLi(list, item);

    expect(list.children.length).toBe(1);
    expect(list.children[0]).toBe(item);
  });
});
