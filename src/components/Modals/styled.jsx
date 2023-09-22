import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ModalHeading = styled.h4`
  margin-top: -2rem;
  margin-bottom: 2rem;
`;

export const Button = styled.button`
  border: none;
  color: white;
  border-radius: 3px;
  padding: 0.33rem 4rem;
  background: #c82867;
  box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
  transition: background 0.3s ease-in-out;
  &:hover {
    background: rgb(200 40 103 / 80%);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 19rem;
`;

export const Input = styled.input`
  height: 2.5rem;
  box-shadow: inset 0 3px 6px rgb(0 0 0 / 16%);
  padding: 0 0.5rem;
  border-radius: 7px;
  min-width: 18.8rem;
  border: none;
  margin-bottom: 1.5rem;
`;

export const ErrorMessage = styled.p`
  max-width: 18rem;
  margin-top: -1rem;
`;

export const RegisterMessage = styled.p`
  margin-top: 1.5rem;
`;

export const RegisterLink = styled(Link)`
  font-family: "Open Sans", sans-serif !important;
  border: none;
  color: white;
  border-radius: 3px;
  padding: 0.33rem 8rem;
  background: #c82867;
  box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
  transition: background 0.3s ease-in-out;
  margin-bottom: 2rem;
  &:hover {
    background: rgb(200 40 103 / 80%);
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 1rem;
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-top: -2rem;
  font-size: 2rem;
  color: #c82867;
`;

export const SuccessBookingContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const SuccessHeading = styled.h4`
  margin-top: -2rem;
`;

export const Line = styled.hr`
  margin-bottom: 3rem;
`;

export const AlertMessage = styled.p`
  margin: 2rem 2rem;
`;

export const AlertOption = styled.div`
  & a {
    text-decoration: underline;
  }
`;

export const VenueManagerHeadingWrapper = styled.div`
  text-align: center;
`;

export const VenueManagerHeading = styled.h4`
  margin-top: -2rem;
`;

export const SubHeader = styled.p`
  font-weight: bold;
`;
