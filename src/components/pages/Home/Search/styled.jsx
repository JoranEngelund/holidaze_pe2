import styled from "styled-components";
import { Link } from "react-router-dom";

export const ResultContainer = styled.div`
  position: absolute;
  z-index: 111111;
  max-height: 32rem;
  min-width: 278px;
  max-width: 0;
  background-color: #f2f2f2;
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;
`;

export const QueryResult = styled(Link)`
  text-decoration: none;
  display: flex;
  gap: 1rem;
  transition: box-shadow 0.3s ease;
  color: black;
  border-bottom: 1px solid lightgray;

  &:hover,
  &:focus {
    background-color: #ebebeb;
    outline: none;
    border-radius: 0.5rem;
    box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1);
  }
`;

export const QueryThumbnail = styled.img`
  max-width: 50%;
  object-fit: contain;
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
