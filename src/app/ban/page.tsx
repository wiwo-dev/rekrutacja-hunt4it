'use client';

import Button from '@/components/Button';
import { useCallback, useEffect, useState } from 'react';
import BannedWordsModal from './components/banned-words-modal';
import ModalOverlay from './components/modal-overlay';

type Props = {};

export default function BanPage({}: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModalOpen = () => {
    setIsModalOpen((prev) => !prev);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <main className='relative mx-auto flex max-w-[390px] flex-col items-center justify-center gap-5 border border-black bg-gray-600 py-5'>
        <div>
          <Button onClick={toggleModalOpen}>CLICK</Button>
        </div>

        <ModalOverlay onClose={closeModal} isOpen={isModalOpen}>
          <BannedWordsModal onClose={closeModal} />
        </ModalOverlay>

        {/* <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
          <p>Hello</p>
        </Modal> */}
      </main>
    </>
  );
}
