'use server';

import { rgbArrayToHex, stringToColor } from './color-helpers';

export async function generateColors(inputString: string) {
  console.log('SERVER ACTION');
  console.log(inputString);

  const color = stringToColor(inputString);
  let result;

  //to slow down the API for testing
  await new Promise((res) => {
    setTimeout(() => {
      res('');
    }, 200);
  });

  try {
    const response = await fetch('http://colormind.io/api/', {
      cache: 'no-cache',
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        input: [color, 'N', 'N', 'N', 'N'],
        model: 'default',
      }),
    });

    const data = await response.json();

    result = [
      rgbArrayToHex(data.result[0] as [number, number, number]),
      rgbArrayToHex(data.result[1] as [number, number, number]),
      rgbArrayToHex(data.result[2] as [number, number, number]),
      rgbArrayToHex(data.result[3] as [number, number, number]),
      rgbArrayToHex(data.result[4] as [number, number, number]),
    ];
    console.log(result);
    return result;
  } catch (error) {
    console.log('SERVER ACTION ERROR');
    throw error;
  }
}
