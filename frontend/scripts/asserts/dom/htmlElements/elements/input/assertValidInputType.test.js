import { assertValidInputType } from './assertValidInputType';
import { VALID_INPUT_TYPES } from '@ui';

describe('assertValidInputType', () => {
  it('does not throw for valid input types (case-sensitive)', () => {
    VALID_INPUT_TYPES.forEach((type) => {
      expect(() => assertValidInputType(type)).not.toThrow();
    });
  });

  it('throws TypeError for valid types with wrong case', () => {
    const wrongCaseValues = ['Text', 'Email', 'SUBMIT', 'CheckBox', 'Range'];
    wrongCaseValues.forEach((type) => {
      expect(() => assertValidInputType(type)).toThrow(TypeError);
    });
  });

  it('throws TypeError for completely invalid string values', () => {
    const invalidStrings = ['foo', '', 'input-type', 'btn', 'xyz'];
    invalidStrings.forEach((type) => {
      expect(() => assertValidInputType(type)).toThrow(TypeError);
    });
  });

  it('throws TypeError for non-string values', () => {
    const nonStrings = [null, undefined, 123, {}, [], true, false];
    nonStrings.forEach((value) => {
      expect(() => assertValidInputType(value)).toThrow(TypeError);
    });
  });
});
