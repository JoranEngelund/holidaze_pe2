import Modal from "react-bootstrap/Modal";
import * as s from "../styled";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

/**
 * Represents a modal component displayed when a booking is successfully confirmed.
 * @param {Object} props - The props for the BookingSuccess component.
 * @param {boolean} props.showBookingSuccess - A boolean indicating whether the modal should be displayed.
 * @param {Function} props.handleCloseBookingSuccess - A callback function to handle the modal's close event.
 * @returns {JSX.Element} The BookingSuccess component JSX.
 */
const BookingSuccess = ({ showBookingSuccess, handleCloseBookingSuccess }) => {
  return (
    <Modal show={showBookingSuccess} onHide={handleCloseBookingSuccess}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body className="align-self-center mb-3">
        <s.SuccessBookingContainer>
          <s.SuccessHeading>Booking Confirmed!</s.SuccessHeading>
          <s.Line />
          <s.StyledFontAwesomeIcon icon={faCircleCheck} />
          <s.AlertMessage>
            Your reservations is confirmed. Get ready for a fantastic stay with
            us!
          </s.AlertMessage>
          <s.Button>View my trips</s.Button>
          <s.AlertOption>
            <p>Or</p>
            <Link to="/">Explore more venues</Link>
          </s.AlertOption>
        </s.SuccessBookingContainer>
      </Modal.Body>
    </Modal>
  );
};

export default BookingSuccess;
