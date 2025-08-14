import { safeContains } from '@ui';

describe('safeContains', () => {
  describe('valid parent-child relationships', () => {
    test('returns true when child is inside parent', () => {
      const parent = document.createElement('div');
      const child = document.createElement('span');
      parent.appendChild(child);

      expect(safeContains(parent, child)).toBe(true);
    });

    test('returns true when parent and child are the same element', () => {
      const el = document.createElement('section');
      expect(safeContains(el, el)).toBe(true);
    });
  });

  describe('invalid relationships or arguments', () => {
    test('throws when child is not in parent', () => {
      const parent = document.createElement('div');
      const child = document.createElement('p');

      expect(() => safeContains(parent, child)).toThrow(TypeError);
    });

    test('throws when child is in a different tree', () => {
      const parent = document.createElement('div');
      const unrelated = document.createElement('span');
      const nested = document.createElement('b');

      unrelated.appendChild(nested);

      expect(() => safeContains(parent, nested)).toThrow(TypeError);
    });

    test('throws when arguments are not Nodes', () => {
      const el = document.createElement('div');

      expect(() => safeContains(null, el)).toThrow(TypeError);
      expect(() => safeContains(el, undefined)).toThrow(TypeError);
      expect(() => safeContains('div', el)).toThrow(TypeError);
      expect(() => safeContains(el, 123)).toThrow(TypeError);
    });
  });
});
