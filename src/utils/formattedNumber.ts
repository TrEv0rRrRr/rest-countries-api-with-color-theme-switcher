/**
 * Formats a number to a string with comma as thousands separator and two decimal places.
 *
 * @param num - The number to format.
 * @returns The formatted number as a string.
 */
export const formattedNumber = (num: number) =>
  num.toLocaleString("en-GB", {
    maximumFractionDigits: 3,
  });

export default formattedNumber;
