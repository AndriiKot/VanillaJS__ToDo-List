import { assertIsInputElement } from "@asserts";

export const resetInput = (input) => {
  assertIsInputElement(input);
  input.value = "";
  input.focus();
};
