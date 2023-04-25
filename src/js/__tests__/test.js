import game from "../app";

describe("game tests", () => {
  test("game function", () => {
    expect(game).toBeInstanceOf(Function);
  });
});
