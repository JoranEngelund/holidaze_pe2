import Modal from "react-bootstrap/Modal";
import * as s from "../../styled";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import useStorage from "../../../../hooks/useStorage";
import { Link } from "react-router-dom";

/**
 * Functional component representing a modal for indicating successful venue deletion.
 *
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {boolean} props.showDeleteSuccess - Flag to indicate whether the modal should be displayed.
 * @param {Function} props.handleCloseDeleteSuccess - Function to handle modal close event.
 * @returns {JSX.Element} The modal indicating successful venue deletion.
 */
const DeleteSuccess = ({ showDeleteSuccess, handleCloseDeleteSuccess }) => {
  const { load } = useStorage();
  const user = load("user");
  const userName = user ? user.name : "";

  return (
    <Modal show={showDeleteSuccess} onHide={handleCloseDeleteSuccess}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body className="align-self-center mb-3">
        <s.SuccessBookingContainer>
          <s.SuccessHeading>Venue Succesfully Deleted!</s.SuccessHeading>
          <s.Line />
          <s.StyledFontAwesomeIcon icon={faCircleCheck} />
          <s.AlertMessage>
            Your venue has been removed from our platform. Thank you for being
            part of Holidaze.
          </s.AlertMessage>
          <s.RegisterLink to="/">Explore Venues</s.RegisterLink>
          <p>Or</p>
          <Link to={`/profile/${userName}`}>Return to Profile</Link>
        </s.SuccessBookingContainer>
      </Modal.Body>
    </Modal>
  );
};

export default DeleteSuccess;
