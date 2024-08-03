/* eslint-disable import/no-extraneous-dependencies */

'use client';

import { useRef } from 'react';
import { Provider } from 'react-redux';

import type { DataState } from '@/libs/features/data/dataSlice';
import { initializeData } from '@/libs/features/data/dataSlice';

import type { AppStore } from '../libs/store';
import { makeStore } from '../libs/store';

export default function StoreProvider({
  data,
  children,
}: {
  data: DataState;
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
    storeRef.current.dispatch(initializeData(data));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
