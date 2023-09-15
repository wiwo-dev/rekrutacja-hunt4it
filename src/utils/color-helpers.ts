import * as crypto from 'crypto-js'; // Make sure to install the crypto-js library

/**
 * Function to generate a consistent color as an RGB array from a string input.
 *
 * @param inputString - The input string to be hashed and converted into a color.
 * @returns An array of three integers representing the RGB color values (0 to 255).
 *
 * Example:
 *   stringToColor('example') returns [46, 200, 14].
 */
export function stringToColor(inputString: string): [number, number, number] {
  // Create a hash of the input string using SHA-256
  const hash = sha256(inputString);

  // Extract a portion of the hash to represent the color (e.g., first 6 characters)
  const colorHex = hash.slice(0, 6);

  // Convert the hexadecimal color to RGB values
  const r = parseInt(colorHex.slice(0, 2), 16);
  const g = parseInt(colorHex.slice(2, 4), 16);
  const b = parseInt(colorHex.slice(4, 6), 16);

  // Return the color as an RGB array
  return [r, g, b];
}

// SHA-256 hashing function
function sha256(input: string): string {
  return crypto.SHA256(input).toString(crypto.enc.Hex);
}

/**
 * Converts an RGB color represented as an array of integers to a hexadecimal color code.
 *
 * @param rgbArray - An array of three integers representing RGB values (0 to 255).
 * @returns A hexadecimal color code string in the format '#RRGGBB'.
 * @throws Error if the input is invalid or out of range.
 *
 * Example:
 *   rgbArrayToHex([255, 0, 128]) returns '#FF0080'.
 */
export function rgbArrayToHex(rgbArray: [number, number, number]): string {
  // Ensure that each element of the input array is within the valid range (0 to 255)
  if (
    rgbArray.some((value) => value < 0 || value > 255) ||
    rgbArray.length !== 3
  ) {
    throw new Error(
      'Input must be a valid RGB array with values between 0 and 255.'
    );
  }

  // Convert the individual elements of the array to hexadecimal strings
  const hexValues = rgbArray.map((value) =>
    value.toString(16).toUpperCase().padStart(2, '0')
  );

  // Join the hexadecimal values to form the final hex color code
  return `#${hexValues.join('')}`;
}
