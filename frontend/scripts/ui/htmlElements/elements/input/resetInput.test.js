import { resetInput } from '@ui';
import { jest } from '@jest/globals';
import { createExpectedTypeMessage } from '@asserts';

describe('resetInput', () => {
  test('calls focus() on a valid <input> element', () => {
    const input = document.createElement('input');
    const focusSpy = jest.spyOn(input, 'focus');

    resetInput(input);

    expect(focusSpy).toHaveBeenCalled();
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
      expect(() => resetInput(value)).toThrow(TypeError);
      expect(() => resetInput(value)).toThrow(
        createExpectedTypeMessage('value', 'a DOM element of type <input>'),
      );
    });
  });
});
