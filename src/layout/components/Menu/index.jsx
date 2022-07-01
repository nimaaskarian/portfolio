import React from "react";
import { Link } from "react-router-dom";
import { StyledMenu } from "./style";

const links = [
  { label: "HOME", path: "/" },
  { label: "BLOG", path: "/blog" },
  { label: "ABOUT", path: "/about" },
  { label: "PORTFOLIO", path: "/portfolio" },
  { label: "CONTACT", path: "/contact" },
];

const Menu = ({ active, toggleActive }) => {
  console.log(active);
  return (
    <StyledMenu enabled={active}>
      {links.map((link) => {
        return (
          <Link to={link.path} onClick={toggleActive} data-text={link.label}>
            {link.label}
          </Link>
        );
      })}
    </StyledMenu>
  );
};

export default Menu;
