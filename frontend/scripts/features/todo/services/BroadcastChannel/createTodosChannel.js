import { createBroadcastChannel } from '@services';

/**
 * Creates a BroadcastChannel specifically for syncing todos across tabs.
 * @returns {BroadcastChannel} A BroadcastChannel instance with the name 'todos_channel'.
 */

export function createTodosChannel() {
  // Name of the BroadcastChannel for todos synchronization
  const todosChannelName = 'todos_channel';

  // Create and return the BroadcastChannel using the helper function
  return createBroadcastChannel(todosChannelName);
}
