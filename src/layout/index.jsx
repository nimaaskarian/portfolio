import React, { useState } from "react";
import GlobalStyle from "globalStyles";
import HamburgerButton from "./components/HamburgerIcon";
import Home from "./Home";
import { ThemeProvider } from "styled-components";
import { defaultDark, defaultLight } from "themes";
import Menu from "./components/Menu";
import { Route, Routes } from "react-router-dom";
import Blog from "./Blog";

const Layout = () => {
  const [isMenuActive, setIsMenuActive] = useState(null);
  const toggleMenuActive = () => setIsMenuActive(!isMenuActive);
  return (
    <>
      <ThemeProvider theme={defaultDark}>
        <GlobalStyle />
        <Menu active={isMenuActive} toggleActive={toggleMenuActive} />
        <HamburgerButton onClick={toggleMenuActive} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default Layout;
