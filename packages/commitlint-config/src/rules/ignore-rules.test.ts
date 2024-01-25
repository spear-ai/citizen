import { describe, expect, test } from "vitest";
import { ignoreDependabot } from "./ignore-rules";

describe("ignoreDependabot", () => {
  test("Should return true when the message includes `dependabot[bot]`", () => {
    expect(ignoreDependabot("message with dependabot[bot] in it")).toBe(true);
  });

  test("Should return false when the message doesn't include `dependabot[bot]`", () => {
    expect(ignoreDependabot("not-dependabot")).toBe(false);
  });

  test("Should return false when the username is empty", () => {
    expect(ignoreDependabot("")).toBe(false);
  });
});
