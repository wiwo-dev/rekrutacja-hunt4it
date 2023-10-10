'use client';
import { cn } from '@/utils/tailwind-classes';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import Icon from '@/components/icons/icon';

interface SliderProps {
  children: ReactNode;
  sliderSize?: number;
  sliderStyles?: string;
  arrowSize?: number;
  arrowStyles?: string;
  type?: 'vertical' | 'horizontal';
}

const Slider: React.FC<SliderProps> = ({
  children,
  type = 'horizontal',
  sliderSize,
  arrowStyles,
  arrowSize,
  sliderStyles,
}: SliderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [childDimensions, setChildDimensions] = useState<
    { width: number; height: number }[]
  >([]);
  const [isScrolledToEnd, setIsScrolledToEnd] = useState(false);
  const [isScrolledToStart, setIsScrolledToStart] = useState(true);

  const handleScroll = () => {
    if (containerRef.current) {
      const container = containerRef.current;

      const isStart =
        type === 'horizontal'
          ? container.scrollLeft === 0
          : container.scrollTop === 0;

      const isEnd =
        type === 'horizontal'
          ? container.scrollLeft + container.clientWidth ===
            container.scrollWidth
          : container.scrollTop + container.clientHeight ===
            container.scrollHeight;

      setIsScrolledToEnd(isEnd);
      setIsScrolledToStart(isStart);
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      const childElements = Array.from(containerRef.current.children);

      const dimensions = childElements.map((childElement) => {
        if (childElement instanceof HTMLElement) {
          return {
            width: childElement.offsetWidth,
            height: childElement.offsetHeight,
          };
        } else {
          return {
            width: 0,
            height: 0,
          };
        }
      });

      setChildDimensions(dimensions);
    }

    if (containerRef.current) {
      const container = containerRef.current;
      container.addEventListener('scroll', handleScroll);

      // Clean up the event listener when the component unmounts
      return () => {
        container.removeEventListener('scroll', handleScroll);
      };
    }
  }, [children]);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy(
        type === 'horizontal'
          ? // @ts-ignore
            { left: -1 * childDimensions[0].width, behavior: 'smooth' }
          : // @ts-ignore
            { top: -1 * childDimensions[0].height, behavior: 'smooth' }
      );
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy(
        type === 'horizontal'
          ? // @ts-ignore
            { left: childDimensions[0].width, behavior: 'smooth' }
          : // @ts-ignore
            { top: childDimensions[0].height, behavior: 'smooth' }
      );
    }
  };

  return (
    <div
      className={cn(
        `${sliderStyles}`,
        'relative flex h-auto w-full items-center overflow-hidden',
        {
          'flex-col': type === 'vertical',
        }
      )}
      style={
        type === 'horizontal'
          ? {
              maxWidth: `${sliderSize}px` || 'auto',
              margin: '0 auto',
            }
          : {
              maxHeight: `${sliderSize}px` || 'auto',
            }
      }
    >
      <button
        type='button'
        onClick={scrollLeft}
        className={`text-[36px] ${arrowStyles}`}
        style={arrowSize ? { fontSize: `${arrowSize}px` } : undefined}
      >
        {type === 'horizontal' ? (
          <Icon
            name='chevron-left'
            size={22}
            className={cn(`text-[22px] ${arrowStyles}`, {
              'text-gray-dark': isScrolledToStart,
            })}
          />
        ) : (
          <Icon
            name='chevron-down'
            size={22}
            className={cn(`rotate-180 text-[22px] ${arrowStyles}`, {
              'text-gray-dark': isScrolledToStart,
            })}
          />
        )}
      </button>
      <div
        className={cn(
          `no-scrollbar flex flex-1  snap-x snap-mandatory  overflow-auto scroll-smooth [&>*]:snap-start`,
          {
            'w-full snap-y flex-col': type === 'vertical',
          }
        )}
        ref={containerRef}
      >
        {children}
      </div>
      <button
        type='button'
        onClick={scrollRight}
        className={`text-[26px] ${arrowStyles}`}
      >
        {type === 'horizontal' ? (
          <Icon
            name='chevron-left'
            size={22}
            className={cn(`rotate-180 text-[22px] ${arrowStyles}`, {
              'text-gray-dark': isScrolledToStart,
            })}
          />
        ) : (
          <Icon
            name='chevron-down'
            size={22}
            className={cn(`text-[22px] ${arrowStyles}`, {
              'text-gray-dark': isScrolledToStart,
            })}
          />
        )}
      </button>
    </div>
  );
};

export default Slider;
