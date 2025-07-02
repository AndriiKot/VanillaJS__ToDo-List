import { isListItemLiElement } from "@ui";
import { throwTypeErrorWithTypeInfo } from "@asserts";

/**
 * Asserts that the given element is an <li> HTML element.
 *
 * @param {*} el - The element to check
 * @param {string} argName - Optional argument name for error messages (default: "value")
 */
export const assertIsListItemLiElement = (el, argName = "value") => {
  if (isListItemLiElement(el)) return;

  throwTypeErrorWithTypeInfo(el, argName, "a DOM element of type <li>");
};
