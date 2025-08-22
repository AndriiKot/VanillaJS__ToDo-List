/**
 * @jest-environment jsdom
 */
import { getElementTarget } from './getElementTarget';

describe('getElementTarget', () => {
  let span, textNode;

  beforeEach(() => {
    document.body.innerHTML = `
      <div class="outer">
        <span class="inner">Hello</span>
      </div>
    `;
    span = document.querySelector('.inner');
    textNode = span.firstChild; // text node "Hello"
  });

  // ✅ Valid cases
  test('returns the element when event.target is an element', () => {
    const clickEvent = new MouseEvent('click', { bubbles: true });
    span.dispatchEvent(clickEvent);

    expect(getElementTarget(clickEvent)).toBe(span);
  });

  test('returns parentElement when event.target is a text node', () => {
    const clickEvent = new MouseEvent('click', { bubbles: true });
    // Manually override event.target with a Text node
    Object.defineProperty(clickEvent, 'target', { value: textNode });

    const result = getElementTarget(clickEvent);
    expect(result).toBe(span);
  });

  test('works with nested elements', () => {
    const strong = document.createElement('strong');
    strong.textContent = 'bold';
    span.appendChild(strong);

    const clickEvent = new MouseEvent('click', { bubbles: true });
    strong.dispatchEvent(clickEvent);

    expect(getElementTarget(clickEvent)).toBe(strong);
  });

  // ❌ Invalid values
  describe('throws TypeError for invalid inputs', () => {
    const invalidValues = [
      null,
      undefined,
      123,
      0,
      -1,
      3.14,
      NaN,
      Infinity,
      -Infinity,
      'string',
      '',
      true,
      false,
      {},
      { foo: 'bar' },
      [],
      [1, 2, 3],
      () => {},
      function namedFn() {},
      async () => {},
      Symbol('sym'),
      BigInt(10),
      new Date(),
      /regex/,
      new Map(),
      new Set(),
      new WeakMap(),
      new WeakSet(),
      new ArrayBuffer(8),
      new DataView(new ArrayBuffer(8)),
      new Int8Array(),
      new Uint8Array(),
      new Float32Array(),
      new Error('boom'),
      Promise.resolve(),
    ];

    test.each(invalidValues)('throws for %p', (value) => {
      expect(() => getElementTarget(value)).toThrow(TypeError);
    });
  });
});
