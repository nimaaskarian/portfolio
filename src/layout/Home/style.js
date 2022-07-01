import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHome = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.h1`
  font-family: poppins;
  font-size: 65px;
  margin: 0;
  font-weight: 700;
`;

export const TypewriterWrapper = styled.h3`
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: 30px;
  font-family: raleway;
  & > * {
    display: inline-block;
  }
`;

export const SocialMediaLink = styled.a`
  margin: 5px 0;
  opacity: 0.55;
  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
  transition: all 0.4s ease;
  & > svg {
    width: 21px;
  }
`;

export const SocialMediaLinks = styled.div`
  position: absolute;
  height: 100vh;
  left: 0;
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
