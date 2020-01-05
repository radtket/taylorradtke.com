import React from "react";
import PropTypes from "prop-types";
import Footer from "./Footer";
import GlobalStyles from "../styles/GlobalStyles";

const Layout = ({ children }) => {
  return (
    <main>
      <GlobalStyles />
      {children}
      <Footer />
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
