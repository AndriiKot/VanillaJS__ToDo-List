import { getObjectTypeString, getType, formatValuePreview } from '@utils';

/**
 * Universal function to throw a TypeError with detailed type information.
 *
 * @param {*} value - the value to check
 * @param {string} argName - the name of the argument for error message context
 * @param {string} expectedDescription - description of the expected type or condition
 */
export const throwTypeErrorWithTypeInfo = (value, argName, expectedDescription) => {
  const objectTypeString = getObjectTypeString(value);
  const type = getType(value);
  const preview = formatValuePreview(value);

  throw new TypeError(
    `Expected ${argName} to be ${expectedDescription}, but received ${objectTypeString} of type ${type} with value ${preview}`,
  );
};
