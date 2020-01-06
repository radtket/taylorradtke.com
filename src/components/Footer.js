import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  StyledFooter,
  StyledSocialList,
  StyledCopyright,
} from "../styles/Footer";
import { StyledContainerFull } from "../styles/Shared";
import SocialMediaIcon from "./SocialMediaIcon";

const Footer = () => {
  const {
    site: {
      siteMetadata: { name, accounts },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          name
          accounts {
            twitter {
              url
            }
            instagram {
              url
            }
            linkedin {
              url
            }
            codepen {
              url
            }
            github {
              url
            }
          }
        }
      }
    }
  `);
  return (
    <StyledFooter>
      <StyledContainerFull>
        <StyledCopyright>
          {`© ${new Date().getFullYear()} `}
          <span>{name}</span>, All Rights Reserved.
        </StyledCopyright>
        <StyledSocialList>
          {Object.entries(accounts).map(([key, { url: href }]) => {
            return (
              <li {...{ key }}>
                <SocialMediaIcon {...{ href, name: key }} />
              </li>
            );
          })}
        </StyledSocialList>
      </StyledContainerFull>
    </StyledFooter>
  );
};

export default Footer;
