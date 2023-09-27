import { AnimatePresence, motion } from 'framer-motion';
import React, { useCallback, useEffect, useState } from 'react';

type Props = {
  onClose: () => void;
  children?: React.ReactNode;
  isOpen: boolean;
};

export default function ModalOverlay({
  onClose,
  children,
  isOpen = true,
}: Props) {
  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
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
      {ready && (
        <AnimatePresence>
          createPortal(
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 100 }}
              exit={{ opacity: 0 }}
              className='fixed left-0 top-0 h-screen w-screen bg-gray-400/30 transition-all'
              onClick={onClose}
            >
              <div className='grid h-screen place-items-center'>
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 100 }}
                  exit={{ y: 30, opacity: 0 }}
                  className='z-50 w-fit'
                  onClick={stopPropagation}
                >
                  {children}
                </motion.div>
              </div>
            </motion.div>
          )}
          , document.body )
        </AnimatePresence>
      )}
    </>
  );
}
