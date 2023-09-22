import Modal from "react-bootstrap/Modal";
import { useForm, Controller } from "react-hook-form";
import * as s from "../styled";
import useAuthForm from "../../../hooks/useAuthForm";
import { LOGIN_URL } from "../../../constants";
import { FormLoader } from "../../Loader";
import { useState } from "react";

/**
 * LoginModal component for user login.
 *
 * @param {Object} props - The component's properties.
 * @param {boolean} props.show - Controls whether the modal is displayed.
 * @param {function} props.handleClose - Callback function to close the modal.
 * @param {function} props.handleRegister - Callback function to open the registration modal.
 *
 * @returns {JSX.Element} React component for the login modal.
 */
const LoginModal = ({ show, handleClose, handleRegister }) => {
  const { isLoading, isError, isSuccess, sendFormData } = useAuthForm();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    control: loginControl,
    handleSubmit: handleLoginSubmit,
    formState: { errors: loginErrors },
  } = useForm();

  const onLoginSubmit = (loginData) => {
    console.log(loginData);
    sendFormData(LOGIN_URL, "POST", loginData, null, true, false);
    setIsSubmitted(true);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body className="align-self-center mb-3">
        <s.Form onSubmit={handleLoginSubmit(onLoginSubmit)}>
          <s.ModalHeading>Welcome back to Holidaze</s.ModalHeading>
          <div>
            <Controller
              name="email"
              control={loginControl}
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
                  {loginErrors.email?.type === "required" && (
                    <s.ErrorMessage role="alert">
                      Email is required
                    </s.ErrorMessage>
                  )}
                  {loginErrors.email?.message && (
                    <s.ErrorMessage>
                      {loginErrors.email?.message}
                    </s.ErrorMessage>
                  )}
                </>
              )}
            />
          </div>
          <div>
            <Controller
              name="password"
              control={loginControl}
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
                  <s.Input {...field} type="password" placeholder="********" />
                  {loginErrors.password?.type === "required" && (
                    <s.ErrorMessage role="alert">
                      Password is required
                    </s.ErrorMessage>
                  )}
                  {loginErrors.password?.message && (
                    <s.ErrorMessage>
                      {loginErrors.password?.message}
                    </s.ErrorMessage>
                  )}
                </>
              )}
            />
          </div>
          <s.Button type="submit">
            {isLoading ? <FormLoader /> : "Login"}
          </s.Button>
          {isError ? (
            <s.ErrorContainer>
              <p>Invalid email or password</p>
              <p>Please try again with other credentials</p>
            </s.ErrorContainer>
          ) : (
            ""
          )}
          <s.RegisterMessage>Not Registered?</s.RegisterMessage>
        </s.Form>
        <s.RegisterLink onClick={handleRegister}>Sign up</s.RegisterLink>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
