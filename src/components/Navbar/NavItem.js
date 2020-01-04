import React from "react";
import PropTypes from "prop-types";
import { StyledNavItem, StyledNavLink } from "../../styles/Navbar";

const NavItem = ({ to, text }) => {
  return (
    <StyledNavItem>
      <StyledNavLink
        activeClass="active"
        duration={500}
        offset={-55}
        smooth
        spy
        to={to}
      >
        {text}
      </StyledNavLink>
    </StyledNavItem>
  );
};

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NavItem;
