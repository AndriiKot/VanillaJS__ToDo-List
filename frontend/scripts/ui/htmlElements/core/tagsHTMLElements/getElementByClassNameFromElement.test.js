/**
 * @jest-environment jsdom
 */

import { getElementByClassNameFromElement } from '@ui';

const CLASS_NAME = 'test-class';

describe('getElementByClassNameFromElement', () => {
  let root;

  beforeEach(() => {
    document.body.innerHTML = `
      <section id="root">
        <div class="${CLASS_NAME}"></div>
        <span class="${CLASS_NAME}"></span>
      </section>
    `;
    root = document.querySelector('#root');
  });

  test('should return the first element with the specified class', () => {
    const el = getElementByClassNameFromElement(root, CLASS_NAME);
    expect(el).toBeInstanceOf(Element);
    expect(el.classList.contains(CLASS_NAME)).toBe(true);
    // Проверяем, что это именно первый элемент с классом
    expect(el.tagName).toBe('DIV');
  });

  test('should throw TypeError if root is not a valid element', () => {
    const invalidRoots = [null, undefined, 123, 'string', {}, [], () => {}];
    invalidRoots.forEach((r) => {
      expect(() => getElementByClassNameFromElement(r, CLASS_NAME)).toThrow(TypeError);
    });
  });

  test('should throw TypeError if className is not a string', () => {
    const invalidClassNames = [null, undefined, 123, {}, [], () => {}];
    invalidClassNames.forEach((cn) => {
      expect(() => getElementByClassNameFromElement(root, cn)).toThrow(TypeError);
    });
  });

  test('should throw TypeError if no element matches the class', () => {
    expect(() => getElementByClassNameFromElement(root, 'non-existent-class')).toThrow(TypeError);
  });
});
