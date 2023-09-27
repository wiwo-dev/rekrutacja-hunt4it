import React, { ButtonHTMLAttributes } from 'react';

type Props = {
  children: React.ReactNode;
  href?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, href, ...buttonProps }: Props) {
  return (
    <button
      {...buttonProps}
      className='h-[44px] w-[178px] rounded-[7px] bg-persian-red-600 text-[20px] font-semibold text-white transition hover:bg-persian-red-700 active:bg-persian-red-800'
    >
      <span className='transition group-hover:bg-persian-red-700 group-active:bg-persian-red-800'>
        {children}
      </span>
    </button>
  );
}
