import React from "react";
import { Link, useLocation } from "react-router-dom";
import { StyledCloseButton, StyledMenu, StyledNavigationButton } from "./style";

const links = [
  { label: "HOME", path: "/" },
  { label: "BLOG", path: "/blog" },
  { label: "ABOUT", path: "/about" },
  { label: "PORTFOLIO", path: "/portfolio" },
  { label: "CONTACT", path: "/contact" },
];

const Menu = ({ active, toggleActive }) => {
  console.log(active);
  const location = useLocation();
  return (
    <StyledMenu enabled={active}>
      <StyledCloseButton onClick={toggleActive} />
      {links.map((link) => {
        return (
          <StyledNavigationButton
            key={link.path}
            to={link.path}
            enabled={location.pathname === link.path}
            onClick={toggleActive}
            data-text={link.label}
          >
            {link.label}
          </StyledNavigationButton>
        );
      })}
    </StyledMenu>
  );
};

export default Menu;
