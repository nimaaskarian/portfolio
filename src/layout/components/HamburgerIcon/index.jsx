import React from "react";
import { HamburgerLine, StyledHamburgerButton } from "./style";

const HamburgerButton = () => {
  return (
    <StyledHamburgerButton>
      <HamburgerLine initialWidth="60%"/>
      <HamburgerLine initialWidth="80%"/>
      <HamburgerLine initialWidth="100%"/>
    </StyledHamburgerButton>
  );
};

export default HamburgerButton;
