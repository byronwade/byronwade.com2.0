'use client';

import * as React from 'react';
import {
  ThemeProvider as MaterialTailwindThemeProvider,
  Button,
  IconButton
} from '@material-tailwind/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export { Button, IconButton };

export function CombinedThemeProvider({ children, ...props }) {
  return (
    <NextThemesProvider {...props}>
      <MaterialTailwindThemeProvider>{children}</MaterialTailwindThemeProvider>
    </NextThemesProvider>
  );
}
