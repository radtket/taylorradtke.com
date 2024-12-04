import PropTypes from "prop-types";
import React, { useState } from "react";
import { StyledNavbar } from "../../styles/Navbar";
import { StyledContainerFull } from "../../styles/Shared";
import Logo from "./Logo";
import Hamburger from "./Hamburger";
import Nav from "./Nav";

const Navbar = ({ sections }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <StyledNavbar className={isMenuOpen ? "menu-open" : "menu-closed"}>
      <StyledContainerFull>
        <Logo />
        <Hamburger
          {...{ isMenuOpen, onClick: () => setMenuOpen(prev => !prev) }}
        />
        <Nav {...{ sections }} />
      </StyledContainerFull>
    </StyledNavbar>
  );
};

Navbar.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Navbar;
