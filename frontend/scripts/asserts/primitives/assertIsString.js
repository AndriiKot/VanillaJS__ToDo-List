import { isString } from "@utils";
import { throwTypeErrorWithTypeInfo } from "@asserts";

/**
 * @param {*} value
 * @param {string} argName - for example: "second argument"
 */
export const assertIsString = (value, argName = "value") => {
  if (isString(value)) return;

  throwTypeErrorWithTypeInfo(value, argName, "string");
};
