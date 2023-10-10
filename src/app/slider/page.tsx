import Slider from '@/components/slider/Slider';
import React from 'react';

type Props = {};

export default function SliderPage({}: Props) {
  return (
    <div>
      <Slider sliderSize={600}>
        <Frame>1</Frame>
        <Frame>2</Frame>
        <Frame>3</Frame>
        <Frame>4</Frame>
        <Frame>5</Frame>
        <Frame>6</Frame>
        <Frame>7</Frame>
        <Frame>8</Frame>
        <Frame>9</Frame>
        <Frame>10</Frame>
      </Slider>
    </div>
  );
}

const Frame = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='mx-2 flex h-[100px] min-w-[100px] items-center justify-center bg-red-500 text-white'>
      {children}
    </div>
  );
};
