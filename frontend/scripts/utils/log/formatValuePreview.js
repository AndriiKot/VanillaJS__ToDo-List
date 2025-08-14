/**
 * Formats a value to a short preview string for error messages and logs.
 * - Handles JSON serialization safely
 * - Limits output length to avoid huge dumps
 * - Marks truncated output with an ellipsis
 *
 * @param {*} value - any JS value
 * @param {number} maxLength - maximum length of the preview
 * @returns {string} - formatted preview
 */

export const formatValuePreview = (value, maxLength = 80) => {
  try {
    const str = JSON.stringify(value);
    if (str === undefined) {
      return String(value);
    }
    return str.length > maxLength ? str.slice(0, maxLength) + "…" : str;
  } catch {
    return String(value);
  }
};
