/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @next/next/no-img-element */

'use client';

import type { TopPost } from '@/libs/features/data/dataSlice';
import { useAppSelector } from '@/libs/hooks';

type Props = {
  type: TopPost['type'];
};

export default function PantipTopPosts({ type }: Props) {
  const topPosts = useAppSelector((state) => state.dataReducer.topPosts);
  return (
    <>
      <h1 className="m-4 ml-6 text-start text-3xl font-bold">
        Pantip {type[0]?.toUpperCase() + type.slice(1)}
      </h1>
      <ul className="grid w-full grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6">
        {topPosts
          .filter((e) => e.type === type)
          .map((e) => (
            <li key={e.topic_id} className="p-2">
              <a
                href={`https://pantip.com/topic/${e.topic_id}`}
                target="_blank"
              >
                {e.thumbnail_url ? (
                  <>
                    <img
                      src={e.thumbnail_url ?? ''}
                      alt={e.title}
                      className="h-64 w-auto object-contain rounded-xl mx-auto"
                    />
                    <p className="mt-2 font-bold truncate max-w-[80%]">
                      {e.title}
                    </p>
                  </>
                ) : (
                  <div className="flex h-64 items-center rounded-xl bg-border p-8 overflow-hidden text-ellipsis">
                    <p className="text-lg font-bold text-center text-wrap mx-auto">{e.title}</p>
                  </div>
                )}
                <p className="mt-2 text-muted-foreground">{e.author.name}</p>
              </a>
            </li>
          ))}
      </ul>
    </>
  );
}
