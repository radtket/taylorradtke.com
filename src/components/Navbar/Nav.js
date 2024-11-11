import React from "react";
import PropTypes from "prop-types";
import Scrollspy from "react-scrollspy";
import {
  StyledNav,
  StyledNavItem,
  StyledNavLink,
  StyledDownloadButton,
} from "../../styles/Navbar";
import ResumePDF from "../../assets/resume/taylor-radtke--resume.pdf";
import { IconResume } from "../Icons";

const Nav = ({ sections }) => (
  <StyledNav>
    <Scrollspy
      currentClassName="is-active"
      items={sections.map(({ id }) => id)}
      offset={-55}
    >
      {sections.map(({ id, name }) => (
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
            {name}
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

Nav.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
    })
  ).isRequired,
};

export default Nav;
