import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import LayoutPortfolio from "../../components/LayoutPortfolio";
import { LogoRandS } from "../../components/ClientLogos";

// eslint-disable-next-line import/no-unused-modules
export const frontmatter = {
  clientName: "R&S Supply",
  companyUrl: "http://randssupply.net/",
  date: "12/12/2017",
  devOnly: false,
  excerpt:
    "R&S Supply is one of America's largest wholesale distributor of roofing, siding, window and gutter materials, tools, and supplies. They approached me to evaluate their website, and was able to produce a complete branding and web redesign.",
  githubRepoName: "rs-supply--pug",
  id: "randssupply",
  isWork: true,
  logo: <LogoRandS />,
  path: "/work/rands-supply",
  projectBrandColors: [
    "#FFFFFF",
    "#FF7D77",
    "#D74B4B",
    "#A01023",
    "#333333",
    "#61778B",
    "#354B5E",
    "#0A2334",
  ],
  projectName: "R&S Supply",
  projectRole: "Design, Development",
  projectStack: "Gatsby, React, Bourbon, Neat",
  thumbnail: "./rands-large.jpg",
};

const RandsSupply = ({ pageContext, ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      Landing: allFile(
        filter: {
          sourceInstanceName: { eq: "portfolio" }
          relativeDirectory: { eq: "rands-supply/images/landing" }
        }
      ) {
        edges {
          node {
            id
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      Locations: allFile(
        filter: {
          sourceInstanceName: { eq: "portfolio" }
          relativeDirectory: { eq: "rands-supply/images/locations" }
        }
      ) {
        edges {
          node {
            id
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  return (
    <LayoutPortfolio
      {...{ pageContext, data }}
      sections={["Branding", "Landing", "Locations"]}
    />
  );
};

RandsSupply.propTypes = {
  pageContext: PropTypes.shape({
    frontmatter: PropTypes.shape({
      clientName: PropTypes.string,
      companyUrl: PropTypes.string,
      date: PropTypes.string,
      excerpt: PropTypes.string,
      githubRepoName: PropTypes.string,
      id: PropTypes.string,
      path: PropTypes.string,
      projectBrandColors: PropTypes.arrayOf(PropTypes.string),
      projectName: PropTypes.string,
      projectRole: PropTypes.string,
      projectStack: PropTypes.string,
    }),
  }).isRequired,
};

export default RandsSupply;
