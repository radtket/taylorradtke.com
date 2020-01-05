import React from "react";
import PropTypes from "prop-types";
import Footer from "./Footer";
import GlobalStyles from "../styles/GlobalStyles";
import Theme from "../styles/Theme";

const Layout = ({ children }) => {
  return (
    <Theme>
      <main>
        <GlobalStyles />
        {children}
        <Footer />
      </main>
    </Theme>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
