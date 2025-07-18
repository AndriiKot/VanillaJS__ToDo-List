import { warnIfKeyMissing } from "./warnIfKeyMissing.js";
import { jest } from "@jest/globals";

describe("warnIfKeyMissing – logs warning only for null/undefined", () => {
  let consoleWarnSpy;

  beforeEach(() => {
    consoleWarnSpy = jest.spyOn(console, "warn").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleWarnSpy.mockRestore();
  });

  test('uses default contextName "storage" if not provided', () => {
    warnIfKeyMissing("missingKey", null);
    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'storage: key "missingKey" not found or value is missing.',
    );
  });
  test.each([
    [null, true],
    [undefined, true],
    ["", false],
    ["string", false],
    [0, false],
    [-1, false],
    [NaN, false],
    [Infinity, false],
    [true, false],
    [false, false],
    [{}, false],
    [[], false],
    [() => {}, false],
    [function foo() {}, false],
    [Symbol("x"), false],
    [BigInt(10), false],
    [new Date(), false],
    [new Error("error"), false],
    [new Map(), false],
    [new Set(), false],
    [new WeakMap(), false],
    [new WeakSet(), false],
    [Promise.resolve(), false],
    [Promise.reject().catch(() => {}), false],
    [Object.create(null), false],
  ])("value: %p → shouldWarn: %s", (value, shouldWarn) => {
    warnIfKeyMissing("key", value, "context");
    if (shouldWarn) {
      expect(consoleWarnSpy).toHaveBeenCalledWith(
        'context: key "key" not found or value is missing.',
      );
    } else {
      expect(consoleWarnSpy).not.toHaveBeenCalled();
    }
  });
});
