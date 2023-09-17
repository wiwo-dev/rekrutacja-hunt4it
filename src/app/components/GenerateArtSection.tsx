'use client';

import ColorsScreen from '@/components/ColorsScreen';
import Loading from '@/components/Loading';
import Modal from '@/components/Modal';
import Form from '@/components/Form';
import { generateColors } from '@/utils/color-server-action';
import { useEffect, useState } from 'react';

type Props = {};

export default function GenerateArtSection({}: Props) {
  const [apiFetchState, setApiFetchState] = useState<
    'NEW' | 'LOADING' | 'ERROR' | 'DONE'
  >('NEW');
  const [colorsResult, setColorsResult] = useState<string[]>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmitQuery = async (inputText: string) => {
    setApiFetchState('LOADING');
    setIsModalOpen(true);
    try {
      const result = await generateColors(inputText);
      if (result) {
        setApiFetchState('DONE');
        setColorsResult(result);
      }
    } catch (error) {
      setApiFetchState('ERROR');
    }
  };

  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <>
      {ready && (
        <>
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            domNode={document.getElementById('main-frame')!}
          >
            {apiFetchState === 'LOADING' && (
              <Loading>Your art is loading...</Loading>
            )}
            {apiFetchState === 'DONE' && colorsResult && (
              <ColorsScreen colors={colorsResult} />
            )}
            {apiFetchState === 'ERROR' && (
              <div className='flex h-[100svh] items-center justify-center'>
                <p className='text-black'>API Error...</p>
              </div>
            )}
          </Modal>
          <Form onSubmitQuery={handleSubmitQuery} />
        </>
      )}
    </>
  );
}
