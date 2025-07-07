import { assertIsEvent } from "@asserts";

describe("assertIsEvent", () => {
  describe("valid DOM Event instances", () => {
    const createEvents = () => {
      const events = [];

      const tryPush = (ctor, name) => {
        try {
          events.push(new ctor(name));
        } catch (err) {
          console.warn(
            `[SKIPPED] ${ctor.name} not supported in this environment: ${err.message}`,
          );
        }
      };

      tryPush(Event, "test");
      tryPush(MouseEvent, "click");
      tryPush(KeyboardEvent, "keydown");
      tryPush(InputEvent, "input");
      tryPush(FocusEvent, "focus");
      tryPush(SubmitEvent, "submit");
      tryPush(CompositionEvent, "compositionstart");
      tryPush(CustomEvent, "custom");

      if (typeof DragEvent !== "undefined") tryPush(DragEvent, "drag");
      if (typeof TouchEvent !== "undefined") tryPush(TouchEvent, "touchstart");
      if (typeof UIEvent !== "undefined") tryPush(UIEvent, "resize");
      if (typeof WheelEvent !== "undefined") tryPush(WheelEvent, "wheel");
      if (typeof ClipboardEvent !== "undefined")
        tryPush(ClipboardEvent, "copy");

      return events;
    };

    test.each(createEvents())("does not throw for %p", (event) => {
      expect(() => assertIsEvent(event)).not.toThrow();
    });
  });

  describe("invalid non-event values", () => {
    const invalidValues = [
      null,
      undefined,
      "",
      "event",
      0,
      1,
      NaN,
      Infinity,
      -Infinity,
      true,
      false,
      Symbol("event"),
      BigInt(123),
      {},
      [],
      ["click"],
      () => {},
      function () {},
      new String("event"),
      new Number(123),
      new Boolean(false),
      new Date(),
      new Error("fail"),
      new Map(),
      new Set(),
      new WeakMap(),
      new WeakSet(),
      { type: "click", target: document.createElement("div") },
      document.createElement("div"),
      document.createTextNode("text"),
      document.createComment("comment"),
      document.createDocumentFragment(),
      Promise.resolve("ok"),
    ];

    test.each(invalidValues)("throws TypeError for %p", (value) => {
      expect(() => assertIsEvent(value, "arg")).toThrow(TypeError);
      expect(() => assertIsEvent(value, "arg")).toThrow(
        /arg.*instance of Event/i,
      );
    });
  });
});
