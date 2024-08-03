import '../styles/global.css';

import type React from 'react';

import StoreProvider from '@/components/StoreProvider';
import { getPantipHomePageData } from '@/libs/data';
import { cn } from '@/libs/utils';

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  const pantipHomePageData = await getPantipHomePageData();
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn('min-h-screen text-primary bg-background antialiased')}
      >
        <StoreProvider data={pantipHomePageData}>{children}</StoreProvider>
      </body>
    </html>
  );
}
