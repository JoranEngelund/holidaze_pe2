import Modal from "react-bootstrap/Modal";
import * as s from "../../styled";
import { useParams } from "react-router-dom";
import useAuthForm from "../../../../hooks/useAuthForm";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { FormLoader } from "../../../Loader";

/**
 * Functional component representing a modal for confirming venue deletion.
 *
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {boolean} props.showDeleteAlert - Flag to indicate whether the modal should be displayed.
 * @param {Function} props.handleCloseDeleteAlert - Function to handle modal close event.
 * @param {Function} props.handleOpenDeleteSuccess - Function to handle successful deletion event.
 * @returns {JSX.Element} The modal for confirming venue deletion.
 */
const DeleteAlert = ({
  showDeleteAlert,
  handleCloseDeleteAlert,
  handleOpenDeleteSuccess,
}) => {
  const { isLoading, isError, sendFormData, isSuccess } = useAuthForm();
  const { id } = useParams();
  const DELETE_VENUE = `https://nf-api.onrender.com/api/v1/holidaze/venues/${id}`;
  const { handleSubmit } = useForm();

  useEffect(() => {
    if (isSuccess) {
      handleOpenDeleteSuccess();
    }
  }, [isSuccess]);

  const onSubmit = () => {
    sendFormData(DELETE_VENUE, "DELETE", undefined, true, false, false);
  };

  return (
    <Modal show={showDeleteAlert} onHide={handleCloseDeleteAlert}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body className="align-self-center mb-3">
        <s.SuccessBookingContainer>
          <s.SuccessHeading>Venue Deletion Confirmation</s.SuccessHeading>
          <hr />
          <s.AlertMessage>
            Are you sure you want to delete your venue? This action cannot be
            undone.
          </s.AlertMessage>
          <form onSubmit={handleSubmit(onSubmit)}>
            <s.Button type="submit">
              {isLoading ? <FormLoader /> : "Confirm Deletion"}
            </s.Button>
            {isError ? (
              <s.ErrorContainer>
                <p>Ups! There seems to be some problems deleting this venue</p>
                <p>Please try again or try at a later time</p>
              </s.ErrorContainer>
            ) : (
              ""
            )}
          </form>
        </s.SuccessBookingContainer>
      </Modal.Body>
    </Modal>
  );
};

export default DeleteAlert;
