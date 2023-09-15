'use client';
import React, { FormEventHandler, useState } from 'react';
import { rgbArrayToHex, stringToColor } from '@/utils/color-helpers';
import { generateColors } from '@/utils/color-server-action';

type Props = {};

export default function Test({}: Props) {
  const [string, setString] = useState('');
  const [color, setColor] = useState<number[]>([0, 0, 0]);
  const [result, setResult] = useState<string[]>();

  const handleInputChange = (value: string) => {
    setString(value);
    const color = stringToColor(value);
    setColor(color);
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log('HANDLE FORM SUBMIT');
    const inputString = formData.get('inputString')?.toString() || '';

    //server action
    const result = await generateColors(inputString);
    if (result) setResult(result);
    //setResult(result)
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          onChange={(e) => handleInputChange(e.target.value)}
          name='inputString'
        ></input>
        <p>String: {string}</p>
        <p>
          Color: {color[0]}, {color[1]}, {color[2]}
        </p>
        <button className='border-persian-red-600 border' type='submit'>
          GENERATE
        </button>
      </form>

      <p>result: {result}</p>
      <div>
        <h1>RESULT</h1>
        {result && (
          <div className='flex gap-3'>
            <div
              className='h-10 w-10'
              style={{ backgroundColor: result![0] as string }}
            ></div>
            <div
              className='h-10 w-10'
              style={{ backgroundColor: result![1] as string }}
            ></div>
            <div
              className='h-10 w-10'
              style={{ backgroundColor: result![2] as string }}
            ></div>
            <div
              className='h-10 w-10'
              style={{ backgroundColor: result![3] as string }}
            ></div>
            <div
              className='h-10 w-10'
              style={{ backgroundColor: result![4] as string }}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
}
