import { setAriaLabel } from './setAriaLabel';

describe('setAriaLabel', () => {
  test('sets the aria-label attribute for a valid HTMLElement', () => {
    const button = document.createElement('button');
    setAriaLabel(button, 'Delete task');
    expect(button.getAttribute('aria-label')).toBe('Delete task');
  });

  test('sets the aria-label attribute for a valid SVGElement', () => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    setAriaLabel(svg, 'Icon');
    expect(svg.getAttribute('aria-label')).toBe('Icon');
  });

  test('sets the aria-label attribute for a valid MathMLElement', () => {
    const math = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'math');
    setAriaLabel(math, 'Math formula');
    expect(math.getAttribute('aria-label')).toBe('Math formula');
  });

  test('throws error if the element is not a DOM element', () => {
    expect(() => setAriaLabel(null, 'Label')).toThrow(TypeError);
    expect(() => setAriaLabel({}, 'Label')).toThrow(TypeError);
    expect(() => setAriaLabel('div', 'Label')).toThrow(TypeError);
  });

  test('throws error if the aria-label value is not a string', () => {
    const div = document.createElement('div');
    const nonStrings = [42, true, null, undefined, {}, [], Symbol('sym')];
    for (const value of nonStrings) {
      expect(() => setAriaLabel(div, value)).toThrow(TypeError);
    }
  });

  test('throws error if the aria-label value is an empty string', () => {
    const div = document.createElement('div');
    expect(() => setAriaLabel(div, '')).toThrow(Error);
    expect(() => setAriaLabel(div, '   ')).toThrow(Error);
  });
});
