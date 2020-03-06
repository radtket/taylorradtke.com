import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import GithubCard from "./GithubCard";
import { StyledGithubCardGrid } from "../../../styles/GithubCard";

const SideProjects = () => {
  const {
    github: {
      viewer: {
        repositories: { edges },
      },
    },
  } = useStaticQuery(graphql`
    query {
      github {
        viewer {
          repositories(
            first: 6
            isFork: false
            privacy: PUBLIC
            orderBy: { field: STARGAZERS, direction: DESC }
          ) {
            edges {
              node {
                id
                name
                url
                description
                forkCount
                stargazers {
                  totalCount
                }
                primaryLanguage {
                  name
                  color
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <StyledGithubCardGrid>
      {edges.map(({ node }) => (
        <GithubCard {...{ ...node, key: node.id }} />
      ))}
    </StyledGithubCardGrid>
  );
};

export default SideProjects;
