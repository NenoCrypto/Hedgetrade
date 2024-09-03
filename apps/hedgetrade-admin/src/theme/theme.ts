// src/theme/theme.ts

import { defaultTheme } from "react-admin";
import { createTheme, ThemeOptions } from "@material-ui/core/styles";
import { merge } from "lodash";
import createPalette from "@material-ui/core/styles/createPalette";
import { responsiveFontSizes } from "@material-ui/core/styles";

// Define custom palette for dark and light modes
const getPalette = (mode: any) => {
  return createPalette(
    merge({}, defaultTheme.palette, {
      mode,
      primary: {
        main: "#20a4f3",
      },
      secondary: {
        main: "#7950ed",
      },
      error: {
        main: "#e93c51",
      },
      warning: {
        main: "#f6aa50",
      },
      info: {
        main: "#144bc1",
      },
      success: {
        main: "#31c587",
      },
      background: {
        default: mode === "dark" ? "#111111" : "#f5f5f5", // Dark mode background set to #111111
        paper: mode === "dark" ? "#1e1e1e" : "#ffffff",
      },
    })
  );
};

// Define typography with responsive font sizes
const getTypography = () => ({
  fontSize: 12,
  h3: {
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
      fontSize: '1.5rem',
    },
    // [theme.breakpoints.up('md')]: {
    //   fontSize: '2.4rem',
    // },
  },
  h4: {
    fontSize: '0.6rem',
    '@media (min-width:600px)': {
      fontSize: '1rem',
    },
    // [defaultTheme.breakpoints.up('md')]: {
    //   fontSize: '1rem',
    // },
  },
  body2: {
    fontSize: '0.6rem',
    '@media (min-width:600px)': {
      fontSize: '0.6rem',
    },
    // [defaultTheme.breakpoints.up('md')]: {
    //   fontSize: '0.6rem',
    // },
  },
});

// Define function to create theme based on mode
export const getAppTheme = (mode: any): any => {
  const palette = getPalette(mode);
  const typography = getTypography();

  const themeOptions: ThemeOptions = {
    palette,
    typography,
    // You can add more customizations here (e.g., spacing, overrides)
  };

  let theme = createTheme(merge({}, defaultTheme, themeOptions));
  theme = responsiveFontSizes(theme);

  // Additional typography adjustments if needed
  theme.typography.h3 = {
    ...theme.typography.h3,
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.4rem',
    },
  };

  theme.typography.h4 = {
    ...theme.typography.h4,
    fontSize: '0.6rem',
    '@media (min-width:600px)': {
      fontSize: '1rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1rem',
    },
  };

  theme.typography.body2 = {
    ...theme.typography.body2,
    fontSize: '0.6rem',
    '@media (min-width:600px)': {
      fontSize: '0.6rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '0.6rem',
    },
  };

  return theme;
};
