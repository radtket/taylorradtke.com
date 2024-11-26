import React from "react";
import PropTypes from "prop-types";
import { polyfill } from "smoothscroll-polyfill";
import Footer from "./Footer";
import GlobalStyles from "../styles/GlobalStyles";
import Theme from "../styles/Theme";

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]');
  polyfill();
}

const Layout = ({ children }) => (
  <Theme>
    <main>
      <GlobalStyles />
      {children}
      <Footer />
    </main>
  </Theme>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
