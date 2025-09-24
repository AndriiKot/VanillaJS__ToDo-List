import { assertIsDefined, assertIsFunction } from '@asserts';

/**
 * Generates a UUID (Universally Unique Identifier) using the Web Crypto API.
 *
 * @returns {string} - A RFC 4122 compliant UUID v4 string.
 *
 * @throws {TypeError} If the environment does not support crypto.randomUUID.
 */
export function generateUUID() {
  assertIsDefined(crypto, 'Wep API crypto');
  assertIsFunction(crypto.randomUUID, 'crypto.randomUUID');

  return crypto.randomUUID();
}
