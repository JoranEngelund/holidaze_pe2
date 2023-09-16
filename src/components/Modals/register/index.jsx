import Modal from "react-bootstrap/Modal";
import { useForm, Controller } from "react-hook-form";
import * as s from "../styled";
import useAuthForm from "../../../hooks/useAuthForm";
import { REGISTER_URL } from "../../../constants";
import { FormLoader } from "../../Loader";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

/**
 * RegisterModal component for user registration.
 *
 * @param {Object} props - The component's properties.
 * @param {function} props.handleShow - Callback function to show the login modal.
 * @param {boolean} props.showRegister - Controls whether the registration modal is displayed.
 * @param {function} props.handleRegister - Callback function to handle the registration action.
 * @param {function} props.handleRegisterClose - Callback function to close the registration modal.
 *
 * @returns {JSX.Element} React component for the registration modal.
 */
const RegisterModal = ({
  handleShow,
  showRegister,
  handleRegister,
  handleRegisterClose,
}) => {
  const { isLoading, isError, isSuccess, sendFormData, setIsSuccess } =
    useAuthForm();

  const {
    control: registerControl,
    handleSubmit: handleRegisterSubmit,
    formState: { errors: registerErrors },
  } = useForm();

  const onRegisterSubmit = (data) => {
    console.log(data);
    sendFormData(REGISTER_URL, "POST", data, null, false);
  };

  return (
    <Modal show={showRegister} onHide={handleRegisterClose}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body className="align-self-center">
        {isSuccess ? (
          <s.SuccessContainer>
            <s.ModalHeading>Success!</s.ModalHeading>
            <s.StyledFontAwesomeIcon icon={faCircleCheck} />
            <div>
              <p>Your account has been created</p>
              <p>Please proceed to the login section</p>
            </div>
            <s.Button
              onClick={() => {
                handleShow();
                handleRegisterClose();
                setIsSuccess(false);
              }}
            >
              Login
            </s.Button>
          </s.SuccessContainer>
        ) : (
          <s.Form onSubmit={handleRegisterSubmit(onRegisterSubmit)}>
            <s.ModalHeading>Welcome to Holidaze</s.ModalHeading>
            <div>
              <Controller
                name="name"
                control={registerControl}
                defaultValue=""
                rules={{
                  required: true,
                  pattern: {
                    value: /^[\w]+$/,
                    message: "Spaces and special characters not allowed",
                  },
                  minLength: {
                    value: 3,
                    message: "Minimum 3 characters",
                  },
                  maxLength: {
                    value: 20,
                    message: "Maximum 20 characters",
                  },
                }}
                render={({ field }) => (
                  <>
                    <s.Input {...field} type="text" placeholder="Name" />
                    {registerErrors.name?.type === "required" && (
                      <s.ErrorMessage role="alert">
                        Name is required
                      </s.ErrorMessage>
                    )}
                    {registerErrors.name?.message && (
                      <s.ErrorMessage>
                        {registerErrors.name?.message}
                      </s.ErrorMessage>
                    )}
                  </>
                )}
              />
            </div>
            <div>
              <Controller
                name="email"
                control={registerControl}
                defaultValue=""
                rules={{
                  required: true,
                  pattern: {
                    value: /^[\w\-.]+@(stud\.)?noroff\.no$/,
                    message: "Email must be a @stud.noroff.no address",
                  },
                }}
                render={({ field }) => (
                  <>
                    <s.Input
                      {...field}
                      type="email"
                      placeholder="Email@stud.noroff.no"
                    />
                    {registerErrors.email?.type === "required" && (
                      <s.ErrorMessage role="alert">
                        Email is required
                      </s.ErrorMessage>
                    )}
                    {registerErrors.email?.message && (
                      <s.ErrorMessage>
                        {registerErrors.email?.message}
                      </s.ErrorMessage>
                    )}
                  </>
                )}
              />
            </div>
            <div>
              <Controller
                name="password"
                control={registerControl}
                defaultValue=""
                rules={{
                  required: true,
                  minLength: {
                    value: 8,
                    message: "Minimum 8 characters",
                  },
                }}
                render={({ field }) => (
                  <>
                    <s.Input
                      {...field}
                      type="password"
                      placeholder="********"
                    />
                    {registerErrors.password?.type === "required" && (
                      <s.ErrorMessage role="alert">
                        Password is required
                      </s.ErrorMessage>
                    )}
                    {registerErrors.password?.message && (
                      <s.ErrorMessage>
                        {registerErrors.password?.message}
                      </s.ErrorMessage>
                    )}
                  </>
                )}
              />
            </div>
            <div>
              <Controller
                name="avatar"
                control={registerControl}
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
                    {registerErrors.avatar?.message && (
                      <s.ValidationMessage>
                        {registerErrors.avatar?.message}
                      </s.ValidationMessage>
                    )}
                  </>
                )}
              />
            </div>
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
              {isLoading ? <FormLoader /> : "Register"}
            </s.Button>
            {isError ? (
              <s.ErrorContainer>
                <p>Profile already exists!</p>
                <p>Please try again with other credentials</p>
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

export default RegisterModal;
