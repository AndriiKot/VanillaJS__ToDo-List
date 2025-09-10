/**
 * @jest-environment jsdom
 */

import { getElementBySelectorFromElement } from '@ui';

describe('getElementBySelectorFromElement', () => {
  let root;

  beforeEach(() => {
    document.body.innerHTML = `
      <section id="root">
        <div id="test-div" class="box"></div>
        <input id="input-field" />
      </section>
    `;
    root = document.querySelector('#root');
  });

  test('returns the correct HTMLElement for a valid selector inside root', () => {
    const div = getElementBySelectorFromElement(root, '#test-div');
    expect(div).toBeInstanceOf(HTMLElement);
    expect(div.id).toBe('test-div');
  });

  test('works for input elements inside root', () => {
    const input = getElementBySelectorFromElement(root, '#input-field');
    expect(input).toBeInstanceOf(HTMLInputElement);
    expect(input.tagName).toBe('INPUT');
  });

  test('throws TypeError if root is not an HTMLElement', () => {
    const invalidRoots = [null, undefined, 123, 'string', {}, [], () => {}];

    invalidRoots.forEach((r) => {
      expect(() => getElementBySelectorFromElement(r, '#test-div')).toThrow();
      expect(() => getElementBySelectorFromElement(r, '#test-div')).toThrow();
    });
  });

  test('throws TypeError if selector is not a string', () => {
    const invalidSelectors = [null, undefined, 123, {}, [], () => {}];

    invalidSelectors.forEach((sel) => {
      expect(() => getElementBySelectorFromElement(root, sel)).toThrow();
      expect(() => getElementBySelectorFromElement(root, sel)).toThrow();
    });
  });

  test('throws TypeError if selector does not match an HTMLElement inside root', () => {
    expect(() => getElementBySelectorFromElement(root, '#non-existent')).toThrow();
    expect(() => getElementBySelectorFromElement(root, '#non-existent')).toThrow();
  });
});
