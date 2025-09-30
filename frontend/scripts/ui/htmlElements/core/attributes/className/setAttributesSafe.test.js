// setAttributesSafe.test.js
import { setAttributesSafe } from './setAttributesSafe.js';
import { BOOLEAN_ATTRIBUTES, STRING_ATTRIBUTES, NUMERIC_ATTRIBUTES } from '@ui';

describe('setAttributesSafe', () => {
  let el;

  beforeEach(() => {
    el = document.createElement('input'); // реальный DOM элемент
  });

  test('sets multiple string attributes correctly', () => {
    const attrs = { id: 'my-input', name: 'username', placeholder: 'Enter name' };
    setAttributesSafe(el, attrs);

    expect(el.id).toBe('my-input');
    expect(el.name).toBe('username');
    expect(el.placeholder).toBe('Enter name');

    expect(el.getAttribute('id')).toBe('my-input');
    expect(el.getAttribute('name')).toBe('username');
    expect(el.getAttribute('placeholder')).toBe('Enter name');
  });

  test('sets multiple boolean attributes correctly', () => {
    const attrs = { checked: true, disabled: true };
    setAttributesSafe(el, attrs);

    expect(el.checked).toBe(true);
    expect(el.disabled).toBe(true);

    expect(el.getAttribute('checked')).toBe('checked');
    expect(el.getAttribute('disabled')).toBe('disabled');
  });

  test('sets numeric attributes correctly', () => {
    const attrs = { maxlength: 10, tabindex: 3 };
    setAttributesSafe(el, attrs);

    expect(el.maxLength).toBe(10);
    expect(el.tabIndex).toBe(3);

    expect(el.getAttribute('maxlength')).toBe('10');
    expect(el.getAttribute('tabindex')).toBe('3');
  });

  test('sets mixed type attributes', () => {
    const attrs = {
      id: 'input1',
      checked: true,
      maxlength: 5,
      placeholder: 'Test',
      disabled: false
    };
    setAttributesSafe(el, attrs);

    expect(el.id).toBe('input1');
    expect(el.checked).toBe(true);
    expect(el.maxLength).toBe(5);
    expect(el.placeholder).toBe('Test');
    expect(el.disabled).toBe(false);

    expect(el.getAttribute('id')).toBe('input1');
    expect(el.getAttribute('checked')).toBe('checked');
    expect(el.getAttribute('maxlength')).toBe('5');
    expect(el.getAttribute('placeholder')).toBe('Test');
    expect(el.hasAttribute('disabled')).toBe(false);
  });

  test('returns the same element', () => {
    const attrs = { id: 'x' };
    const returned = setAttributesSafe(el, attrs);
    expect(returned).toBe(el);
  });
});
