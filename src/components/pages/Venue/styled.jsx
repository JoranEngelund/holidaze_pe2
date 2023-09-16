import { Link } from "react-router-dom";
import { styled } from "styled-components";
/**
 * Table of Contents:
 * 
 * 1. Wrappers:
 *    1a. ContentWrapper -
      1b. VenueDetailsWrapper -
      1c. OwnerAvatarWrapper -
      1d. VenueMetaWrapper -
      1e. MetaWrapperFirstRow -
/----------------------------------------------------/
 * 2. Media & Location:
      2a. CarouselMedia -
      2b. Location -
/----------------------------------------------------/
 * 3. Meta:
      3a. VenueMetaTitle -
      3b. Meta -
      3c. UnavailableMeta -
/----------------------------------------------------/
 * 4. Buttons, Inputs & Forms:
      4a. Button -
      4b. BookingForm -
      4c. InputGroup -
      4d. GuestSelect -
/----------------------------------------------------/
 * 5. Owner, Manager & Details:
      5a. OwnerInformation -
      5b. ManagerInformation -
      5c. Guests -
      5d. OwnerAvatar -
      5e. VenueDetailsOwner -
      5f. VenueDetails -
/----------------------------------------------------/
 * 6. Booking, reservation, rating & price
      6a. BookingDetails -
      6b. BookingCard -
      6c. BookingHeading -
      6d. Rating -
      6e. Price -
      6f. ReservationDetails -
      6g. TotalPrice;
/* ----------------------------------------------------------------- */

// 1.  Wrappers:
export const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const VenueDetailsWrapper = styled.section`
  max-width: 95vw;
  display: flex;
  justify-content: space-between;

  @media (max-width: 755px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const OwnerAvatarWrapper = styled.div`
  width: calc(30%);
`;

export const VenueMetaWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

export const MetaWrapperFirstRow = styled.div`
  display: flex;
  margin-top: 1rem;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: left;
`;
/* ----------------------------------------------------------------- */

// 2. Media & Location:
export const CarouselMedia = styled.img`
  object-fit: cover;
  width: 95vw;
  height: 58vh;
`;
export const Location = styled.h2`
  margin: 3rem 0 1rem;
`;
/* ----------------------------------------------------------------- */

// 3. Meta:
export const VenueMetaTitle = styled.h4`
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Meta = styled.div`
  display: flex;
  gap: 1rem;
  align-items: baseline;
  margin: auto 0.5rem 1rem 0.5rem;
  width: calc(45%);
`;

export const UnavailableMeta = styled.div`
  text-decoration: line-through;
  display: flex;
  gap: 1rem;
  align-items: baseline;
  margin: auto 0.5rem 1rem 0.5rem;
  width: calc(45%);
`;
/* ----------------------------------------------------------------- */

// 4. Buttons, Inputs & Forms:
export const Button = styled.button`
  border: none;
  color: white;
  border-radius: 3px;
  padding: 0.33rem 0;
  background: #c82867;
  box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
  transition: background 0.3s ease-in-out;
  font-weight: bolder;
  &:hover {
    background: rgb(200 40 103 / 80%);
  }
`;

export const StyledLink = styled(Link)`
  font-family: "Open Sans", sans-serif !important;
  border: none;
  color: white;
  border-radius: 3px;
  padding: 0.33rem 8rem;
  background: #c82867;
  box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
  transition: background 0.3s ease-in-out;
  margin-bottom: 2rem;
  text-align: center;
  &:hover {
    background: rgb(200 40 103 / 80%);
  }
`;

export const BookingForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;

  input {
    height: 2.5rem;
    box-shadow: inset 0 3px 6px rgb(0 0 0 / 40%);
    border-radius: 7px;
    padding: 0 1rem;
    border: 1px solid grey;
  }

  @media (max-width: 1372px) {
    flex-wrap: wrap;
  }
`;

export const GuestSelect = styled.select`
  height: 2.5rem;
  margin: 1rem 0;
  box-shadow: inset 0 3px 6px rgb(0 0 0 / 40%);
  border-radius: 7px;
  padding: 0 1rem;
  font-family: "Open Sans";
`;
/* ----------------------------------------------------------------- */

// 5. Owner, Manager & Details:
export const OwnerInformation = styled.div`
  width: calc(70%);
`;

export const ManagerInformation = styled.h3`
  font-weight: bold;
  margin: 1rem 0;
`;

export const Guests = styled.div`
  display: flex;
  align-items: baseline;
  gap: 1rem;
`;

export const OwnerAvatar = styled.img`
  width: 50%;
  max-width: 100%;
  border-radius: 50%;
  aspect-ratio: 5/5;
  object-fit: cover;
  margin-left: 2rem;
`;

export const VenueDetailsOwner = styled.section`
  display: flex;
  align-items: center;
`;

export const VenueDetails = styled.section`
  width: calc(60% - 1rem);
  box-sizing: border-box;
  margin: 1rem;

  @media (max-width: 755px) {
    width: calc(100%);
  }
`;
/* ----------------------------------------------------------------- */

// 6. Booking, reservation, rating & price:
export const BookingDetails = styled.section`
  width: calc(40% - 1rem);
  margin: 1rem;

  @media (max-width: 755px) {
    width: calc(100%);
  }
`;

export const BookingCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(112 112 112 / 40%);
  border-radius: 11px;
  box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
  padding: 1rem;
`;

export const BookingHeading = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.33rem;
`;

export const Price = styled.span`
  font-weight: bolder;
`;

export const ReservationDetails = styled.div`
  display: flex;
  margin: 0.5rem 0 0 0;
  justify-content: space-between;
  font-size: 1.2rem;
`;

export const TotalPrice = styled.p`
  font-weight: bold;
  text-decoration: underline;
`;
/* ----------------------------------------------------------------- */
