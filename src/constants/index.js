import About from "layout/About";
import Home from "layout/Home";
import Portfolio from "layout/Portfolio";
export const routes = [
  { label: "HOME", path: "/", component: <Home /> },
  { label: "ABOUT", path: "/about", component: <About /> },
  { label: "PORTFOLIO", path: "/portfolio", component: <Portfolio /> },
  //{ label: "CONTACT", path: "/contact", component: <Fragment /> },
];
