import React from 'react';

type Props = {};

export default function StylePreviewSection({}: Props) {
  return (
    <div
      style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}
      className='flex  overflow-hidden rounded-[9px] bg-[#E3E4E7] bg-opacity-[86%]'
    >
      <div className='relative mx-auto w-1/2 space-y-1 bg-[#F9F9FA] py-3 text-center'>
        <p className='text-[13px] font-semibold'>Style preview</p>
        <img src='graphics/OPQ72O0-10.png' className='mx-auto' alt='image' />
        <img
          src='graphics/arrow-down-sign-to-navigate.png'
          className='absolute left-[8px] top-[16px]'
          alt='arrow icon'
        />
      </div>
      <div className='flex w-1/2 justify-center gap-2 bg-[#F3F3F4] text-center'>
        <div className='flex items-center'>
          <img src='graphics/scrolling.png' alt='scrolling icon' />
        </div>
        <div className='flex h-full flex-col items-center justify-center space-y-2'>
          <button className='text-[14px] font-semibold'>MINIMALISTIC</button>
          <button
            className='rounded-[7px] bg-persian-red-600 px-[20px] py-[10px] text-[16px] font-semibold text-[#F5F5F6]'
            style={{
              boxShadow: '4px 4px 10px 0px rgba(64, 53, 53, 0.49) inset',
              filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
            }}
          >
            CARTOON
          </button>

          <button className='flex items-center justify-center gap-1'>
            <img
              src='graphics/padlock-2.png'
              alt='padlock icon'
              className='translate-y-[2px]'
            />
            <span
              className='font-outline-1 pr-1 text-[14px] font-semibold text-white'
              style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
            >
              ARTISTIC
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
