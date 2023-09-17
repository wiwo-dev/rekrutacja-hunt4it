import React, { useEffect, useCallback, ReactNode } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  domNode?: HTMLElement;
};

export default function Modal({
  isOpen,
  onClose,
  children,
  domNode = document.body,
}: Props) {
  const closeModal = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  return (
    <>
      {isOpen &&
        createPortal(
          <div className={`sticky inset-0 z-50`}>
            <div className='relative h-screen w-full bg-white bg-opacity-90'>
              <button
                className='absolute right-0 top-0 m-4 p-2 text-gray-600 hover:text-gray-800'
                onClick={closeModal}
              >
                <span>&times;</span>
              </button>
              <div>{children}</div>
            </div>
          </div>,
          domNode
        )}
    </>
  );
}
