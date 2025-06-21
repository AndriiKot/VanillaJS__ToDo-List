/**
 * @jest-environment jsdom
 */

import { showValidMessage, getTrimmedValue } from "../scripts/ui.js";

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

  test("showValidMessage sets the error message", () => {
    showValidMessage(errorElement, "Some error");
    expect(errorElement.textContent).toBe("Some error");
  });

  test("getTrimmedValue returns trimmed input value", () => {
    const result = getTrimmedValue(input);
    expect(result).toBe("test task");
  });
});
