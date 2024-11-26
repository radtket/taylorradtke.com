import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import {
  StyledWorkCard,
  StyledWorkCardText,
  StyledWorkCardName,
  StyledWorkCardType,
  StyledZoomIcon,
} from "../../styles/Home/Works";

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
    .map(
      ({
        node: {
          frontmatter: { path, projectName, thumbnail },
        },
      }) => (
        <StyledWorkCard key={path} to={path}>
          {thumbnail && <Img {...thumbnail.childImageSharp} />}
          <StyledWorkCardText>
            <StyledWorkCardName>{projectName}</StyledWorkCardName>
            <StyledWorkCardType>Website</StyledWorkCardType>
            <StyledZoomIcon />
          </StyledWorkCardText>
        </StyledWorkCard>
      )
    );
};

export default Works;
