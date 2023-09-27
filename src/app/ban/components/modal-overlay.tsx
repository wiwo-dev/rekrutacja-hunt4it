import React from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

type Props = { onClose: () => void; children?: React.ReactNode };

export default function ModalOverlay({ onClose, children }: Props) {
  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  return (
    <>
      {createPortal(
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          className='fixed left-0 top-0 h-screen w-screen bg-gray-400/30 transition-all'
          onClick={onClose}
        >
          <div className='grid h-screen place-items-center'>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 100 }}
              className='z-50 w-fit'
              onClick={stopPropagation}
            >
              {children}
            </motion.div>
          </div>
        </motion.div>,
        document.body
      )}
    </>
  );
}
