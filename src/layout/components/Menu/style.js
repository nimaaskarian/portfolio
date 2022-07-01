import styled, { keyframes } from "styled-components";

const appearAnimation = keyframes`
  0%{
    transform: translateY(-100%);
  }
  100%{
    transform: translateY(0);
  }
`;

const disappearAnimation = keyframes`
  0%{
    transform: translateY(0);
  }
  100%{
    transform: translateY(-100%);
  }
`;

export const StyledMenu = styled.div`
  padding: 60px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > * {
    font-family: poppins;
    opacity: 0.55;
    transition: all 0.6s ease;
    font-size: 30px;
    &:hover {
      opacity: 1;
    }
    &:hover::before {
      opacity: 0.2;
      letter-spacing: 10px;
    }
    &::before {
      content: attr(data-text);
      position: absolute;
      top: 50%;
      left: 50%;
      display: flex;
      justify-content: center;
      transform: translate(-50%, -50%);
      align-items: center;
      font-size: 5em;
      font-weight: 400;
      font-family: monoton;
      z-index: 1;
      pointer-events: none;
      opacity: 0;
      letter-spacing: 100px;
      transition: all 0.4s ease;
    }
  }
  height: 100vh;
  width: 100vw;
  z-index: 5;
  background-color: ${(props) => props.theme.bgSecondary};
  position: absolute;
  top: 0;
  left: 0;
  display: ${(props) => (props.enabled === null ? "none" : "flex")};
  animation-name: ${(props) =>
    props.enabled ? appearAnimation : disappearAnimation};
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
`;
