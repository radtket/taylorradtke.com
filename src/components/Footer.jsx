import React from "react";
import styled from "@emotion/styled";
import { media, mediaMax } from "../../config/Breakpoints";

import config from "../../config/website";
import { ContainerFull } from "../styles/SharedStyles";

const FooterWrap = styled.footer`
	background-color: #fff;
	text-align: center;

	${mediaMax.tablet`
		padding-top: 1.2rem;
		padding-bottom: 1.2rem;
	`};
`;

const Copyright = styled.p`
	font-family: Oswald, sans-serif;
	text-transform: uppercase;
	font-size: 12px;
	letter-spacing: 0.3em;
	text-indent: 0.3em;
	margin-bottom: 12px;

	${media.tablet`
		margin: 0;
		float: left;
		height: 55px;
		line-height: 55px;
	`};

	> span {
		color: #c0a062;
	}
`;

const FooterSocial = styled.ul`
	display: inline-block;

	${media.tablet`
		float: right;
`};
`;

const Footer = () => (
  <FooterWrap>
    <ContainerFull>
      <Copyright>
        {`© ${new Date().getFullYear()} `}
        <span>{config.author}</span>
        {", All Rights Reserved."}
      </Copyright>
      <FooterSocial>
        {/* <SocialIcon
          title={config.socialMedia[0].name}
          url={config.socialMedia[0].url}
          icon={<GitHub />}
        />
        <SocialIcon
          title={config.socialMedia[1].name}
          url={config.socialMedia[1].url}
          icon={<CodePen />}
        />
        <SocialIcon
          title={config.socialMedia[2].name}
          url={config.socialMedia[2].url}
          icon={<Twitter />}
        />
        <SocialIcon
          title={config.socialMedia[3].name}
          url={config.socialMedia[3].url}
          icon={<LinkedIn />}
        />
        <SocialIcon
          title={config.socialMedia[4].name}
          url={config.socialMedia[4].url}
          icon={<Instagram />}
        /> */}
      </FooterSocial>
    </ContainerFull>
  </FooterWrap>
);

export default Footer;
