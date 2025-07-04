import { hiddenNotValidMessage } from "@features";

describe("hiddenNotValidMessage", () => {
  test("clears textContent on a valid element", () => {
    const div = document.createElement("div");
    div.textContent = "Some error";
    hiddenNotValidMessage(div);
    expect(div.textContent).toBe("");
  });

  test("throws if element is not a real HTMLElement", () => {
    const fakeEl = {};
    expect(() => hiddenNotValidMessage(fakeEl)).toThrow(TypeError);
  });

  test("throws if element does not support textContent (e.g. <img>)", () => {
    const img = document.createElement("img");
    expect(() => hiddenNotValidMessage(img)).toThrow(TypeError);
  });
});
