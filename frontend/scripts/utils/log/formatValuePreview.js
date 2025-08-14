/**
 * Formats any JS value to a short, safe preview string for logs and errors.
 * - Uses JSON.stringify for objects/arrays if possible
 * - Falls back to String(value) if JSON.stringify returns undefined
 * - Limits output length to avoid flooding logs
 *
 * @param {*} value - any JS value
 * @param {number} maxLength - maximum preview length
 * @returns {string} preview string
 */
export const formatValuePreview = (value, maxLength = 80) => {
  let str;

  if (typeof value === 'bigint') {
    str = value.toString() + 'n';
  } else if (
    value instanceof WeakMap ||
    value instanceof WeakSet ||
    value instanceof Map ||
    value instanceof Set ||
    value instanceof Promise
  ) {
    str = String(value);
  } else {
    try {
      str = JSON.stringify(value);
    } catch {
      str = String(value);
    }
  }

  if (str === undefined) {
    str = String(value);
  }

  return str.length > maxLength ? str.slice(0, maxLength) + '…' : str;
};
