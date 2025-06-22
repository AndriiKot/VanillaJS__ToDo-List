/**
 * @jest-environment jsdom
 */

import {
  getInputValue,
  clearInput,
  getTrimmedInputValue,
} from "../scripts/ui.js";
import { JSDOM } from "jsdom";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

describe("UI functions", () => {
  let dom;
  let input;

  beforeEach(() => {
    const html = fs.readFileSync(
      path.resolve(__dirname, "../index.html"),
      "utf8",
    );
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document.body.innerHTML = dom.window.document.body.innerHTML;
    input = document.querySelector(".todo__input");
  });

  test("getInputValue returns correct value", () => {
    input.value = "Test task";
    expect(getInputValue(input)).toBe("Test task");
  });

  test("clearInput sets value to empty string", () => {
    input.value = "Clear this";
    clearInput(input);
    expect(input.value).toBe("");
  });

  test("getTrimmedInputValue returns trimmed value", () => {
    input.value = "   Trim me   ";
    expect(getTrimmedInputValue(input)).toBe("Trim me");
  });
});
