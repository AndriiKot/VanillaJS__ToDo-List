/**
 * @jest-environment jsdom
 */

import { getHTMLTagElementFromElement } from '@ui';

describe('getHTMLTagElementFromElement', () => {
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
    const div = getHTMLTagElementFromElement(root, '#test-div');
    expect(div).toBeInstanceOf(HTMLElement);
    expect(div.id).toBe('test-div');
  });

  test('works for input elements inside root', () => {
    const input = getHTMLTagElementFromElement(root, '#input-field');
    expect(input).toBeInstanceOf(HTMLInputElement);
    expect(input.tagName).toBe('INPUT');
  });

  test('throws TypeError if root is not an HTMLElement', () => {
    const invalidRoots = [null, undefined, 123, 'string', {}, [], () => {}];

    invalidRoots.forEach((r) => {
      expect(() => getHTMLTagElementFromElement(r, '#test-div')).toThrow();
      expect(() => getHTMLTagElementFromElement(r, '#test-div')).toThrow();
    });
  });

  test('throws TypeError if selector is not a string', () => {
    const invalidSelectors = [null, undefined, 123, {}, [], () => {}];

    invalidSelectors.forEach((sel) => {
      expect(() => getHTMLTagElementFromElement(root, sel)).toThrow();
      expect(() => getHTMLTagElementFromElement(root, sel)).toThrow();
    });
  });

  test('throws TypeError if selector does not match an HTMLElement inside root', () => {
    expect(() => getHTMLTagElementFromElement(root, '#non-existent')).toThrow();
    expect(() => getHTMLTagElementFromElement(root, '#non-existent')).toThrow();
  });
});
