'use client';
import { Search } from 'lucide-react';
import type { FormEvent } from 'react';

import { setSearchTerms } from '@/libs/features/search/searchSlice';
import { useAppDispatch, useAppSelector } from '@/libs/hooks';
import { Input } from './shadcn/ui/input';

export default function SearchBar() {
  const searchTerms = useAppSelector((state) => state.searchReducer.terms);
  const dispatch = useAppDispatch();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    window.open(`https://pantip.com/search?q=${searchTerms}`, '_blank');
  }
  return (
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
  )
}