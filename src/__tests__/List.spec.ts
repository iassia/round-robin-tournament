import List from "../list";

describe("List", () => {
  it("simple rotate a list", () => {
    const list = [1, 2, 3, 4];
    const rotated = List.rotate(list);
    expect(rotated).toEqual([2, 3, 4, 1]);
  });

  it("rotate a list with fixed item", () => {
    const list = [1, 2, 3, 4];
    const rotated = List.lockedRotate(list, 1);
    expect(rotated).toEqual([1, 3, 4, 2]);
  });

  it("ignore empty list when rotate", () => {
    const rotated = List.rotate();
    expect(rotated).toEqual([]);
  });

  it("ignore empty list when fixed rotate", () => {
    const rotated = List.lockedRotate();
    expect(rotated).toEqual([]);
  });
});
