import Colored from "components/Colored";
import Container from "components/Container";
import { MainHeaderWrapper } from "components/Header";
import React from "react";

const Portfolio = () => {
  return (
    <Container>
      <MainHeaderWrapper>
        <h1><Colored>Port</Colored>folio</h1>
        My <Colored>Work</Colored>
      </MainHeaderWrapper>
    </Container>
  );
};

export default Portfolio;
