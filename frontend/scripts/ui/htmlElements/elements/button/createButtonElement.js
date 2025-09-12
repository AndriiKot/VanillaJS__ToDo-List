import { assertValidButtonType } from '@asserts';

/**
 * Creates an HTML `<button>` element with the specified type.
 *
 * The type must be exactly one of the allowed values:
 * `'button'`, `'submit'`, or `'reset'`.
 * If no type is provided, it defaults to `'submit'`.
 *
 * ⚠️ Case-sensitive: `'Button'` or `'SUBMIT'` will throw a `TypeError`.
 *
 * @param {string} [type='submit'] - The button type (`'button'`, `'submit'`, or `'reset'`)
 * @returns {HTMLButtonElement} The created `<button>` element
 * @throws {TypeError} If the provided type is invalid
 *
 * @example
 * const btn1 = createButtonElement();        // <button type="submit">
 * const btn2 = createButtonElement('button'); // <button type="button">
 * const btn3 = createButtonElement('reset');  // <button type="reset">
 * const btn4 = createButtonElement('Button'); // ❌ throws TypeError
 */
export const createButtonElement = (type = 'submit') => {
  assertValidButtonType(type);
  const button = document.createElement('button');
  button.type = type;
  return button;
};
