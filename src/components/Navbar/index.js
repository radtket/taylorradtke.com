import React, { useState } from "react";
import { StyledNavbar } from "../../styles/Navbar";
import { StyledContainerFull } from "../../styles/Shared";
import Logo from "./Logo";
import Hamburger from "./Hamburger";
import Nav from "./Nav";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <StyledNavbar className={isMenuOpen ? "menu-open" : "menu-closed"}>
      <StyledContainerFull>
        <Logo />
        <Hamburger {...{ isMenuOpen, onClick: toggleMenu }} />
        <Nav />
      </StyledContainerFull>
    </StyledNavbar>
  );
};

export default Navbar;
