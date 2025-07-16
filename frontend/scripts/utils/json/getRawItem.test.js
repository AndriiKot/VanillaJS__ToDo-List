import { getRawItem } from "@utils";

describe("getRawItem", () => {
  test("returns value from plain object by key", () => {
    const storage = { foo: "bar", baz: null };
    expect(getRawItem(storage, "foo")).toBe("bar");
  });

  test("returns undefined if key is missing in object", () => {
    const storage = { foo: "bar" };
    expect(getRawItem(storage, "missingKey")).toBeUndefined();
  });

  test("returns null if key value is null", () => {
    const storage = { foo: null };
    expect(getRawItem(storage, "foo")).toBeNull();
  });

  test("throws if key is not a string", () => {
    const storage = { foo: "bar" };
    expect(() => getRawItem(storage, 123)).toThrow();
    expect(() => getRawItem(storage, null)).toThrow();
    expect(() => getRawItem(storage, {})).toThrow();
  });

  test("works with localStorage-like object", () => {
    const storage = {
      getItem(key) {
        return this[key] ?? null;
      },
      foo: "bar",
    };
    expect(getRawItem(storage, "foo")).toBe("bar");
  });
});
