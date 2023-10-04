import { styled } from "styled-components";

export const StyledLogo = styled.img`
  width: 15%;
  margin: 0.5rem 0 0.5rem 1.5rem;
  cursor: pointer;

  @media (max-width: 990px) {
    width: 22%;
  }

  @media (max-width: 630px) {
    width: 30%;
  }
`;
