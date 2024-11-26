import React, { useCallback } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../Layout";
import PortfolioNav from "./PortfolioNav";
import ProjectHero from "./ProjectHero";
import SEO from "../SEO";
import PageSection from "../PageSection";
import BrandColors from "./BrandColors";
import BrowserMockupList from "../../styles/Portfolio/BrowserMockupList";

const LayoutPortfolio = ({
  sections = [],
  data,
  pageContext: {
    frontmatter,
    nextArticle: {
      node: { frontmatter: next },
    },
    prevArticle: {
      node: { frontmatter: prev },
    },
  },
}) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            name
            accounts {
              github {
                account
              }
            }
          }
        }
      }
    `
  );

  const Component = useCallback(
    ({ id }) => {
      const DATA = data[id] || frontmatter;

      switch (id) {
        case "Branding":
          return <BrandColors {...DATA} />;

        case "Contact":
        case "Events":
        case "Home":
        case "Landing":
        case "Locations":
        case "Tabs":
          return <BrowserMockupList {...DATA} />;

        default:
          return null;
      }
    },
    [data, frontmatter]
  );

  const {
    accounts: { github },
  } = siteMetadata;
  return (
    <Layout>
      <Helmet title={`${siteMetadata.name} |  ${frontmatter.projectName}`} />
      <SEO postNode={frontmatter} />
      <ProjectHero {...frontmatter} {...{ ...frontmatter, github }} />
      <PortfolioNav {...{ next, prev }} />
      {sections.map((name, index) => (
        <PageSection key={name} {...{ name, index }}>
          <Component id={name} />
        </PageSection>
      ))}
    </Layout>
  );
};

LayoutPortfolio.propTypes = {
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
    nextArticle: PropTypes.shape({
      node: PropTypes.shape({
        frontmatter: PropTypes.shape({
          projectName: PropTypes.string,
          path: PropTypes.string,
        }),
      }),
    }),
    prevArticle: PropTypes.shape({
      node: PropTypes.shape({
        frontmatter: PropTypes.shape({
          projectName: PropTypes.string,
          path: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
};

export default LayoutPortfolio;
