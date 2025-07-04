import { handleInput } from "@features";

describe("handleInput", () => {
  let validationMsg;

  beforeEach(() => {
    validationMsg = document.createElement("div");
    validationMsg.textContent = "Task cannot be empty";
    document.body.appendChild(validationMsg);
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  test("clears the validation message content", () => {
    const handler = handleInput(validationMsg);
    handler();

    expect(validationMsg.textContent).toBe("");
  });
});
