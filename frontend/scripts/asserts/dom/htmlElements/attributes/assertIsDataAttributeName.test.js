import { assertIsDataAttributeName } from './assertIsDataAttributeName';

describe('assertIsDataAttributeName', () => {
  describe('valid cases', () => {
    it('accepts simple names', () => {
      expect(() => assertIsDataAttributeName('data-id')).not.toThrow();
      expect(() => assertIsDataAttributeName('data-user123')).not.toThrow();
    });

    it('accepts multi-part names with hyphens', () => {
      expect(() => assertIsDataAttributeName('data-js-todo-btn-add')).not.toThrow();
      expect(() => assertIsDataAttributeName('data-long-name-123')).not.toThrow();
    });
  });

  describe('invalid cases', () => {
    it('throws for empty string', () => {
      expect(() => assertIsDataAttributeName('')).toThrow(SyntaxError);
    });

    it('throws when missing data- prefix', () => {
      expect(() => assertIsDataAttributeName('todo-btn')).toThrow(SyntaxError);
      expect(() => assertIsDataAttributeName('-data-todo')).toThrow(SyntaxError);
    });

    it('throws when only "data-" with no name', () => {
      expect(() => assertIsDataAttributeName('data-')).toThrow(SyntaxError);
    });

    it('throws when contains uppercase letters', () => {
      expect(() => assertIsDataAttributeName('data-User')).toThrow(SyntaxError);
      expect(() => assertIsDataAttributeName('data-TODO-btn')).toThrow(SyntaxError);
    });

    it('throws when ends with a hyphen', () => {
      expect(() => assertIsDataAttributeName('data-js-task-')).toThrow(SyntaxError);
    });

    it('throws when contains spaces', () => {
      expect(() => assertIsDataAttributeName('data-js todo')).toThrow(SyntaxError);
    });
  });

  describe('type errors', () => {
    it('throws TypeError for non-strings', () => {
      expect(() => assertIsDataAttributeName(null)).toThrow(TypeError);
      expect(() => assertIsDataAttributeName(undefined)).toThrow(TypeError);
      expect(() => assertIsDataAttributeName(123)).toThrow(TypeError);
      expect(() => assertIsDataAttributeName({})).toThrow(TypeError);
    });
  });
});
