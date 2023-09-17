'use client';
import ColorsScreen from '@/components/ColorsScreen';
import Form from '@/components/Form';
import Loading from '@/components/Loading';
import Modal from '@/components/Modal';
import { stringToColor } from '@/utils/color-helpers';
import { generateColors } from '@/utils/color-server-action';
import React, { useState } from 'react';

type Props = {};

export default function Test({}: Props) {
  const [string, setString] = useState('');
  const [color, setColor] = useState<number[]>([0, 0, 0]);
  const [result, setResult] = useState<string[]>();

  const handleInputChange = (value: string) => {
    setString(value);
    const color = stringToColor(value);
    setColor(color);
  };

  //test version
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log('HANDLE FORM SUBMIT');
    const inputString = formData.get('inputString')?.toString() || '';

    //server action
    const result = await generateColors(inputString);
    if (result) setResult(result);
    //setResult(result)
  };

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

  return (
    <div id='main-frame' className='relative mx-auto max-w-sm'>
      {/* <Modal
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
      </Modal>
      <section className='mx-auto max-w-screen-sm'>
        <Form onSubmitQuery={handleSubmitQuery} />
      </section>
      <section>
        {apiFetchState === 'LOADING' && 'Loading...'}
        {apiFetchState === 'ERROR' && 'There was an error.'}
      </section> */}
      <section>{colorsResult}</section>
      <div>
        <form onSubmit={handleFormSubmit}>
          <input
            onChange={(e) => handleInputChange(e.target.value)}
            name='inputString'
            className='border border-black'
          ></input>
          <p>String: {string}</p>
          <p>
            Color: {color[0]}, {color[1]}, {color[2]}
          </p>
          <button className='border border-persian-red-600' type='submit'>
            GENERATE
          </button>
        </form>

        <p>result: {result}</p>
        <div>
          <h1>RESULT</h1>
          {result && (
            <div className='flex gap-3'>
              <div
                className='h-10 w-10'
                style={{ backgroundColor: result![0] as string }}
              ></div>
              <div
                className='h-10 w-10'
                style={{ backgroundColor: result![1] as string }}
              ></div>
              <div
                className='h-10 w-10'
                style={{ backgroundColor: result![2] as string }}
              ></div>
              <div
                className='h-10 w-10'
                style={{ backgroundColor: result![3] as string }}
              ></div>
              <div
                className='h-10 w-10'
                style={{ backgroundColor: result![4] as string }}
              ></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
