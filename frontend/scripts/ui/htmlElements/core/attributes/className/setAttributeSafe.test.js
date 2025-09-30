import { setAttributeSafe } from './setAttributeSafe.js';
import { BOOLEAN_ATTRIBUTES, STRING_ATTRIBUTES, NUMERIC_ATTRIBUTES } from '@ui';

describe('setAttributeSafe', () => {
  let el;

  beforeEach(() => {
    el = document.createElement('input');
  });

  test.each(BOOLEAN_ATTRIBUTES)('sets boolean attribute %s correctly when true', (attr) => {
    setAttributeSafe(el, attr, true);
    expect(el.hasAttribute(attr)).toBe(true);
    expect(el.getAttribute(attr)).toBe(attr);
    expect(el[attr]).toBe(true);
  });

  test.each(BOOLEAN_ATTRIBUTES)('removes boolean attribute %s correctly when false', (attr) => {
    el.setAttribute(attr, attr);
    el[attr] = true;
    setAttributeSafe(el, attr, false);
    expect(el.hasAttribute(attr)).toBe(false);
    expect(el[attr]).toBe(false);
  });

  test.each(STRING_ATTRIBUTES)('sets string attribute %s correctly', (attr) => {
    setAttributeSafe(el, attr, 'test-value');
    expect(el.hasAttribute(attr)).toBe(true);
    expect(el.getAttribute(attr)).toBe('test-value');
    expect(el[attr]).toBe('test-value');
  });

  test.each(NUMERIC_ATTRIBUTES)('sets numeric attribute %s correctly', (attr) => {
    setAttributeSafe(el, attr, 42);
    expect(el.hasAttribute(attr)).toBe(true);
    expect(el.getAttribute(attr)).toBe('42');
    expect(el[attr]).toBe(42);
  });

  test('sets unknown attribute correctly', () => {
    setAttributeSafe(el, 'data-test', 'hello');
    expect(el.hasAttribute('data-test')).toBe(true);
    expect(el.getAttribute('data-test')).toBe('hello');
    expect(el['data-test']).toBe('hello');
  });

  test('does not throw if assertElement is false', () => {
    expect(() => setAttributeSafe({}, 'id', 'x', { assertElement: false })).not.toThrow();
  });

  test('throws if element is invalid and assertElement = true', () => {
    expect(() => setAttributeSafe({}, 'id', 'x')).toThrow(TypeError);
  });
});
