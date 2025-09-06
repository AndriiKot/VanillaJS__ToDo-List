import { assertRole } from './assertRole';

describe('assertRole', () => {
  test('does not throw for valid roles', () => {
    const validRoles = ['button', 'link', 'checkbox', 'navigation', 'main'];
    for (const role of validRoles) {
      expect(() => assertRole(role)).not.toThrow();
    }
  });

  test('throws Error for invalid strings', () => {
    const invalidRoles = ['banana', '', '123', 'my-custom-role'];
    for (const role of invalidRoles) {
      expect(() => assertRole(role)).toThrow(Error);
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
      expect(() => assertRole(value)).toThrow(TypeError);
    }
  });
});
