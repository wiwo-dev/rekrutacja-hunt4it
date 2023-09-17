import React from 'react';

type Props = { colors: string[] };

export default function ColorsScreen({ colors }: Props) {
  return (
    <div className='flex h-[100svh] w-full flex-col justify-between gap-5'>
      {colors.map((color, key) => (
        <div
          style={{ backgroundColor: color }}
          className='flex flex-grow items-center justify-center font-raleway text-xs text-white'
        >
          <p>{color}</p>
        </div>
      ))}
    </div>
  );
}
