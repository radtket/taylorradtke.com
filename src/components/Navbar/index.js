import React, { useState } from "react";
import { StyledNavbar } from "../../styles/Navbar";
import { StyledContainerFull } from "../../styles/Shared";
import Logo from "./Logo";
import Hamburger from "./Hamburger";
import Nav from "./Nav";

const Navbar = props => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <StyledNavbar className={isMenuOpen ? "menu-open" : "menu-closed"}>
      <StyledContainerFull>
        <Logo />
        <Hamburger
          {...{ isMenuOpen, onClick: () => setMenuOpen(prev => !prev) }}
        />
        <Nav {...props} />
      </StyledContainerFull>
    </StyledNavbar>
  );
};

export default Navbar;
