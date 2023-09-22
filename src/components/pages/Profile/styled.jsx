import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * Table of Contents:
 * ------------------
 *  1. Wrappers / Containers: (Line 47 - 115)
 *    1a. PageWrapper -
 *    1b. ProfileWrapper -
 *    1c. UserWrapper -
 *    1d. SettingsWrapper -
 *    1e. VenueContainer -
 *
 * ------------------
 *  2. User Styling / Profile Settings Card: (Line 118 - 177)
 *    2a. SettingsCard -
 *    2b. ManagerTitle -
 *    2c. UserDetails -
 *    2d. UserName -
 *    2e. Avatar -
 *
 * ------------------
 *  3. Venue Styling: (Line 180 - 377)
 *    3a. HoverOverlay -
 *    3b. VenueImage -
 *    3c. Card -
 *    3d. ViewText -
 *    3e. VenueHeading -
 *    3f. TitleRating -
 *    3g. VenueLocation -
 *    3h. VenueTitle -
 *    3i. Rating -
 *    3j. Meta -
 *    3k. VenuePrice -
 *    3l. Details -
 *
 * ------------------
 *  4. Buttons & Utils: (Line 380 - 443)
 *    4a. SettingsButton -
 *    4b. Button -
 *    4c. BookingCounts -
 *    4d. QuitButton -
 * ------------------
 */

// 1. Wrappers / Containers:
export const PageWrapper = styled.section`
  display: flex;
  margin: 1rem 1rem;
  justify-content: center;

  @media (max-width: 871px) {
    flex-direction: column;
    align-self: center;
  }
`;

export const ProfileWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  width: calc(45% - 10px);

  @media (max-width: 871px) {
    width: calc(100%);
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 30.8125rem;
  box-shadow: 0 3px 6px rgb(0 0 0 / 40%);
  padding: 3rem;
  position: sticky;
  border-radius: 11px;

  @media (max-width: 1190px) {
    width: 21.8125rem;
  }

  @media (max-width: 871px) {
    width: 30.8125rem;
  }

  @media (max-width: 534px) {
    width: 21.8125rem;
  }

  @media (max-width: 368px) {
    flex-direction: column;
    padding: 1rem;
    width: 15.8125rem;
    align-self: center;
  }
`;

export const DataWrapper = styled.section`
  width: calc(55% - 10px);
  display: flex;

  @media (max-width: 871px) {
    width: calc(100% - 10px);
  }
`;

export const VenuesContainer = styled.section`
  align-self: center;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
  padding-bottom: 1rem;
  max-height: 100vh;
`;

//----------------------------------------------
// 2. User Styling / Profile Settings Card:
export const SettingsCard = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 30.8125rem;
  box-shadow: 0 3px 6px rgb(0 0 0 / 40%);
  padding: 3rem;
  border-radius: 11px;

  @media (max-width: 1190px) {
    width: 21.8125rem;
  }

  @media (max-width: 871px) {
    width: 30.8125rem;
  }

  @media (max-width: 534px) {
    width: 21.8125rem;
  }

  @media (max-width: 368px) {
    flex-direction: column;
    padding: 1rem;
    width: 15.8125rem;
    align-self: center;
  }
`;

export const ManagerTitle = styled.p`
  width: 11rem;
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserName = styled.h1`
  font-size: 1.5rem;
  margin: 1rem 1rem 2rem;
`;

export const Avatar = styled.img`
  width: 50%;
  max-width: 100%;
  border-radius: 50%;
  aspect-ratio: 5 / 5;
  object-fit: cover;
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-top: -2rem;
  margin-right: 0.33rem;
  font-size: 2rem;
  color: #c82867;
`;

//---------------------------------------------
//  3. Venue Styling:
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
  width: calc(18% - 4px);
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

  @media (max-width: 2641px) {
    width: calc(22% - 4px);
  }

  @media (max-width: 1760px) {
    width: calc(30% - 4px);
  }

  @media (max-width: 1584px) {
    width: calc(29% - 4px);
  }

  @media (max-width: 1446px) {
    width: calc(46% - 4px);
  }

  @media (max-width: 1322px) {
    width: calc(45% - 4px);
  }

  @media (max-width: 1224px) {
    width: calc(45% - 4px);
  }

  @media (max-width: 1132px) {
    width: calc(45% - 4px);
  }

  @media (max-width: 1068px) {
    width: calc(44% - 4px);
  }

  @media (max-width: 898px) {
    width: calc(43% - 4px);
  }

  @media (max-width: 778px) {
    width: calc(100% - 4px);
  }
`;

export const ViewText = styled.p`
  color: white;
  font-size: 1.5rem;
  z-index: 2;
`;

export const VenueHeading = styled.h2`
  width: calc(100%);
  margin: 0 0 0 1rem;
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

//---------------------------------------
// 4. Buttons & Utils:
export const SettingsButton = styled.button`
  font-family: "Open Sans", sans-serif !important;
  border: none;
  color: white;
  border-radius: 3px;
  padding: 0.33rem 8rem;
  background: #c82867;
  box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
  transition: background 0.3s ease-in-out;
  &:hover {
    background: rgb(200 40 103 / 80%);
  }

  @media screen and (max-width: 1190px) {
    padding: 0.33rem 4rem;
  }

  @media screen and (max-width: 368px) {
    padding: 0.33rem 1rem;
  }
`;

export const Button = styled.button`
  font-family: "Open Sans", sans-serif !important;
  border: none;
  color: white;
  border-radius: 3px;
  margin: 0.33rem 1rem 0 0;
  padding: 0.33rem 2rem;
  background: #c82867;
  box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
  transition: background 0.3s ease-in-out;
  &:hover {
    background: rgb(200 40 103 / 80%);
  }
`;

export const BookingCounts = styled.div`
  width: 7rem;
`;

export const QuitButton = styled.button`
  color: black;
  background-color: white;
  border: 1px solid black;
  font-family: "Open Sans", sans-serif !important;
  border-radius: 3px;
  padding: 0.33rem 8rem;
  box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
  transition: background 0.3s ease-in-out;

  &:hover {
    background: rgb(247 247 247);
  }

  @media screen and (max-width: 1190px) {
    padding: 0.33rem 3rem;
  }

  @media screen and (max-width: 368px) {
    padding: 0.33rem 1rem;
  }
`;
