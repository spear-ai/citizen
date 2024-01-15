import { ignoreDependabot } from "../src/rules/ignore-rules";

describe("ignoreDependabot", () => {
  test("should return true when the message includes `dependabot[bot]`", () => {
    expect(ignoreDependabot("message with dependabot[bot] in it")).toBe(true);
  });

  test("should return false when the message does not include `dependabot[bot]`", () => {
    expect(ignoreDependabot("not-dependabot")).toBe(false);
  });

  test("should return false when the username is an empty string", () => {
    expect(ignoreDependabot("")).toBe(false);
  });
});
