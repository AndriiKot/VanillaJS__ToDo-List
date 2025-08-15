import { assertIsNonEmptyString } from '@asserts';

/**
 * Creates a BroadcastChannel safely, validating the channel name.
 * @param {string} broadcastChannelName - The name for the BroadcastChannel API.
 * @returns {BroadcastChannel}
 * @throws {Error} If broadcastChannelName is not a non-empty string.
 */
export function createBroadcastChannel(broadcastChannelName) {
  assertIsNonEmptyString(
    broadcastChannelName,
    'broadcastChannelName (name for BroadcastChannel API)',
  );

  return new BroadcastChannel(broadcastChannelName);
}
