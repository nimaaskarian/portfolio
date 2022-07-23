import { Article } from "components/Article";
import Colored from "components/Colored";
import Container from "components/Container";
import { Header, MainHeaderWrapper } from "components/Header";
import React from "react";
import ProgressBar from "./components/ProgressBar";
import { SkillsWrapper } from "./style";

const About = () => {
  return (
    <Container>
      <div>
        <MainHeaderWrapper>
          <h1>
            About <Colored>Me</Colored>
          </h1>
          <Colored>Who</Colored> am I?
        </MainHeaderWrapper>
      </div>
      <Header>
        An <Colored>young</Colored> and <Colored>creative</Colored> Front-End
        Developer
      </Header>
      <Article first>
        I'm <Colored>Nima Askarian.</Colored> A 18 year old Front-End developer
        from Iran<Colored>,</Colored> Tehran<Colored>.</Colored> I started my
        programming journey about 6 years ago<Colored>.</Colored>
      </Article>
      <Article>
        I've been studying and working as a Front-End Developer for almost 4
        years<Colored>. </Colored>
        In this few years, I acquired the <Colored>skills</Colored> to design
        and build Front-End applications for modern web<Colored> .</Colored>
      </Article>
      <Article>
        I've come from a relatively long journey that taught me how to always
        build a<Colored> unique</Colored> piece of software
        <Colored>.</Colored> I will be glad to get a chance to build one for
        <Colored> you.</Colored>
      </Article>
      <Header>Skills</Header>
      <SkillsWrapper>
        <ProgressBar title="HTML5/CSS3" progressPercentage={95} />
        <ProgressBar title="JavaScript (ES5-ES8)" progressPercentage={90} />
        <ProgressBar title="React" progressPercentage={85} />
        <ProgressBar
          title="Styled-Components/emotion"
          progressPercentage={85}
        />
        <ProgressBar title="Adobe PS" progressPercentage={83} />
        <ProgressBar title="MUI" progressPercentage={75} />
        <ProgressBar title="Semantic UI" progressPercentage={68} />
        <ProgressBar title="Bootstrap 4/5" progressPercentage={68} />
        <ProgressBar title="jQuery" progressPercentage={65} />
      </SkillsWrapper>
    </Container>
  );
};

export default About;
