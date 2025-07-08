import { isElement } from "@ui";
import { throwTypeErrorWithTypeInfo } from "@asserts";

/**
 * Checks whether the provided value is an instance of Element.
 *
 * @param {*} value - The value to validate.
 * @param {string} argName - The argument name for error context (default: "value").
 * @throws {TypeError} If the value is not an Element.
 */
export const assertIsElement = (value, argName = "value") => {
  if (isElement(value)) return;

  throwTypeErrorWithTypeInfo(value, argName, "an instance of Element");
};
