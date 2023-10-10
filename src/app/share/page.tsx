'use client';

import { useState } from 'react';

type Props = {};

export default function ShareTestPage({}: Props) {
  const [message, setMessage] = useState('');

  const handleShare = () => {
    // Check if the Web Share API is supported
    if (!navigator.canShare) {
      navigator
        .share({
          title: 'Check out this image!',
          text: 'I wanted to share this cool image with you.',
          url: window.location.origin + '/share/share-1.png',
        })
        .then(() => {
          setMessage('Success!');
        })
        .catch((error) => {
          console.log('Error sharing:', error);
          setMessage('Error!' + error);
        });
    } else {
      setMessage('Web Share API is not supported in your browser.');
      console.log('Web Share API is not supported in your browser.');
    }
  };

  const shareImageAsset = async (): Promise<void> => {
    const response = await fetch('/share/share-3.png');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const imageBlob = await response.blob();

    const filesArray = [
      new File([imageBlob], `title.png`, {
        type: 'image/png',
        lastModified: new Date().getTime(),
      }),
    ];
    const shareData = {
      //title: `title`,
      files: filesArray,
    };

    if (navigator.canShare && navigator.canShare(shareData)) {
      setMessage('can share');
      return navigator.share(shareData);
    } else {
      setMessage('cannot share');
      return Promise.reject(new Error('cannot share'));
    }
  };
  return (
    <>
      <p>Message: {message}</p>
      <div className='mx-auto flex max-w-screen-sm flex-col gap-4'>
        <a
          className='h-10 rounded-lg bg-red-400'
          href='instagram://story-camera'
        >
          instagram://story-camera
        </a>
        <a
          className='h-10 rounded-lg bg-red-400'
          href='instagram-stories://share'
        >
          instagram-stories://share
        </a>
      </div>
      <div>
        <button onClick={handleShare}>SHARE</button>
      </div>
      <div>
        <img src='/share/share-3.png' className='' onClick={shareImageAsset} />
        <button className='bg-green-400 p-4' onClick={shareImageAsset}>
          SHARE2
        </button>
      </div>
    </>
  );
}
