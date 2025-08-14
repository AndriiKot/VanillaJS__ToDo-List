import { assertIsValidSelectorClassName } from '@asserts';

export const makeSelectorClassName = (selector) => {
  assertIsValidSelectorClassName(selector);
  return selector;
};
