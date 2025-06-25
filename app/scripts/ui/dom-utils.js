import { assertIsInputElement } from "../asserts/";

export const clearInput = (input) => {
  assertIsInputElement(input);
  input.value = "";
};

export const inputFocus = (input) => {
  assertIsInputElement(input);
  input.focus();
};
