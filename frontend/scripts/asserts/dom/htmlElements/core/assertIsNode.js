import { isNode } from "@ui";
import { throwTypeErrorWithTypeInfo } from "@asserts";

/**
 * Asserts that the given value is an instance of Node.
 *
 * @param {*} value - The value to be checked.
 * @param {string} argName - Name of the argument for error context (default: "value").
 * @throws {TypeError} If the value is not a valid Node.
 */
export const assertIsNode = (value, argName = "value") => {
  if (isNode(value)) return;

  throwTypeErrorWithTypeInfo(value, argName, "an instance of Node");
};
