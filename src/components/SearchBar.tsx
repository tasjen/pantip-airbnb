/* eslint-disable jsx-a11y/control-has-associated-label */

'use client';

import clsx from 'clsx';
import { Search } from 'lucide-react';
import { type FormEvent, useEffect, useState } from 'react';

import { setSearchTerms } from '@/libs/features/search/searchSlice';
import { useAppDispatch, useAppSelector } from '@/libs/hooks';

import { Input } from './shadcn/ui/input';

export default function SearchBar() {
  const [isAtTop, setIsAtTop] = useState(true);
  const searchTerms = useAppSelector((state) => state.searchReducer.terms);
  const dispatch = useAppDispatch();

  const handleScroll = () => {
    setIsAtTop(window.scrollY === 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    window.open(`https://pantip.com/search?q=${searchTerms}`, '_blank');
  };
  return (
    <form
      className={clsx(
        'mx-auto flex items-center gap-2 px-6 pb-4 lg:max-w-[1080px]',
        !isAtTop
          ? 'md:-mb-16 md:animate-moveUpScaleDown'
          : 'md:animate-moveDownScaleUp',
      )}
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
  );
}
