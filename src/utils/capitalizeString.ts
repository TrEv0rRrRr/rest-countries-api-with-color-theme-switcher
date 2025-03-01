/**
 * Capitalizes the first letter of a given string.
 *
 * @param text - The string to be capitalized.
 * @returns The input string with the first letter capitalized.
 */
export const capitalizeString = (text: string): string => {
  const capitalLetter = text.charAt(0).toUpperCase();
  const restOfText = text.substring(1);

  return capitalLetter.concat(restOfText);
};

export default capitalizeString;
