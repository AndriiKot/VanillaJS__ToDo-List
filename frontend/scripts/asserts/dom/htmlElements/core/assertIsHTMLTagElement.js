import { isHTMLTagElement } from "@ui";
import { getType, getObjectTypeString } from "@utils";

/**
 * @param {*} value - The value to be checked
 * @param {string} argName - Name of the argument for error message context, e.g. "first argument"
 */

export const assertIsHTMLTagElement = (value, argName = "value") => {
  if (isHTMLTagElement(value)) return;

  const objectTypeString = getObjectTypeString(value);
  const type = getType(value);

  throw new TypeError(
    `Expected ${argName} to be an instance of HTMLElement, but received value ${objectTypeString} of type ${type}`,
  );
};
