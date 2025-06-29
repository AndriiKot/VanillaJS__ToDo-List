import { jest } from "@jest/globals";

jest.unstable_mockModule("@task", () => ({
  addTaskToList: jest.fn(),
  clearInputValue: jest.fn(),
}));

jest.unstable_mockModule("@ui", () => ({
  focusInput: jest.fn(),
  setTextContent: jest.fn(),
  createListItem: jest.fn(),
  appendListItemLi: jest.fn(),
}));

let submitTaskSuccessfully;
let addTaskToList;
let clearInputValue;
let focusInput;

beforeAll(async () => {
  const taskModule = await import("@task");
  const uiModule = await import("@ui");
  const handlersModule = await import("@");

  addTaskToList = taskModule.addTaskToList;
  clearInputValue = taskModule.clearInputValue;
  focusInput = uiModule.focusInput;
  submitTaskSuccessfully = handlersModule.submitTaskSuccessfully;
});

describe("submitTaskSuccessfully", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("calls addTaskToList, clearInputValue, and focusInput with correct arguments", () => {
    const fakeList = {};
    const fakeInput = {};

    submitTaskSuccessfully(fakeList, fakeInput);

    expect(addTaskToList).toHaveBeenCalledWith(fakeList, fakeInput);
    expect(clearInputValue).toHaveBeenCalledWith(fakeInput);
    expect(focusInput).toHaveBeenCalledWith(fakeInput);
  });
});
