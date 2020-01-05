import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

export const config = {
  colors: {
    primary: "#bada55",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={config}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;
