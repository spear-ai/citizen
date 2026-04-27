/**
 * Checks if a commit message should be ignored due to being from Dependabot.
 * @param message - The commit message to check.
 * @returns True if the commit message should be ignored, false otherwise.
 */
// eslint-disable-next-line sonarjs/null-dereference
export const ignoreDependabot = (message: string): boolean => message.includes("dependabot[bot]");
