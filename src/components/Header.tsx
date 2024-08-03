/* eslint-disable jsx-a11y/control-has-associated-label */

'use client';

import { Menu, Search, UserRound } from 'lucide-react';
import type { FormEvent } from 'react';

import { setSearchTerms } from '@/libs/features/search/searchSlice';
import { useAppDispatch, useAppSelector } from '@/libs/hooks';

import PantipLogo from './PantipLogo';
import Rooms from './Rooms';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './shadcn/ui/dropdown-menu';
import { Input } from './shadcn/ui/input';

type Props = {
  className?: string;
};

export default function Header({ className = '' }: Props) {
  const searchTerms = useAppSelector((state) => state.searchReducer.terms);
  const dispatch = useAppDispatch();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    window.open(`https://pantip.com/search?q=${searchTerms}`, '_blank');
  }

  return (
    <header
      className={`sticky top-0 z-50 mx-6 bg-background pt-4 ${className}`}
    >
      <div className="mx-auto max-w-[2400px]">
        <div className="m-4 hidden justify-between md:flex">
          <PantipLogo />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <span className="space-x-4 rounded-full border p-4 transition-shadow duration-150 hover:shadow-md">
                <Menu className="inline size-6" />
                <UserRound className="inline size-6" />
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-4 mt-4">
              <DropdownMenuItem className="font-medium">
                <a href="https://pantip.com/login">เข้าสู่ระบบ / สมัครสมาชิก</a>
              </DropdownMenuItem>
              <DropdownMenuItem className="font-medium">
                <a href="https://pantip.com/login">ตั้งกระทู้</a>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <a href="https://pantip.com">หน้าแรก</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="https://pantip.com/home/feed">My Feed</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="https://pantip.com/home/pick">Pantip Pick</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="https://pantip.com/home/hitz">Pantip Hitz</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="https://pantip.com/home/communities">Explore</a>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <a href="https://pantip.com/point" target="_blank">
                  แลก พ้อย
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="https://pantip.com/activities" target="_blank">
                  กิจกรรมพันทิป
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <form
          className="mx-auto flex items-center gap-2 px-6 pb-4 lg:max-w-[1080px]"
          onSubmit={handleSubmit}
        >
          <Search className="absolute w-12 pl-4 md:hidden" />
          <Input
            type="search"
            value={searchTerms}
            onChange={({ target }) => dispatch(setSearchTerms(target.value))}
            className="h-14 rounded-full pl-14 shadow-md md:pl-8 md:text-xl"
            placeholder="ค้นหาบน Pantip"
          />
          <button
            type="submit"
            className="relative right-16 hidden h-11 w-12 items-center justify-center rounded-full bg-[#ff385c] md:flex"
          >
            <Search className="m-auto size-5 invert" />
          </button>
        </form>
        <Rooms className="-mb-4 px-4 md:mb-4" />
      </div>
    </header>
  );
}
