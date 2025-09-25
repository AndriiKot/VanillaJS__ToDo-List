import { assertIsHTMLId } from './assertIsHTMLId';

describe('assertIsHTMLId', () => {
  describe('valid ids', () => {
    const validIds = [
      'todo-item',
      '_root',
      '-section1',
      'btn123',
      'こんにちは',
      'école',
      '按钮',
    ];

    test.each(validIds)("does not throw for valid id: '%s'", (value) => {
      expect(() => assertIsHTMLId(value)).not.toThrow();
    });
  });

  describe('invalid ids', () => {
    const invalidIds = [
      '',
      ' ',
      '123btn',
      'my id',
      'id!',
      '\n',
      '🙂emoji',
    ];

    test.each(invalidIds)("throws for invalid id: '%s'", (value) => {
      expect(() => assertIsHTMLId(value)).toThrow();
    });
  });

  describe('mode=unique', () => {
    let div;

    beforeEach(() => {
      div = document.createElement('div');
      div.id = 'unique-id';
      document.body.appendChild(div);
    });

    afterEach(() => {
      div.remove();
    });

    test('throws if id already exists in document', () => {
      expect(() => assertIsHTMLId('unique-id', { mode: 'unique' })).toThrow(/already exists/i);
    });

    test('does not throw if id is unique', () => {
      expect(() => assertIsHTMLId('new-id', { mode: 'unique' })).not.toThrow();
    });
  });

  describe('mode=mustExist', () => {
    test('throws if id does not exist in document', () => {
      expect(() => assertIsHTMLId('nonexistent', { mode: 'mustExist' })).toThrow(/No element/i);
    });

    test('does not throw if id exists in document', () => {
      const el = document.createElement('div');
      el.id = 'exists-id';
      document.body.appendChild(el);
      expect(() => assertIsHTMLId('exists-id', { mode: 'mustExist' })).not.toThrow();
      el.remove();
    });
  });

  describe('invalid mode', () => {
    test('throws if mode is invalid', () => {
      expect(() => assertIsHTMLId('some-id', { mode: 'bad-mode' })).toThrow(/Invalid mode/i);
    });
  });
});
