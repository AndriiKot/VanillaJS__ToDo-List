import { assertIsEvent } from "@asserts";

export const getEventCurrentTarget = (event) => {
  assertIsEvent(event);
  return event.currentTarget;
};
