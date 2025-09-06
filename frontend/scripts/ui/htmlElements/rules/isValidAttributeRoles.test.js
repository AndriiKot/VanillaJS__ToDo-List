import { isValidAttributeRoles } from './isValidAttributeRoles';
import { ROLES_ATTRIBUTES } from './ROLES_ATTRIBUTES';

describe('isValidAttributeRoles', () => {
  test('returns true for valid roles', () => {
    for (const role of ROLES_ATTRIBUTES) {
      expect(isValidAttributeRoles(role)).toBe(true);
    }
  });

  test('returns false for invalid strings', () => {
    const invalidRoles = ['banana', '', '123', 'my-custom-role'];
    for (const role of invalidRoles) {
      expect(isValidAttributeRoles(role)).toBe(false);
    }
  });

  test('throws TypeError for non-string values', () => {
    const nonStrings = [
      42,
      0,
      -1,
      3.14,
      NaN,
      Infinity,
      true,
      false,
      null,
      undefined,
      {},
      { key: 'value' },
      [],
      [1, 2, 3],
      () => {},
      function () {},
      Symbol('sym'),
      BigInt(10),
      new Map(),
      new Set(),
      new WeakMap(),
      new WeakSet(),
      new Date(),
      /regex/,
      Promise.resolve(),
      new ArrayBuffer(8),
      new DataView(new ArrayBuffer(8)),
      new Uint8Array(4),
    ];

    for (const value of nonStrings) {
      expect(() => isValidAttributeRoles(value)).toThrow(TypeError);
    }
  });
});
