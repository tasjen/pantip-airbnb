/* eslint-disable @next/next/no-img-element */

'use client';

import { useAppSelector } from '@/libs/hooks';

export default function Highlights() {
  const highlights = useAppSelector((state) => state.dataReducer.highlights);
  return (
    <ul className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-6">
      {highlights.map((e) => (
        <li key={e.id} className="p-2">
          <a href={e.post_url} target="_blank">
            <img
              src={e.image_url[0] ?? ''}
              alt={e.name}
              className="h-auto w-full rounded-lg"
            />
            <p className="mt-2 break-words text-center font-bold">{e.name}</p>
          </a>
        </li>
      ))}
    </ul>
  );
}
