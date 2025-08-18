import { assertIsCSSClassName } from '@asserts';

export const classNameToSelector = (className) => {
  assertIsCSSClassName(className);
  const selector = `.${className}`;
  return selector;
};
