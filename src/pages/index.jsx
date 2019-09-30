import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

// Config
import { siteTitle } from "../../config/website";

// Styles
import "../styles/global.scss";
import "../../node_modules/slick-carousel/slick/slick.scss";

// Compoents
import {
  Clients,
  Contact,
  Experience,
  HomeHero,
  Layout,
  Navbar,
  PageSection,
  Posts,
  SEO,
  Skills,
  Testimonials,
} from "../components";

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allJavascriptFrontmatter(
      filter: { frontmatter: { isWork: { eq: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            clientName
            devOnly
            path
            projectName
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 720, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
    logos: allFile(
      filter: {
        relativeDirectory: { eq: "client-logos" }
        extension: { regex: "/(jpeg|jpg|gif|png)/" }
      }
    ) {
      edges {
        node {
          id
          relativePath
          childImageSharp {
            fixed(height: 100, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
    avitar: file(relativePath: { eq: "hero__avitar.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    hero: file(relativePath: { eq: "hero__bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const IndexPage = ({
  data: { allJavascriptFrontmatter, logos, avitar, hero: heroImage },
}) => (
  <Layout>
    <Helmet title={siteTitle} />
    <SEO postEdges={allJavascriptFrontmatter.edges} />
    <Navbar />
    <HomeHero {...{ avitar, heroImage }} />
    <PageSection
      sectionContent={<Skills />}
      sectionName="Skills"
      sectionNumber="1"
    />
    <PageSection
      sectionContent={<Experience />}
      sectionName="Experience"
      sectionNumber="2"
    />
    <PageSection
      sectionContent={<Posts posts={allJavascriptFrontmatter.edges} />}
      sectionName="Works"
      sectionNumber="3"
    />
    <PageSection
      sectionContent={<Clients clientLogos={logos.edges} />}
      sectionName="Clients"
      sectionNumber="4"
    />
    <PageSection
      sectionContent={<Testimonials />}
      sectionName="Testimonials"
      sectionNumber="5"
    />
    <PageSection
      sectionContent={<Contact />}
      sectionName="Contact"
      sectionNumber="6"
    />
  </Layout>
);

export default IndexPage;
