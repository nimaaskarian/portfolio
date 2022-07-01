import React, { useState } from "react";
import GlobalStyle from "globalStyles";
import HamburgerButton from "./components/HamburgerIcon";
import Home from "./Home";
import { ThemeProvider } from "styled-components";
import { defaultLight } from "themes";
import Menu from "./components/Menu";
import { Route, Routes } from "react-router-dom";

const Layout = () => {
  const [isMenuActive, setIsMenuActive] = useState(null);
  const toggleMenuActive = () => setIsMenuActive(!isMenuActive);
  return (
    <>
      <ThemeProvider theme={defaultLight}>
        <GlobalStyle />
        <Menu active={isMenuActive} toggleActive={toggleMenuActive} />
        <HamburgerButton onClick={toggleMenuActive} />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default Layout;
