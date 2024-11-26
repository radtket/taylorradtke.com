import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import {
  StyledGithubCardGrid,
  StyledGithubCardLanguage,
  StyledGithubCard,
  StyledGithubCardWrap,
} from "../../styles/GithubCard";
import { ForkIcon, StarIcon } from "../Icons";
import ExternalLink from "../ExternalLink";

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
      {nodes.map(
        ({
          url,
          name,
          description,
          primaryLanguage,
          forkCount,
          stargazers: { totalCount },
          homepageUrl,
        }) => (
          <StyledGithubCardWrap key={url}>
            <StyledGithubCard>
              <div className="repo-details">
                <h4>
                  <ExternalLink href={url} title={`View Repo ${name}`}>
                    {name}
                  </ExternalLink>
                </h4>
                {description && <p>{description}</p>}
                {homepageUrl && (
                  <ExternalLink
                    href={homepageUrl}
                    title={`View Live Demo ${name}`}
                  >
                    View Live
                  </ExternalLink>
                )}
              </div>

              <div className="repo-meta">
                {primaryLanguage && (
                  <StyledGithubCardLanguage {...primaryLanguage}>
                    {primaryLanguage.name}
                  </StyledGithubCardLanguage>
                )}

                <ul>
                  <li
                    aria-label={`${forkCount} Forks`}
                    title={`${forkCount} Forks`}
                  >
                    <ForkIcon />
                    <span>{forkCount}</span>
                  </li>
                  <li
                    aria-label={`${totalCount} Stars`}
                    title={`${totalCount} Stars`}
                  >
                    <StarIcon />
                    <span>{totalCount}</span>
                  </li>
                </ul>
              </div>
            </StyledGithubCard>
          </StyledGithubCardWrap>
        )
      )}
    </StyledGithubCardGrid>
  );
};

export default SideProjects;
