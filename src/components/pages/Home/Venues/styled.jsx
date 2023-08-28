import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const HoverOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 13.3rem;
  background-color: rgba(200, 40, 103, 0);
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  border-radius: 11px 11px 0 0;
  transition: background-color 0.3s, opacity 0.3s;

  @media (max-width: 1154px) {
    height: 10.3rem;
  }

  @media (max-width: 839px) {
    height: 8.3rem;
  }

  @media (max-width: 645px) {
    height: 12.3rem;
  }

  @media (max-width: 545px) {
    height: 10.3rem;
  }

  @media (max-width: 467px) {
    height: 8.3rem;
  }

  @media (max-width: 399px) {
    height: 15.3rem;
  }

  @media (max-width: 320px) {
    height: 12.3rem;
  }
`;

export const ViewText = styled.p`
  color: white;
  font-size: 1.5rem;
  z-index: 2;
`;

export const VenuesContainer = styled.section`
  align-self: center;
  display: flex;
  flex-wrap: wrap;
  max-width: 92rem;
`;

export const VenueHeading = styled.h2`
  width: calc(100%);
  margin: 0 0 0 1rem;
`;

export const VenueImage = styled.img`
  position: relative;
  width: 100%;
  object-fit: cover;
  height: 13rem;
  border-radius: 11px 11px 0 0;
  z-index: 1;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 1154px) {
    height: 10rem;
  }

  @media (max-width: 839px) {
    height: 8rem;
  }

  @media (max-width: 645px) {
    height: 12rem;
  }

  @media (max-width: 545px) {
    height: 10rem;
  }

  @media (max-width: 467px) {
    height: 8rem;
  }

  @media (max-width: 399px) {
    height: 15rem;
  }

  @media (max-width: 320px) {
    height: 12rem;
  }
`;

export const Card = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  width: calc(22% - 4px);
  margin: 1rem;
  border-radius: 11px;
  box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
  position: relative;
  overflow: hidden;
  font-family: "Open Sans", sans-serif !important;

  &:hover ${HoverOverlay} {
    background-color: rgba(200, 40, 103, 0.64);

    opacity: 1;
  }

  &:hover ${VenueImage} {
    transform: scale(1.05);
  }

  @media (max-width: 1431px) {
    width: calc(22% - 4px);
  }

  @media (max-width: 1132px) {
    width: calc(30% - 4px);
  }

  @media (max-width: 839px) {
    width: calc(29% - 4px);
  }

  @media (max-width: 645px) {
    width: calc(45% - 4px);
  }

  @media (max-width: 559px) {
    width: calc(44% - 4px);
  }

  @media (max-width: 465px) {
    width: calc(43% - 4px);
  }

  @media (max-width: 399px) {
    width: calc(100% - 4px);
  }
`;

export const TitleRating = styled.div`
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;

  gap: 4rem;
  margin: 0.7rem 0.33rem 0.33rem;
`;

export const VenueLocation = styled.p`
  margin: auto 0.33rem 2rem 0.33rem;
  font-weight: light;
`;

export const VenueTitle = styled.h3`
  font-size: 1rem;
  font-weight: bolder;
`;

export const Rating = styled.div`
  display: flex;
  gap: 0.33rem;
  align-items: baseline;
`;

export const Meta = styled.div`
  display: flex;
  gap: 0.66rem;
`;

export const VenuePrice = styled.p`
  font-weight: bolder;
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  margin-left: 0.33rem;
  margin-right: 0.33rem;
  align-items: baseline;
`;
