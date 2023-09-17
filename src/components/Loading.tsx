import React from 'react';

type Props = { children: string };

export default function Loading({ children }: Props) {
  return (
    <div className='flex h-screen w-full items-center justify-center'>
      <div className='animate-pulse rounded-[9px] bg-persian-red-600 p-4 font-raleway font-semibold text-[#F5F5F6] shadow-md'>
        {children}
      </div>
    </div>
  );
}
