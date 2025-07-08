import { assertClosest } from "@asserts";

describe("assertClosest", () => {
  let root, parent, child;

  beforeEach(() => {
    // Create the DOM:
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
    document.body.appendChild(root);
  });

  afterEach(() => {
    root.remove();
  });

  test("returns the element itself if it matches the selector", () => {
    const result = assertClosest(child, ".btn");
    expect(result).toBe(child);
  });

  test("returns the closest matching ancestor", () => {
    const result = assertClosest(child, ".section");
    expect(result).toBe(parent);
  });

  test("returns the root element when it matches the selector", () => {
    const result = assertClosest(child, ".container");
    expect(result).toBe(root);
  });

  test("throws if no matching ancestor exists", () => {
    expect(() => assertClosest(child, ".not-exist")).toThrow(TypeError);
    expect(() => assertClosest(child, ".not-exist")).toThrow(
      /<button\.btn>\.closest result.*selector ".not-exist"/i,
    );
  });

  test("throws if first argument is not an Element", () => {
    expect(() => assertClosest(null, ".btn")).toThrow(TypeError);
    expect(() => assertClosest("not-element", ".btn")).toThrow(TypeError);
  });

  test("throws if second argument is not a string", () => {
    expect(() => assertClosest(child, null)).toThrow(TypeError);
    expect(() => assertClosest(child, {})).toThrow(TypeError);
  });
});
