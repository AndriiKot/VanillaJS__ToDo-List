import { createTodosChannel } from './createTodosChannel';
import { jest } from '@jest/globals';

describe('createTodosChannel', () => {
  let mockPostMessage;
  let mockClose;
  let todosChannel;

  beforeEach(() => {
    mockPostMessage = jest.fn();
    mockClose = jest.fn();

    // Mock the BroadcastChannel API before creating the channel
    global.BroadcastChannel = jest.fn().mockImplementation((name) => {
      return {
        name,
        postMessage: mockPostMessage,
        close: mockClose,
        onmessage: null,
      };
    });

    // Create the todos channel using the factory function
    todosChannel = createTodosChannel();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should create a channel with the correct name', () => {
    expect(todosChannel.name).toBe('todos_channel');
    expect(BroadcastChannel).toHaveBeenCalledWith('todos_channel');
  });

  test('should send messages correctly', () => {
    todosChannel.postMessage({ type: 'update' });
    expect(mockPostMessage).toHaveBeenCalledWith({ type: 'update' });
  });

  test('should close the channel correctly', () => {
    todosChannel.close();
    expect(mockClose).toHaveBeenCalled();
  });
});
