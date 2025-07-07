import { createSpanElement } from "@ui";

describe("createSpanElement", () => {
  test("should create a <span> HTML element", () => {
    const el = createSpanElement();
    expect(el).toBeInstanceOf(HTMLSpanElement);
  });

  test("created element should have tagName 'SPAN'", () => {
    const el = createSpanElement();
    expect(el.tagName).toBe("SPAN");
  });

  test("each call creates a new element", () => {
    const el1 = createSpanElement();
    const el2 = createSpanElement();
    expect(el1).not.toBe(el2);
  });

  test("created element should be attached to the document only if explicitly appended", () => {
    const el = createSpanElement();
    expect(document.body.contains(el)).toBe(false);

    document.body.appendChild(el);
    expect(document.body.contains(el)).toBe(true);

    el.remove();
    expect(document.body.contains(el)).toBe(false);
  });
});
