import { classNameToSelector } from '@ui';

/**
 * Queries the document for the first element with the specified class name.
 *
 * @param {string} className - The class name to search for.
 * @return {HTMLElement|null} - The first matching element in the document, or null.
 */

export const queryClassNameInDocument = (className) => {
  const selector = classNameToSelector(className);
  return document.querySelector(selector) || null;
};
