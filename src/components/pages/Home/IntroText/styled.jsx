import { styled } from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem 2rem;
`;

export const IntroParagraph = styled.p`
  max-width: 50rem;
  line-height: 1.9rem;
  span {
    font-weight: bold;
  }
`;
