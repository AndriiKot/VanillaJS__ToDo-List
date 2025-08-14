import { isInputElement } from '@ui';

describe('isInputElement', () => {
  test('returns true for an input element', () => {
    const input = document.createElement('input');
    expect(isInputElement(input)).toBe(true);
  });

  test('returns false for other HTML elements', () => {
    const div = document.createElement('div');
    const button = document.createElement('button');
    const textarea = document.createElement('textarea');
    expect(isInputElement(div)).toBe(false);
    expect(isInputElement(button)).toBe(false);
    expect(isInputElement(textarea)).toBe(false);
  });

  test('returns false for non-DOM values', () => {
    const invalidValues = [
      null,
      undefined,
      'input',
      123,
      true,
      false,
      {},
      [],
      () => {},
      Symbol('input'),
      new Date(),
      new Map(),
    ];

    invalidValues.forEach((value) => {
      expect(isInputElement(value)).toBe(false);
    });
  });

  test('returns false for HTMLInputElement subclasses or mocks (if any)', () => {
    const fakeInput = { ...document.createElement('input'), someProp: true };
    expect(isInputElement(fakeInput)).toBe(false);
  });
});
