import { throwTypeErrorWithTypeInfo } from '@asserts';

/**
 * @private
 *
 * INTERNAL: Validates that the provided storage is strictly equal to `globalThis.localStorage`.
 *
 * This check ensures that the value passed is not just "like" localStorage,
 * but exactly the built-in `globalThis.localStorage` object. This is a strict identity check.
 *
 * Use this before any runtime checks like `assertCanUseLocalStorage`,
 * to confirm that you're working with the correct global storage reference.
 *
 * Note: This function does **not** check usability (e.g., setItem may still fail at runtime).
 * For that, use `assertCanUseLocalStorage`.
 *
 * @param {*} storage - The value to verify as `globalThis.localStorage`
 * @throws {TypeError} if the value is not `globalThis.localStorage`
 */
export const assertIsLocalStorage = (storage, argName = 'localStorage') => {
  if (storage !== globalThis.localStorage) {
    throwTypeErrorWithTypeInfo(storage, argName, 'globalThis.localStorage');
  }
};
