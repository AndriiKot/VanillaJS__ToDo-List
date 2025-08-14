/**
 * @jest-environment jsdom
 */

import { getHTMLTagElement } from '@ui';

describe('getHTMLTagElement', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="test-div" class="box"></div>
      <input id="input-field" />
    `;
  });

  test('returns the correct HTMLElement for a valid selector', () => {
    const div = getHTMLTagElement('#test-div');
    expect(div).toBeInstanceOf(HTMLElement);
    expect(div.id).toBe('test-div');
  });

  test('works for input elements', () => {
    const input = getHTMLTagElement('#input-field');
    expect(input).toBeInstanceOf(HTMLInputElement);
    expect(input.tagName).toBe('INPUT');
  });

  test('throws TypeError if selector is not a string', () => {
    const invalidSelectors = [null, undefined, 123, {}, [], () => {}];

    invalidSelectors.forEach((sel) => {
      expect(() => getHTMLTagElement(sel)).toThrow(TypeError);
      expect(() => getHTMLTagElement(sel)).toThrow(
        /Expected .* to be string/, // <- Обрати внимание: без "a"
      );
    });
  });

  test('throws TypeError if selector does not match an HTMLElement', () => {
    expect(() => getHTMLTagElement('#non-existent')).toThrow(TypeError);
    expect(() => getHTMLTagElement('#non-existent')).toThrow(
      /Expected .* to be an instance of HTMLElement/,
    );
  });
});
