import { assertClosest } from './assertClosest';

describe('assertClosest', () => {
  let container;
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="parent">
        <ul class="list">
          <li class="item">
            <span class="child">Hello</span>
          </li>
        </ul>
      </div>
    `;
    container = document.querySelector('.parent');
  });

  it('does not throw if element has matching closest ancestor', () => {
    const child = container.querySelector('.child');
    expect(() => assertClosest(child, '.item')).not.toThrow();
    expect(() => assertClosest(child, '.list')).not.toThrow();
    expect(() => assertClosest(child, '.parent')).not.toThrow();
  });

  it('does not throw if the element itself matches the selector', () => {
    const item = container.querySelector('.item');
    expect(() => assertClosest(item, '.item')).not.toThrow();
  });

  it('throws TypeError if element is not a DOM Element', () => {
    expect(() => assertClosest(null, '.item')).toThrow(TypeError);
    expect(() => assertClosest(123, '.item')).toThrow(TypeError);
    expect(() => assertClosest({}, '.item')).toThrow(TypeError);
  });

  it('throws SyntaxError for invalid selector', () => {
    const child = container.querySelector('.child');
    expect(() => assertClosest(child, '???invalid')).toThrow(SyntaxError);
  });
});
