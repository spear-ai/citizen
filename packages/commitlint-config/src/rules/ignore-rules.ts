/**
 * Checks if a commit message should be ignored due to being from dependabot.
 * @param message - The commit message to check.
 * @returns True if the commit message should be ignored, false otherwise.
 */
export const ignoreDependabot = (message: string): boolean => message.includes("dependabot[bot]");
