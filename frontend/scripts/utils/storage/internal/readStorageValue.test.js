import { readStorageValue } from "./readStorageValue.js";

const valueSamples = [
  undefined,
  null,
  true,
  false,
  0,
  -0,
  42,
  NaN,
  Infinity,
  -Infinity,
  "",
  "string",
  Symbol("sym"),
  BigInt(123),
  [],
  [1, 2],
  {},
  { a: 1 },
  function () {},
  () => {},
  new Date(),
  new Map(),
  new Set(),
  new WeakMap(),
  new WeakSet(),
  new Error("test"),
  new RegExp("abc"),
  Promise.resolve("resolved"),
  new Promise(() => {}),
];

const keySamples = [
  undefined,
  null,
  true,
  false,
  0,
  -0,
  42,
  NaN,
  Infinity,
  -Infinity,
  "",
  "string",
  Symbol("sym"),
  BigInt(123),
  [],
  [1, 2],
  {},
  { a: 1 },
  function () {},
  () => {},
  new Date(),
  new Map(),
  new Set(),
  new WeakMap(),
  new WeakSet(),
  new Error("test"),
  new RegExp("abc"),
  Promise.resolve("key"),
];

describe("readStorageValue - all key/value combinations", () => {
  keySamples.forEach((key, keyIndex) => {
    let stringKey;
    try {
      stringKey = String(key);
    } catch {
      return;
    }

    valueSamples.forEach((value, valueIndex) => {
      it(`returns correct value for key[${keyIndex}]: (${typeof key}) ${stringKey} and value[${valueIndex}]: (${typeof value})`, () => {
        const storage = { [stringKey]: value };
        expect(readStorageValue(storage, stringKey)).toBe(value);
      });
    });
  });
});
