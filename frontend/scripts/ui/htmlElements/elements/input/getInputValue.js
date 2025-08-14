import { assertIsInputElement } from '@asserts';

export const getInputValue = (input) => {
  assertIsInputElement(input);
  return input.value;
};
