import { isEvent } from '@ui';

describe('isEvent', () => {
  describe('valid DOM Event instances', () => {
    const createEvents = () => {
      const safeEvents = [];

      try {
        safeEvents.push(new Event('test'));
      } catch {
        /* not supported */
      }
      try {
        safeEvents.push(new MouseEvent('click'));
      } catch {
        /* not supported */
      }
      try {
        safeEvents.push(new KeyboardEvent('keydown'));
      } catch {
        /* not supported */
      }
      try {
        safeEvents.push(new InputEvent('input'));
      } catch {
        /* not supported */
      }
      try {
        safeEvents.push(new FocusEvent('focus'));
      } catch {
        /* not supported */
      }
      try {
        safeEvents.push(new SubmitEvent('submit'));
      } catch {
        /* not supported */
      }
      try {
        safeEvents.push(new CompositionEvent('compositionstart'));
      } catch {
        /* not supported */
      }
      try {
        safeEvents.push(new CustomEvent('custom'));
      } catch {
        /* not supported */
      }

      if (typeof DragEvent !== 'undefined') {
        try {
          safeEvents.push(new DragEvent('drag'));
        } catch {
          /* not supported */
        }
      }
      if (typeof TouchEvent !== 'undefined') {
        try {
          safeEvents.push(new TouchEvent('touchstart'));
        } catch {
          /* not supported */
        }
      }
      if (typeof UIEvent !== 'undefined') {
        try {
          safeEvents.push(new UIEvent('resize'));
        } catch {
          /* not supported */
        }
      }
      if (typeof WheelEvent !== 'undefined') {
        try {
          safeEvents.push(new WheelEvent('wheel'));
        } catch {
          /* not supported */
        }
      }
      if (typeof ClipboardEvent !== 'undefined') {
        try {
          safeEvents.push(new ClipboardEvent('copy'));
        } catch {
          /* not supported */
        }
      }

      return safeEvents;
    };

    test.each(createEvents())('returns true for %p', (event) => {
      expect(isEvent(event)).toBe(true);
    });
  });

  describe('invalid non-event values', () => {
    const invalidValues = [
      null,
      undefined,
      '',
      'event',
      0,
      1,
      NaN,
      Infinity,
      -Infinity,
      true,
      false,
      Symbol('event'),
      BigInt(123),
      {},
      { type: 'click', target: document.createElement('div') },
      [],
      ['click'],
      () => {},
      function () {},
      new String('event'),
      new Number(123),
      new Boolean(false),
      new Date(),
      new Error('fail'),
      new Map(),
      new Set(),
      new WeakMap(),
      new WeakSet(),
      document.createElement('div'),
      document.createTextNode('text'),
      document.createComment('comment'),
      document.createDocumentFragment(),
      Promise.resolve('ok'),
    ];

    test.each(invalidValues)('returns false for %p', (value) => {
      expect(isEvent(value)).toBe(false);
    });
  });
});
