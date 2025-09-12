import { assertValidButtonType } from './assertValidButtonType';
import { VALID_BUTTON_TYPES } from '@ui';

describe('assertValidButtonType', () => {
  it('does not throw for valid button types (case-sensitive)', () => {
    VALID_BUTTON_TYPES.forEach((type) => {
      expect(() => assertValidButtonType(type)).not.toThrow();
    });
  });

  it('throws TypeError for valid values with wrong case', () => {
    const wrongCaseValues = ['Button', 'Submit', 'RESET', 'bUtTon'];
    wrongCaseValues.forEach((type) => {
      expect(() => assertValidButtonType(type)).toThrow(TypeError);
    });
  });

  it('throws TypeError for completely invalid string values', () => {
    const invalidStrings = ['foo', '', 'submit-button', 'btn'];
    invalidStrings.forEach((type) => {
      expect(() => assertValidButtonType(type)).toThrow(TypeError);
    });
  });

  it('throws TypeError for non-string values', () => {
    const nonStrings = [null, undefined, 123, {}, [], true, false];
    nonStrings.forEach((value) => {
      expect(() => assertValidButtonType(value)).toThrow(TypeError);
    });
  });
});
