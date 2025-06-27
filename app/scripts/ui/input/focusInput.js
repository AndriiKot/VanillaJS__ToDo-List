import { assertIsInputElement } from "@asserts";

export const focusInput = (input) => {
  assertIsInputElement(input);
  input.focus();
};
