import { isString, getObjectTypeString, getType } from "@utils";

/**
 * @param {*} value
 * @param {string} argName - for example: "second argument"
 */
export const assertIsString = (value, argName = "value") => {
  if (isString(value)) return;

  const objectTypeString = getObjectTypeString(value);
  const type = getType(value);

  throw new TypeError(
    `Expected ${argName} to be a string, but received value ${objectTypeString} of type ${type}`,
  );
};
