import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "emotion-theming";

// Components
import Footer from "./Footer";

// Styles
import theme from "../../config/theme";
import "../styles/global.scss";

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
    <Footer />
  </ThemeProvider>
);

Layout.propTypes = {
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired
};

export default Layout;
