import { showNotValidMessage } from '@features';

describe('showNotValidMessage', () => {
  test('sets textContent to the provided message', () => {
    const div = document.createElement('div');
    showNotValidMessage(div, 'Invalid input');
    expect(div.textContent).toBe('Invalid input');
  });

  test('sets textContent to unicode message', () => {
    const div = document.createElement('div');
    showNotValidMessage(div, 'Ошибка ⚠️');
    expect(div.textContent).toBe('Ошибка ⚠️');
  });

  test('throws TypeError if element is not a real HTMLElement', () => {
    const fakeEl = {};
    expect(() => showNotValidMessage(fakeEl, 'text')).toThrow(TypeError);
  });

  test('throws TypeError if element does not support textContent (e.g. <img>)', () => {
    const img = document.createElement('img');
    expect(() => showNotValidMessage(img, 'text')).toThrow(TypeError);
  });

  test('throws TypeError if message is not a string', () => {
    const div = document.createElement('div');
    const invalidMessages = [null, undefined, 123, {}, [], true, Symbol('x')];

    for (const msg of invalidMessages) {
      expect(() => showNotValidMessage(div, msg)).toThrow(TypeError);
    }
  });
});
