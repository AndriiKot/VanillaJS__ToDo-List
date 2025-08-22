import { getEventTarget } from '@ui';

/**
 * Returns the element that triggered the given event.
 *
 * If the element is a text node, traverse up the DOM tree to the
 * first non-text node.
 *
 * @param {Event} event
 * @returns {Element}
 */
export const getElementTarget = (event) => {
  let targetElement = getEventTarget(event);
  if (targetElement.nodeType === Node.TEXT_NODE) {
    targetElement = targetElement.parentElement;
  }
  return targetElement;
};
