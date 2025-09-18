import { createFormElement } from '@ui';
import { VALID_METHODS_ATTRIBUTE } from '@ui';

describe('createFormElement', () => {
  it('creates a form element with default values', () => {
    const form = createFormElement();
    expect(form).toBeInstanceOf(HTMLFormElement);
    expect(form.method).toBe('get');
    expect(form.getAttribute('action')).toBe('');
  });

  it.each(VALID_METHODS_ATTRIBUTE)('creates a form element with method="%s"', (validMethod) => {
    const form = createFormElement(validMethod, '/test');
    expect(form.method).toBe(validMethod);
    expect(form.getAttribute('action')).toBe('/test');
  });

  it('throws TypeError for invalid method (wrong case)', () => {
    expect(() => createFormElement('GET')).toThrow(TypeError);
    expect(() => createFormElement('Post')).toThrow(TypeError);
  });

  it('throws TypeError for completely invalid method', () => {
    expect(() => createFormElement('delete')).toThrow(TypeError);
    expect(() => createFormElement(123)).toThrow(TypeError);
    expect(() => createFormElement(null)).toThrow(TypeError);
  });
});
