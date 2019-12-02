// export { default } from "./theme";
import { theme } from "@chakra-ui/core";
import "../fonts/index.css";
import "./style.css";

export const stripe = {
  colors: {
    ...theme.colors,
    gray: {
      900: "#1a1f36",
      800: "#2a2f45",
      700: "#3c4257",
      600: "#4f566b",
      500: "#697386",
      400: "#8792a2",
      300: "#a3acb9",
      200: "#c1c9d2",
      100: "#e3e8ee",
      50: "#f7fafc"
    },
    blue: {
      900: "#131f41",
      800: "#212d63",
      700: "#2f3d89",
      600: "#3d4eac",
      500: "#556cd6",
      400: "#6c8eef",
      300: "#7dabf8",
      200: "#a4cdfe",
      100: "#d6ecff",
      50: "#f5fbff"
    },
    cyan: {
      900: "#042235",
      800: "#093353",
      700: "#06457a",
      600: "#075996",
      500: "#067ab8",
      400: "#3a97d4",
      300: "#4db7e8",
      200: "#7fd3ed",
      100: "#c4f1f9",
      50: "#edfdfd"
    },
    green: {
      900: "#082429",
      800: "#0b3733",
      700: "#0d4b3b",
      600: "#0e6245",
      500: "#09825d",
      400: "#1ea672",
      300: "#33c27f",
      200: "#85d996",
      100: "#cbf4c9",
      50: "#efffed"
    },
    orange: {
      900: "#420e11",
      800: "#5d161b",
      700: "#7e1e23",
      600: "#9e2f28",
      500: "#c44c34",
      400: "#e56f4a",
      300: "#f5925e",
      200: "#f8b886",
      100: "#fee3c0",
      50: "#fffaee"
    },
    purple: {
      900: "#2d0f55",
      800: "#401d6a",
      700: "#5b2b80",
      600: "#7b3997",
      500: "#a450b5",
      400: "#c96ed0",
      300: "#e28ddc",
      200: "#f0b4e4",
      100: "#fce0f6",
      50: "#fff8fe"
    },
    red: {
      900: "#420828",
      800: "#5e1039",
      700: "#80143f",
      600: "#a41c4e",
      500: "#cd3d64",
      400: "#ed5f74",
      300: "#fa8389",
      200: "#fbb5b2",
      100: "#fde2dd",
      50: "#fff8f5"
    },
    yellow: {
      900: "#3a1607",
      800: "#571f0d",
      700: "#762b0b",
      600: "#983705",
      500: "#bb5504",
      400: "#d97917",
      300: "#e5993e",
      200: "#efc078",
      100: "#f8e5b9",
      50: "#fcf9e9"
    },
    violet: {
      900: "#1f184e",
      800: "#352465",
      700: "#4b3480",
      600: "#61469b",
      500: "#8260c3",
      400: "#9c82db",
      300: "#b0a1e1",
      200: "#c7c2ea",
      100: "#e6e6fc",
      50: "#f8f9fe"
    }
  },

  maxWidths: {
    sm: "320px",
    md: "448px",
    lg: "600px",
    xl: "720px",
    "2xl": "896px"
  },

  height: {
    xl: "44px",
    lg: "36px",
    md: "28px",
    sm: "24px",
    xs: "20px"
  },

  fontSizes: {
    display: "2rem",
    xs: "12px",
    sm: "1.2rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2.4rem",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "64px"
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700
  },
  lineHeights: {
    normal: "normal",
    shorter: "1.25",
    short: "1.375",
    base: "1.5rem",
    tall: "1.625",
    taller: "2"
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em"
  },
  radii: {
    md: "0",
    sm: "1rem",
    lg: "1rem",
    xl: "1rem"
  }
};
