import { isInputElement } from '@ui';
import { throwTypeErrorWithTypeInfo } from '@asserts';

/**
 * Asserts that the given element is an <input> HTML element.
 *
 * @param {*} el - The element to check
 * @param {string} argName - Optional argument name for error messages (default: "value")
 */
export const assertIsInputElement = (el, argName = 'value') => {
  if (isInputElement(el)) return;

  throwTypeErrorWithTypeInfo(el, argName, 'a DOM element of type <input>');
};
