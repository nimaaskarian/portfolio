import { Article } from "components/Article";
import Colored from "components/Colored";
import Container from "components/Container";
import { Header, MainHeaderWrapper } from "components/Header";
import NitabScreenShot from "assets/image/nitab-scrsht.png";
import EnigmaJsScreenShot from "assets/image/enigma-js-scrsht.png";
import React from "react";
import StyledImage from "components/Image";
import { WorksWrapper } from "./style";

const Portfolio = () => {
  return (
    <Container>
      <MainHeaderWrapper>
        <h1>
          <Colored>Port</Colored>folio
        </h1>
        My <Colored>Work</Colored>
      </MainHeaderWrapper>
      <WorksWrapper>
        <div>
          <a href="https://nimaaskarian.github.io/nitab" target="about:blank">
            <Header>Nitab</Header>
            <StyledImage src={NitabScreenShot} />
          </a>
          <Article>
            <Colored>Nitab</Colored> is a <Colored>fully customizable</Colored>{" "}
            and advanced start page and new tab extension for all browsers,
            powered by <Colored>React,</Colored>{" "}
            <Colored>styled-components, </Colored>
            <Colored>JavaScript</Colored> and couple of third party APIs
            <Colored>.</Colored>
          </Article>
        </div>
        <div>
          <a
            href="https://nimaaskarian.github.io/enigma-js/"
            target="about:blank"
          >
            <Header>Enigma-JS</Header>
            <StyledImage src={EnigmaJsScreenShot} />
          </a>
          <Article>
            <Colored>Enigma-JS</Colored> is a application that has the logic of
            1930s
            <Colored> Enigma</Colored> with a minimal and modern look and feel.
            it's written in pure <Colored>JavaScript, </Colored>
            <Colored>HTML5</Colored> and <Colored>CSS3.</Colored>
          </Article>
        </div>
      </WorksWrapper>
    </Container>
  );
};

export default Portfolio;
