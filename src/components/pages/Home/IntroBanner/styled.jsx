import { styled } from "styled-components";

export const Banner = styled.section`
  background: fixed 100% 26%
    url("./../../../../assets/images/pexels-jess-loiterton-4321802.jpg");
  min-height: 18rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;
  align-items: center;
  background-size: cover;
  box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
`;

export const Slogan = styled.h1`
  font-family: "Courgette", sans-serif !important;
  margin-top: 2rem;
  text-align: center;
`;

export const SearchField = styled.input`
  border-radius: 30px;
  border: none;
  background-color: rgb(247 247 247 / 70%);
  padding: 0.5rem 3rem;
  text-align: center;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  color: black;

  &:hover {
    background-color: rgb(247 247 247);
  }

  &:active {
    border: none;
    background-color: rgb(247 247 247);
  }

  &::placeholder {
    color: black;
  }
`;

export const SearchIcon = styled.label`
  position: absolute;
  color: #c82867;
  transform: translate(-130%, 14%);
`;
