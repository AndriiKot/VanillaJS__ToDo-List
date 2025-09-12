/**
 * @jest-environment jsdom
 */
import { createButtonElement } from './createButtonElement';
import { VALID_BUTTON_TYPES } from '@ui';

describe('createButtonElement', () => {
  it('creates a <button> with default type="submit"', () => {
    const btn = createButtonElement();
    expect(btn).toBeInstanceOf(HTMLButtonElement);
    expect(btn.type).toBe('submit');
  });

  it.each(VALID_BUTTON_TYPES)('creates a <button> with type="%s"', (validType) => {
    const btn = createButtonElement(validType);
    expect(btn).toBeInstanceOf(HTMLButtonElement);
    expect(btn.type).toBe(validType);
  });

  it.each(['Button', 'SUBMIT', 'click', '', null])(
    'throws TypeError for invalid type: %s',
    (invalidType) => {
      // @ts-expect-error — deliberately passing invalid values
      expect(() => createButtonElement(invalidType)).toThrow(TypeError);
    },
  );
});
