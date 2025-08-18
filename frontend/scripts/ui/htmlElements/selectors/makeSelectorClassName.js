import { assertIsCSSClassName } from '@asserts';

export const makeSelectorClassName = (className) => {
  assertIsCSSClassName(className);
  const selector = `.${className}`;
  return selector;
};
