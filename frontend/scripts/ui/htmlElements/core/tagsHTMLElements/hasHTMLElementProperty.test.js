import { hasHTMLElementProperty } from '@ui';

describe('hasHTMLElementProperty', () => {
  test('returns true if HTMLElement has the property', () => {
    const div = document.createElement('div');
    expect(hasHTMLElementProperty(div, 'className')).toBe(true);
  });

  test('returns false if HTMLElement does not have the property', () => {
    const div = document.createElement('div');
    expect(hasHTMLElementProperty(div, 'nonExistentProp')).toBe(false);
  });

  test('throws TypeError if first argument is not an HTMLElement', () => {
    expect(() => hasHTMLElementProperty(null, 'className')).toThrow(TypeError);
    expect(() => hasHTMLElementProperty({}, 'className')).toThrow(TypeError);
    expect(() => hasHTMLElementProperty('string', 'className')).toThrow(TypeError);
  });

  test('throws TypeError if second argument is not a string', () => {
    const div = document.createElement('div');
    expect(() => hasHTMLElementProperty(div, null)).toThrow(TypeError);
    expect(() => hasHTMLElementProperty(div, 123)).toThrow(TypeError);
    expect(() => hasHTMLElementProperty(div, {})).toThrow(TypeError);
  });
});
