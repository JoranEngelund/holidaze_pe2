import Modal from "react-bootstrap/Modal";
import * as s from "../styled";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import useStorage from "../../../hooks/useStorage";

/**
 * CreateVenueSuccess component for displaying a success message when a venue is live.
 *
 * This component displays a success message when a user's venue is successfully created
 * or updated and is now live on the platform.
 *
 * @param {Object} props - The component's props.
 * @param {boolean} props.showVenueSuccess - A boolean indicating whether to show the success modal.
 * @param {Function} props.handleCloseVenueSuccess - A function to handle the closing of the success modal.
 * @returns {JSX.Element} The CreateVenueSuccess component.
 */
const CreateVenueSuccess = ({ showVenueSuccess, handleCloseVenueSuccess }) => {
  const { load } = useStorage();
  const user = load("user");
  const userName = user ? user.name : "";
  return (
    <Modal show={showVenueSuccess} onHide={handleCloseVenueSuccess}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body className="align-self-center mb-3">
        <s.SuccessBookingContainer>
          <s.SuccessHeading>Your Venue is Live!</s.SuccessHeading>
          <s.Line />
          <s.StyledFontAwesomeIcon icon={faCircleCheck} />
          <s.AlertMessage>
            Congratulations! Your Venue is Now Live on Holidaze. Get ready to
            welcome guests and create amazing experiences.
          </s.AlertMessage>
          <s.RegisterLink to={`/profile/${userName}`}>
            Return to Profile
          </s.RegisterLink>
        </s.SuccessBookingContainer>
      </Modal.Body>
    </Modal>
  );
};

export default CreateVenueSuccess;
