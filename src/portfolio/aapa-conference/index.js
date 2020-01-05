import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import LayoutPortfolio from "../../components/LayoutPortfolio";
import BrandColors from "../../components/LayoutPortfolio/BrandColors";
import PageSection from "../../components/PageSection";
import { LogoAapaConference } from "../../components/ClientLogos";
import BrowserMockupList from "../../styles/Portfolio/BrowserMockupList";

export const frontmatter = {
  clientName: "AAPA",
  companyUrl: "https://www.aapa.org/",
  date: "11/28/2017",
  devOnly: false,
  excerpt: `The American Academy of Physician Assistants (AAPA) national conference in New Orleans, Louisiana will provide opportunities to explore the profession's limitless future with five days of certification courses, educational sessions, and discussions surrounding groundbreaking medical innovations.`,
  githubRepoName: `aapa-conference-2018`,
  id: "aapaconference",
  isWork: true,
  logo: <LogoAapaConference />,
  path: "/work/aapa-conference",
  projectBrandColors: [
    "#6B478E",
    "#63D0DF",
    "#7673C0",
    "#636CB2",
    "#ED3E7A",
    "#C9DA2A",
    "#999999",
    "#202020",
  ],
  projectName: "AAPA 2018",
  projectRole: "Design, Development, CMS",
  projectStack: "Wordpress, Bourbon, Neat",
  thumbnail: "./works-thumbnail-aapa.jpg",
};

const AapaConference = ({ pageContext, ...props }) => {
  const { home, events, tabs, contact } = useStaticQuery(graphql`
    query {
      home: allFile(
        filter: {
          sourceInstanceName: { eq: "portfolio" }
          relativeDirectory: { eq: "aapa-conference/images/home" }
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
      events: allFile(
        filter: {
          sourceInstanceName: { eq: "portfolio" }
          relativeDirectory: { eq: "aapa-conference/images/events" }
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
      tabs: allFile(
        filter: {
          sourceInstanceName: { eq: "portfolio" }
          relativeDirectory: { eq: "aapa-conference/images/tabs" }
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
      contact: allFile(
        filter: {
          sourceInstanceName: { eq: "portfolio" }
          relativeDirectory: { eq: "aapa-conference/images/contact" }
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
        <BrandColors
          {...pageContext.frontmatter}
          logo={<LogoAapaConference />}
        />
      ),
    },
    {
      name: "Home",
      component: <BrowserMockupList {...home} />,
    },
    {
      name: "Events",
      component: <BrowserMockupList {...events} />,
    },
    {
      name: "Tabs",
      component: <BrowserMockupList {...tabs} />,
    },
    {
      name: "Contact",
      component: <BrowserMockupList {...contact} />,
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

AapaConference.propTypes = {
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

export default AapaConference;
