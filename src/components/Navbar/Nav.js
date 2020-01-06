import React from "react";
import Scrollspy from "react-scrollspy";
import {
  StyledNav,
  StyledNavItem,
  StyledNavLink,
  StyledDownloadButton,
} from "../../styles/Navbar";
import ResumePDF from "../../assets/resume/taylor-radtke--resume.pdf";
import { IconResume } from "../Icons";
import { capitalize } from "../../utils/helpers";

const Nav = () => {
  const items = ["about", "skills", "experience", "works", "contact"];

  return (
    <StyledNav>
      <Scrollspy currentClassName="is-active" {...{ items }} offset={-55}>
        {items.map(id => (
          <StyledNavItem key={id}>
            <StyledNavLink
              onClick={e => {
                // Handles Smooth Scroll
                e.preventDefault();
                const element = document.getElementById(id);
                if (typeof window !== "undefined") {
                  const top = element
                    ? element.getBoundingClientRect().top + window.pageYOffset
                    : 0;
                  window.scroll({
                    top,
                    left: 0,
                    behavior: "smooth",
                  });
                }
              }}
              type="button"
            >
              {capitalize(id)}
            </StyledNavLink>
          </StyledNavItem>
        ))}
        <StyledNavItem>
          <StyledDownloadButton download href={ResumePDF}>
            <IconResume />
            Download CV
          </StyledDownloadButton>
        </StyledNavItem>
      </Scrollspy>
    </StyledNav>
  );
};

export default Nav;
