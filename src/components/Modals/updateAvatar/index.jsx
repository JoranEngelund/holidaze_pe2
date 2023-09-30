import Modal from "react-bootstrap/Modal";
import * as s from "../styled";
import { useParams } from "react-router-dom";
import useAuthForm from "../../../hooks/useAuthForm";
import { useForm, Controller } from "react-hook-form";
import { useEffect } from "react";
import { FormLoader } from "../../Loader";
import { BASE_URL } from "../../../constants";

/**
 * Functional component for updating user avatar through a modal interface.
 *
 * @component
 * @param {Object} props - React component props.
 * @param {boolean} props.showUpdateAvatar - Indicates whether the avatar update modal should be displayed.
 * @param {Function} props.handleCloseUpdateAvatar - Function to close the avatar update modal.
 * @returns {JSX.Element} Avatar update modal component.
 */
const UpdateAvatar = ({ showUpdateAvatar, handleCloseUpdateAvatar }) => {
  const { isLoading, isError, sendFormData, isSuccess } = useAuthForm();
  const { name } = useParams();
  console.log(name);
  const UPDATE_AVATAR = `${BASE_URL}profiles/${name}/media`;

  const {
    handleSubmit,
    control: control,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isSuccess) {
      handleCloseUpdateAvatar();
    }
  }, [isSuccess]);

  const onSubmit = (formData) => {
    sendFormData(UPDATE_AVATAR, "PUT", formData, true, false, true);
  };

  return (
    <Modal show={showUpdateAvatar} onHide={handleCloseUpdateAvatar}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body className="align-self-center mb-3">
        <s.SuccessBookingContainer>
          <s.SuccessHeading>Update Avatar</s.SuccessHeading>
          <hr />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Controller
                name="avatar"
                control={control}
                defaultValue=""
                rules={{
                  pattern: {
                    value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
                    message: "Must be a URL address",
                  },
                }}
                render={({ field }) => (
                  <>
                    <s.Input {...field} type="url" placeholder="Avatar URL" />
                    {errors.avatar?.message && (
                      <s.ValidationMessage>
                        {errors.avatar?.message}
                      </s.ValidationMessage>
                    )}
                  </>
                )}
              />
            </div>
            <s.Button type="submit">
              {isLoading ? <FormLoader /> : "Apply Changes"}
            </s.Button>
            {isError ? (
              <s.ErrorContainer>
                <p>Ups! There seems to be some problems updating your avatar</p>
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

export default UpdateAvatar;
