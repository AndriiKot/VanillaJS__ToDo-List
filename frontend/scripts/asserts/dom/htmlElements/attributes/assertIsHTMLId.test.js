import { assertIsHTMLId } from './assertIsHTMLId.js';

describe('assertIsHTMLId', () => {
  describe('valid ids', () => {
    const validIds = [
      'todo-item',
      '_root',
      '-section1',
      'btn123',
      'こんにちは', // Unicode letters
      'école', // accented letters
      '按钮', // Chinese characters
    ];

    test.each(validIds)("does not throw for valid id: '%s'", (value) => {
      expect(() => assertIsHTMLId(value)).not.toThrow();
    });
  });

  describe('invalid ids', () => {
    const invalidIds = [
      '', // empty string
      ' ', // whitespace only
      '123btn', // starts with a digit (CSS-unsafe)
      'my id', // contains space
      'id!', // invalid character
      '\n', // newline
      '🙂emoji', // emoji at start
    ];

    test.each(invalidIds)("throws for invalid id: '%s'", (value) => {
      expect(() => assertIsHTMLId(value)).toThrow();
    });
  });

  describe('uniqueness check', () => {
    let div;

    beforeEach(() => {
      div = document.createElement('div');
      div.id = 'unique-id';
      document.body.appendChild(div);
    });

    afterEach(() => {
      div.remove();
    });

    test('throws if id already exists in document when checkUnique=true', () => {
      expect(() => assertIsHTMLId('unique-id', { checkUnique: true })).toThrow(
        /already exists/i,
      );
    });

    test('does not throw if id is unique in document when checkUnique=true', () => {
      expect(() => assertIsHTMLId('new-id', { checkUnique: true })).not.toThrow();
    });
  });
});
