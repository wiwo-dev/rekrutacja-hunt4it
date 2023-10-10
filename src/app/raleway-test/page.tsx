import React from 'react';

type Props = {};

export default function RalewayTest({}: Props) {
  return (
    <div className='ml-6 mt-6 font-raleway text-xl font-bold antialiased'>
      <code className='text-sm'>{`style={{ fontVariantNumeric: 'lining-nums' }}`}</code>
      <p style={{ fontVariantNumeric: 'lining-nums' }}>1234567890</p>
      <br />
      <code className='text-sm'>{`style={{ fontVariantNumeric: 'normal' }}`}</code>
      <p style={{ fontVariantNumeric: 'normal' }}>1234567890</p>

      <br />
      <code className='text-sm'>{`style={{ fontVariantLigatures: 'no-common-ligatures'`}</code>
      <p style={{ fontVariantLigatures: 'no-common-ligatures' }}>ffffff</p>

      <br />
      <code className='text-sm'>{`style={{ fontVariantLigatures: 'normal' }}`}</code>
      <p style={{ fontVariantLigatures: 'normal' }}>ffffff</p>
    </div>
  );
}
