import { createTheme, adaptV4Theme } from "@mui/material/styles";

let theme = createTheme(
  adaptV4Theme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 320,
        md: 600,
        lg: 1024,
        xl: 1330,
        xxl: 1920,
      },
    },
    palette: {
      primary: {
        light: "#7244C8",
        main: "#7244C8",
        700: "#6941C6",
        100: "#F4EBFF",
        50: "#F9F5FF",
        contrastText: "#fff",
      },
      secondary: {
        light: "#5d5d5d",
        main: "#3a3a3a",
        dark: "#303030",
      },
      error: {
        light: "#f6685e",
        main: "#f44336",
        dark: "#c3352b",
        A000: "#FFF5F5",
      },
      warning: {
        light: "#f5e67e",
        main: "#f3e05e",
        dark: "#c2b34b",
      },
      success: {
        main: "#12B76A",
      },
      grey: {
        A100: "#F9FAFB",
        100: "#F2F4F7",
        200: "#EAECF0",
        300: "#D0D5DD",
        500: "#667085",
        600: "#475467",
        700: "#344054",
        800: "#1D1D1D",
        900: "#101828",
      },
      text: {
        primary: "#344054",
      },
    },
    typography: {
      fontFamily: "Inter",
      h1: {
        fontWeight: 600,
        fontSize: "3.75rem",
        lineHeight: "4.5rem",
      },
      h3: {
        fontWeight: 600,
        fontSize: "1.875rem",
        lineHeight: "2.375rem",
      },
      h5: {
        fontWeight: 500,
        fontSize: "1.125rem",
        lineHeight: "1.75rem",
      },
      body1: {
        fontWeight: 400,
        fontSize: "1rem",
        lineHeight: "1.5rem",
      },
      body2: {
        fontWeight: 400,
        fontSize: "0.875rem",
        lineHeight: "1.3rem",
      },
    },
    overrides: {
      MuiButton: {
        root: {
          textTransform: "none",
        },
      },
    },
  })
);

export default createTheme(theme);
