import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { size } from "lodash";
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
      {nodes
        .sort((a, b) => {
          const one = size(a.description);
          const two = size(b.description);

          if (one < two) {
            return 1;
          }

          if (one > two) {
            return -1;
          }

          return 0;
        })
        .map(
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
                </div>

                <footer>
                  {homepageUrl && (
                    <ExternalLink
                      href={homepageUrl}
                      title={`View Live Demo ${name}`}
                    >
                      View Live
                    </ExternalLink>
                  )}

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
                </footer>
              </StyledGithubCard>
            </StyledGithubCardWrap>
          )
        )}
    </StyledGithubCardGrid>
  );
};

export default SideProjects;
