import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import WorkCard from "./WorkCard";

const Works = () => {
  const {
    allJavascriptFrontmatter: { edges },
  } = useStaticQuery(graphql`
    query {
      allJavascriptFrontmatter(
        filter: { frontmatter: { isWork: { eq: true } } }
        sort: { frontmatter: { date: DESC } }
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
    }
  `);

  return edges
    .filter(({ node: { frontmatter } }) => frontmatter.path !== "/404/")
    .map(({ node: { frontmatter } }) => (
      <WorkCard key={frontmatter.path} {...frontmatter} />
    ));
};

export default Works;
