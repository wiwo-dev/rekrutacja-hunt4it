'use client';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { exportAsImage } from './utils/canvas-to-html';

const testImages = [
  'https://drive.google.com/uc?export=view&id=1CS4rIB2EmceVb4336Gw8nXL99TNJ5Vso',
  'https://drive.google.com/uc?export=view&id=1SHZCCt22m29CvJJutY7x2nCZFoL5gQ48',
  'https://drive.google.com/uc?export=view&id=12j_Go5Wd1rVn1eWZzsOmaSNTiqDHJKoM',
  'https://drive.google.com/uc?export=view&id=1bDbCCzfamyAujMtwEABOlTKV6y2AdueO',
];

type FormData = {
  aspect: number;
  size: number;
};

type Props = {};

const width = 500;

export default function ImageExport({}: Props) {
  const { register, handleSubmit, watch } = useForm<FormData>({
    defaultValues: {
      aspect: 1 / 1,
      size: 10,
    },
  });

  const aspect = watch('aspect');
  const size = watch('size');
  const onSubmit = (data: any) => console.log(data);

  const exportRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <h1>Image export</h1>
      <div>ImageExport</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <select id='aspect' className='' {...register('aspect')}>
          <option value='none' disabled className='hidden'>
            Select size
          </option>
          <option value={1 / 1}>1x1</option>
          <option value={9 / 16}>9x16</option>
          <option value={4 / 5}>4x5</option>
          <option value={16 / 9}>16x9</option>
        </select>

        <div>
          <label
            htmlFor='default-range'
            className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
          >
            Default range
          </label>
          <input
            id='default-range'
            type='range'
            min={0}
            max={20}
            defaultValue={10}
            className='h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700'
            {...register('size')}
          />
        </div>
      </form>
      <p>Size {size}</p>
      <div
        ref={exportRef}
        className='flex items-center justify-center overflow-hidden border border-gray-700'
        style={{ height: width / aspect, width: width }}
      >
        <img
          src={`/api/image-proxy?url=${encodeURIComponent(testImages[1])}`}
          alt=''
          className='w-full object-contain'
          style={{
            transform: `scale(${size / 10})`,
          }}
        />
      </div>

      <button
        onClick={() => exportAsImage(exportRef.current as HTMLElement, 'test')}
      >
        Capture Image
      </button>
    </>
  );
}
