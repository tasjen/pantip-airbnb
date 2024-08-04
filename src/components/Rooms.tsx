/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable @next/next/no-img-element */

'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState } from 'react';

import { useAppSelector } from '@/libs/hooks';

type Props = {
  className?: string;
};

export default function Rooms({ className = '' }: Props) {
  const rooms = useAppSelector((state) => state.dataReducer.rooms);
  const containerRef = useRef<HTMLUListElement>(null);

  const [isLeft, setIsLeft] = useState(true);
  const [isRight, setIsRight] = useState(false);

  const handleScrollLeft = () => {
    containerRef?.current?.scrollBy({
      left: -((containerRef?.current?.clientWidth ?? 0) / 1.5),
      behavior: 'smooth',
    });
    setTimeout(() => setIsLeft(containerRef?.current?.scrollLeft === 0), 500);
    setTimeout(
      () =>
        setIsRight(
          (containerRef?.current?.scrollWidth ?? 0) -
            (containerRef?.current?.scrollLeft ?? 0) ===
            containerRef?.current?.clientWidth,
        ),
      500,
    );
  };

  const handleScrollRight = () => {
    if (!containerRef.current) return;
    containerRef?.current?.scrollBy({
      left: (containerRef?.current?.clientWidth ?? 0) / 1.5,
      behavior: 'smooth',
    });
    setTimeout(() => setIsLeft(containerRef?.current?.scrollLeft === 0), 500);
    setTimeout(
      () =>
        setIsRight(
          Math.abs(
            (containerRef?.current?.clientWidth ?? 0) -
              ((containerRef?.current?.scrollWidth ?? 0) -
                (containerRef?.current?.scrollLeft ?? 0)),
          ) <= 8,
        ),
      500,
    );
  };

  return (
    <div className="flex items-center md:mx-8 md:mt-4">
      {!isLeft && (
        <button
          onClick={handleScrollLeft}
          className="mb-4 hidden h-8 rounded-full border bg-background p-1 shadow-white-all hover:p-1.5 md:inline"
        >
          <ChevronLeft className="size-5" />
        </button>
      )}
      <ul
        ref={containerRef}
        className={`no-scroll flex gap-12 overflow-x-auto px-4 pb-0 md:mx-8 ${className}`}
      >
        {rooms.map((room) => (
          <li
            key={room.id}
            className="box-border min-w-0 shrink-0 grow-0 border-background opacity-70 transition-colors hover:border-border hover:opacity-90 md:border-b-4 md:pb-2"
          >
            <a href={room.link_url} target="_blank">
              <img
                src={room.room_icon_url}
                alt={room.name}
                className="mx-auto size-8 invert md:size-12"
              />
              <p className="text-center text-xs font-semibold">{room.name}</p>
            </a>
          </li>
        ))}
      </ul>
      {!isRight && (
        <button
          onClick={handleScrollRight}
          className="mb-4 hidden h-8 rounded-full border bg-background p-1 shadow-white-all hover:p-1.5 md:inline"
        >
          <ChevronRight className="size-5" />
        </button>
      )}
    </div>
  );
}

// shadcn version

// import { useAppSelector } from '@/libs/hooks';

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from './shadcn/ui/carousel';

// type Props = {
//   className?: string;
// };

// export default function Rooms({ className = '' }: Props) {
//   const rooms = useAppSelector((state) => state.dataReducer.rooms);
//   return (
//     <Carousel className={`-mx-10 md:mx-0 pb-4 px-4 md:mb-4 ${className}`}>
//       <CarouselContent className="mx-8">
//         {rooms.map((room) => (
//           <CarouselItem key={room.id} className="basis-[25%] md:basis-[12.5%] max-w-28">
//             <a href={room.link_url} target="_blank">
//               <img
//                 src={room.room_icon_url}
//                 alt={room.name}
//                 className="mx-auto size-8 opacity-70 invert md:size-12"
//               />
//               <p className="text-center text-xs font-semibold text-muted-foreground">
//                 {room.name}
//               </p>
//             </a>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious className="absolute left-8 hidden shadow-white-all md:flex " />
//       <CarouselNext className="absolute right-8 hidden shadow-white-all md:flex" />
//     </Carousel>
//   );
// }
