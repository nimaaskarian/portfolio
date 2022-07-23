import styled from "styled-components";

export const Article = styled.article`
  text-align: justify;
  & {
    margin-top: ${({ first }) => (first ? "20px" : "5px")};
  }
`;
