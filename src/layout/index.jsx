import React, { useState } from "react";
import GlobalStyle from "globalStyles";
import HamburgerButton from "./components/HamburgerIcon";
import Home from "./Home";
import { ThemeProvider } from "styled-components";
import { defaultLight } from "themes";

const Layout = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  return (
    <>
      <ThemeProvider theme={defaultLight}>
        <GlobalStyle />
        <HamburgerButton onClick={() => setIsMenuActive(!isMenuActive)} />
        <Home />
      </ThemeProvider>
    </>
  );
};

export default Layout;
