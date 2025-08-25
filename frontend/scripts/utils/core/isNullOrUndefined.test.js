import { isNullOrUndefined } from './isNullOrUndefined.js';

describe('isNullOrUndefined', () => {
  test.each([
    [null, true],
    [undefined, true],
  ])('returns %s → %s', (value, expected) => {
    expect(isNullOrUndefined(value)).toBe(expected);
  });

  test.each([
    // Numbers
    [0, false],
    [1, false],
    [-1, false],
    [42, false],
    [NaN, false],
    [Infinity, false],
    [-Infinity, false],

    // Strings
    ['', false],
    ['test', false],
    ['null', false],
    ['undefined', false],

    // Booleans
    [true, false],
    [false, false],

    // Symbols
    [Symbol(), false],
    [Symbol('sym'), false],

    // BigInts
    [BigInt(0), false],
    [BigInt(123), false],

    // Objects & Arrays
    [{}, false],
    [{ a: 1 }, false],
    [[], false],
    [[1, 2, 3], false],

    // Functions
    [() => {}, false],
    [function namedFn() {}, false],

    // Built-in Objects
    [new Date(), false],
    [/regex/, false],
    [new Map(), false],
    [new Set(), false],
    [new WeakMap(), false],
    [new WeakSet(), false],
    [new Error('oops'), false],

    // Node-specific
    [Buffer.from('test'), false],

    // Promises
    [Promise.resolve(), false],
    [Promise.reject().catch(() => {}), false],
    [new Promise(() => {}), false],
  ])('returns false for %s', (value, expected) => {
    expect(isNullOrUndefined(value)).toBe(expected);
  });
});
