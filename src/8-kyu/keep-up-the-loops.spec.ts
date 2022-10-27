import keepLoop from "./keep-up-the-loop"

test("number of loops determine support message", () => {
    expect(keepLoop(4)).toBe("practice makes perfect");
  });