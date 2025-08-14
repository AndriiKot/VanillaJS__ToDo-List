import { isButtonElement } from '@ui';
import { throwTypeErrorWithTypeInfo } from '@asserts';

/**
 * Asserts that the given element is a <button> HTML element.
 *
 * @param {*} el - The element to check
 * @param {string} argName - Optional argument name for error messages (default: "value")
 */
export const assertIsButtonElement = (el, argName = 'value') => {
  if (isButtonElement(el)) return;

  throwTypeErrorWithTypeInfo(el, argName, 'a DOM element of type <button>');
};
