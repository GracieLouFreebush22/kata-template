import keepLoop from "./keep-up-the-loop"

test.skip("number of loops determine support message", () => {
    expect(keepLoop(4)).toBe("practice makes perfect");
  });