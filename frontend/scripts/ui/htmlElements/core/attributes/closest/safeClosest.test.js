import { safeClosest } from "@ui";

describe("safeClosest", () => {
  let root, parent, child;

  beforeEach(() => {
    // Create the following DOM structure:
    // <div id="root" class="container">
    //   <section class="section">
    //     <button class="btn">Click</button>
    //   </section>
    // </div>
    root = document.createElement("div");
    root.id = "root";
    root.className = "container";

    parent = document.createElement("section");
    parent.className = "section";

    child = document.createElement("button");
    child.className = "btn";

    parent.appendChild(child);
    root.appendChild(parent);
    document.body.appendChild(root); // attach to DOM
  });

  afterEach(() => {
    // Clean up after each test
    root.remove();
  });

  test("returns the element itself if it matches the selector", () => {
    const result = safeClosest(child, ".btn");
    expect(result).toBe(child);
  });

  test("returns the closest matching ancestor", () => {
    const result = safeClosest(child, ".section");
    expect(result).toBe(parent);
  });

  test("returns the root element when it matches the selector", () => {
    const result = safeClosest(child, ".container");
    expect(result).toBe(root);
  });

  test("throws if no matching ancestor exists", () => {
    expect(() => safeClosest(child, ".not-exist")).toThrow(TypeError);
    expect(() => safeClosest(child, ".not-exist")).toThrow(
      /<BUTTON\.btn>\.closest result.*selector ".not-exist"/i,
    );
  });

  test("throws if first argument is not an Element", () => {
    expect(() => safeClosest(null, ".btn")).toThrow(TypeError);
    expect(() => safeClosest("not-element", ".btn")).toThrow(TypeError);
  });

  test("throws if second argument is not a string", () => {
    expect(() => safeClosest(child, null)).toThrow(TypeError);
    expect(() => safeClosest(child, {})).toThrow(TypeError);
  });
});
