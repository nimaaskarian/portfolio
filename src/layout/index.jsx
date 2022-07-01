import React from "react";
import GlobalStyle from "../globalStyles";
import HamburgerButton from "./components/HamburgerIcon";
import Home from "./Home";

const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <HamburgerButton/>
      <Home />
    </>
  );
};

export default Layout;
