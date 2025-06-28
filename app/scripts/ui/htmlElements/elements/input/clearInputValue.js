import { assertIsInputElement } from "@asserts";

export const clearInputValue = (input) => {
  assertIsInputElement(input);
  input.value = "";
};
