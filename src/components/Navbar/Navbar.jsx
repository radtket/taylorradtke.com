import React from "react";
import styled from "@emotion/styled";

import { Link } from "gatsby";
import { ContainerFull } from "../../styles/SharedStyles";
import { BrandingLogo } from "../Logos";
import { media, mediaMax } from "../../../config/Breakpoints";
import { NavItem, NavItemButton } from "./NavItem";
import Hamburger from "./Hamburger";
import ResumePDF from "../../assets/documents/resume/taylor-radtke--resume.pdf";

const NavbarWrap = styled.header`
  background-color: rgba(255, 255, 255, 0.97);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
`;

const NavbarLogo = styled(Link)`
  float: left;
  height: 55px;
  line-height: 55px;
  text-align: center;
  width: 55px;

  svg {
    display: block;
    fill: #333;
    height: 100%;
    margin: auto;
    max-width: 65%;
  }
`;

const SiteNav = styled.nav`
  float: right;

  ${mediaMax.tablet`
    background: rgba(16, 16, 16, 0.97);
    display: none;
    left: 0;
    overflow-y: hidden;
    position: absolute;
		top: 100%;
		width: 100%;

		.menu-open & {
      display: block;
    }

    > ul {
      text-align: right;
    }
		`}

  ${media.tablet`
		float: right;
	`}

	> ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

class Navbar extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      visible: false
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  handleMouseDown(e) {
    this.toggleMenu();
    e.stopPropagation();
  }

  toggleMenu() {
    const { visible } = this.state;
    this.setState({
      visible: !visible
    });
  }

  render() {
    const { visible } = this.state;
    let visibility = "menu-closed";

    if (visible) {
      visibility = "menu-open";
    }
    return (
      <NavbarWrap className={visibility}>
        <ContainerFull className="container__full">
          <NavbarLogo to="/">
            <BrandingLogo />
          </NavbarLogo>

          <Hamburger handleMouseDown={this.handleMouseDown} />

          <SiteNav>
            <ul>
              <NavItem text="About" to="about" />
              <NavItem text="Skills" to="skills" />
              <NavItem text="experience" to="experience" />
              <NavItem text="works" to="works" />
              <NavItem text="Contact" to="contact" />
              <NavItemButton text="Download CV" download={ResumePDF} />
            </ul>
          </SiteNav>
        </ContainerFull>
      </NavbarWrap>
    );
  }
}

export default Navbar;
