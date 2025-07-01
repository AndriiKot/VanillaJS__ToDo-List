/**
 * @jest-environment jsdom
 */

import { hasTagName } from "@ui";

describe("hasTagName", () => {
  test("returns true for valid HTML elements with tagName", () => {
    const div = document.createElement("div");
    const input = document.createElement("input");
    const button = document.createElement("button");

    expect(hasTagName(div)).toBe(true);
    expect(hasTagName(input)).toBe(true);
    expect(hasTagName(button)).toBe(true);
  });

  const invalidValues = [
    null,
    undefined,
    123,
    "div",
    {},
    [],
    () => {},
    document.createTextNode("text"),
    document.createComment("comment"),
    document.createDocumentFragment(),
  ];

  test.each(invalidValues)("throws for %p", (value) => {
    expect(() => hasTagName(value)).toThrow(TypeError);
    expect(() => hasTagName(value)).toThrow(
      /Expected first argument to be an instance of HTMLElement/,
    );
  });
});
