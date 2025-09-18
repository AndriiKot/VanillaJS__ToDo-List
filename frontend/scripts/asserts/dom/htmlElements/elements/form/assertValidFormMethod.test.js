import { assertValidFormMethod } from './assertValidFormMethod';
import { VALID_METHODS_ATTRIBUTE } from '@ui';

describe('assertValidFormMethod', () => {
  it.each(VALID_METHODS_ATTRIBUTE)('does not throw for valid method "%s"', (validMethod) => {
    expect(() => assertValidFormMethod(validMethod)).not.toThrow();
  });

  it('throws TypeError with detailed message for invalid method', () => {
    expect(() => assertValidFormMethod('POST')).toThrow();
    expect(() => assertValidFormMethod('PUT')).toThrow();
  });

  it('throws TypeError when method is not a string', () => {
    expect(() => assertValidFormMethod(123)).toThrow(TypeError);
    expect(() => assertValidFormMethod(null)).toThrow(TypeError);
    expect(() => assertValidFormMethod(undefined)).toThrow(TypeError);
    expect(() => assertValidFormMethod({})).toThrow(TypeError);
  });
});
