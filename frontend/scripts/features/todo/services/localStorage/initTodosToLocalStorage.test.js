import { jest } from '@jest/globals';
import { STORAGE_KEYS } from '@services';

jest.unstable_mockModule('@features', () => ({
  createTodosChannel: jest.fn(),
}));

const { createTodosChannel } = await import('@features');
const { initTodosToLocalStorage } = await import('./initTodosToLocalStorage.js');

describe('initTodosToLocalStorage', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  test('initializes localStorage with empty array if key is missing', () => {
    initTodosToLocalStorage();

    const stored = localStorage.getItem(STORAGE_KEYS.todo);
    expect(stored).toBe('[]');
  });

  test('does not overwrite existing todos', () => {
    const existing = JSON.stringify([{ text: 'Task 1' }]);
    localStorage.setItem(STORAGE_KEYS.todo, existing);

    initTodosToLocalStorage();

    const stored = localStorage.getItem(STORAGE_KEYS.todo);
    expect(stored).toBe(existing);
  });

  test('sends a message via BroadcastChannel when initialized', () => {
    const fakeChannel = { postMessage: jest.fn() };
    createTodosChannel.mockReturnValue(fakeChannel);

    initTodosToLocalStorage();

    expect(createTodosChannel).toHaveBeenCalled();
    expect(fakeChannel.postMessage).toHaveBeenCalledWith({
      type: 'update',
      DefaultTodos: [],
    });
  });

  test('logs error when localStorage.setItem throws', () => {
    const mock = jest.spyOn(Storage.prototype, 'setItem');
    mock.mockImplementation(() => {
      throw new Error('Test error');
    });

    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    initTodosToLocalStorage();

    expect(consoleSpy).toHaveBeenCalledWith('Failed to initialize todos:', expect.any(Error));

    mock.mockRestore();
    consoleSpy.mockRestore();
  });
});
