import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import LayoutPortfolio from "../../components/LayoutPortfolio";
import BrandColors from "../../components/LayoutPortfolio/BrandColors";
import PageSection from "../../components/PageSection";
import { LogoAapa } from "../../components/ClientLogos";
import BrowserMockupList from "../../styles/Portfolio/BrowserMockupList";

export const frontmatter = {
  clientName: "AAPA",
  companyUrl: "https://yourpacan.org/",
  date: "02/05/2018",
  devOnly: false,
  excerpt: `A Campaign by AAPA showing the "Your PA Can Handle It" With thousands of hours of medical training and a versatile skill set, PAs are expanding access to team-based care. When it comes to quality healthcare, your PA can handle it.`,
  githubRepoName: `your-pa-can`,
  id: "yourpacan",
  isWork: true,
  logo: <LogoAapa />,
  path: `/work/your-pa-can`,
  projectBrandColors: ["#f58220", "#62489d", "#017581", "#003c69"],
  projectName: "Your PA Can",
  projectRole: "Design, Development",
  projectStack: "Bourbon, Neat, eCharts.js, Gulp",
  thumbnail: "./yourpacan_cover.jpg",
};

const YourPaCan = ({ pageContext, ...props }) => {
  const { landing } = useStaticQuery(graphql`
    query {
      landing: allFile(
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

  const components = [
    {
      name: "Branding",
      component: (
        <BrandColors {...pageContext.frontmatter} logo={<LogoAapa />} />
      ),
    },
    {
      name: "Landing",
      component: <BrowserMockupList {...landing} />,
    },
  ];

  return (
    <LayoutPortfolio {...{ ...props, pageContext }}>
      {components.map(({ name, component }, index) => (
        <PageSection key={name} {...{ name, index }}>
          {component}
        </PageSection>
      ))}
    </LayoutPortfolio>
  );
};

YourPaCan.propTypes = {
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

export default YourPaCan;
