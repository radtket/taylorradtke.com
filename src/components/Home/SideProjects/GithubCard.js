import React from "react";
import PropTypes from "prop-types";
import { ForkIcon, StarIcon } from "../../Icons";
import {
  StyledGithubCardLanguage,
  StyledGithubCard,
  StyledGithubCardWrap,
} from "../../../styles/GithubCard";
import ExternalLink from "../../ExternalLink";

const GithubCard = ({
  url,
  name,
  description,
  primaryLanguage,
  forkCount,
  stargazers,
  homepageUrl,
}) => {
  return (
    <StyledGithubCardWrap>
      <StyledGithubCard>
        <div className="repo-details">
          <h4>
            <ExternalLink href={url} title={`View Repo ${name}`}>
              {name}
            </ExternalLink>
          </h4>
          {description && <p>{description}</p>}
          {homepageUrl && (
            <ExternalLink href={homepageUrl} title={`View Live Demo ${name}`}>
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

GithubCard.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  primaryLanguage: PropTypes.shape({
    name: PropTypes.string,
    color: PropTypes.string,
  }).isRequired,
  forkCount: PropTypes.number.isRequired,
  stargazers: PropTypes.shape({
    totalCount: 0,
  }).isRequired,
  homepageUrl: PropTypes.string,
};

GithubCard.defaultProps = {
  description: null,
  homepageUrl: null,
};

export default GithubCard;
