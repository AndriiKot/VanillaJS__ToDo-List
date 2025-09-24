import { createInputElement } from './createInputElement';
import { VALID_INPUT_TYPES } from '@ui';

describe('createInputElement', () => {
  describe('valid input types', () => {
    test.each(VALID_INPUT_TYPES)('creates <input type="%s">', (type) => {
      const input = createInputElement(type);
      expect(input).toBeInstanceOf(HTMLInputElement);
      expect(input.type).toBe(type);
    });

    test('defaults to type="text" when no argument is provided', () => {
      const input = createInputElement();
      expect(input).toBeInstanceOf(HTMLInputElement);
      expect(input.type).toBe('text');
    });
  });

  describe('invalid input types', () => {
    const invalidValues = ['Button', 'submit-button', '', 'foo', 123, null, {}, []];

    test.each(invalidValues)('throws TypeError for invalid input type %p', (value) => {
      expect(() => createInputElement(value)).toThrow(TypeError);
      expect(() => createInputElement(value)).toThrow(/Invalid <input> type/i);
    });
  });
});
