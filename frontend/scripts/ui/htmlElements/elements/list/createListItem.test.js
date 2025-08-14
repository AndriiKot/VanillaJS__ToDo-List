import { createListItem } from '@ui';

describe('createListItem', () => {
  test('returns an HTMLLIElement', () => {
    const el = createListItem();

    expect(el).toBeInstanceOf(HTMLLIElement);
    expect(el.tagName).toBe('LI');
  });

  test('returns a new element each time', () => {
    const el1 = createListItem();
    const el2 = createListItem();

    expect(el1).not.toBe(el2);
  });
});
