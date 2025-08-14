import { assertIsLocalStorage } from './assertIsLocalStorage';

describe('assertIsLocalStorage', () => {
  describe('valid inputs (should NOT throw)', () => {
    test('does not throw when passed globalThis.localStorage', () => {
      expect(() => assertIsLocalStorage(globalThis.localStorage)).not.toThrow();
    });

    test('does not throw with custom argName', () => {
      expect(() => assertIsLocalStorage(globalThis.localStorage, 'myStorage')).not.toThrow();
    });
  });

  describe('invalid inputs (should throw TypeError)', () => {
    const invalidValues = [
      null,
      undefined,
      123,
      'localStorage',
      {},
      [],
      () => {},
      {
        getItem: () => {},
        setItem: () => {},
        removeItem: () => {},
        key: () => {},
        length: 0,
      },
    ];

    for (const value of invalidValues) {
      const valueString = JSON.stringify(value, null, 2) || String(value);

      test(`throws for ${valueString}`, () => {
        expect(() => assertIsLocalStorage(value)).toThrow(TypeError);
      });
    }

    test('throws with custom argName', () => {
      const thrown = getThrown(() => assertIsLocalStorage('fakeStorage', 'myStorage'));

      expect(thrown).toBeInstanceOf(TypeError);
      expect(thrown.message).toMatch(/Expected\s+myStorage\s+to be\s+globalThis\.localStorage/i);
    });

    test('error message includes type information', () => {
      const thrown = getThrown(() => assertIsLocalStorage(123, 'store'));

      expect(thrown).toBeInstanceOf(TypeError);
      expect(thrown.message).toMatch(/Expected\s+store\s+to be\s+globalThis\.localStorage/i);
      expect(thrown.message).toMatch(/\[object Number\]/i);
      expect(thrown.message).toMatch(/type Number/i);
    });

    test('fallback to [object Type] when toString fails', () => {
      const fake = {};
      fake.toString = () => {
        throw new Error('fail');
      };

      expect(() => assertIsLocalStorage(fake)).toThrow(/\[object Object\]/);
    });
  });
});

// helper
function getThrown(fn) {
  try {
    fn();
  } catch (e) {
    return e;
  }
  throw new Error('Function did not throw');
}
