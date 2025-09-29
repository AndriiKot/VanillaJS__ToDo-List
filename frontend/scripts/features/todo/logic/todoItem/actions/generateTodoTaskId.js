import { generateUUID } from '@services';

/**
 * Generates a unique ID for a todo task.
 *
 * The ID is prefixed with `"taskId-"` followed by a UUID string.
 * This ensures that each todo task has a globally unique identifier.
 *
 * @function
 * @returns {string} A unique todo task ID, e.g. "taskId-3f47a1e2-9b8f-4c3d-8a9f-1c2d3e4f5b6a".
 *
 * @example
 * const id = generateTodoTaskId();
 * console.log(id); // "taskId-550e8400-e29b-41d4-a716-446655440000"
 */
export const generateTodoTaskId = () => {
  return `taskId-${generateUUID()}`;
};
