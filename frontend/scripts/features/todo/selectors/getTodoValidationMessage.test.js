/**
 * @jest-environment jsdom
 */

import { getTodoValidationMessage } from "@features";

const TODO_ERROR_CLASS = "todo__error";

describe("getTodoValidationMessage", () => {
  beforeEach(() => {
    document.body.innerHTML = `<p class="${TODO_ERROR_CLASS}" aria-live="polite"></p>`;
  });

  test(`should return the <p> element with class .${TODO_ERROR_CLASS}`, () => {
    const element = getTodoValidationMessage();

    expect(element).not.toBeNull();
    expect(element.tagName).toBe("P");
    expect(element.classList.contains(TODO_ERROR_CLASS)).toBe(true);
    expect(element.getAttribute("aria-live")).toBe("polite");
  });
});
