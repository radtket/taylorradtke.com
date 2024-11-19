import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { hex2rgba } from "./utils";

const config = {
  zIndex: {
    navbar: 99,
  },
  sizes: {
    navigation: {
      height: "55px",
    },
  },
  font: {
    family: {
      primary: "'Open Sans', sans-serif",
      secondary: "'Oswald', sans-serif",
    },
    size: {
      default: "14px",
      body: "16px",
      medium: "20px",
      large: "24px",
    },
    weight: {
      light: 300,
      regular: 400,
      medium: 600,
      bold: 700,
    },
  },
  colors: {
    common: {
      black: "#000",
      white: "#fff",
    },
    shadows: {
      dark: {
        6: hex2rgba("#101010", 0.06),
        50: hex2rgba("#101010", 0.5),
        90: hex2rgba("#101010", 0.9),
        97: hex2rgba("#101010", 0.97),
      },
      white: {
        10: "rgba(255, 255, 255, 0.1)",
        85: "rgba(255, 255, 255, 0.85)",
        97: "rgba(255, 255, 255, 0.97)",
      },
      black: {
        10: "rgba(0, 0, 0, 0.1)",
        20: "rgba(0, 0, 0, 0.2)",
        30: "rgba(0, 0, 0, 0.3)",
        70: "rgba(0, 0, 0, 0.7)",
      },
    },
    primary: {
      main: "#c0a062",
    },
    grey: {
      100: "#333333",
      200: "#999999",
      300: "#666",
      400: "#222",
      500: "#dddddd",
      600: "#101010",
      700: "#151515",
      800: "#757575",
    },
    spacing: {
      base: "12px",
    },
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={config}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;
