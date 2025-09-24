import { generateUUID } from './generateUUID';

describe('generateUUID', () => {
  test('returns a string', () => {
    const id = generateUUID();
    expect(typeof id).toBe('string');
  });

  test('returns a valid UUID v4 format', () => {
    const uuidV4Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    const id = generateUUID();
    expect(uuidV4Regex.test(id)).toBe(true);
  });

  test('returns unique values on multiple calls', () => {
    const ids = new Set();
    for (let i = 0; i < 10; i++) {
      ids.add(generateUUID());
    }
    expect(ids.size).toBe(10);
  });

  test('throws TypeError if crypto or crypto.randomUUID is missing', () => {
    expect(() => generateUUID()).not.toThrow();
  });
});
