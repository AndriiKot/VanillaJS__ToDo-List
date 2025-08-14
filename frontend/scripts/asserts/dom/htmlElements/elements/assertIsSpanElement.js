import { isSpanElement } from '@ui';
import { throwTypeErrorWithTypeInfo } from '@asserts';

/**
 * Asserts that the given element is a <ul> HTML element.
 *
 * @param {*} el - The element to check
 * @param {string} argName - Optional argument name for error messages (default: "value")
 */
export const assertIsSpanElement = (el, argName = 'value') => {
  if (isSpanElement(el)) return;

  throwTypeErrorWithTypeInfo(el, argName, 'a DOM element of type <span>');
};
