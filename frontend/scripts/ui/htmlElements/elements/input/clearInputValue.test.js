import { clearInputValue } from '@ui';
import { createExpectedTypeMessage } from '@asserts';

describe('clearInputValue', () => {
  test('clears the value of a valid <input> element', () => {
    const input = document.createElement('input');
    input.value = 'Some text';
    clearInputValue(input);
    expect(input.value).toBe('');
  });

  describe('throws TypeError for invalid inputs', () => {
    const invalidInputs = [
      null,
      undefined,
      '',
      'string',
      0,
      123,
      -1,
      NaN,
      Infinity,
      -Infinity,
      true,
      false,
      [],
      ['input'],
      {},
      { value: 'fake' },
      () => {},
      function () {},
      Symbol('sym'),
      BigInt(10),
      /regex/,
      new Date(),
      new Map(),
      new Set(),
      new WeakMap(),
      new WeakSet(),
      Promise.resolve('input'),
      new Error('fail'),
      document.createElement('div'),
      document.createElement('textarea'),
      document.createElement('select'),
      document.createTextNode('text'),
    ];

    test.each(invalidInputs)('throws TypeError for %p', (value) => {
      expect(() => clearInputValue(value)).toThrow(TypeError);
      expect(() => clearInputValue(value)).toThrow(
        createExpectedTypeMessage('value', 'a DOM element of type <input>'),
      );
    });
  });
});
