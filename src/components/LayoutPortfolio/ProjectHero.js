import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { format } from "date-fns";
import {
  AllSeeingEye,
  StyledProjectHero,
  StyledProjectHeroBody,
  StyledProjectHeroBodyDesc,
  StyledProjectHeroBodyMeta,
  StyledProjectHeroBodyMetaItem,
  StyledProjectHeroBodyRole,
  StyledProjectHeroBodyRoleDesc,
  StyledProjectHeroButton,
  StyledProjectHeroContainer,
  StyledProjectHeroTable,
  StyledProjectHeroTableCell,
  StyledProjectHeroTitle,
  StyledProjectHeroVideo,
  StyledProjectHeroWrap,
} from "../../styles/Portfolio/ProjectHero";
import video from "../../assets/videos/bg__project.mp4";
import videoWebm from "../../assets/videos/bg__project.webm";
import videoPoster from "../../assets/videos/bg__project.jpg";

const ProjectHero = ({
  date,
  excerpt,
  githubRepoName,
  projectName,
  projectRole,
  projectStack,
  github,
}) => {
  console.log({ github });
  return (
    <StyledProjectHero>
      <StyledProjectHeroVideo autoPlay loop muted poster={videoPoster}>
        <source src={video} type="video/webm" />
        <source src={videoWebm} type="video/mp4" />
      </StyledProjectHeroVideo>
      <StyledProjectHeroContainer>
        <StyledProjectHeroTable>
          <StyledProjectHeroTableCell>
            <StyledProjectHeroTitle>
              {projectName}
              <span>{format(new Date(`${date}`), "MMMM yyyy")}</span>
            </StyledProjectHeroTitle>
            <StyledProjectHeroWrap>
              <hr />
              <StyledProjectHeroBody>
                <StyledProjectHeroBodyDesc>{excerpt}</StyledProjectHeroBodyDesc>

                <StyledProjectHeroBodyMeta>
                  <StyledProjectHeroBodyMetaItem>
                    <StyledProjectHeroBodyRole>Role</StyledProjectHeroBodyRole>
                    <StyledProjectHeroBodyRoleDesc>
                      {projectRole}
                    </StyledProjectHeroBodyRoleDesc>
                  </StyledProjectHeroBodyMetaItem>
                  <StyledProjectHeroBodyMetaItem>
                    <StyledProjectHeroBodyRole>Stack</StyledProjectHeroBodyRole>
                    <StyledProjectHeroBodyRoleDesc>
                      {projectStack}
                    </StyledProjectHeroBodyRoleDesc>
                  </StyledProjectHeroBodyMetaItem>
                </StyledProjectHeroBodyMeta>

                <StyledProjectHeroButton
                  href={`//${github.account}.github.io/${githubRepoName}`}
                  title={`View Site ${projectName}`}
                >
                  <AllSeeingEye />
                  <span>View Site</span>
                </StyledProjectHeroButton>

                <StyledProjectHeroButton
                  href={`//github.com/${github.account}/${githubRepoName}`}
                  title={`View Repo ${projectName}`}
                >
                  <AllSeeingEye />
                  <span>View Repo</span>
                </StyledProjectHeroButton>
              </StyledProjectHeroBody>
            </StyledProjectHeroWrap>
          </StyledProjectHeroTableCell>
        </StyledProjectHeroTable>
      </StyledProjectHeroContainer>
    </StyledProjectHero>
  );
};

ProjectHero.propTypes = {
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  githubRepoName: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  projectStack: PropTypes.string.isRequired,
  projectRole: PropTypes.string.isRequired,
};

export default ProjectHero;
