import { expectTypeErrorMessage } from '@asserts';
import { getTextContent } from '@ui';

describe('getTextContent', () => {
  let div;

  beforeEach(() => {
    div = document.createElement('div');
  });

  test('returns textContent of a valid element', () => {
    div.textContent = 'Hello world';
    expect(getTextContent(div)).toBe('Hello world');
  });

  test('returns empty string if textContent is empty', () => {
    div.textContent = '';
    expect(getTextContent(div)).toBe('');
  });

  test('supports unicode text', () => {
    div.textContent = 'Привет 🌍';
    expect(getTextContent(div)).toBe('Привет 🌍');
  });

  test('throws TypeError if element is not HTMLElement', () => {
    const invalidElement = {}; // not an HTMLElement
    expectTypeErrorMessage(
      () => getTextContent(invalidElement),
      'value',
      'an instance of HTMLElement',
    );
  });

  test('throws TypeError if element does not support textContent (e.g. <img>)', () => {
    const img = document.createElement('img');
    expectTypeErrorMessage(
      () => getTextContent(img),
      'value',
      'an HTMLElement that supports textContent',
    );
  });

  test('returns empty string even if textContent is null (edge case)', () => {
    div.textContent = null; // force null
    expect(getTextContent(div)).toBe('');
  });
});
