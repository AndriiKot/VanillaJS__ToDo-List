import { createBroadcastChannel } from './createBroadcastChannel';
import { jest } from '@jest/globals';

describe('todosChannel', () => {
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

    // Create the channel via the factory function
    todosChannel = createBroadcastChannel('todos_channel');
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
