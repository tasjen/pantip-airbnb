/* eslint-disable @next/next/no-img-element */

'use client';

import { useAppSelector } from '@/libs/hooks';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './shadcn/ui/carousel';

type Props = {
  className?: string;
};

export default function Rooms({ className = '' }: Props) {
  const rooms = useAppSelector((state) => state.dataReducer.rooms);
  return (
    <Carousel className={className}>
      <CarouselContent className="mx-8">
        {rooms.map((room) => (
          <CarouselItem key={room.id} className="basis-1/5 md:basis-[12.5%]">
            <a href={room.link_url} target="_blank">
              <img
                src={room.room_icon_url}
                alt={room.name}
                className="mx-auto size-8 opacity-70 invert md:size-12"
              />
              <p className="text-center text-sm font-semibold text-muted-foreground">
                {room.name}
              </p>
            </a>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-8 hidden shadow-white-all md:flex " />
      <CarouselNext className="absolute right-8 hidden shadow-white-all md:flex" />
    </Carousel>
  );
}
