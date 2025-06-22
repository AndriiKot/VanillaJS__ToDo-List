/**
 * @jest-environment jsdom
 */

import {
  showNotValidMessage,
  getTrimmedValue,
  hiddenNotValidMessage,
} from "../scripts/ui.js";

describe("UI helpers", () => {
  let input, errorElement;

  beforeEach(() => {
    document.body.innerHTML = `
      <input class="todo__input" value="  test task  " />
      <p class="todo__error"></p>
    `;

    input = document.querySelector(".todo__input");
    errorElement = document.querySelector(".todo__error");
  });

  test("showNotValidMessage sets the error message", () => {
    showNotValidMessage(errorElement, "Some error");
    expect(errorElement.textContent).toBe("Some error");
  });

  test("hiddenNotValidMessage hidden the error message", () => {
    hiddenNotValidMessage(errorElement);
    expect(errorElement.textContent).toBe("");
  });

  test("getTrimmedValue returns trimmed input value", () => {
    const result = getTrimmedValue(input);
    expect(result).toBe("test task");
  });
});
