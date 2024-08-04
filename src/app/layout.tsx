import '../styles/global.css';

import localFont from 'next/font/local';
import type React from 'react';

import StoreProvider from '@/components/StoreProvider';
import { getPantipData } from '@/libs/data';
import { cn } from '@/libs/utils';

// Font files can be colocated inside of `app`
const AirbnbCerealVF = localFont({
  src: '../../public/assets/fonts/airbnb-cereal-vf.woff2',
  display: 'swap',
});

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  const pantipHomePageData = await getPantipData();
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen overflow-x-hidden main-scroll bg-background text-primary antialiased animate-fadeIn',
          AirbnbCerealVF.className,
        )}
      >
        <StoreProvider data={pantipHomePageData}>{children}</StoreProvider>
      </body>
    </html>
  );
}
