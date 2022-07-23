import styled from "styled-components";


export const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  & > * {
    flex-grow: 1;
    flex-basis: 100%;
  }
  @media only screen and (min-width: 768px) {
    & > * {
      flex-basis: 40%;
    }
  }
  @media only screen and (min-width: 1200px) {
    & > * {
      flex-basis: 30%;
    }
  }
`;
