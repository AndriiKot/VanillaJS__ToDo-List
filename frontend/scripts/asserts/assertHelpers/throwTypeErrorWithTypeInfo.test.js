import { throwTypeErrorWithTypeInfo } from '@asserts';

describe('throwTypeErrorWithTypeInfo', () => {
  test('throws TypeError with correct message', () => {
    const value = 123;
    const argName = 'testArg';
    const expectedDescription = 'a string';

    expect(() => throwTypeErrorWithTypeInfo(value, argName, expectedDescription)).toThrow(
      TypeError,
    );
    expect(() => throwTypeErrorWithTypeInfo(value, argName, expectedDescription)).toThrow(
      /Expected testArg to be a string, but received \[object Number\] of type Number/,
    );
  });

  test('throws TypeError with different types and descriptions', () => {
    const value = null;
    const argName = 'input';
    const expectedDescription = 'an object';

    expect(() => throwTypeErrorWithTypeInfo(value, argName, expectedDescription)).toThrow(
      TypeError,
    );
    expect(() => throwTypeErrorWithTypeInfo(value, argName, expectedDescription)).toThrow(
      /Expected input to be an object, but received \[object Null\] of type Null/,
    );
  });
});
