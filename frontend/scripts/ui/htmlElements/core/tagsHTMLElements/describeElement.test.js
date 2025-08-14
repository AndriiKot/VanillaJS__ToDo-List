import { describeElement } from '@ui';

describe('describeElement', () => {
  test('returns tag with ID and class names', () => {
    const el = document.createElement('div');
    el.id = 'main';
    el.className = 'todo important';
    expect(describeElement(el)).toBe('<DIV#main.todo.important>');
  });

  test('returns tag with ID only (no classes)', () => {
    const el = document.createElement('section');
    el.id = 'hero';
    expect(describeElement(el)).toBe('<SECTION#hero>');
  });

  test('returns tag with classes only (no ID)', () => {
    const el = document.createElement('button');
    el.className = 'btn primary';
    expect(describeElement(el)).toBe('<BUTTON.btn.primary>');
  });

  test('returns tag only (no ID, no class)', () => {
    const el = document.createElement('span');
    expect(describeElement(el)).toBe('<SPAN>');
  });

  test('works with multiple classes and preserves order', () => {
    const el = document.createElement('ul');
    el.classList.add('list', 'unstyled', 'horizontal');
    expect(describeElement(el)).toBe('<UL.list.unstyled.horizontal>');
  });

  test('works with HTML tags in different casing (lowercase input)', () => {
    const el = document.createElement('nav');
    el.id = 'top';
    el.className = 'navbar sticky';
    expect(describeElement(el)).toBe('<NAV#top.navbar.sticky>');
  });

  test('returns correct output when classList is empty but className is whitespace', () => {
    const el = document.createElement('p');
    el.className = '   ';
    expect(describeElement(el)).toBe('<P>');
  });
});
