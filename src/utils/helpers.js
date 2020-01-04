import React from "react";
import BrowserMockup from "../styles/BrowserMockup";

export const formatPhoneNumber = phone => {
  const phoneTest = new RegExp(
    /^((\+1)|1)? ?\(?(\d{3})\)?[ .-]?(\d{3})[ .-]?(\d{4})( ?(ext\.? ?|x)(\d*))?$/
  );

  phone.trim();
  const results = phoneTest.exec(phone);
  if (results !== null && results.length > 8) {
    return `(${results[3]}) ${results[4]}-${results[5]}${
      typeof results[8] !== "undefined" ? ` x${results[8]}` : ""
    }`;
  }
  return phone;
};

export const preparePosts = (availibleImages, sectionImagesPath) =>
  availibleImages
    .sort(({ node: { relativePath: a } }, { node: { relativePath: b } }) =>
      a > b ? 1 : -1
    )
    .reduce((all, { node }) => {
      const {
        relativePath,
        id,
        childImageSharp: { fluid },
      } = node;

      if (relativePath.includes(`${sectionImagesPath}`)) {
        all.push(<BrowserMockup key={id} fluid={fluid} />);
      }
      return all;
    }, []);
