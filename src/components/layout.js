import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
          name
          accounts {
            twitter
            instagram
            linkedin
            codepen
            github
          }
        }
      }
    }
  `);

  return (
    <main>
      {children}
      <Footer {...data.site.siteMetadata} />
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
