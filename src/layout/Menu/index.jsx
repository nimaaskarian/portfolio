import { routes } from "constants";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { StyledCloseButton, StyledMenu, StyledNavigationButton } from "./style";

const Menu = ({ active, toggleActive }) => {
  const location = useLocation();
  return (
    <StyledMenu enabled={active}>
      <StyledCloseButton onClick={toggleActive} />
      {routes.map((route) => {
        return (
          <StyledNavigationButton
            key={route.path}
            to={route.path}
            enabled={location.pathname === route.path}
            onClick={toggleActive}
            data-text={route.label}
          >
            {route.label}
          </StyledNavigationButton>
        );
      })}
    </StyledMenu>
  );
};

export default Menu;
