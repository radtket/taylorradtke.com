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
    }
  `);

  console.log({ edges });
  return edges.reduce((all, { node: { frontmatter } }) => {
    console.log({ frontmatter });
    if (frontmatter.path !== "/404/") {
      all.push(<WorkCard key={frontmatter.path} {...frontmatter} />);
    }
    return all;
  }, []);
};

export default Works;
