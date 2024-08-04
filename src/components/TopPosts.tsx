/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @next/next/no-img-element */

'use client';

import { MessageSquareText, SquarePlus } from 'lucide-react';

import type { TopPost } from '@/libs/features/data/dataSlice';
import { useAppSelector } from '@/libs/hooks';

type Props = {
  type: TopPost['type'];
};

export default function TopPosts({ type }: Props) {
  const topPosts = useAppSelector((state) => state.dataReducer.topPosts);

  const formatPostDate = (postDate: string): string => {
    const hours =
      (new Date().getTime() - new Date(postDate).getTime()) / 1e3 / 60 / 60;
    if (hours < 1) {
      return `${Math.floor(hours * 60)} นาที`;
    }
    if (hours < 24) {
      return `${Math.floor(hours)} ชั่วโมง`;
    }
    return new Date(postDate)
      .toLocaleString('th-TH', { dateStyle: 'medium' })
      .slice(0, -4);
  };
  return (
    <div className="px-12">
      <h1 className="m-4 ml-6 text-start text-3xl font-bold">
        Pantip {type[0]?.toUpperCase() + type.slice(1)}
      </h1>
      <ul className="grid w-full grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
        {topPosts
          .filter((e) => e.type === type)
          .map((e) => (
            <li key={e.topic_id} className="p-2">
              <a
                href={`https://pantip.com/topic/${e.topic_id}`}
                target="_blank"
              >
                {e.thumbnail_url ? (
                  <img
                    src={e.thumbnail_url ?? ''}
                    alt={e.title}
                    className="mx-auto h-72 w-auto rounded-xl object-contain"
                  />
                ) : (
                  <div className="flex h-72 items-center overflow-hidden text-ellipsis rounded-xl bg-border p-8">
                    <p className="mx-auto text-wrap text-center text-lg font-bold">
                      {e.title}
                    </p>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <p className="mt-2 max-w-[75%] truncate font-bold">
                    {e.title}
                  </p>
                  <div>
                    <MessageSquareText className="mr-1 inline size-4" />
                    <span>{e.comments_count}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <p
                    className=" text-muted-foreground"
                    onClick={() => formatPostDate(e.created_time)}
                  >
                    {e.author.name}
                  </p>
                  <div>
                    <SquarePlus className="mb-0.5 mr-1 inline size-4" />
                    <span>{e.votes_count}</span>
                  </div>
                </div>
                <p className=" text-muted-foreground">
                  {formatPostDate(e.created_time)}
                </p>
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}
