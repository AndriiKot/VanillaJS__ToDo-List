import { loadTodos } from './loadTodos.js';
import { STORAGE_KEYS } from '@services';

describe('loadTodos', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('returns empty array as defaultValue when nothing stored', () => {
    const result = loadTodos();
    expect(result).toEqual([]);
  });

  test('returns empty array if stored data is invalid JSON', () => {
    localStorage.setItem(STORAGE_KEYS.todo, 'not a json');
    const result = loadTodos();
    expect(result).toEqual([]);
  });

  test('returns empty array if stored data is not an array', () => {
    localStorage.setItem(STORAGE_KEYS.todo, JSON.stringify({ foo: 'bar' }));
    const result = loadTodos();
    expect(result).toEqual([]);
  });

  test('returns stored array if valid array JSON', () => {
    const todos = ['task1', 'task2'];
    localStorage.setItem(STORAGE_KEYS.todo, JSON.stringify(todos));
    const result = loadTodos();
    expect(result).toEqual(todos);
  });
});
