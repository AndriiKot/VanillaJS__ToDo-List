import { assertIsLabelElement } from './assertIsLabelElement';

describe('assertIsLabelElement', () => {
  test('does not throw for a label element', () => {
    const label = document.createElement('label');
    expect(() => assertIsLabelElement(label)).not.toThrow();
  });

  test('throws for other HTML elements', () => {
    const elements = [
      document.createElement('div'),
      document.createElement('button'),
      document.createElement('input'),
      document.createElement('textarea'),
    ];

    elements.forEach((el) => {
      expect(() => assertIsLabelElement(el)).toThrow(TypeError);
    });
  });

  test('throws for non-DOM values', () => {
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
      expect(() => assertIsLabelElement(value)).toThrow(TypeError);
    });
  });

  test('throws for HTMLLabelElement mocks/subclasses', () => {
    const fakeLabel = { ...document.createElement('label'), someProp: true };
    expect(() => assertIsLabelElement(fakeLabel)).toThrow(TypeError);
  });
});
