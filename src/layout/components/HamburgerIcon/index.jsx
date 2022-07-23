import React from "react";
import { HamburgerLine, StyledHamburgerButton } from "./style";

const HamburgerButton = ({ onClick }) => {
  return (
    <StyledHamburgerButton onClick={onClick}>
      <HamburgerLine initialWidth="100%" />
      <HamburgerLine initialWidth="60%" />
      <HamburgerLine initialWidth="80%" />
    </StyledHamburgerButton>
  );
};

export default HamburgerButton;
