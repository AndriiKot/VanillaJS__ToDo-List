import { assertIsHTMLClassName } from '@asserts';

export const classNameToSelector = (className) => {
  assertIsHTMLClassName(className);
  const selector = `.${className}`;
  return selector;
};
