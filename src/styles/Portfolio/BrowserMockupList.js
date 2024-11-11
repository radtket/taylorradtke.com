import React from "react";
import StyledBrowserMockup from "./BrowserMockup";

const BrowserMockupList = ({ edges }) =>
  edges.map(({ node: { id, childImageSharp } }) => (
    <StyledBrowserMockup key={id} {...childImageSharp} />
  ));

export default BrowserMockupList;
