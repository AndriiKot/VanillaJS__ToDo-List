import { createExpectedTypeMessage } from '@asserts';

describe('createExpectedTypeMessage', () => {
  test('creates a RegExp that matches expected error message pattern', () => {
    const argName = 'username';
    const expectedDescription = 'a non-empty string';

    const regex = createExpectedTypeMessage(argName, expectedDescription);

    expect(regex).toBeInstanceOf(RegExp);
    expect('Expected username to be a non-empty string').toMatch(regex);
  });

  test('escapes special RegExp characters in the description', () => {
    const argName = 'data';
    const expectedDescription = 'a string with dots... and symbols (like this)';

    const regex = createExpectedTypeMessage(argName, expectedDescription);

    expect('Expected data to be a string with dots... and symbols (like this)').toMatch(regex);
  });

  test('is case-insensitive', () => {
    const regex = createExpectedTypeMessage('value', 'a number');

    expect('expected VALUE TO BE A NUMBER').toMatch(regex);
    expect('Expected value to be a number').toMatch(regex);
    expect('EXPECTED VALUE TO BE A NUMBER').toMatch(regex);
  });
});
