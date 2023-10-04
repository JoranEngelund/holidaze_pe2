import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const PageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 2rem 1rem;
`;

export const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 1rem;
`;

export const StyledLinks = styled(Link)`
  text-decoration: underline;
`;

export const StyledNav = styled.a`
  text-decoration: underline;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const InputGroup = styled.section`
  display: flex;
  flex-direction: column;
  width: calc(50% - 10px);
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 650px) {
    width: calc(100% - 10px);
  }
`;

export const GalleryGroup = styled.section`
  display: flex;
  gap: 1.14rem;
  flex-direction: column;
`;

export const MetaGroup = styled.section`
  width: calc(100% - 10px);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 1rem 0;
`;

export const Meta = styled.label`
  margin: 0 0.5rem;
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MetaHeading = styled.label`
  width: 100%;
  margin-bottom: 1rem;
  font-weight: bold;
`;

export const Label = styled.label`
  width: 100%;
  margin-bottom: 1rem;
  font-weight: bold;
`;

export const Button = styled.button`
  border: none;
  color: white;
  border-radius: 3px;
  padding: 0.33rem 8rem;
  background: #c82867;
  box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
  transition: background 0.3s ease-in-out;
  margin-top: 2rem;
  &:hover {
    background: rgb(200 40 103 / 80%);
  }
`;

export const Input = styled.input`
  height: 2.5rem;
  background-color: #f7f7f7;
  box-shadow: inset 0 3px 6px rgb(0 0 0 / 16%);
  padding: 0 0.5rem;
  border-radius: 7px;
  min-width: 18.8rem;
  border: none;
`;

export const Description = styled.textarea`
  height: 6.5rem;
  background-color: #f7f7f7;
  box-shadow: inset 0 3px 6px rgb(0 0 0 / 16%);
  padding: 0 0.5rem;
  border-radius: 7px;
  min-width: 18.8rem;
  border: none;
`;

export const Select = styled.select`
  background-color: #f7f7f7;
  border: none;
  box-shadow: inset 0 3px 6px rgb(0 0 0 / 16%);
  padding: 0.5rem 0.3rem;
  border-radius: 4px;
  width: 100%;
`;

export const LocationHeading = styled.h2`
  width: 100%;
  margin-bottom: 1rem;
`;

export const Line = styled.hr`
  width: 100%;
`;
