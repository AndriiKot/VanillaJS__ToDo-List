import { createLabelForInput } from './createLabelForInput';

describe('createLabelForInput', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    const input = document.createElement('input');
    input.id = 'test-input';
    document.body.appendChild(input);
  });

  test('creates a label linked to an existing input', () => {
    const label = createLabelForInput({
      htmlFor: 'test-input',
      text: 'Test Label',
      className: 'label-class',
    });

    expect(label.tagName).toBe('LABEL');
    expect(label.htmlFor).toBe('test-input');
    expect(label.textContent).toBe('Test Label');
    expect(label.className).toBe('label-class');
  });

  test('throws if htmlFor does not exist', () => {
    expect(() => createLabelForInput({ htmlFor: 'nonexistent', text: 'Label' })).toThrow(Error);
  });

  test('throws if text is empty', () => {
    expect(() => createLabelForInput({ htmlFor: 'test-input', text: '' })).toThrow();
  });

  test('throws if className is invalid', () => {
    expect(() =>
      createLabelForInput({ htmlFor: 'test-input', text: 'Text', className: 'bad class' }),
    ).toThrow();
  });
});
