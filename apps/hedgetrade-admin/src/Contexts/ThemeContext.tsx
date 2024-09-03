// src/theme/ThemeContext.tsx

import React, { createContext, useMemo, useState, useEffect, ReactNode } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { getAppTheme } from '../theme/theme';

interface ThemeContextProps {
  toggleColorMode: () => void;
  mode: 'light' | 'dark';
}

export const ColorModeContext = createContext<ThemeContextProps>({
  toggleColorMode: () => {},
  mode: 'dark',
});

interface Props {
  children: ReactNode;
}

export const CustomThemeProvider: React.FC<Props> = ({ children }) => {
  const [mode, setMode] = useState<'light' | 'dark'>('dark'); // Default to dark mode

  // Load mode from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('themeMode') as 'light' | 'dark' | null;
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === 'light' ? 'dark' : 'light';
          localStorage.setItem('themeMode', newMode); // Save to localStorage
          return newMode;
        });
      },
      mode,
    }),
    [mode]
  );

  const theme = useMemo(() => getAppTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
