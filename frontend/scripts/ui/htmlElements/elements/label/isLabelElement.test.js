import { isLabelElement } from './isLabelElement';

describe('isLabelElement', () => {
  test('returns true for a label element', () => {
    const label = document.createElement('label');
    expect(isLabelElement(label)).toBe(true);
  });

  test('returns false for other HTML elements', () => {
    const div = document.createElement('div');
    const button = document.createElement('button');
    const input = document.createElement('input');
    const textarea = document.createElement('textarea');
    expect(isLabelElement(div)).toBe(false);
    expect(isLabelElement(button)).toBe(false);
    expect(isLabelElement(input)).toBe(false);
    expect(isLabelElement(textarea)).toBe(false);
  });

  test('returns false for non-DOM values', () => {
    const invalidValues = [
      null,
      undefined,
      'label',
      123,
      true,
      false,
      {},
      [],
      () => {},
      Symbol('label'),
      new Date(),
      new Map(),
    ];

    invalidValues.forEach((value) => {
      expect(isLabelElement(value)).toBe(false);
    });
  });

  test('returns false for HTMLLabelElement subclasses or mocks', () => {
    const fakeLabel = { ...document.createElement('label'), someProp: true };
    expect(isLabelElement(fakeLabel)).toBe(false);
  });
});
