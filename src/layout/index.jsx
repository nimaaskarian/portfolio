import React, { useState } from "react";
import GlobalStyle from "globalStyles";
import HamburgerButton from "./components/HamburgerIcon";
import { ThemeProvider } from "styled-components";
import { tealDark } from "themes";
import Menu from "./Menu";
import { Route, Routes } from "react-router-dom";
import { routes } from "constants";
const Layout = () => {
  const [isMenuActive, setIsMenuActive] = useState(null);
  const toggleMenuActive = () => setIsMenuActive(!isMenuActive);
  return (
    <>
      <ThemeProvider theme={tealDark}>
        <GlobalStyle />
        <Menu active={isMenuActive} toggleActive={toggleMenuActive} />
        <HamburgerButton onClick={toggleMenuActive} />
        <Routes>
          {routes.map((route) => {
            return (
              <Route
                path={route.path}
                key={route.path}
                element={route.component}
              />
            );
          })}
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default Layout;
