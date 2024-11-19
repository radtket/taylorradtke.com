import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import GithubCard from "./GithubCard";
import { StyledGithubCardGrid } from "../../../styles/GithubCard";

const SideProjects = () => {
  const { allGithubData } = useStaticQuery(graphql`
    {
      allGithubData {
        nodes {
          data {
            user {
              repositories {
                nodes {
                  description
                  forkCount
                  homepageUrl
                  id
                  name
                  openGraphImageUrl
                  shortDescriptionHTML
                  updatedAt
                  url
                  usesCustomOpenGraphImage
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
    }
  `);

  const { nodes } = allGithubData.nodes[0].data.user.repositories;

  return (
    <StyledGithubCardGrid>
      {nodes.map(node => (
        <GithubCard {...{ ...node, key: node.id }} />
      ))}
    </StyledGithubCardGrid>
  );
};

export default SideProjects;
