import { isHTMLTagElement } from '@ui';
import { throwTypeErrorWithTypeInfo } from '@asserts';

/**
 * @param {*} value - The value to be checked
 * @param {string} argName - Name of the argument for error message context, e.g. "first argument"
 */
export const assertIsHTMLTagElement = (value, argName = 'value') => {
  if (isHTMLTagElement(value)) return;

  throwTypeErrorWithTypeInfo(value, argName, 'an instance of HTMLElement');
};
