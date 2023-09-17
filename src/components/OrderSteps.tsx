import React from 'react';

type Props = {};

export default function OrderSteps({}: Props) {
  return (
    <section className='relative flex h-[62px]'>
      <div className='absolute left-0 h-[5px] w-2/3 rounded-[5px] bg-persian-red-600'></div>
      <div className='flex h-[24px] w-1/3 flex-wrap items-center justify-center'>
        <div className='relative h-[5px] w-full rounded-[5px] bg-transparent'>
          <div className='absolute left-1/2 top-1/2 flex h-[24px] w-[24px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[9px] bg-persian-red-600 text-[16px] text-white'>
            1
          </div>
        </div>
        <div className='w-full pt-3 text-center text-[14px] font-semibold leading-4 text-persian-red-600'>
          Generate
          <br /> image
        </div>
      </div>
      <div className='flex h-[24px] w-1/3 flex-wrap items-center'>
        <div className='relative h-[5px] w-full rounded-l-[5px] bg-[#E5E5E7]'>
          <div className='absolute left-1/2 top-1/2 flex h-[24px] w-[24px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[9px] bg-[#E5E5E7] text-[16px] text-[#9C9C9C]'>
            2
          </div>
        </div>
        <div className='w-full pt-3 text-center text-[14px] font-semibold leading-4 text-[#C0C1C9]'>
          Choose your product
        </div>
      </div>
      <div className='flex h-[24px] w-1/3 flex-wrap items-center'>
        <div className='relative h-[5px] w-full rounded-r-[5px] bg-[#E5E5E7]'>
          <div className='absolute left-1/2 top-1/2 flex h-[24px] w-[24px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[9px] bg-[#E5E5E7] text-[16px] text-[#9C9C9C]'>
            3
          </div>
        </div>
        <div className='w-full pt-3 text-center text-[14px] font-semibold leading-4 text-[#C0C1C9]'>
          Order
        </div>
      </div>
    </section>
  );
}
