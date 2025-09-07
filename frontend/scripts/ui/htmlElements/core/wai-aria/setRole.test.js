import { setRole } from './setRole';

describe('setRole', () => {
  test('sets the role attribute for a valid HTMLElement', () => {
    const button = document.createElement('button');
    setRole(button, 'button');
    expect(button.getAttribute('role')).toBe('button');
  });

  test('sets the role attribute for a valid SVGElement', () => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    setRole(svg, 'img');
    expect(svg.getAttribute('role')).toBe('img');
  });

  test('sets the role attribute for a valid MathMLElement', () => {
    const math = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'math');
    setRole(math, 'math');
    expect(math.getAttribute('role')).toBe('math');
  });

  test('throws error if the element is not a DOM element', () => {
    expect(() => setRole(null, 'button')).toThrow(TypeError);
    expect(() => setRole({}, 'button')).toThrow(TypeError);
    expect(() => setRole('div', 'button')).toThrow(TypeError);
  });

  test('throws error if the role is invalid', () => {
    const div = document.createElement('div');
    expect(() => setRole(div, 'banana')).toThrow(Error);
  });

  test('throws TypeError if the role is not a string', () => {
    const div = document.createElement('div');
    const nonStrings = [42, true, null, undefined, {}, [], Symbol('sym')];
    for (const value of nonStrings) {
      expect(() => setRole(div, value)).toThrow(TypeError);
    }
  });
});
