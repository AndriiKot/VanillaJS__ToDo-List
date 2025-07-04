import { createExpectedTypeMessage } from "@asserts";

/**
 * Asserts that a function throws a TypeError with a message matching
 * the expected argument name and expected type description.
 *
 * @param {Function} fn - The function expected to throw the error
 * @param {string} argName - The name of the argument (e.g., "value")
 * @param {string} expectedDescription - The expected type or condition (e.g., "string")
 */

export const expectTypeErrorMessage = (fn, argName, expectedDescription) => {
  let thrown;

  try {
    fn();
  } catch (e) {
    thrown = e;
  }

  if (!thrown) {
    throw new Error("Expected the function to throw, but it did not.");
  }

  if (!(thrown instanceof TypeError)) {
    throw new Error(
      `Expected the function to throw a TypeError, but got: ${thrown.constructor.name}`,
    );
  }

  const expectedPattern = createExpectedTypeMessage(
    argName,
    expectedDescription,
  );

  if (!expectedPattern.test(thrown.message)) {
    throw new Error(
      `Expected error message to match:\n  ${expectedPattern}\nbut received:\n  ${thrown.message}`,
    );
  }
};
