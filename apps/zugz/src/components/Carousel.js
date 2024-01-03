'use client';
import React from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '../components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import AutoHeight from 'embla-carousel-auto-height';

export default function HeroCarousel() {
  return (
    <Carousel
      className="overflow-hidden bg-black rounded-md"
      plugins={[
        Autoplay({
          delay: 5000
        }),
        AutoHeight()
      ]}
    >
      <CarouselContent>
        <CarouselItem>
          <div className="flex flex-row w-full h-full">
            <div className="w-1/2 h-full">
              <h1 className="text-4xl font-bold text-white">ZugZug</h1>
            </div>
            <div className="w-1/2 h-full">
              <Image
                className="w-full height-full"
                src="/images/bg/bg.png"
                alt="ZugZug"
                width={2000}
                height={2000}
              />
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>...</CarouselItem>
        <CarouselItem>...</CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
