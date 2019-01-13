import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { media, mediaMax } from "../../config/Breakpoints";

import video from "../assets/videos/bg__project.mp4";
import videoWebm from "../assets/videos/bg__project.webm";
import videoPoster from "../assets/videos/bg__project.jpg";
import { Container } from "../styles/SharedStyles";

const ProjectHero = ({ title, date, role, desc, siteUrl }) => (
  <SectionProjectHero className="project-hero">
    <ProjectHeroVideo autoPlay loop muted poster={videoPoster}>
      <source src={video} type="video/webm" />
      <source src={videoWebm} type="video/mp4" />
    </ProjectHeroVideo>
    <Container>
      <ProjectHeroTable>
        <ProjectHeroTableCell>
          <ProjectHeroTitle>
            {title}
            <span>{date}</span>
          </ProjectHeroTitle>
          <ProjectHeroWrap>
            <hr />
            <ProjectHeroBody>
              <ProjectHeroBodyDesc>{desc}</ProjectHeroBodyDesc>
              <ProjectHeroBodyRole>Role</ProjectHeroBodyRole>
              <ProjectHeroBodyRoleDesc>{role}</ProjectHeroBodyRoleDesc>
              <ProjectHeroCTA href={siteUrl}>
                Go check the website
              </ProjectHeroCTA>
            </ProjectHeroBody>
          </ProjectHeroWrap>
        </ProjectHeroTableCell>
      </ProjectHeroTable>
    </Container>
  </SectionProjectHero>
);

ProjectHero.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  siteUrl: PropTypes.string.isRequired
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
    font-family: Oswald, sans-serif;
    font-size: 2rem;
    letter-spacing: 0.3rem;
    margin-bottom: 1.2rem;
    text-transform: uppercase;
    color: #999;
    padding-left: 0.6rem;
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

const ProjectHeroCTA = styled.a`
  color: #fff;
  font-style: italic;
  letter-spacing: 0.05rem;
`;

const ProjectHeroVideo = styled.video`
  overflow: hidden;
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
