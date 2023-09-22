import * as s from "./styled";
import Media from "./media";
import OwnerDetails from "./details";
import Meta from "./meta";
import Description from "./description";
import Booking from "./booking";
import useModal from "../../../hooks/useModal";
import LoginModal from "../../Modals/login";
import RegisterModal from "../../Modals/register";
import BookingSuccess from "../../Modals/bookingSuccess.jsx";
import useSetup from "./setup/index.jsx";
import { Loader } from "../../Loader";

/**
 * Venue Component
 *
 * This component represents a venue page that displays various details about a venue.
 * It includes media content, venue owner information, a description of the venue, a booking component,
 * and meta information about venue amenities. Also renders login and registration modal if user is not authorized to book
 *
 * @component
 * @example
 * // Example usage of Venue component
 * <Venue />
 *
 * @returns {JSX.Element} The JSX element representing the Venue component.
 */
const Venue = () => {
  const {
    show,
    handleShow,
    handleClose,
    showRegister,
    handleRegister,
    handleRegisterClose,
    handleBookingSuccess,
    handleCloseBookingSuccess,
    showBookingSuccess,
  } = useModal();
  const { isError, isLoading } = useSetup();
  return (
    <s.ContentWrapper>
      {isLoading ? <Loader /> : ""}
      {isError ? (
        <s.ErrorWrapper>
          <p>Oops! There seems to be some technical issues on our end! </p>
        </s.ErrorWrapper>
      ) : (
        ""
      )}
      <Media />
      <s.VenueDetailsWrapper>
        <s.VenueDetails>
          <OwnerDetails />
          <hr />
          <Description />
          <s.VenueMetaWrapper>
            <Meta />
          </s.VenueMetaWrapper>
        </s.VenueDetails>
        <Booking
          handleShow={handleShow}
          handleBookingSuccess={handleBookingSuccess}
        />
        <LoginModal
          show={show}
          handleClose={handleClose}
          handleRegister={handleRegister}
        />
        <RegisterModal
          handleShow={handleShow}
          showRegister={showRegister}
          handleRegisterClose={handleRegisterClose}
        />
        <BookingSuccess
          showBookingSuccess={showBookingSuccess}
          handleCloseBookingSuccess={handleCloseBookingSuccess}
        />
      </s.VenueDetailsWrapper>
    </s.ContentWrapper>
  );
};

export default Venue;
