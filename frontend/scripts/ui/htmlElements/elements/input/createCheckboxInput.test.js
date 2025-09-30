import { createCheckboxInput } from './createCheckboxInput';

describe('createCheckboxInput', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  test('creates input type="checkbox" with correct properties', () => {
    const el = createCheckboxInput({
      id: 'accept-terms',
      className: 'form__checkbox',
      checked: true,
    });

    expect(el.tagName).toBe('INPUT');
    expect(el.type).toBe('checkbox');
    expect(el.id).toBe('accept-terms');
    expect(el.className).toBe('form__checkbox');
    expect(el.checked).toBe(true);
  });

  test('defaults checked to false', () => {
    const el = createCheckboxInput({
      id: 'news-subscription',
      className: 'form__checkbox',
    });

    expect(el.checked).toBe(false);
  });

  test('throws if id is empty or invalid', () => {
    expect(() => createCheckboxInput({ id: '', className: 'c' })).toThrow();

    expect(() => createCheckboxInput({ id: '123bad', className: 'c' })).toThrow();
  });

  test('throws if className is empty or invalid', () => {
    expect(() => createCheckboxInput({ id: 'id1', className: '' })).toThrow();

    expect(() => createCheckboxInput({ id: 'id1', className: 'bad class' })).toThrow();
  });

  test('throws if checked is not boolean', () => {
    expect(() => createCheckboxInput({ id: 'id2', className: 'c', checked: 'yes' })).toThrow();

    expect(() => createCheckboxInput({ id: 'id3', className: 'c', checked: 1 })).toThrow();
  });
});
