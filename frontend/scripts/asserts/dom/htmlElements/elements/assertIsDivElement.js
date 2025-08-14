import { isDivElement } from '@ui';
import { throwTypeErrorWithTypeInfo } from '@asserts';

/**
 * Asserts that the given element is a <div> HTML element.
 *
 * @param {*} el - The element to check
 * @param {string} argName - Optional argument name for error messages (default: "value")
 */
export const assertIsDivElement = (el, argName = 'value') => {
  if (isDivElement(el)) return;

  throwTypeErrorWithTypeInfo(el, argName, 'a DOM element of type <div>');
};
