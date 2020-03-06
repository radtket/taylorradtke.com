import React from "react";
import { ForkIcon, StarIcon } from "../../Icons";
import {
  StyledGithubCardLanguage,
  StyledGithubCard,
  StyledGithubCardWrap,
} from "../../../styles/GithubCard";

const GithubCard = ({
  url,
  name,
  description,
  primaryLanguage,
  forkCount,
  stargazers,
}) => {
  return (
    <StyledGithubCardWrap>
      <StyledGithubCard href={url} rel="noopener noreferrer" target="_blank">
        <dl>
          <dt>{name}</dt>
          {description && <dd>{description}</dd>}
        </dl>
        <div className="repo-meta">
          {primaryLanguage && (
            <StyledGithubCardLanguage {...primaryLanguage}>
              {primaryLanguage.name}
            </StyledGithubCardLanguage>
          )}

          <ul>
            <li aria-label={`${forkCount} Forks`} title={`${forkCount} Forks`}>
              <ForkIcon />
              <span>{forkCount}</span>
            </li>
            <li
              aria-label={`${stargazers.totalCount} Stars`}
              title={`${stargazers.totalCount} Stars`}
            >
              <StarIcon />
              <span>{stargazers.totalCount}</span>
            </li>
          </ul>
        </div>
      </StyledGithubCard>
    </StyledGithubCardWrap>
  );
};

export default GithubCard;
