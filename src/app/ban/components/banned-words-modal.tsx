import AlertOctagon from '@/components/icons/alert-octagon';
import X from '@/components/icons/x';
import React from 'react';

const texts = [
  {
    headline: 'Hey, try a different approach!',
    body: "Those words are on our no-go list. Show us what else you've got up your sleeve!",
  },
  {
    headline: 'Oops!',
    body: 'Looks like you\'ve hit a few of our "word-taboos". Try again, but no funny business this time!',
  },
  {
    headline: 'I know you can do better! ',
    body: 'Those words are off-limits here. Rise to the challenge and give it another shot!',
  },
  {
    headline: 'Hey, small tweak needed!',
    body: "Those words are off the table. Input something different, and we'll help you craft something amazing",
  },
];

type Props = { onClose: () => void };

export default function BannedWordsModal({ onClose }: Props) {
  //const versionNumber = Math.floor(Math.random() * 4);
  const versionNumber = 1;

  return (
    <div
      className='relative flex w-[340px] flex-col items-center gap-4 rounded bg-[#F4F4F7] p-4 pt-8 text-center font-raleway text-base font-semibold antialiased shadow-sm'
      style={{ fontVariantLigatures: 'no-common-ligatures' }}
    >
      <button className='absolute right-5 top-4' onClick={onClose}>
        <X />
      </button>
      <div className='absolute left-5 top-8'>
        <AlertOctagon />
      </div>
      <div className='space-y-5'>
        <p className='min-h-[30px] px-12'>{texts[versionNumber].headline}</p>

        <p className='px-6'>{texts[versionNumber].body}</p>
      </div>
      {/* <Button>TRY AGAIN!</Button> */}
      <button
        onClick={onClose}
        className='h-[34px] w-[139px] rounded bg-persian-red-600 text-sm font-semibold text-white transition hover:bg-persian-red-700 active:bg-persian-red-800'
      >
        <span className='transition group-hover:bg-persian-red-700 group-active:bg-persian-red-800'>
          TRY AGAIN!
        </span>
      </button>
    </div>
  );
}
