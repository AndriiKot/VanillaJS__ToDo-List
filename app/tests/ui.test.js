/**
 * @jest-environment jsdom
 */

import { jest } from "@jest/globals";
import { showError, focusInput, getTrimmedValue } from "../scripts/ui.js";

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

  test("showError sets the error message", () => {
    showError(errorElement, "Some error");
    expect(errorElement.textContent).toBe("Some error");
  });

  test("focusInput calls focus on input element", () => {
    const focusSpy = jest.spyOn(input, "focus");
    focusInput(input);
    expect(focusSpy).toHaveBeenCalled();
  });

  test("getTrimmedValue returns trimmed input value", () => {
    const result = getTrimmedValue(input);
    expect(result).toBe("test task");
  });
});
