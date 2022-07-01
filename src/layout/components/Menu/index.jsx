import React from "react";
import { Link } from "react-router-dom";
import { StyledMenu } from "./style";

const Menu = ({ active, toggleActive }) => {
  console.log(active)
  return (
    <StyledMenu enabled={active}>
      <Link to="/" onClick={toggleActive}data-text="HOME">
        HOME
      </Link>
      <Link to="/blog" onClick={toggleActive} data-text="BLOG">
        BLOG
      </Link>
    </StyledMenu>
  );
};

export default Menu;
