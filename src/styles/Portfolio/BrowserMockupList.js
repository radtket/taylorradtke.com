import React from "react";
import StyledBrowserMockup from "./BrowserMockup";

const BrowserMockupList = ({ edges }) => {
  return edges.map(({ node: { id, childImageSharp } }) => {
    return <StyledBrowserMockup key={id} {...childImageSharp} />;
  });
};

export default BrowserMockupList;
