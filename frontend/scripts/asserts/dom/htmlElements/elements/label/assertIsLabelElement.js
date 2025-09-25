import { isLabelElement } from '@ui';
import { throwTypeErrorWithTypeInfo } from '@asserts';

/**
 * Asserts that the given element is an HTML <label> element.
 *
 * @param {*} el - The element to check
 * @param {string} [argName='value'] - Optional argument name for error messages
 * @throws {TypeError} If the element is not a <label>
 */
export const assertIsLabelElement = (el, argName = 'value') => {
  if (isLabelElement(el)) return;

  throwTypeErrorWithTypeInfo(el, argName, 'a DOM element of type <label>');
};

