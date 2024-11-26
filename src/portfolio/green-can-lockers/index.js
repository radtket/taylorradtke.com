import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import LayoutPortfolio from "../../components/LayoutPortfolio";
import { LogoGreenCanLockers } from "../../components/ClientLogos";

// eslint-disable-next-line import/no-unused-modules
export const frontmatter = {
  clientName: "Captain Jon's Green Can Lockers",
  companyUrl: "http://greencanlockers.com/",
  date: "07/16/2016",
  devOnly: false,
  excerpt:
    "Captain Jon's Green Can Locker's are a patented locking mechanism for ammunition based out of Southern California. Customers love the quality of the product and the ease of installation.",
  githubRepoName: "green-can-lockers",
  id: "greencanlockers",
  isWork: true,
  logo: <LogoGreenCanLockers />,
  path: "/work/green-can-lockers",
  projectBrandColors: ["#748247", "#262F1C", "#E7E7E7", "#3A3A3A"],
  projectName: "Captain Jon",
  projectRole: "Design, Development",
  projectStack: "Bootstrap 3, Owl Carousel, jQuery",
  thumbnail: "./green_can-large.jpg",
};

const GreenCanLockers = ({ pageContext, ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      Landing: allFile(
        filter: {
          sourceInstanceName: { eq: "portfolio" }
          relativeDirectory: { eq: "green-can-lockers/images/landing" }
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
      sections={["Branding", "Landing"]}
    />
  );
};

GreenCanLockers.propTypes = {
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

export default GreenCanLockers;
