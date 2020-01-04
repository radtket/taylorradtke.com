import React from "react";
import {
  StyledNav,
  StyledNavItem,
  StyledDownloadButton,
} from "../../styles/Navbar";
import NavItem from "./NavItem";
import ResumePDF from "../../assets/resume/taylor-radtke--resume.pdf";

const Nav = () => {
  return (
    <StyledNav>
      <ul>
        <NavItem text="About" to="/about" />
        <NavItem text="Skills" to="/skills" />
        <NavItem text="Experience" to="/experience" />
        <NavItem text="Works" to="/works" />
        <NavItem text="Contact" to="/contact" />
        <StyledNavItem>
          <StyledDownloadButton download href={ResumePDF}>
            Download CV
          </StyledDownloadButton>
        </StyledNavItem>
      </ul>
    </StyledNav>
  );
};

export default Nav;
