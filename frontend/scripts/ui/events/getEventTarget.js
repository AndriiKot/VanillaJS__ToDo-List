import { assertIsEvent } from '@asserts';

export const getEventTarget = (event) => {
  assertIsEvent(event);
  return event.target;
};
