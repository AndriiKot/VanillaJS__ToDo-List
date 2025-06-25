import { isString } from "../utils.js";

/**
 * @param {*} value
 * @param {string} argName - for example: "second argument"
 */
export const assertIsString = (value, argName = "value") => {
  if (isString(value)) return;

  let displayedValue;
  try {
    displayedValue = String(value);
  } catch {
    displayedValue = Object.prototype.toString.call(value); // [object Symbol] or [object BigInt] ...
  }

  throw new TypeError(
    `Expected ${argName} to be a string, but received value ${displayedValue} of type ${typeof value}`,
  );
};
