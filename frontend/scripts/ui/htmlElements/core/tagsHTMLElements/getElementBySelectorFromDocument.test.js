/**
 * @jest-environment jsdom
 */

import { getElementBySelectorFromDocument } from '@ui';

describe('getElementBySelectorFromDocument', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="test-div" class="box"></div>
      <input id="input-field" />
    `;
  });

  test('returns the correct HTMLElement for a valid selector', () => {
    const div = getElementBySelectorFromDocument('#test-div');
    expect(div).toBeInstanceOf(HTMLElement);
    expect(div.id).toBe('test-div');
  });

  test('works for input elements', () => {
    const input = getElementBySelectorFromDocument('#input-field');
    expect(input).toBeInstanceOf(HTMLInputElement);
    expect(input.tagName).toBe('INPUT');
  });

  test('throws TypeError if selector is not a string', () => {
    const invalidSelectors = [null, undefined, 123, {}, [], () => {}];

    invalidSelectors.forEach((sel) => {
      expect(() => getElementBySelectorFromDocument(sel)).toThrow(TypeError);
    });
  });

  test('throws TypeError if selector does not match any element', () => {
    expect(() => getElementBySelectorFromDocument('#non-existent')).toThrow(TypeError);
  });
});
