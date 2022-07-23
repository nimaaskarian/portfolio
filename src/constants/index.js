import About from "layout/About";
import Blog from "layout/Blog";
import Home from "layout/Home";
import Portfolio from "layout/Portfolio";
import { Fragment } from "react";
export const routes = [
  { label: "HOME", path: "/", component: <Home /> },
  //{ label: "BLOG", path: "/blog", component: <Blog /> },
  { label: "ABOUT", path: "/about", component: <About /> },
  { label: "PORTFOLIO", path: "/portfolio", component: <Portfolio /> },
  { label: "CONTACT", path: "/contact", component: <Fragment /> },
];
