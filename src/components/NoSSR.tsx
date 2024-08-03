'use client';

import { type ReactNode, useEffect, useState } from 'react';

type Props = {
  children: ReactNode;
};

export default function NoSSR({ children }: Props) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient && children;
}
