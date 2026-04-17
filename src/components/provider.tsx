'use client';

import { RootProvider } from 'fumadocs-ui/provider/next';
import type { ReactNode } from 'react';

if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  const orig = console.error;
  console.error = (...args: unknown[]) => {
    if (typeof args[0] === 'string' && args[0].includes('Encountered a script tag')) return;
    orig.apply(console, args);
  };
}

export function Provider({
  children,
  i18n,
}: {
  children: ReactNode;
  i18n: Parameters<typeof RootProvider>[0]['i18n'];
}) {
  return (
    <RootProvider
      i18n={i18n}
      theme={{
        enableSystem: false,
        attribute: 'class',
        defaultTheme: 'dark',
        themes: ['dark', 'zen'],
        disableTransitionOnChange: true,
      }}
    >
      {children}
    </RootProvider>
  );
}
