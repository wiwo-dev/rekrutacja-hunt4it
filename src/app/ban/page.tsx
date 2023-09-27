'use client';

import Button from '@/components/Button';
import Modal from '@/components/Modal';
import AlertOctagon from '@/components/icons/alert-octagon';
import X from '@/components/icons/x';
import { useState } from 'react';
import ModalOverlay from './components/modal-overlay';
import BannedWordsModal from './components/banned-words-modal';

type Props = {};

export default function BanPage({}: Props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const toggleModalOpen = () => {
    setModalIsOpen((prev) => !prev);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <main className='relative mx-auto flex max-w-[390px] flex-col items-center justify-center gap-5 border border-black bg-gray-600 py-5'>
        <div>
          <Button onClick={toggleModalOpen}>CLICK</Button>
        </div>

        {modalIsOpen && (
          <ModalOverlay onClose={closeModal}>
            <div className=''>
              <BannedWordsModal onClose={closeModal} />
            </div>
          </ModalOverlay>
        )}

        {/* <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
          <p>Hello</p>
        </Modal> */}
      </main>
    </>
  );
}
