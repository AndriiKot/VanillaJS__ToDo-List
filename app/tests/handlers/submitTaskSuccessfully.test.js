import { jest } from "@jest/globals";

jest.unstable_mockModule("@task", () => ({
  addTaskToList: jest.fn(),
  clearInput: jest.fn(),
}));

jest.unstable_mockModule("@ui", () => ({
  inputFocus: jest.fn(),
  setTextContent: jest.fn(),
  createListItem: jest.fn(),
  appendTodoItemLi: jest.fn(),
}));

let submitTaskSuccessfully;
let addTaskToList;
let clearInput;
let inputFocus;

beforeAll(async () => {
  const taskModule = await import("@task");
  const uiModule = await import("@ui");
  const handlersModule = await import("@handlers");

  addTaskToList = taskModule.addTaskToList;
  clearInput = taskModule.clearInput;
  inputFocus = uiModule.inputFocus;
  submitTaskSuccessfully = handlersModule.submitTaskSuccessfully;
});

describe("submitTaskSuccessfully", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("calls addTaskToList, clearInput, and inputFocus with correct arguments", () => {
    const fakeList = {};
    const fakeInput = {};

    submitTaskSuccessfully(fakeList, fakeInput);

    expect(addTaskToList).toHaveBeenCalledWith(fakeList, fakeInput);
    expect(clearInput).toHaveBeenCalledWith(fakeInput);
    expect(inputFocus).toHaveBeenCalledWith(fakeInput);
  });
});
