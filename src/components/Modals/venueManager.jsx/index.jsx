import Modal from "react-bootstrap/Modal";
import { useForm, Controller } from "react-hook-form";
import * as s from "../styled";
import useAuthForm from "../../../hooks/useAuthForm";
import setup from "../../pages/Profile/setup/index.mjs";
import { FormLoader } from "../../Loader";
import { useParams } from "react-router-dom";

/**
 * Renders a modal for managing venue-related settings.
 * @param {Object} props - Component props.
 * @param {boolean} props.showManagerModal - Indicates whether the modal is displayed.
 * @param {function} props.handleCloseManagerModal - Callback function to close the modal.
 * @param {Object} data - User profile data.
 * @param {boolean} data.venueManager - Indicates if the user is a venue manager.
 * @param {function} handleRegisterSubmit - Callback function to handle form submission.
 * @param {Object} registerControl - Control object for form registration.
 * @param {boolean} isLoading - Indicates whether data is loading.
 * @param {boolean} isError - Indicates whether an error occurred.
 * @returns {JSX.Element} The rendered venue manager modal.
 * @description This component displays a modal that allows the user to become a venue manager
 * or quit their role as a venue manager. It provides a form with the necessary options and messages
 * based on the user's current role.
 */
const VenueManagerModal = ({ showManagerModal, handleCloseManagerModal }) => {
  const { data } = setup();
  const { isLoading, isError, sendFormData } = useAuthForm();
  let { name } = useParams();

  const {
    control: registerControl,
    handleSubmit: handleRegisterSubmit,
    formState: { errors: registerErrors },
  } = useForm();

  const onRegisterSubmit = (data) => {
    sendFormData(
      `https://nf-api.onrender.com/api/v1/holidaze/profiles/${name}`,
      "PUT",
      data,
      true,
      false,
      true
    );
  };

  return (
    <Modal show={showManagerModal} onHide={handleCloseManagerModal}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body className="align-self-center">
        {data?.venueManager ? (
          <>
            <s.VenueManagerHeadingWrapper>
              <s.VenueManagerHeading>
                Quit as a Venue Manager
              </s.VenueManagerHeading>
              <hr />
              <s.SubHeader>Ready to Step Back?</s.SubHeader>
            </s.VenueManagerHeadingWrapper>
            <s.Form onSubmit={handleRegisterSubmit(onRegisterSubmit)}>
              <s.AlertMessage>
                Managing your venue has been a rewarding journey. If you're
                looking to leave your role as a Holidaze Venue Manager, we're
                here to assist you through the process.
              </s.AlertMessage>
              <s.CheckboxContainer>
                <Controller
                  name="venueManager"
                  control={registerControl}
                  defaultValue={true}
                  render={({ field }) => (
                    <>
                      <input
                        type="checkbox"
                        name="venueManager"
                        required
                        checked={!field.value} // Invert the value
                        onChange={() => field.onChange(!field.value)} // Invert the value when changed
                      />
                      <label htmlFor="venueManager">
                        I'm ready to quit as a manager
                      </label>
                    </>
                  )}
                />
              </s.CheckboxContainer>
              <s.Button type="submit">
                {isLoading ? <FormLoader /> : "Quit Venue Hosting"}
              </s.Button>
              {isError ? (
                <s.ErrorContainer>
                  <p>
                    Oups! There seems to be some technical issues. Please try
                    again{" "}
                  </p>
                </s.ErrorContainer>
              ) : (
                ""
              )}
            </s.Form>
          </>
        ) : (
          <s.Form onSubmit={handleRegisterSubmit(onRegisterSubmit)}>
            <s.VenueManagerHeadingWrapper>
              <s.VenueManagerHeading>
                Become a Venue Manager
              </s.VenueManagerHeading>
              <hr />
              <s.SubHeader>
                Congratulations on taking the first step!
              </s.SubHeader>
            </s.VenueManagerHeadingWrapper>
            <s.AlertMessage>
              Embrace the opportunity to Host, Share, and Earn! As a Venue
              Manager with Holidaze, you can curate unforgettable experiences,
              manage bookings, and maximize your property's potential.
            </s.AlertMessage>
            <s.CheckboxContainer>
              <Controller
                name="venueManager"
                control={registerControl}
                defaultValue={false}
                render={({ field }) => (
                  <>
                    <input {...field} type="checkbox" name="venueManager" />
                    <label htmlFor="venueManager">Become a Venue Manager</label>
                  </>
                )}
              />
            </s.CheckboxContainer>
            <s.Button type="submit">
              {isLoading ? <FormLoader /> : "Start Venue Hosting"}
            </s.Button>
            {isError ? (
              <s.ErrorContainer>
                <p>
                  Oups! There seems to be some technical issues. Please try
                  again{" "}
                </p>
              </s.ErrorContainer>
            ) : (
              ""
            )}
          </s.Form>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default VenueManagerModal;
