import { generateTodoTaskId } from './generateTodoTaskId';

describe('generateTodoTaskId', () => {
  test('should return a string', () => {
    const id = generateTodoTaskId();
    expect(typeof id).toBe('string');
  });

  test('should start with "taskId-"', () => {
    const id = generateTodoTaskId();
    expect(id.startsWith('taskId-')).toBe(true);
  });

  test('should generate unique IDs', () => {
    const id1 = generateTodoTaskId();
    const id2 = generateTodoTaskId();
    expect(id1).not.toBe(id2);
  });

  test('should contain a UUID after the prefix', () => {
    const id = generateTodoTaskId();
    const uuidPart = id.replace('taskId-', '');
    // Простая проверка формата UUID v4 (8-4-4-4-12)
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    expect(uuidRegex.test(uuidPart)).toBe(true);
  });
});
