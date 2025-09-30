import { assertIsBoolean } from './assertIsBoolean';

describe('assertIsBoolean', () => {
  test('does not throw for true', () => {
    expect(() => assertIsBoolean(true)).not.toThrow();
  });

  test('does not throw for false', () => {
    expect(() => assertIsBoolean(false)).not.toThrow();
  });

  test('throws TypeError for non-boolean values', () => {
    const invalidValues = [0, 1, '', 'true', null, undefined, [], {}, () => {}];

    invalidValues.forEach((value) => {
      expect(() => assertIsBoolean(value, 'checked')).toThrow(TypeError);
    });
  });

  test('error message contains argument name and type info', () => {
    try {
      assertIsBoolean('notBoolean', 'checked');
    } catch (error) {
      expect(error).toBeInstanceOf(TypeError);
      expect(error.message).toContain('checked');
      expect(error.message).toContain('a boolean');
      expect(error.message).toContain('String');
    }
  });
});
