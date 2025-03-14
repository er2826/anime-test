import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material";
import React from "react";

const appTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ff5733", // Orange color from the Remunera logo
    },
    secondary: {
      main: "#e4d9d7", // Light text color
    },
    background: {
      default: "#0d0402", // Dark background color
      paper: "#0d0402",
    },
    text: {
      primary: "#e4d9d7", // Light text color
      secondary: "#ebd5d09e", // Faded light text color
    },
    error: {
      main: "#dc1b24",
    },
    divider: "#b5979033",
  },
  typography: {
    fontFamily: "'Public_Sans', 'Helvetica', sans-serif",
    h1: {
      fontFamily: "'Roboto_Serif', 'Helvetica', serif",
      fontSize: "120px",
      fontWeight: 700,
      letterSpacing: "-2.40px",
      lineHeight: "120px",
    },
    h2: {
      fontFamily: "'Roboto_Serif', 'Helvetica', serif",
      fontSize: "48px",
      fontWeight: 700,
      letterSpacing: "-0.96px",
      lineHeight: "52px",
    },
    h3: {
      fontFamily: "'Sen', 'Helvetica', sans-serif",
      fontSize: "42px",
      fontWeight: 700,
      letterSpacing: "-1.68px",
      lineHeight: "42px",
    },
    h4: {
      fontFamily: "'Sen', 'Helvetica', sans-serif",
      fontSize: "28px",
      fontWeight: 700,
      letterSpacing: "-1.12px",
      lineHeight: "28px",
    },
    subtitle1: {
      fontSize: "24px",
      fontWeight: 400,
      letterSpacing: "-0.12px",
      lineHeight: "32px",
    },
    subtitle2: {
      fontSize: "20px",
      fontWeight: 400,
      letterSpacing: "-0.10px",
      lineHeight: "24px",
    },
    body1: {
      fontSize: "15px",
      fontWeight: 400,
      letterSpacing: "-0.07px",
      lineHeight: "20px",
    },
    body2: {
      fontSize: "15px",
      fontWeight: 400,
      letterSpacing: "0",
      lineHeight: "20px",
      color: "#ebd5d09e",
    },
    button: {
      fontSize: "15px",
      fontWeight: 500,
      letterSpacing: "0",
      lineHeight: "20px",
      textTransform: "none",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#0d0402",
          color: "#e4d9d7",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "8px",
          padding: "12px 24px",
          fontWeight: 500,
        },
        contained: {
          backgroundColor: "#ff5733",
          color: "#050000",
          "&:hover": {
            backgroundColor: "#e64a29",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#e0beb71f",
          borderRadius: "16px",
          border: "1.5px solid transparent",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "#b5979033",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#0d0402",
          boxShadow: "none",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.text.primary,
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
          },
        }),
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: "48px",
          height: "48px",
        },
      },
    },
  },
});

export const ThemeProvider = ({ children }) => {
  return (
    <MuiThemeProvider theme={appTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
