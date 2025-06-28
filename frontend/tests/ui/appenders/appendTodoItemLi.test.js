import { appendListItemLi } from "@ui";

describe("appendListItemLi", () => {
  test("appends item to list when valid arguments are passed", () => {
    const list = document.createElement("ul");
    const item = document.createElement("li");

    appendListItemLi(list, item);

    expect(list.contains(item)).toBe(true);
  });

  test("throws if first argument is not a <ul> element", () => {
    const invalidList = document.createElement("div"); // not UL
    const item = document.createElement("li");

    expect(() => appendListItemLi(invalidList, item)).toThrow(
      /<ul> HTMLElement/,
    );
  });

  test("throws if second argument is not a <li> element", () => {
    const list = document.createElement("ul");
    const invalidItem = document.createElement("div"); // not LI

    expect(() => appendListItemLi(list, invalidItem)).toThrow(
      /<li> HTMLElement/,
    );
  });
});
