import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  inputText: string;
};

type Props = {
  onSubmitQuery: (arg0: string) => Promise<void>;
};

export default function QueryForm({ onSubmitQuery }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    //server action
    const result = await onSubmitQuery(data.inputText);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        className={`relative overflow-hidden rounded-[9px] ${
          errors.inputText ? 'border-red-500' : 'border-gray-300'
        }`}
        style={{ boxShadow: '1px 2px 5px 0px #C0C1C9' }}
      >
        <input
          placeholder='What do you want to create?'
          className='h-[48px] w-full rounded-[9px] bg-[#F5F5F6] p-[12px] focus:outline-[#F5F5F6]'
          {...register('inputText', {
            required: {
              value: true,
              message: 'This field is required',
            },
            minLength: {
              value: 3,
              message: 'Your input should be longer than 3 characters.',
            },
            maxLength: {
              value: 15,
              message: 'Your input should not be longer than 15 characters.',
            },
            pattern: {
              value: /^[a-zA-Z0-9\s]+$/,
              message: 'Please enter only letters and numbers',
            },
          })}
        />
        <button
          type='submit'
          className='absolute right-0 top-0 flex h-full w-[53px] items-center justify-center rounded-[9px] bg-persian-red-600 hover:bg-persian-red-700 active:bg-persian-red-800 disabled:bg-persian-red-800'
          disabled={errors.inputText ? true : false}
        >
          <img
            src='graphics/icon-pen-white-1.png'
            alt='pen white icon'
            className=''
          />
        </button>
      </div>
      {errors.inputText && (
        <span className='ml-2 text-xs text-red-500'>
          {errors.inputText.message}
        </span>
      )}
    </form>
  );
}
