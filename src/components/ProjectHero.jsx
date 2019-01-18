import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import moment from "moment";
import { media, mediaMax } from "../../config/Breakpoints";
import { userGithub } from "../../config/website";

import video from "../assets/videos/bg__project.mp4";
import videoWebm from "../assets/videos/bg__project.webm";
import videoPoster from "../assets/videos/bg__project.jpg";
import { Container } from "../styles/SharedStyles";
import xIcon from "../../static/icons/icon-x.svg";

const ProjectHero = ({
  date,
  excerpt,
  githubRepoName,
  projectName,
  projectRole,
  projectStack
}) => (
  <SectionProjectHero className="project-hero">
    <ProjectHeroVideo autoPlay loop muted poster={videoPoster}>
      <source src={video} type="video/webm" />
      <source src={videoWebm} type="video/mp4" />
    </ProjectHeroVideo>
    <Container>
      <ProjectHeroTable>
        <ProjectHeroTableCell>
          <ProjectHeroTitle>
            {projectName}
            <span>{moment(new Date(`${date}`)).format("MMMM YYYY")}</span>
          </ProjectHeroTitle>
          <ProjectHeroWrap>
            <hr />
            <ProjectHeroBody>
              <ProjectHeroBodyDesc>{excerpt}</ProjectHeroBodyDesc>

              <ProjectHeroBodyMeta>
                <ProjectHeroBodyMetaItem>
                  <ProjectHeroBodyRole>Role</ProjectHeroBodyRole>
                  <ProjectHeroBodyRoleDesc>
                    {projectRole}
                  </ProjectHeroBodyRoleDesc>
                </ProjectHeroBodyMetaItem>
                <ProjectHeroBodyMetaItem>
                  <ProjectHeroBodyRole>Stack</ProjectHeroBodyRole>
                  <ProjectHeroBodyRoleDesc>
                    {projectStack}
                  </ProjectHeroBodyRoleDesc>
                </ProjectHeroBodyMetaItem>
              </ProjectHeroBodyMeta>

              <ProjectHeroButton
                href={`//${userGithub}.github.io/${githubRepoName}`}
                title={`View Site ${projectName}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>View Site</span>
              </ProjectHeroButton>

              <ProjectHeroButton
                href={`//github.com/${userGithub}/${githubRepoName}`}
                title={`View Repo ${projectName}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>View Repo</span>
              </ProjectHeroButton>
            </ProjectHeroBody>
          </ProjectHeroWrap>
        </ProjectHeroTableCell>
      </ProjectHeroTable>
    </Container>
  </SectionProjectHero>
);

ProjectHero.propTypes = {
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  githubRepoName: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  projectStack: PropTypes.string.isRequired,
  projectRole: PropTypes.string.isRequired
};

export default ProjectHero;

const SectionProjectHero = styled.section`
  background-attachment: fixed;
  background-color: #151515;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
  overflow: hidden;
  position: relative;
  width: 100%;

  &::before {
    background: rgba(16, 16, 16, 0.5);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
  }

  ${mediaMax.giant`
		background-attachment: scroll;
	`};

  ${Container} {
    height: 100vh;
    width: 100%;
  }
`;

const ProjectHeroTable = styled.div`
  display: table;
  height: 100%;
  position: relative;
  width: 100%;
  z-index: 2;
`;

const ProjectHeroTableCell = styled.div`
  display: table-cell;
  height: 100%;
  vertical-align: middle;
`;

const ProjectHeroTitle = styled.h1`
  color: #fff;
  font-size: 6rem;
  line-height: 1;
  margin-bottom: 1.2rem;
  text-transform: uppercase;

  ${media.phoneLg`
		font-size: 10rem;
		margin-bottom: 2.4rem;
	`};

  ${media.tablet`
		font-size: 14rem;
	`};

  span {
    color: #999;
    font-family: Oswald, sans-serif;
    font-size: 2rem;
    letter-spacing: 0.3rem;
    margin-bottom: 1.2rem;
    padding-left: 0.6rem;
    text-transform: uppercase;
  }
`;

const ProjectHeroWrap = styled.div`
  overflow: hidden;
  position: relative;

  &::after {
    clear: both;
    content: "";
    display: block;
  }

  hr {
    padding: 0;
    display: block;
    border: 0;
    overflow: visible;
    height: 2px;
    margin: 1.2rem 0;
    border-top: 2px solid #c0a062;

    ${media.phoneLg`
			width: 7.2rem;
			float: left;
		`};
  }
`;

const ProjectHeroBody = styled.article`
  ${media.phoneLg`
		margin-left: 4.8rem;
		float: left;
		width: 71%;
	`};
`;

const ProjectHeroBodyDesc = styled.p`
  color: #999;
  margin-bottom: 2.4rem;
  line-height: 1.5;
  font-size: 1.8rem;
  ${media.phoneLg`
		font-size: 2.4rem;
	`};
`;

const ProjectHeroBodyRole = styled.p`
  color: #fff;
  margin-bottom: 0.6rem;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

const ProjectHeroBodyRoleDesc = styled.h3`
  color: #828282;
  font-family: Open Sans, sans-serif;
  letter-spacing: 0.05rem;
  line-height: 1.2;
  margin-bottom: 1.2rem;
  text-transform: none;
`;

const ProjectHeroBodyMeta = styled.ul`
  &::after {
    clear: both;
    content: "";
    display: table;
  }
`;

const ProjectHeroBodyMetaItem = styled.li`
  float: left;
  margin-left: 2.4rem;
  width: calc(50% - 3.6rem);

  &:first-of-type {
    margin-left: 0;
  }
`;

const ProjectHeroVideo = styled.video`
  overflow: hidden;
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const ProjectHeroButton = styled.a`
  appearance: none;
  background: #050505;
  border-radius: 3px;
  border: 0;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  font-weight: 700;
  height: 48px;
  letter-spacing: 1;
  line-height: 50px;
  margin-bottom: 0.75rem;
  margin-top: 1px;
  overflow: hidden;
  padding-left: 11px;
  padding-right: 10px;
  padding: 0.75rem 1.5rem;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.52s ease 0s;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  width: 160px;

  &:first-of-type {
    margin-right: 0.75rem;
  }

  &::after {
    background: url(${xIcon}) center center no-repeat;
    content: "";
    height: 100%;
    line-height: 58px;
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(-100%, 0);
    transition: all 0.52s ease 0s;
    width: 100%;
  }

  &:hover {
    background: #050505;
    color: #fff;

    &::after {
      transform: translate(0, 0);
      transition: all 0.52s ease 0s;
    }

    span {
      transform: translate(100%, 0);
      transition: all 0.52s ease 0s;
    }
  }

  span {
    left: 0;
    position: absolute;
    top: 0;
    transform: translate(0, 0);
    transition: all 0.52s ease 0s;
    width: 100%;
  }
`;
