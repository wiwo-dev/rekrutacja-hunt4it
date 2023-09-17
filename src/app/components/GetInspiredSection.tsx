import React from 'react';

type Props = {};

export default function GetInspiredSection({}: Props) {
  return (
    <div className='space-y-4 rounded-[9px] bg-[#E3E4E7] bg-opacity-[26%] pb-[26px] pt-[8px] text-center'>
      <div>
        <h2 className='text-[20px] font-bold text-persian-red-600'>
          GET INSPIRED!
        </h2>
        <h3 className='text-[20px] font-medium text-black'>
          BEST USERS DESIGN
        </h3>
        <button className='mx-auto flex items-center gap-2 text-[18px] text-[#1E1E1E]'>
          <span>See more</span>
          <img src='graphics/right-arrow.png' alt='right arrow icon' />
        </button>
      </div>
      <img src='graphics/18851834a-2.png' className='mx-auto' alt='image' />
      <div className='relative flex overflow-hidden rounded-[9px] bg-[#E5E5E7]'>
        <input
          placeholder='punk heart, gothic'
          className='h-[48px] w-full rounded-l-[9px] bg-[#E5E5E7] p-[12px] placeholder-black  focus:outline-transparent'
        ></input>
        <button className='group flex h-[48px] items-center justify-center rounded-r-[9px] bg-gradient-to-b from-[#CFCFD0] to-transparent px-4'>
          <span className='transition group-hover:scale-105 group-active:scale-95'>
            ARTISTIC
          </span>
        </button>
      </div>
      <button className='h-[44px] w-[178px] rounded-[7px] bg-persian-red-600 text-[20px] font-semibold text-white transition hover:bg-persian-red-700 active:bg-persian-red-800'>
        <span className='transition group-hover:bg-persian-red-700 group-active:bg-persian-red-800'>
          BUY
        </span>
      </button>
    </div>
  );
}
