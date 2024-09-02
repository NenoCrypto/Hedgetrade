import { defaultTheme } from "react-admin";
import { createTheme, ThemeOptions } from "@material-ui/core/styles";
import { merge } from "lodash";
import createPalette from "@material-ui/core/styles/createPalette";

const palette = createPalette(
  merge({}, defaultTheme.palette, {
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
  })
);

const themeOptions: ThemeOptions = {
  palette,
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontSize: 12,
  },


};

export const theme = createTheme(merge({}, defaultTheme, themeOptions));

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
};

theme.typography.h4 = {
  fontSize: '0.6rem',
  '@media (min-width:600px)': {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1rem',
  },
};

theme.typography.body2 = {
  fontSize: '0.6rem',
  '@media (min-width:600px)': {
    fontSize: '0.6rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '0.6rem',
  },
};

