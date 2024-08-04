/* eslint-disable @next/next/no-img-element */

"use client";

import { useAppSelector } from "@/libs/hooks";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

type Props = {
  className?: string;
};

export default function Rooms({ className = "" }: Props) {
  const rooms = useAppSelector((state) => state.dataReducer.rooms);
  const containerRef = useRef<HTMLUListElement>(null);

  const [isLeft, setIsLeft] = useState(true);
  const [isRight, setIsRight] = useState(false);

  const handleScrollLeft = () => {
    containerRef?.current?.scrollBy({ left: -500, behavior: "smooth" });
    setTimeout(() => setIsLeft(containerRef?.current?.scrollLeft === 0), 500);
    setTimeout(
      () =>
        setIsRight(
          (containerRef?.current?.scrollWidth ?? 0) -
            (containerRef?.current?.scrollLeft ?? 0) ===
            containerRef?.current?.clientWidth
        ),
      500
    );
  };

  const handleScrollRight = () => {
    if (!containerRef.current) return;
    containerRef?.current?.scrollBy({ left: 500, behavior: "smooth" });
    setTimeout(() => setIsLeft(containerRef?.current?.scrollLeft === 0), 500);
    setTimeout(
      () =>
        setIsRight(
          Math.abs(
            (containerRef?.current?.clientWidth ?? 0) -
              ((containerRef?.current?.scrollWidth ?? 0) -
                (containerRef?.current?.scrollLeft ?? 0))
          ) <= 8
        ),
      500
    );
  };

  return (
    <ul
      ref={containerRef}
      className={`flex gap-12 overflow-x-auto no-scroll md:mx-8 pb-0 px-4 ${className}`}
    >
      {rooms.map((room) => (
        <li key={room.id} className="shrink-0 grow-0 min-w-0">
          <a href={room.link_url} target="_blank">
            <img
              src={room.room_icon_url}
              alt={room.name}
              className="mx-auto size-8 opacity-70 invert md:size-12"
            />
            <p className="text-center text-xs font-semibold text-muted-foreground">
              {room.name}
            </p>
          </a>
        </li>
      ))}
      {!isLeft && (
        <button
          onClick={handleScrollLeft}
          className="bg-background absolute mt-2 left-8 hidden shadow-white-all md:inline p-1 border-2 rounded-full hover:p-1.5"
        >
          <ChevronLeft className="size-5" />
        </button>
      )}
      {!isRight && (
        <button
          onClick={handleScrollRight}
          className="bg-background absolute mt-2 right-8 hidden shadow-white-all md:inline p-1 border-2 rounded-full hover:p-1.5"
        >
          <ChevronRight className="size-5" />
        </button>
      )}
    </ul>
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
