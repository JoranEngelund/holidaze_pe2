import Modal from "react-bootstrap/Modal";
import * as s from "../styled";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import useStorage from "../../../hooks/useStorage";

/**
 * Functional component representing a modal for indicating successful venue update.
 *
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {boolean} props.showUpdateSuccess - Flag to indicate whether the modal should be displayed.
 * @param {Function} props.handleCloseUpdateSuccess - Function to handle modal close event.
 * @returns {JSX.Element} The modal indicating successful venue update.
 */
const UpdateSuccess = ({ showUpdateSuccess, handleCloseUpdateSuccess }) => {
  const { load } = useStorage();
  const user = load("user");
  const userName = user ? user.name : "";
  return (
    <Modal show={showUpdateSuccess} onHide={handleCloseUpdateSuccess}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body className="align-self-center mb-3">
        <s.SuccessBookingContainer>
          <s.SuccessHeading>Update Successful!</s.SuccessHeading>
          <s.Line />
          <s.StyledFontAwesomeIcon icon={faCircleCheck} />
          <s.AlertMessage>
            Your venue details have been updated. Thanks for keeping your
            listing fresh and inviting for our guests.
          </s.AlertMessage>
          <s.RegisterLink to={`/profile/${userName}`}>
            Return to Profile
          </s.RegisterLink>
        </s.SuccessBookingContainer>
      </Modal.Body>
    </Modal>
  );
};

export default UpdateSuccess;
